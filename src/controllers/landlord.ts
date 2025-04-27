import { Request, Response } from 'express'
import {
  registerLandlordStep1,
  registerLandlordStep2,
} from '../services/landlord'

export const createLandlordStep1 = async (req: Request, res: Response) => {
  try {
    const landlord = await registerLandlordStep1(req.body)
    res.status(201).json(landlord)
  } catch (error) {
    res.status(500).json({ error: 'Failed to register landlord (Step 1)' })
  }
}

export const createLandlordStep2 = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const landlord = await registerLandlordStep2(String(id), req.body)
    res.status(200).json(landlord)
  } catch (error) {
    res.status(500).json({ error: 'Failed to verify landlord (Step 2)' })
  }
}
