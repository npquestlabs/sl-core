import { CreateUnitSchema, UpdateUnitSchema } from '../schemas/unit.schema'
import { prisma } from '../configs/prisma'
import { NotFoundError } from '../util/error'
import { PaginationSchema } from '../schemas/extras.schema'
import { z } from 'zod'
import { PaginatedResponse } from '../types'
import { LeaseStatus, Prisma } from '../../generated/prisma'

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
  where: Prisma.UnitWhereUniqueInput,
  updates: z.infer<typeof UpdateUnitSchema>,
) {
  const updatedUnit = await prisma.unit.update({
    data: {
      ...updates,
    },
    where,
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
  const { page, limit, filter } = pagination;

  const baseWhereConditions: Prisma.UnitWhereInput[] = [
    {
      leases: {
        some: {
          tenantId: tenantId,
          status: LeaseStatus.ACTIVE,
          deletedAt: null,
        },
      },
      deletedAt: null,
    }
  ];


  const whereClause: Prisma.UnitWhereInput = {
    AND: baseWhereConditions
  };

  if (filter) {
    whereClause.AND = [
      ...baseWhereConditions,
      {
        OR: [
          { label: { contains: filter, mode: 'insensitive' } },
          { description: { contains: filter, mode: 'insensitive' } },
          {
            complex: {
              name: { contains: filter, mode: 'insensitive' },
              deletedAt: null,
            },
          },
        ],
      }
    ];
  }

  const total = await prisma.unit.count({
    where: whereClause,
  });

  const units = await prisma.unit.findMany({
    where: whereClause,
    skip: (page - 1) * limit,
    take: limit,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return { data: units, meta: { limit, page, total } };
}

export async function deleteUnit(where: Prisma.UnitWhereUniqueInput) {
  const deletedUnit = await prisma.unit.update({
    where,
    data: { deletedAt: new Date() },
  })

  return deletedUnit ?? null
}


export async function getUnitsOfLandlord(
  landlordId: string,
  pagination: z.infer<typeof PaginationSchema>,
): Promise<PaginatedResponse<Prisma.UnitGetPayload<Record<string, never>>>> {
  const { page, limit, filter } = pagination

  const whereClause: Prisma.UnitWhereInput = {
    complex: { landlordId },
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

export async function countUnits(where: Prisma.UnitWhereInput = {}) {
  return prisma.unit.count({
    where
  })
}