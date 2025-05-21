import { Request, Response } from 'express'
import * as landlordService from '../services/landlord.service'

export const updateLandlord = async (req: Request, res: Response) => {
  try {
    const landlordId = req.user?.landlord?.id
    if (!landlordId) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    const landlord = await landlordService.updateLandlord(landlordId, req.body)
    res.status(200).json(landlord)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update landlord' })
  }
}
