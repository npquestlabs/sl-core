import { z } from 'zod'
import {
  CreateComplexSchema,
  UpdateComplexSchema,
} from '../schemas/complex.schema'
import { prisma } from '../configs/prisma'
import { AppError, NotFoundError } from '../util/error'
import { PaginationSchema } from '../schemas/extras.schema'
import { PaginatedResponse } from '../util/types'
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
  complexId: string,
  updates: z.infer<typeof UpdateComplexSchema>,
) {
  const updatedComplex = await prisma.complex.update({
    data: {
      ...updates,
    },
    where: {
      id: complexId,
    },
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

export async function getComplexesOfLandlord(
  landlordId: string,
  pagination: z.infer<typeof PaginationSchema>,
): Promise<PaginatedResponse<Prisma.ComplexGetPayload<Record<string, never>>>> {
  const { page, limit, filter } = pagination

  const total = await prisma.complex.count({
    where: {
      landlordId: landlordId,
      deletedAt: null,
      OR: [
        { name: { contains: filter, mode: 'insensitive' } },
        { description: { contains: filter, mode: 'insensitive' } },
      ],
    },
  })

  const complexes = await prisma.complex.findMany({
    where: {
      landlordId: landlordId,
      deletedAt: null,
      OR: [
        { name: { contains: filter, mode: 'insensitive' } },
        { description: { contains: filter, mode: 'insensitive' } },
      ],
    },
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
