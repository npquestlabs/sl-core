import { z } from 'zod'
import { prisma } from '../configs/prisma'
import { PaginationSchema } from '../schemas/extras.schema'
import {
  CompleteMaintenanceInput,
  CreateMaintenanceRequestInput,
  UpdateMaintenanceRequestInput,
  VendorResponseInput,
} from '../schemas/maintenance.schema'
import { LocalUser } from '../types'
import { AppError } from '../util/error'
import { Prisma } from '../../generated/prisma'

export const createMaintenanceRequest = async (
  creator: LocalUser,
  unitId: string,
  data: CreateMaintenanceRequestInput,
) => {
  const request = await prisma.maintenanceRequest.create({
    data: {
      creatorId: creator.id,
      ...data,
      unitId,
    },
  })

  return request
}

export const listMaintenanceRequestsOfLandlord = async (
  landlordId: string,
  pagination: z.infer<typeof PaginationSchema>,
) => {
  const { limit, page, order } = pagination

  const query_args: Prisma.MaintenanceRequestFindManyArgs = {
    where: {
      deletedAt: null,
      unit: {
        complex: {
          landlordId,
        },
      },
    },
    include: {
      unit: { include: { complex: true } },
      vendor: { include: { user: true } },
    },
    orderBy: {
      ...(order || { createdAt: 'desc' }),
    },
    take: limit,
    skip: (page - 1) * limit,
  }

  const result = await prisma.maintenanceRequest.findMany(query_args)
  const total = await prisma.maintenanceRequest.count({
    where: query_args.where,
  })

  if (!result) {
    return null
  }

  return { data: result, meta: { page, limit, total } }
}

export const listMaintenanceRequestsOfUnit = async (
  unitId: string,
  pagination: z.infer<typeof PaginationSchema>,
) => {
  const { limit, page, order } = pagination

  const query_args: Prisma.MaintenanceRequestFindManyArgs = {
    where: {
      deletedAt: null,
      unitId,
    },
    include: {
      unit: { include: { complex: true } },
      vendor: { include: { user: true } },
    },
    orderBy: {
      ...(order || { createdAt: 'desc' }),
    },
    take: limit,
    skip: (page - 1) * limit,
  }

  const result = await prisma.maintenanceRequest.findMany(query_args)
  const total = await prisma.maintenanceRequest.count({
    where: query_args.where,
  })

  if (!result) {
    return null
  }

  return { data: result, meta: { page, limit, total } }
}

export const listMaintenanceRequestsOfComplex = async (
  complexId: string,
  pagination: z.infer<typeof PaginationSchema>,
) => {
  const { limit, page, order } = pagination

  const query_args: Prisma.MaintenanceRequestFindManyArgs = {
    where: {
      deletedAt: null,
      unit: {
        complexId,
      },
    },
    include: {
      unit: { include: { complex: true } },
      vendor: { include: { user: true } },
    },
    orderBy: {
      ...(order || { createdAt: 'desc' }),
    },
    take: limit,
    skip: (page - 1) * limit,
  }

  const result = await prisma.maintenanceRequest.findMany(query_args)
  const total = await prisma.maintenanceRequest.count({
    where: query_args.where,
  })

  if (!result) {
    return null
  }

  return { data: result, meta: { page, limit, total } }
}

export const updateMaintenanceRequest = async (
  requestId: string,
  input: UpdateMaintenanceRequestInput,
) => {
  const updatedRequest = await prisma.maintenanceRequest.update({
    where: { id: requestId },
    data: {
      ...input,
    },
  })

  return updatedRequest
}

export const submitVendorResponse = async (
  requestId: string,
  vendorId: string,
  input: VendorResponseInput,
) => {
  const request = await prisma.maintenanceRequest.findUnique({
    where: { id: requestId },
  })

  if (!request) {
    throw new AppError('Maintenance request not found', 404)
  }

  if (request.vendorId !== vendorId) {
    throw new AppError('This request is not assigned to you', 403)
  }

  const updatedRequest = await prisma.maintenanceRequest.update({
    where: { id: requestId },
    data: {
      vendorResponse: input.vendorResponse,
      scheduledFor: input.scheduledFor,
      cost: input.cost,
      costCurrency: 'GHS',
      status: 'SCHEDULED',
    },
    include: {
      unit: true,
      vendor: { include: { user: true } },
    },
  })

  return updatedRequest
}

export const completeMaintenanceRequest = async (
  requestId: string,
  vendorId: string,
  input: CompleteMaintenanceInput,
) => {
  const request = await prisma.maintenanceRequest.findUnique({
    where: { id: requestId },
  })

  if (!request) {
    throw new AppError('Maintenance request not found', 404)
  }

  if (request.vendorId !== vendorId) {
    throw new AppError('This request is not assigned to you', 403)
  }

  const updatedRequest = await prisma.maintenanceRequest.update({
    where: { id: requestId },
    data: {
      completedAt: input.completedAt,
      cost: input.cost,
      status: 'COMPLETED',
      paymentStatus: input.receiptUrl ? 'PAID' : 'PENDING',
    },
    include: {
      unit: true,
      vendor: { include: { user: true } },
    },
  })

  return updatedRequest
}

export async function countMaintenances(
  where: Prisma.MaintenanceRequestWhereInput = {},
) {
  return prisma.maintenanceRequest.count({
    where,
  })
}
