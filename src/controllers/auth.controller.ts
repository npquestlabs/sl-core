import { Request, Response } from 'express'
import * as authService from '../services/auth.service'
import * as landLordService from '../services/landlord.service'
import * as tenantService from '../services/tenant.service'
import * as vendorService from '../services/vendor.service'
import * as userService from '../services/user.service'
import { generateEmailToken } from '../util/token'
import { sendPasswordResetEmail, sendVerificationEmail } from '../util/email'

export const registerLandlord = async (req: Request, res: Response) => {
  const result = await landLordService.registerLandlordUser(req.body)
  if (!result) {
    return res.status(500).json({ error: 'Unable to register user' })
  }
  res.status(201).json(result)

  const emailVerificationToken = generateEmailToken(result.user.email)

  await sendVerificationEmail(result.user, emailVerificationToken)
}

export const registerTenant = async (req: Request, res: Response) => {
  const result = await tenantService.registerTenantUser(req.body)
  if (!result) {
    return res.status(500).json({ error: 'Unable to register user' })
  }

  res.status(201).json(result)

  const emailVerificationToken = generateEmailToken(result.user.email)

  await sendVerificationEmail(result.user, emailVerificationToken)
}

export const registerArtisan = async (req: Request, res: Response) => {
  const result = await vendorService.registerVendorUser(req.body)
  if (!result) {
    return res.status(500).json({ error: 'Unable to register user' })
  }
  res.status(201).json(result)

  const emailVerificationToken = generateEmailToken(result.user.email)

  await sendVerificationEmail(result.user, emailVerificationToken)
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const result = await authService.loginUser(email, password)
  res.status(200).json(result)
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
  const { password } = req.body
  const userId = req.user?.id
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  const user = await userService.updateUserPassword(userId, password)
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
