import { Request, Response } from 'express'
import * as authService from '../services/auth.service'
import * as userService from '../services/user.service'
import { sendPasswordResetEmail, sendVerificationEmail } from '../util/email'
import { sendOtpEmail } from '../util/email'
import { AppError } from '../util/error'
import { generateToken } from '../util/token'
import envConfig from '../configs/environment'
import { RegisterStageOneSchema, RegisterStageTwoSchema } from '../schemas/user.schema'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { createOtp, getValidOtp, markOtpUsed, deleteOtpsForEmail } from '../services/otp.service'
import { logger } from '../configs/logger'

// Stage One: Accept email, send OTP
export const registerStageOne = async (req: Request, res: Response) => {
  try {
    const { email } = req.body as z.infer<typeof RegisterStageOneSchema>
    const existingUser = await userService.getUserByEmail(email)
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' })
    }
    // Delete any previous OTPs for this email
    await deleteOtpsForEmail(email)
    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    await Promise.all([createOtp(email, otp, 10), sendOtpEmail(email, otp)])
    const result = { message: 'Verification code sent to email.' }
    if (envConfig.environment !== 'production') {
      // @ts-expect-error for dev
      result.otp = otp
    }
    return res.status(201).json(result)
  } catch (error) {
    logger.error('Error in registerStageOne:', error)
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ error: error.message })
    }
    throw error
  }
}

export async function resendVerificationCode(req: Request, res: Response) {
  try {
    const { email } = req.body as z.infer<typeof RegisterStageOneSchema>
    await deleteOtpsForEmail(email);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await createOtp(email, otp);
    await sendOtpEmail(email, otp);
    res.status(201).json({ message: 'Verification code resent to email.' });
  } catch (error) {
    if (error instanceof AppError) {
      logger.error('Error in resendVerificationCode:', error)
      return res.status(error.statusCode).json({ error: error.message })
    }
    throw error
  }
}

// Stage Two: Accept OTP and user data, create user
export const registerStageTwo = async (req: Request, res: Response) => {
  try {
    const { otp, user } = req.body as z.infer<typeof RegisterStageTwoSchema>
    // Validate OTP
    const validOtp = await getValidOtp(user.email, otp)
    if (!validOtp) {
      return res.status(400).json({ error: 'Invalid or expired verification code' })
    }
    // Mark OTP as used
    await markOtpUsed(validOtp.id)
    // Hash password
    user.password = await bcrypt.hash(user.password, 10)
    // Create user
    const result = await userService.createUser(user)
    if (!result) {
      throw new AppError('Failed to add user', 500)
    }
    return res.status(200).json(result)
  } catch (error) {
    if (error instanceof AppError) {
      logger.error('Error in registerStageTwo:', error)
      return res.status(error.statusCode).json({ error: error.message })
    }
    throw error
  }
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const result = await authService.loginUser(email, password)
  res.status(200).json(result)
}

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body
  const user = await userService.getUserByEmail(email)
  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }
  const token = generateToken({ email })
  await sendPasswordResetEmail(email, token)
  const result = { message: 'Password reset url sent to email!' }
  if (envConfig.environment !== 'production') {
    // @ts-expect-error dynamically adding emailToken field to result
    result.emailToken = token
  }
  return res.status(200).json(result)
}

export const updatePassword = async (req: Request, res: Response) => {
  const { password } = req.body
  const userId = req.user?.id
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  const user = await userService.updateUserPassword(userId, password)
  if (!user) {
    return res.status(500).json({ error: 'Failed to update password' })
  }
  return res.status(200).json({ message: 'Password updated!' })
}

export const loginWithEmail = async (req: Request, res: Response) => {
  const { email } = req.body
  const result = await authService.loginWithEmail(email)
  res.status(200).json(result)
}

export const sendVerificationLink = async (req: Request, res: Response) => {
  const { email } = req.body
  const user = await userService.getUserByEmail(email)
  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }
  const emailVerificationToken = generateToken({ email })
  await sendVerificationEmail(user, emailVerificationToken)
  const result = { message: 'Verification link sent!' }
  if (envConfig.environment !== 'production') {
    // @ts-expect-error dynamically adding emailToken field to result
    result.emailToken = emailVerificationToken
  }
  return res.status(200).json(result)
}
