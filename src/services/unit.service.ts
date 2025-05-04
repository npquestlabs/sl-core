import { CreateUnitSchema, UpdateUnitSchema } from '../schemas/unit.schema'
import { prisma } from '../configs/prisma'
import { AppError, NotFoundError } from '../util/error'
import { PaginationSchema } from '../schemas/extras.schema'
import { z } from 'zod'
import { PaginatedResponse } from '../util/types'
import { Prisma } from '../../generated/prisma'

export async function createUnit(
  complexId: string,
  data: z.infer<typeof CreateUnitSchema>,
) {
  const createdUnit = await prisma.unit.create({
    data: {
      ...data,
      complexId,
    },
  })

  return createdUnit ?? null
}

export async function updateUnit(
  unitId: string,
  updates: z.infer<typeof UpdateUnitSchema>,
) {
  const updatedUnit = await prisma.unit.update({
    data: {
      ...updates,
    },
    where: {
      id: unitId,
    },
  })

  return updatedUnit ?? null
}

export async function getUnitById(
  unitId: string,
  include: Prisma.UnitInclude = {},
) {
  const unit = await prisma.unit.findUnique({
    where: { id: unitId },
    include,
  })

  if (!unit) {
    throw new NotFoundError('Unit not found')
  }

  return unit
}

export async function getUnitsInComplex(
  complexId: string,
  pagination: z.infer<typeof PaginationSchema>,
): Promise<PaginatedResponse<Prisma.UnitGetPayload<Record<string, never>>>> {
  const { page, limit, filter } = pagination

  const total = await prisma.unit.count({
    where: {
      complexId: complexId,
      deletedAt: null,
      OR: [
        { label: { contains: filter, mode: 'insensitive' } },
        { description: { contains: filter, mode: 'insensitive' } },
      ],
    },
  })

  const units = await prisma.unit.findMany({
    where: {
      complexId: complexId,
      deletedAt: null,
      OR: [
        { label: { contains: filter, mode: 'insensitive' } },
        { description: { contains: filter, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
    skip: (page - 1) * limit,
    take: limit,
  })

  return { data: units, meta: { limit, page, total } }
}

export async function getUnitsOfTenant(
  tenantId: string,
  pagination: z.infer<typeof PaginationSchema>,
): Promise<PaginatedResponse<Prisma.UnitGetPayload<Record<string, never>>>> {
  const { page, limit, filter } = pagination

  const total = await prisma.unit.count({
    where: {
      tenantId: tenantId,
      deletedAt: null,
      OR: [
        { label: { contains: filter, mode: 'insensitive' } },
        { description: { contains: filter, mode: 'insensitive' } },
      ],
    },
  })

  const units = await prisma.unit.findMany({
    where: {
      tenantId: tenantId,
      deletedAt: null,
      OR: [
        { label: { contains: filter, mode: 'insensitive' } },
        { description: { contains: filter, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
    skip: (page - 1) * limit,
    take: limit,
  })

  return { data: units, meta: { limit, page, total } }
}

export async function removeTenant(unitId: string, tenantId: string) {
  // Validate that the unit exists
  const unit = await prisma.unit.findUnique({ where: { id: unitId } })
  if (!unit) {
    throw new NotFoundError('Unit not found')
  }

  // Ensure the unit is currently assigned to the specified tenant
  if (unit.tenantId !== tenantId) {
    throw new AppError('Tenant not assigned to this unit', 400)
  }

  // Remove the tenant from the unit
  const updatedUnit = await prisma.unit.update({
    where: { id: unitId },
    data: { tenantId: null },
  })

  return updatedUnit ?? null
}

export async function assignTenant(unitId: string, tenantId: string) {
  // Validate that the unit exists
  const unit = await prisma.unit.findUnique({ where: { id: unitId } })
  if (!unit) {
    throw new AppError('Unit not found', 404)
  }

  // Validate that the tenant exists
  const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } })
  if (!tenant) {
    throw new AppError('Tenant not found', 404)
  }

  // Ensure the unit is not already assigned to another tenant
  if (unit.tenantId) {
    throw new AppError('Unit is already assigned to a tenant', 400)
  }

  // Assign the tenant to the unit
  const updatedUnit = await prisma.unit.update({
    where: { id: unitId },
    data: { tenantId },
  })

  return updatedUnit ?? null
}
