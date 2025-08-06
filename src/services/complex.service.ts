import { z } from 'zod'
import {
  CreateComplexSchema,
  UpdateComplexSchema,
} from '../schemas/complex.schema'
import { prisma } from '../configs/prisma'
import { NotFoundError } from '../util/error'
import { PaginationSchema } from '../schemas/extras.schema'
import { PaginatedResponse } from '../types'
import { Prisma, StaffRole } from '../../generated/prisma'
import { CreatedComplex, DetailedComplex, ListedComplex } from '../types/out'

export async function createComplex(
  staffId: string,
  data: z.infer<typeof CreateComplexSchema>,
): Promise<CreatedComplex> {
  const createdComplex = await prisma.complex.create({
    data: {
      ...data,
      assignments: {
        create: {
          staffId,
          role: StaffRole.SUPERADMIN,
        },
      },
    },
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  })

  return createdComplex
}

export async function updateComplex(
  updates: z.infer<typeof UpdateComplexSchema>,
  where: Prisma.ComplexWhereUniqueInput,
  include: Prisma.ComplexInclude = {},
) {
  const updatedComplex = await prisma.complex.update({
    data: {
      ...updates,
    },
    where,
    include,
  })

  return updatedComplex ?? null
}

export async function getComplexById(complexId: string) {
  const complex = await prisma.complex.findUnique({
    where: { id: complexId },
  })

  if (!complex) {
    throw new NotFoundError('Complex not found')
  }

  return complex
}

export async function getComplex(
  where: Prisma.ComplexWhereUniqueInput,
  include: Prisma.ComplexInclude = {},
) {
  const complex = await prisma.complex.findUnique({
    where,
    include,
  })

  return complex ?? null
}

export async function getStaffComplexes(
  staffId: string,
  pagination: z.infer<typeof PaginationSchema>,
): Promise<PaginatedResponse<ListedComplex>> {
  const { page, limit, filter } = pagination

  const whereClause: Prisma.ComplexWhereInput = {
    deletedAt: null,
    assignments: {
      some: {
        staffId: staffId,
      },
    },
  }

  if (filter) {
    whereClause.OR = [
      { name: { contains: filter, mode: 'insensitive' } },
      { description: { contains: filter, mode: 'insensitive' } },
      { cityName: { contains: filter, mode: 'insensitive' } },
      { address: { contains: filter, mode: 'insensitive' } },
    ]
  }

  const [total, complexes] = await prisma.$transaction([
    prisma.complex.count({ where: whereClause }),
    prisma.complex.findMany({
      where: whereClause,
      select: {
        id: true,
        name: true,
        description: true,
        cityName: true,
        countryCode: true,
        address: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            units: true,
            assignments: true,
          },
        },
      },
      take: limit,
      skip: (page - 1) * limit,
    }),
  ])

  return { data: complexes, meta: { limit, page, total } }
}

/**
 * Fetches detailed information for a specific complex, including a paginated list of its units.
 *
 * @param id - The ID of the complex to retrieve.
 * @param query - An object containing query parameters, e.g., for paginating nested units.
 * @returns A promise that resolves to the detailed complex object or null if not found.
 */
export async function getDetailedComplex(
  id: string,
  where: Prisma.ComplexWhereInput = {},
): Promise<DetailedComplex | null> {
  const unitsLimit = 3

  const complex = await prisma.complex.findUnique({
    where: { ...where, id: id, deletedAt: null },
    select: {
      id: true,
      name: true,
      description: true,
      notes: true,
      countryCode: true,
      cityName: true,
      address: true,
      createdAt: true,
      updatedAt: true,
      _count: {
        select: {
          units: true,
          assignments: true,
        },
      },
      units: {
        where: { deletedAt: null },
        take: unitsLimit,
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
            orderBy: { startedAt: 'desc' },
            take: 1,
            select: { status: true },
          },
          _count: {
            select: { maintenanceRequests: true },
          },
        },
      },
      assignments: {
        select: {
          role: true,
          staff: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              user: {
                select: { avatarUrl: true },
              },
            },
          },
        },
      },
    },
  })

  if (!complex) {
    return null
  }

  const formattedUnits = complex.units.map((unit) => ({
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

  return { ...complex, units: formattedUnits }
}

export async function countComplexes(where: Prisma.ComplexWhereInput = {}) {
  return prisma.complex.count({
    where,
  })
}
export async function deleteComplex(where: Prisma.ComplexWhereUniqueInput) {
  const deletedComplex = await prisma.complex.update({
    where,
    data: { deletedAt: new Date() },
  })

  return deletedComplex ?? null
}
