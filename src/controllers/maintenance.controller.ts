/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import {
  UpdateMaintenanceRequestSchema,
  VendorResponseSchema,
  CompleteMaintenanceSchema,
} from '../schemas/maintenance.schema'
import * as maintenanceRequestsService from '../services/maintenance.service'
import * as unitService from '../services/unit.service'
import * as complexService from '../services/complex.service'
import { z } from 'zod'
import { PaginationSchema } from '../schemas/extras.schema'
import { LeaseStatus, Prisma } from '../../generated/prisma'

export const createMaintenanceRequest = async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { unitId } = req.params
  if (!unitId) {
    return res.status(400).json({ error: 'Unit ID is required' })
  }

  // Security Check: Verify user has access to the unit before creating a request
  const accessCheck: Prisma.UnitWhereUniqueInput = {
    id: unitId,
    deletedAt: null,
  }

  if (user.staff) {
    accessCheck.complex = { assignments: { some: { staffId: user.staff.id } } }
  } else if (user.tenant) {
    accessCheck.leases = {
      some: { tenantId: user.tenant.id, status: LeaseStatus.ACTIVE },
    }
  } else {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const unit = await unitService.getUnit(accessCheck)
  if (!unit) {
    return res.status(404).json({ error: 'Unit not found or access denied' })
  }

  const request = await maintenanceRequestsService.createMaintenanceRequest(
    user.id,
    unitId,
    req.body,
  )

  return res.status(201).json(request)
}

export const getMaintenanceRequests = async (req: Request, res: Response) => {
  const user = req.user
  if (!user?.staff) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const pagination_query = req.query as unknown as z.infer<
    typeof PaginationSchema
  >

  const result =
    await maintenanceRequestsService.listMaintenanceRequestsOfStaff(
      user.staff.id,
      pagination_query,
    )

  return res.status(200).json(result)
}

export const getMaintenanceRequestsOfUnit = async (
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

  const accessOrConditions: Prisma.UnitWhereInput[] = []

  if (user.staff) {
    accessOrConditions.push({
      complex: {
        assignments: { some: { staffId: user.staff.id } },
      },
    })
  }

  if (user.tenant) {
    accessOrConditions.push({
      leases: {
        some: {
          tenantId: user.tenant.id,
          status: LeaseStatus.ACTIVE,
        },
      },
    })
  }

  if (accessOrConditions.length === 0) {
    return res.status(403).json({ error: 'Permission denied' })
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

  const pagination_query = req.query as unknown as z.infer<
    typeof PaginationSchema
  >

  const result = await maintenanceRequestsService.listMaintenanceRequestsOfUnit(
    unitId,
    pagination_query,
  )

  return res.status(200).json(result)
}

export const getMaintenanceRequestsOfComplex = async (
  req: Request,
  res: Response,
) => {
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
    assignments: { some: { staffId: user.staff.id } },
  })

  if (!complex) {
    return res.status(404).json({ error: 'Complex not found or access denied' })
  }

  const pagination_query = req.query as unknown as z.infer<
    typeof PaginationSchema
  >

  const result =
    await maintenanceRequestsService.listMaintenanceRequestsOfComplex(
      complexId,
      pagination_query,
    )

  return res.status(200).json(result)
}

export const updateMaintenanceRequest = async (req: Request, res: Response) => {
  const user = req.user
  if (!user?.staff) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const requestId = req.params.id
  const input = UpdateMaintenanceRequestSchema.parse(req.body)

  const updatedRequest =
    await maintenanceRequestsService.updateMaintenanceRequest(requestId, input)

  if (!updatedRequest) {
    return res.status(404).json({ error: 'Request not found or access denied' })
  }

  return res.status(200).json(updatedRequest)
}

export const submitVendorResponse = async (req: Request, res: Response) => {
  const user = req.user
  if (!user?.vendor) {
    return res
      .status(403)
      .json({ error: 'Permission denied: Vendor access only' })
  }

  const requestId = req.params.id
  const input = VendorResponseSchema.parse(req.body)

  const updatedRequest = await maintenanceRequestsService.submitVendorResponse(
    requestId,
    user.vendor.id,
    input,
  )

  if (!updatedRequest) {
    return res
      .status(404)
      .json({ error: 'Request not found or not assigned to this vendor' })
  }

  return res.status(200).json(updatedRequest)
}

export const completeMaintenanceRequest = async (
  req: Request,
  res: Response,
) => {
  const user = req.user
  if (!user?.vendor) {
    return res
      .status(403)
      .json({ error: 'Permission denied: Vendor access only' })
  }

  const requestId = req.params.id
  const input = CompleteMaintenanceSchema.parse(req.body)

  const completedRequest =
    await maintenanceRequestsService.completeMaintenanceRequest(
      requestId,
      user.vendor.id,
      input,
    )

  if (!completedRequest) {
    return res
      .status(404)
      .json({ error: 'Request not found or not assigned to this vendor' })
  }

  return res.status(200).json(completedRequest)
}
