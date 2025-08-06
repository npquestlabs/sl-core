import { Request, Response } from 'express'
import * as authService from '../services/auth.service'
import * as userService from '../services/user.service'
import { sendPasswordResetEmail, sendVerificationEmail } from '../util/email'
import { sendOtpEmail } from '../util/email'
import { AppError } from '../util/error'
import { generateToken } from '../util/token'
import envConfig from '../configs/environment'
import {
  OAuthUserSchema,
  RegisterStageOneSchema,
  RegisterStageTwoSchema,
} from '../schemas/user.schema'
import { z } from 'zod'
import { createOtp, getValidOtp, markOtpUsed } from '../services/otp.service'
import { logger } from '../configs/logger'
import googleAuthConfig from '../configs/google'
import { TokenSchema } from '../schemas/extras.schema'

// Stage One: Accept email, send OTP
export const registerStageOne = async (req: Request, res: Response) => {
  try {
    const { email } = req.body as z.infer<typeof RegisterStageOneSchema>
    const existingUser = await userService.getUserByEmail(email)
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' })
    }
    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    await Promise.all([createOtp(email, otp, 10), sendOtpEmail(email, otp)])
    const result = { message: 'Verification code sent to email.' }
    if (!envConfig.isProduction) {
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
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    await Promise.all([createOtp(email, otp), sendOtpEmail(email, otp)])
    res.status(201).json({ message: 'Verification code resent to email.' })
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
      return res
        .status(400)
        .json({ error: 'Invalid or expired verification code' })
    }
    // Mark OTP as used
    await markOtpUsed(validOtp.id)
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
  const console = req.headers['x-client'] ?? null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = await authService.loginUser(email, password, console as any)
  res.status(200).json(result)
}

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body
  const user = await userService.getUserByEmail(email)
  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }
  const token = generateToken({ email })
  const origin = String(req.get('origin'))
  await sendPasswordResetEmail(email, token, origin)
  const result = { message: 'Password reset url sent to email!' }
  if (!envConfig.isProduction) {
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

export const googleAuth = async (req: Request, res: Response) => {
  const { token: code } = req.body as z.infer<typeof TokenSchema>
  const console = req.headers['x-client'] as 'staff' | 'tenant' | 'vendor'

  // Middleware guarentees that origin is allowed so client will be non-null
  const client = googleAuthConfig.getClient(String(req.get('origin')))!

  if (!console) {
    return res.status(400).json({ error: 'x-client header is required' })
  }

  try {
    const { tokens } = await client.getToken(code)
    const idToken = tokens.id_token

    if (!idToken) {
      throw new AppError('Failed to retrieve ID token from Google', 401)
    }

    // Verify the ID token to get user details
    const ticket = await client.verifyIdToken(idToken)

    const payload = ticket.getPayload()

    if (!payload) {
      return res.status(401).json({ error: 'Invalid Google token.' })
    }

    const { email, name, picture: avatarUrl } = payload

    if (!email) {
      return res.status(400).json({ error: 'Email not available from Google' })
    }

    const user = await userService.getUserByEmail(email, {
      avatarUrl: true,
      password: true,
    })

    if (user) {
      const result = await authService.loginWithEmail(email, console)
      if (!result) {
        res.status(500).json({ error: 'Failed to log in user' })
      }
      return res.status(200).json(result)
    }

    const nameParts = name ? name.split(' ') : []
    const firstName = nameParts[0] || ''
    const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : ''
    const middleName = nameParts.slice(1, -1).join(' ') || undefined

    const newUserInput = OAuthUserSchema.parse({
      email,
      avatarUrl,
      [console]: {
        firstName,
        lastName,
        middleName,
      },
    })

    const token = generateToken(newUserInput, { expiresIn: '24h' })

    const result = {
      userPreview: {
        email,
        firstName,
        lastName,
        middleName,
        avatarUrl,
      },
      completionToken: token,
    }

    return res.status(200).json(result)
  } catch (error) {
    logger.error('Error in googleAuth:', error)
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json({ error: 'Failed to authenticate with Google' })
    }
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ error: error.message })
    }
    return res
      .status(500)
      .json({
        error: 'An unexpected error occurred during Google authentication',
      })
  }
}

export const googleAuthCompleteRegistration = async (
  req: Request,
  res: Response,
) => {
  const user = req.body as z.infer<typeof OAuthUserSchema>
  const console = req.headers['x-client'] as 'staff' | 'tenant' | 'vendor'

  if (!console) {
    return res.status(400).json({ error: 'x-client header is required' })
  }

  try {
    const result = await userService.createUser(user)
    return res.status(201).json(result)
  } catch (error) {
    logger.error('Error in googleAuth:', error)
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ error: error.message })
    }
    return res
      .status(500)
      .json({ error: 'Error while completing registration' })
  }
}

export const loginWithEmail = async (req: Request, res: Response) => {
  const { email } = req.body
  const console = req.headers['x-client'] ?? null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = await authService.loginWithEmail(email, console as any)
  res.status(200).json(result)
}

export const sendVerificationLink = async (req: Request, res: Response) => {
  const { email } = req.body
  const user = await userService.getUserByEmail(email)
  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }
  if (!user.staff && !user.tenant && !user.vendor) {
    return res.status(403).json({ error: 'Contact support' })
  }

  const emailVerificationToken = generateToken({ email })
  const origin = String(req.get('origin'))
  await sendVerificationEmail(
    user.email,
    user.staff
      ? user.staff
      : user.tenant
        ? user.tenant
        : user.vendor
          ? user.vendor
          : { firstName: '', lastName: '' },
    emailVerificationToken,
    origin,
  )
  const result = { message: 'Verification link sent!' }
  if (!envConfig.isProduction) {
    // @ts-expect-error dynamically adding emailToken field to result
    result.emailToken = emailVerificationToken
  }
  return res.status(200).json(result)
}
