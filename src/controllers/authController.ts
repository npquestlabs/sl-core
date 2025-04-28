import { Request, Response } from 'express'
import * as authService from '../services/authService'
import { generateResetPasswordToken } from '../util'
import { sendEmail } from '../util/email'

export const registerLandlord = async (req: Request, res: Response) => {
  try {
    const result = await authService.registerUser('landlord', req.body)
    res.status(201).json(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const registerTenant = async (req: Request, res: Response) => {
  try {
    const result = await authService.registerUser('tenant', req.body)
    res.status(201).json(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const registerArtisan = async (req: Request, res: Response) => {
  try {
    const result = await authService.registerUser('vendor', req.body)
    res.status(201).json(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const result = await authService.login(email, password)
    res.status(200).json(result)
  } catch (error: any) {
    res.status(401).json({ error: error.message })
  }
}

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id!
    const user = await authService.getUserById(userId)
    res.status(200).json(user)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body!
    const token = generateResetPasswordToken(email)
    const link = `https://smartlandord.com/auth/resetpassword?token=${token}`
    sendEmail(email, 'Reset Password', link)
    res
      .status(200)
      .json({ success: true, message: 'Password reset url sent to email!' })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const verifyToken = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
