import { Request, Response } from 'express'
import { updateUser } from '../services/user'

export const setUserData = async (req: Request, res: Response) => {
  try {
    const id = req.user?.id
    const landlord = await updateUser(String(id), req.body)
    res.status(200).json(landlord)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update landlord' })
  }
}
