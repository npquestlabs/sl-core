import { Request, Response } from 'express'
import * as unitService from '../services/unit.service'
import * as complexService from '../services/complex.service'
import { LeaseStatus, Prisma } from '../../generated/prisma'

export const getUnit = async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord && !user.tenant) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const { unitId } = req.params
  if (!unitId) {
    return res.status(400).json({ error: 'Unit ID is required' })
  }
  const accessOrConditions: Prisma.UnitWhereInput[] = []

  if (user.landlord?.id) {
    accessOrConditions.push({
      complex: {
        landlordId: user.landlord.id,
        deletedAt: null,
      },
    })
  }

  if (user.tenant?.id) {
    accessOrConditions.push({
      leases: {
        some: {
          tenantId: user.tenant.id,
          status: LeaseStatus.ACTIVE,
          deletedAt: null,
        },
      },
    })
  }

  const whereClause: Prisma.UnitWhereUniqueInput = {
    id: unitId,
    deletedAt: null,
    OR: accessOrConditions,
  }

  const unit = await unitService.getUnit(whereClause)

  if (!unit) {
    return res.status(404).json({ error: 'Unit not found or access denied' })
  }

  return res.status(200).json(unit)
}

export const getUnitByComplexIdAndUnitIdParams = async (
  req: Request,
  res: Response,
) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const { complexId, unitId } = req.params
  if (!unitId || !complexId) {
    return res.status(400).json({ error: 'Invalid params' })
  }

  const unit = await unitService.getUnit({
    id: unitId,
    complex: { id: complexId, landlordId: user.landlord.id },
  })
  if (!unit) {
    return res.status(404).json({ error: 'Unit not found' })
  }
}

export const getUnitsOfComplex = async (req: Request, res: Response) => {
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

  const landlordComplex = await complexService.getComplex({
    id: complexId,
    landlordId: user.landlord.id,
  })

  if (!landlordComplex) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const units = await unitService.getUnitsInComplex(complexId, req.query as any)

  if (!units) {
    return res.status(404).json({ error: 'Units not found' })
  }

  return res.status(200).json(units)
}

export const createUnit = async (req: Request, res: Response) => {
  const { complexId } = req.params
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  if (!complexId) {
    return res.status(400).json({ error: 'Invalid params' })
  }

  const complex = await complexService.getComplex({
    id: complexId,
    landlordId: user.landlord.id,
  })

  if (!complex) {
    return res.status(404).json({ error: 'Complex not found' })
  }

  const createdUnit = await unitService.createUnit(complexId, req.body)

  if (!createdUnit) {
    return res.status(400).json({ error: 'Failed to create unit' })
  }

  return res.status(201).json(createdUnit)
}

export const updateUnit = async (req: Request, res: Response) => {
  const { unitId } = req.params
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  if (!unitId) {
    return res.status(400).json({ error: 'Invalid params' })
  }

  const updatedUnit = await unitService.updateUnit(
    { id: unitId, complex: { landlordId: user.landlord.id } },
    req.body,
  )

  if (!updatedUnit) {
    return res.status(400).json({ error: 'Failed to update unit' })
  }

  return res.status(200).json(updatedUnit)
}

export const getUnitWithPopulatedComplex = async (
  req: Request,
  res: Response,
) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord && !user.tenant) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const { unitId } = req.params
  if (!unitId) {
    return res.status(400).json({ error: 'Unit ID is required' })
  }
  const accessOrConditions: Prisma.UnitWhereInput[] = []

  if (user.landlord?.id) {
    accessOrConditions.push({
      complex: {
        landlordId: user.landlord.id,
        deletedAt: null,
      },
    })
  }

  if (user.tenant?.id) {
    accessOrConditions.push({
      leases: {
        some: {
          tenantId: user.tenant.id,
          status: LeaseStatus.ACTIVE,
          deletedAt: null,
        },
      },
    })
  }

  const whereClause: Prisma.UnitWhereUniqueInput = {
    id: unitId,
    deletedAt: null,
    OR: accessOrConditions,
  }

  const unit = await unitService.getUnit(whereClause, { complex: true })

  if (!unit) {
    return res.status(404).json({ error: 'Unit not found or access denied' })
  }

  return res.status(200).json(unit)
}

export const deleteUnit = async (req: Request, res: Response) => {
  const user = req.user

  if (!user) {
    return res.status(401).json({ error: 'Not authorized' })
  }

  if (!user.landlord) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const { unitId } = req.params
  if (!unitId) {
    return res.status(400).json({ error: 'Invalid params' })
  }

  const deletedUnit = await unitService.deleteUnit({
    id: unitId,
    complex: { landlordId: user.landlord.id },
  })
  if (!deletedUnit) {
    return res.status(404).json({ error: 'Unit not found' })
  }

  return res.status(200).json(deletedUnit)
}

export const landlordGetUnits = async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const units = await unitService.getUnitsOfLandlord(
    user.landlord.id,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req.query as any,
  )

  if (!units) {
    return res.status(404).json({ error: 'Units not found' })
  }

  return res.status(200).json(units)
}
