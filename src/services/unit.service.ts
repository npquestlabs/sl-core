import { CreateUnitSchema, UpdateUnitSchema } from '../schemas/unit.schema'
import { prisma } from '../configs/prisma'
import { NotFoundError } from '../util/error'
import { PaginationSchema } from '../schemas/extras.schema'
import { z } from 'zod'
import { PaginatedResponse } from '../types'
import { LeaseStatus, Prisma } from '../../generated/prisma'
import { CreatedUnit, DetailedUnit, ListedUnit } from '../types/out'

export async function createUnit(
  complexId: string,
  data: z.infer<typeof CreateUnitSchema>,
): Promise<CreatedUnit> {
  const createdUnit = await prisma.unit.create({
    data: {
      ...data,
      complexId,
    },
    select: {
      id: true,
      label: true,
      type: true,
      complexId: true,
      createdAt: true,
      updatedAt: true,
    },
  })

  return createdUnit
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
  const { page, limit, filter } = pagination

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
    },
  ]

  const whereClause: Prisma.UnitWhereInput = {
    AND: baseWhereConditions,
  }

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
      },
    ]
  }

  const total = await prisma.unit.count({
    where: whereClause,
  })

  const units = await prisma.unit.findMany({
    where: whereClause,
    skip: (page - 1) * limit,
    take: limit,
    orderBy: {
      createdAt: 'desc',
    },
  })

  return { data: units, meta: { limit, page, total } }
}

export async function deleteUnit(where: Prisma.UnitWhereUniqueInput) {
  const deletedUnit = await prisma.unit.update({
    where,
    data: { deletedAt: new Date() },
  })

  return deletedUnit ?? null
}

export async function getStaffUnits(
  staffId: string,
  pagination: z.infer<typeof PaginationSchema>,
): Promise<PaginatedResponse<ListedUnit>> {
  const { page, limit, filter } = pagination

  const whereClause: Prisma.UnitWhereInput = {
    deletedAt: null,
    complex: {
      deletedAt: null,
      assignments: {
        some: {
          staffId: staffId,
        },
      },
    },
  }

  if (filter) {
    whereClause.OR = [
      { label: { contains: filter, mode: 'insensitive' } },
      { description: { contains: filter, mode: 'insensitive' } },
      { complex: { name: { contains: filter, mode: 'insensitive' } } },
    ]
  }

  const [total, unitData] = await prisma.$transaction([
    prisma.unit.count({ where: whereClause }),
    prisma.unit.findMany({
      where: whereClause,
      select: {
        id: true,
        label: true,
        type: true,
        rentAmount: true,
        rentCurrency: true,
        complex: {
          select: {
            id: true,
            name: true,
          },
        },
        leases: {
          orderBy: {
            startedAt: 'desc',
          },
          take: 1,
          select: {
            status: true,
          },
        },
        _count: {
          select: {
            maintenanceRequests: true,
          },
        },
      },
      take: limit,
      skip: (page - 1) * limit,
    }),
  ])

  const units: ListedUnit[] = unitData.map((unit) => ({
    id: unit.id,
    label: unit.label,
    type: unit.type,
    rentAmount: unit.rentAmount ? unit.rentAmount.toString() : null,
    rentCurrency: unit.rentCurrency,
    complex: unit.complex,
    leaseStatus: unit.leases.length > 0 ? unit.leases[0].status : null,
    _count: {
      maintenanceRequests: unit._count.maintenanceRequests,
    },
  }))

  return { data: units, meta: { limit, page, total } }
}

export async function getDetailedUnit(
  id: string,
  where: Prisma.UnitWhereInput = {},
): Promise<DetailedUnit | null> {
  const maintenanceLimit = 3

  const unitData = await prisma.unit.findUnique({
    where: { ...where, id: id, deletedAt: null },
    select: {
      id: true,
      label: true,
      type: true,
      description: true,
      notes: true,
      rentAmount: true,
      rentCurrency: true,
      rentDuration: true,
      rentUnit: true,
      createdAt: true,
      updatedAt: true,
      complex: {
        select: {
          id: true,
          name: true,
          address: true,
        },
      },
      leases: {
        where: { status: 'ACTIVE' },
        orderBy: { createdAt: 'desc' },
        take: 1,
        select: {
          id: true,
          startedAt: true,
          endsAt: true,
          status: true,
          tenant: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
              phone: true,
              user: {
                select: { avatarUrl: true },
              },
            },
          },
        },
      },
      maintenanceRequests: {
        take: maintenanceLimit,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          description: true,
          status: true,
          createdAt: true,
          creator: {
            select: {
              avatarUrl: true,
              tenant: { select: { firstName: true, lastName: true } },
              staff: { select: { firstName: true, lastName: true } },
              vendor: { select: { firstName: true, lastName: true } },
            },
          },
        },
      },
    },
  })

  if (!unitData) {
    return null
  }

  const { leases, rentAmount, ...rest } = unitData

  const activeLease = leases.length > 0 ? leases[0] : null

  return {
    ...rest,
    rentAmount: rentAmount ? rentAmount.toString() : null,
    activeLease: activeLease,
  }
}

export async function countUnits(where: Prisma.UnitWhereInput = {}) {
  return prisma.unit.count({
    where,
  })
}
