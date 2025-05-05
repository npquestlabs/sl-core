import { CreateUnitSchema, UpdateUnitSchema } from '../schemas/unit.schema'
import { prisma } from '../configs/prisma'
import { NotFoundError } from '../util/error'
import { PaginationSchema } from '../schemas/extras.schema'
import { z } from 'zod'
import { PaginatedResponse } from '../types'
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

export async function getUnit(
  where: Prisma.UnitWhereUniqueInput,
  include: Prisma.UnitInclude = {},
) {
  const unit = await prisma.unit.findUnique({
    where,
    include,
  })

  return unit ?? null
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

  const whereClause: Prisma.UnitWhereInput = {
    complexId: complexId,
    deletedAt: null,
  }

  if (filter) {
    whereClause.OR = [
      { label: { contains: filter, mode: 'insensitive' } },
      { description: { contains: filter, mode: 'insensitive' } },
    ]
  }

  const total = await prisma.unit.count({
    where: whereClause,
  })

  const units = await prisma.unit.findMany({
    where: whereClause,
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

  const whereClause: Prisma.UnitWhereInput = {
    tenantId: tenantId,
    deletedAt: null,
  }

  if (filter) {
    whereClause.OR = [
      { label: { contains: filter, mode: 'insensitive' } },
      { description: { contains: filter, mode: 'insensitive' } },
    ]
  }

  const total = await prisma.unit.count({
    where: whereClause,
  })

  const units = await prisma.unit.findMany({
    where: whereClause,
    orderBy: {
      createdAt: 'desc',
    },
    skip: (page - 1) * limit,
    take: limit,
  })

  return { data: units, meta: { limit, page, total } }
}

/**
 * Removes a tenant association from a unit, but only if the unit
 * exists and is currently associated with the specified tenantId.
 *
 * @param whereClause - Prisma WhereUniqueInput to identify the specific unit (e.g., { id: 'unit-uuid' }).
 * @param tenantId - The ID of the tenant that is expected to be currently assigned to the unit.
 * @returns The updated Unit object with tenantId set to null, or null if the unit
 *          was not found or was not associated with the specified tenantId.
 */
export async function removeTenant(
  whereClause: Prisma.UnitWhereUniqueInput,
  tenantId: string,
): Promise<Prisma.UnitGetPayload<Record<string, never>> | null> {
  try {
    const updatedUnit = await prisma.unit.update({
      where: {
        ...whereClause,
        tenantId: tenantId,
      },
      data: {
        tenant: {
          disconnect: true,
        },
      },
    })
    return updatedUnit
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2025'
    ) {
      console.warn(
        `RemoveTenant failed for unit matching ${JSON.stringify(whereClause)} with tenantId ${tenantId}: Unit not found or tenant mismatch.`,
      )
      return null
    }
    console.error('Unexpected error during removeTenant:', error)
    throw error
  }
}

export async function assignTenant(
  whereClause: Prisma.UnitWhereUniqueInput,
  tenantId: string,
) {
  try {
    const updatedUnit = await prisma.unit.update({
      where: { ...whereClause, tenantId: null },
      data: {
        tenant: {
          connect: { id: tenantId },
        },
      },
    })
    return updatedUnit
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2025'
    ) {
      console.warn(
        `AssignTenant failed for unit matching ${JSON.stringify(whereClause)}: Unit not found or already has a tenant.`,
      )
      return null
    }
    throw error
  }
}

export async function deleteUnit(where: Prisma.UnitWhereUniqueInput) {
  const deletedUnit = await prisma.unit.update({
    where,
    data: { deletedAt: new Date() },
  })

  return deletedUnit ?? null
}
