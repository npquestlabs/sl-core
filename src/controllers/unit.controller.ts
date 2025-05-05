import { Request, Response } from 'express'
import * as unitService from '../services/unit.service'
import * as complexService from '../services/complex.service'

export const getUnit = async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { unitId } = req.params
  if (!unitId) {
    return res.status(400).json({ error: 'Unit ID is required' })
  }
  const unit = await unitService.getUnitById(unitId)
  if (!unit) {
    return res.status(404).json({ error: 'Unit not found' })
  }

  const unitComplex = await complexService.getComplexById(unit.complexId)
  if (!unitComplex) {
    console.error(
      `Data inconsistency: Unit ${unitId} references non-existent complex ${unit.complexId}`,
    )
    return res
      .status(404)
      .json({ error: 'Associated complex not found for the unit' })
  }

  const isLandlordOfComplex =
    user.landlord != null && unitComplex.landlordId === user.landlord.id

  const isTenantOfUnit = user.tenant != null && unit.tenantId === user.tenant.id

  const isAuthorized = isLandlordOfComplex || isTenantOfUnit

  if (!isAuthorized) {
    return res.status(403).json({ error: 'Forbidden' })
  }

  return res.status(200).json(unit)
}

export const getUnitByComplexIdAndUnitIdParams = async (req: Request, res: Response) => {
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

  const unit = await unitService.getUnit({ id: unitId, complex: { id: complexId, landlordId: user.landlord.id } })
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

  const landlordComplex = await complexService.getComplex({ id: complexId, landlordId: user.landlord.id });

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

  const createdUnit = await unitService.createUnit(complexId, req.body)

  if (!createdUnit) {
    return res.status(400).json({ error: 'Failed to create unit' })
  }

  return res.status(201).json(createdUnit)
}

export const updateUnit = async (req: Request, res: Response) => {
  const { unitId } = req.params
  if (!unitId) {
    return res.status(400).json({ error: 'UnitId cannot be null' })
  }
  const updatedUnit = await unitService.updateUnit(unitId, req.body)
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

  const { unitId } = req.params
  if (!unitId) {
    return res.status(400).json({ error: 'Unit ID is required' })
  }
  const unit = await unitService.getUnitById(unitId, { complex: true })
  if (!unit) {
    return res.status(404).json({ error: 'Unit not found' })
  }

  const isLandlordOfComplex =
    user.landlord != null && unit.complex.landlordId === user.landlord.id

  const isTenantOfUnit = user.tenant != null && unit.tenantId === user.tenant.id

  const isAuthorized = isLandlordOfComplex || isTenantOfUnit

  if (!isAuthorized) {
    return res.status(403).json({ error: 'Forbidden' })
  }

  return res.status(200).json(unit)
}

/**
 * Assigns a tenant to a unit.
 */
export const assignTenant = async (req: Request, res: Response) => {
  const user = req.user

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const { unitId, tenantId } = req.params

  if (!unitId || !tenantId) {
    return res.status(400).json({ error: 'Invalid params' })
  }

  const updatedUnit = await unitService.assignTenant({ id: unitId, complex: { landlordId: user.landlord.id } }, tenantId)

  if (!updatedUnit) {
    res.status(500).json({ error: 'Tenant assignment failed' })
  }

  return res.status(200).json({
    success: true,
    message: 'Tenant assigned to unit successfully',
    data: updatedUnit,
  })
}

/**
 * Removes a tenant from a unit.
 */
export const removeTenant = async (req: Request, res: Response) => {
  const user = req.user

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const { unitId, tenantId } = req.params

  if (!unitId || !tenantId) {
    return res.status(400).json({ error: 'Invalid params' })
  }

  const updatedUnit = await unitService.removeTenant({ id: unitId, complex: { landlordId: user.landlord.id } }, tenantId)

  if (!updatedUnit) {
    return res.status(500).json({ error: 'Tenant removal failed' })
  }

  return res.status(200).json({
    success: true,
    message: 'Tenant removed from unit successfully',
    data: updatedUnit,
  })
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

  const deletedUnit = await unitService.deleteUnit({id: unitId, complex: { landlordId: user.landlord.id }})
  if (!deletedUnit) {
    return res.status(404).json({ error: 'Unit not found' })
  }

  return res.status(200).json(deletedUnit)
}
