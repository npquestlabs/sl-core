import { Request, Response } from 'express'
import * as userService from '../services/user.service'

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.user?.id
    const updatedUser = await userService.updateUser(String(id), req.body)
    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update landlord' })
  }
}

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const id = req.user?.id
    const user = await userService.getUserWithPopulatedData(String(id))
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to get current user' })
  }
}
