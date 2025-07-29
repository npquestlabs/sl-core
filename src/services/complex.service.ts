import { z } from 'zod'
import {
  CreateComplexSchema,
  UpdateComplexSchema,
} from '../schemas/complex.schema'
import { prisma } from '../configs/prisma'
import { AppError, NotFoundError } from '../util/error'
import { PaginationSchema } from '../schemas/extras.schema'
import { PaginatedResponse } from '../types'
import { Prisma } from '../../generated/prisma'

export async function createComplex(
  landlordId: string,
  data: z.infer<typeof CreateComplexSchema>,
) {
  const createdComplex = await prisma.complex.create({
    data: {
      ...data,
      landlordId,
    },
  })

  return createdComplex ?? null
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

export async function getComplexesOfLandlord(
  landlordId: string,
  pagination: z.infer<typeof PaginationSchema>,
): Promise<PaginatedResponse<Prisma.ComplexGetPayload<Record<string, never>>>> {
  const { page, limit, filter } = pagination

  const whereClause: Prisma.ComplexWhereInput = {
    landlordId: landlordId,
    deletedAt: null,
  }

  if (filter) {
    whereClause.OR = [
      { name: { contains: filter, mode: 'insensitive' } },
      { description: { contains: filter, mode: 'insensitive' } },
    ]
  }

  const total = await prisma.complex.count({
    where: whereClause,
  })

  const complexes = await prisma.complex.findMany({
    where: whereClause,
    skip: (page - 1) * limit,
    take: limit,
    orderBy: {
      createdAt: 'desc',
    },
  })

  if (!complexes) {
    throw new AppError('An error occurred')
  }

  return { data: complexes, meta: { limit, page, total } }
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
