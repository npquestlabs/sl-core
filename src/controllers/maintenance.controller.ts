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

  if (!user.landlord && !user.tenant) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const { unitId } = req.params

  if (!unitId) {
    return res.status(400).json({ error: 'Invalid params' })
  }

  const request = await maintenanceRequestsService.createMaintenanceRequest(
    user,
    unitId,
    req.body,
  )

  return res.status(201).json(request)
}

export const getMaintenanceRequests = async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const pagination_query = req.query as unknown as z.infer<
    typeof PaginationSchema
  >

  const result =
    await maintenanceRequestsService.listMaintenanceRequestsOfLandlord(
      user.landlord.id,
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
    return res.status(400).json({ error: 'Invalid params' })
  }

  const accessOrConditions: Prisma.UnitWhereInput[] = []

  if (user.landlord) {
    accessOrConditions.push({
      complex: {
        landlordId: user.landlord.id,
        deletedAt: null,
      },
    })
  }

  if (user.tenant) {
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

  const unit = unitService.getUnit(whereClause)

  if (!unit) {
    return res.status(404).json({ error: 'Not found' })
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

  const complex = complexService.getComplex({
    id: complexId,
    landlordId: user.landlord.id,
  })

  if (!complex) {
    return res.status(404).json({ error: 'Not found' })
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
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const requestId = req.params.id
  const input = UpdateMaintenanceRequestSchema.parse(req.body)

  const updatedRequest =
    await maintenanceRequestsService.updateMaintenanceRequest(requestId, input)

  return res.status(200).json(updatedRequest)
}

export const submitVendorResponse = async (req: Request, res: Response) => {
  const user = req.user
  if (!user || !user.vendor) {
    return res.status(401).json({ error: 'Unauthorized - Vendor access only' })
  }

  const requestId = req.params.id
  const input = VendorResponseSchema.parse(req.body)

  const updatedRequest = await maintenanceRequestsService.submitVendorResponse(
    requestId,
    user.vendor.id,
    input,
  )

  return res.status(200).json(updatedRequest)
}

export const completeMaintenanceRequest = async (
  req: Request,
  res: Response,
) => {
  const user = req.user
  if (!user || !user.vendor) {
    return res.status(401).json({ error: 'Unauthorized - Vendor access only' })
  }

  const requestId = req.params.id
  const input = CompleteMaintenanceSchema.parse(req.body)

  const completedRequest =
    await maintenanceRequestsService.completeMaintenanceRequest(
      requestId,
      user.vendor.id,
      input,
    )

  return res.status(200).json(completedRequest)
}
