import { Request, Response } from 'express'
import * as authService from '../services/auth.service'
import * as landLordService from '../services/landlord.service'
import * as tenantService from '../services/tenant.service'
import * as vendorService from '../services/vendor.service'
import * as userService from '../services/user.service'
import { generateEmailToken } from '../util/token'
import { sendPasswordResetEmail, sendVerificationEmail } from '../util/email'
import { AppError } from '../util/error'

export const registerLandlord = async (req: Request, res: Response) => {
  try {
    const result = await landLordService.registerLandlordUser(req.body)
    if (!result) {
      return res.status(500).json({ error: 'Unable to register user' })
    }
    res.status(201).json(result)

    const emailVerificationToken = generateEmailToken(result.user.email)

    await sendVerificationEmail(result.user.email, emailVerificationToken)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Unable to register user' })
  }
}

export const registerTenant = async (req: Request, res: Response) => {
  try {
    const result = await tenantService.registerTenantUser(req.body)
    if (!result) {
      return res.status(500).json({ error: 'Unable to register user' })
    }

    res.status(201).json(result)

    const emailVerificationToken = generateEmailToken(result.user.email)

    await sendVerificationEmail(result.user.email, emailVerificationToken)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Unable to register user' })
  }
}

export const registerArtisan = async (req: Request, res: Response) => {
  try {
    const result = await vendorService.registerVendorUser(req.body)
    if (!result) {
      return res.status(500).json({ error: 'Unable to register user' })
    }
    res.status(201).json(result)

    const emailVerificationToken = generateEmailToken(result.user.email)

    await sendVerificationEmail(result.user.email, emailVerificationToken)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Unable to register user' })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const result = await authService.loginUser(email, password)
    res.status(200).json(result)
  } catch (error) {
    console.error(error)
    res.status(401).json({ error: 'Invalid email or password' })
  }
}

export const getCurrentUser = async (req: Request, res: Response) => {
  const userId = req.user?.id
  if (!userId) {
    throw new AppError('Something went wrong', 500)
  }
  const user = await userService.getUserById(userId)
  return res.status(200).json(user)
}

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body!
  const token = generateEmailToken(email)
  await sendPasswordResetEmail(email, token)
  return res
    .status(200)
    .json({ success: true, message: 'Password reset url sent to email!' })
}

export const updatePassword = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const user = await userService.updateUserPassword(email, password)
  if (!user) {
    return res.status(500).json({ error: 'Unable to update password' })
  }
  return res.status(200).json({ success: true, message: 'Password updated!' })
}

export const loginWithToken = async (req: Request, res: Response) => {
  const { token } = req.body
  const result = await authService.loginWithToken(token)
  res.status(200).json(result)
}
