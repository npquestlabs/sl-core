import { Request, Response } from 'express'
import * as authService from '../services/auth.service'
import * as userService from '../services/user.service'
import { sendPasswordResetEmail, sendVerificationEmail } from '../util/email'
import { AppError } from '../util/error'
import { generateToken } from '../util/token'
import envConfig from '../configs/environment'
import { RegisterUserSchema } from '../schemas/user.schema'
import { z } from 'zod'
import bcrypt from 'bcryptjs'

// Intentionally made the registerUser return 201 while the verifyUser return 200

export const registerUser = async (req: Request, res: Response) => {
  try {
    const data = {
      email: String(req.body.email),
      firstName: String(req.body.firstName),
      lastName: String(req.body.lastName),
    }
    const existingUser = await userService.getUserByEmail(data.email);

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" })
    }

    const payload = req.body as z.infer<typeof RegisterUserSchema>
    payload.password =  await bcrypt.hash(payload.password, 10)

    const token = generateToken(payload, { expiresIn: '5m' })
    await sendVerificationEmail(data, token)

    const result = {
      message:
        'User registered successfully. Please check your email for verification link.',
    }

    if (envConfig.environment !== 'production') {
      // @ts-expect-error dynamically adding emailToken field to result
      result.emailToken = token
    }

    return res.status(201).json(result)
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ error: error.message })
    }
    throw error
  }
}

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.createUser(req.body)
    if (!result) {
      return res.status(500).json({ error: 'Failed to add user' })
    }
    
    return res.status(200).json(result)
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ error: error.message })
    }
    return res.status(500).json({ error: 'Failed to add user' })
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
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { email } = req.body

  const emailVerificationToken = generateToken({ email })
  await sendVerificationEmail(user, emailVerificationToken)
  return res.status(200).json({ message: 'Verification link sent!' })
}
