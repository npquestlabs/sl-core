/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import * as unitService from '../services/unit.service'
import * as complexService from '../services/complex.service'
import { LeaseStatus, Prisma, StaffRole } from '../../generated/prisma'

export const getUnit = async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.staff && !user.tenant) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const { unitId } = req.params
  if (!unitId) {
    return res.status(400).json({ error: 'Unit ID is required' })
  }

  const accessOrConditions: Prisma.UnitWhereInput[] = []

  if (user.staff?.id) {
    accessOrConditions.push({
      complex: {
        assignments: { some: { staffId: user.staff.id } },
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

  const unit = await unitService.getDetailedUnit(unitId, whereClause)

  if (!unit) {
    return res.status(404).json({ error: 'Unit not found or access denied' })
  }

  return res.status(200).json(unit)
}

export const getUnitWithPopulatedComplex = async (
  req: Request,
  res: Response,
) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.staff && !user.tenant) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const { unitId } = req.params
  if (!unitId) {
    return res.status(400).json({ error: 'Unit ID is required' })
  }

  const accessOrConditions: Prisma.UnitWhereInput[] = []

  if (user.staff?.id) {
    accessOrConditions.push({
      complex: {
        assignments: { some: { staffId: user.staff.id } },
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

export const getUnitsOfComplex = async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.staff) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const { complexId } = req.params

  if (!complexId) {
    return res.status(400).json({ error: 'Complex ID is required' })
  }

  const hasAccess = await complexService.getComplex({
    id: complexId,
    assignments: { some: { staffId: user.staff.id } },
  })

  if (!hasAccess) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const units = await unitService.getUnitsInComplex(complexId, req.query as any)

  return res.status(200).json(units)
}

export const createUnit = async (req: Request, res: Response) => {
  const user = req.user
  if (!user?.staff) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const { complexId } = req.params
  if (!complexId) {
    return res.status(400).json({ error: 'Complex ID is required' })
  }

  const complex = await complexService.getComplex({
    id: complexId,
    assignments: {
      some: {
        staffId: user.staff.id,
        OR: [{ role: StaffRole.ADMIN }, { role: StaffRole.SUPERADMIN }],
      },
    },
  })

  if (!complex) {
    return res.status(404).json({ error: 'Complex not found or access denied' })
  }

  const createdUnit = await unitService.createUnit(complexId, req.body)

  return res.status(201).json(createdUnit)
}

export const updateUnit = async (req: Request, res: Response) => {
  const user = req.user
  if (!user?.staff) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const { unitId } = req.params
  if (!unitId) {
    return res.status(400).json({ error: 'Unit ID is required' })
  }

  const whereClause: Prisma.UnitWhereUniqueInput = {
    id: unitId,
    complex: {
      assignments: { some: { staffId: user.staff.id } },
    },
  }

  const updatedUnit = await unitService.updateUnit(whereClause, req.body)

  if (!updatedUnit) {
    return res.status(404).json({ error: 'Unit not found or failed to update' })
  }

  return res.status(200).json(updatedUnit)
}

export const deleteUnit = async (req: Request, res: Response) => {
  const user = req.user
  if (!user?.staff) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const { unitId } = req.params
  if (!unitId) {
    return res.status(400).json({ error: 'Unit ID is required' })
  }

  const whereClause: Prisma.UnitWhereUniqueInput = {
    id: unitId,
    complex: {
      assignments: {
        some: {
          staffId: user.staff.id,
          OR: [{ role: StaffRole.ADMIN }, { role: StaffRole.SUPERADMIN }],
        },
      },
    },
  }

  const deletedUnit = await unitService.deleteUnit(whereClause)

  if (!deletedUnit) {
    return res.status(404).json({ error: 'Unit not found or access denied' })
  }

  return res
    .status(200)
    .json({ message: 'Unit deleted successfully', id: deletedUnit.id })
}

export const staffGetUnits = async (req: Request, res: Response) => {
  const user = req.user
  if (!user?.staff) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const units = await unitService.getStaffUnits(user.staff.id, req.query as any)

  return res.status(200).json(units)
}
