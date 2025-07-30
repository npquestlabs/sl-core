import { Request, Response } from 'express'
import * as complexService from '../services/complex.service'

export async function getLandlordComplexes(req: Request, res: Response) {
  const user = req.user

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const paginatedData = await complexService.getComplexesOfLandlord(
    user.landlord.id,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req.query as any,
  )

  return res.status(200).json(paginatedData)
}

export async function updateComplex(req: Request, res: Response) {
  const user = req.user

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const complexId = req.params.complexId

  if (!complexId) {
    return res.status(400).json({ error: 'Complex ID is required' })
  }

  const updatedComplex = await complexService.updateComplex(req.body, {
    id: complexId,
    landlordId: user.landlord.id,
  })

  if (!updatedComplex) {
    return res.status(500).json({ error: 'Could not update complex' })
  }

  return res.status(200).json(updatedComplex)
}

export async function getLandLordComplex(req: Request, res: Response) {
  const user = req.user

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const { complexId } = req.params

  if (!complexId) {
    return res.status(400).json({ error: 'Complex ID is required' })
  }

  const complex = await complexService.getComplex({
    id: complexId,
    landlordId: user.landlord.id,
  })

  if (!complex) {
    return res.status(404).json({ error: 'Complex not found' })
  }

  return res.status(200).json(complex)
}

export async function createComplex(req: Request, res: Response) {
  const user = req.user

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const createdComplex = await complexService.createComplex(
    user.landlord.id,
    req.body,
  )

  if (!createdComplex) {
    return res.status(500).json()
  }

  return res.status(200).json(createdComplex)
}

export async function deleteComplex(req: Request, res: Response) {
  const user = req.user

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const { complexId } = req.params
  if (!complexId) {
    return res.status(400).json({ error: 'Invalid params' })
  }

  const deletedComplex = await complexService.deleteComplex({
    id: complexId,
    landlordId: user.landlord.id,
  })
  if (!deletedComplex) {
    return res.status(404).json({ error: 'Complex not found' })
  }

  return res.status(200).json(deletedComplex)
}
