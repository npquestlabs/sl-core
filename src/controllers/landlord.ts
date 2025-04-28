import { Request, Response } from 'express'
import { createLandlordUser, updateLandlord } from '../services/landlord'

export const createLandlord = async (req: Request, res: Response) => {
  try {
    const landlord = await createLandlordUser(req.body)
    res.status(201).json(landlord)
  } catch (error) {
    res.status(500).json({ error: 'Failed to register landlord' })
  }
}

export const setLandLordData = async (req: Request, res: Response) => {
  try {
    const id = req.user?.landlordId
    const landlord = await updateLandlord(String(id), req.body)
    res.status(200).json(landlord)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update landlord' })
  }
}
