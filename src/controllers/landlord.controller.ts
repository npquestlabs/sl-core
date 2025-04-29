import { Request, Response } from 'express'
import * as landlordService from '../services/landlord.service'

export const createLandlord = async (req: Request, res: Response) => {
  try {
    const result = await landlordService.registerLandlordUser(req.body)
    res.status(201).json(result)
  } catch (error) {
    res.status(500).json({ error: 'Failed to register landlord' })
  }
}

export const updateLandlord = async (req: Request, res: Response) => {
  try {
    const id = req.user?.landlordId
    const landlord = await landlordService.updateLandlord(String(id), req.body)
    res.status(200).json(landlord)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update landlord' })
  }
}
