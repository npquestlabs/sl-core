import { prisma } from '../configs/prisma'
import { AppError } from '../util/error'
import { generateLeasePDF, generateRentCardPDF } from '../util/pdfGenerator'
import { CreateLeaseSchema, RenewLeaseSchema } from '../schemas/lease.schema'
import z from 'zod'
import { LeaseStatus } from '../../generated/prisma'

const getLeaseDetailsForPdf = async (leaseId: string) => {
  const lease = await prisma.lease.findUnique({
    where: { id: leaseId },
    include: {
      unit: {
        include: {
          complex: true,
        },
      },
      tenant: {
        include: {
          user: true,
        },
      },
      landlord: {
        include: {
          user: true,
        },
      },
    },
  })
  if (!lease) {
    throw new AppError(
      'Failed to retrieve lease details for PDF generation',
      500,
    )
  }

  return lease
}

export const createLease = async (
  landlordId: string,
  input: z.infer<typeof CreateLeaseSchema>,
) => {
  const {
    unitId,
    tenantId,
    startedAt,
    endsAt,
    advanceMonths,
    noticePeriod,
    rules,
  } = input

  const unit = await prisma.unit.findUnique({
    where: { id: unitId },
    include: { complex: true },
  })
  if (!unit) {
    throw new AppError('Unit not found', 404)
  }
  if (unit.complex.landlordId !== landlordId) {
    throw new AppError('Unit does not belong to this landlord', 403)
  }

  if (unit.rentAmount == null || unit.currency == null) {
    throw new AppError(
      `Unit ${unitId} is missing rent amount or currency information.`,
      400,
    )
  }
  const rentAmount = unit.rentAmount
  const currency = unit.currency

  const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } })
  if (!tenant) {
    throw new AppError('Tenant not found', 404)
  }

  const overlappingLease = await prisma.lease.findFirst({
    where: {
      unitId: unitId,
      status: { in: ['ACTIVE', 'PENDING'] },
      OR: [
        {
          startedAt: { lte: startedAt },
          endsAt: { gte: startedAt },
        },
        {
          startedAt: { lte: endsAt },
          endsAt: { gte: endsAt },
        },
        {
          startedAt: { gte: startedAt },
          endsAt: { lte: endsAt },
        },
      ],
      deletedAt: null,
    },
  })

  if (overlappingLease) {
    throw new AppError(
      `Unit is already leased during the specified period (Overlap with Lease ID: ${overlappingLease.id})`,
      409,
    )
  }

  const lease = await prisma.lease.create({
    data: {
      unitId,
      tenantId,
      landlordId,
      startedAt,
      endsAt,
      rentAmount,
      currency,
      advanceMonths,
      noticePeriod,
      rules: rules ?? null,
      status: 'ACTIVE',
    },
  })

  let documentUrl: string | null = null
  let rentCardUrl: string | null = null
  try {
    const fullLeaseDetails = await getLeaseDetailsForPdf(lease.id)

    documentUrl = await generateLeasePDF(fullLeaseDetails)
    rentCardUrl = await generateRentCardPDF(fullLeaseDetails)
  } catch (pdfError) {
    console.error(`Failed to generate PDFs for Lease ID ${lease.id}:`, pdfError)
  }

  const updatedLease = await prisma.lease.update({
    where: { id: lease.id },
    data: {
      ...(documentUrl && { documentUrl }),
      ...(rentCardUrl && { rentCardUrl }),
    },
    include: {
      unit: true,
      tenant: { include: { user: true } },
      landlord: { include: { user: true } },
    },
  })

  return updatedLease
}

export const renewLease = async (
  leaseId: string,
  landlordId: string,
  input: z.infer<typeof RenewLeaseSchema>,
) => {
  const { newEndsAt, advanceMonths, rules } = input

  const existingLease = await prisma.lease.findUnique({
    where: { id: leaseId },
    include: { unit: { include: { complex: true } } },
  })
  if (!existingLease) {
    throw new AppError('Lease not found', 404)
  }
  if (existingLease.landlordId !== landlordId) {
    throw new AppError('Lease does not belong to this landlord', 403)
  }
  if (existingLease.status !== 'ACTIVE' && existingLease.status !== 'EXPIRED') {
    throw new AppError(
      `Lease cannot be renewed because its status is ${existingLease.status}`,
      400,
    )
  }

  if (newEndsAt <= existingLease.endsAt) {
    throw new AppError(
      'New end date must be after the current lease end date',
      400,
    )
  }

  const newStartedAt = new Date(existingLease.endsAt)
  newStartedAt.setDate(newStartedAt.getDate() + 1)

  const newLease = await prisma.lease.create({
    data: {
      unitId: existingLease.unitId,
      tenantId: existingLease.tenantId,
      landlordId: existingLease.landlordId,
      rentAmount: existingLease.rentAmount,
      currency: existingLease.currency,
      noticePeriod: existingLease.noticePeriod,

      startedAt: newStartedAt,
      endsAt: newEndsAt,
      advanceMonths,
      rules: rules !== undefined ? rules : existingLease.rules,
      status: LeaseStatus.ACTIVE,
      parentLeaseId: leaseId,
    },
  })

  let documentUrl: string | null = null
  let rentCardUrl: string | null = null
  try {
    const fullLeaseDetails = await getLeaseDetailsForPdf(newLease.id)
    documentUrl = await generateLeasePDF(fullLeaseDetails)
    rentCardUrl = await generateRentCardPDF(fullLeaseDetails)
  } catch (pdfError) {
    console.error(
      `Failed to generate PDFs for Renewed Lease ID ${newLease.id}:`,
      pdfError,
    )
  }

  const updatedNewLease = await prisma.lease.update({
    where: { id: newLease.id },
    data: {
      ...(documentUrl && { documentUrl }),
      ...(rentCardUrl && { rentCardUrl }),
    },
    include: {
      unit: true,
      tenant: { include: { user: true } },
      landlord: { include: { user: true } },
    },
  })

  await prisma.lease.update({
    where: { id: leaseId },
    data: { status: 'RENEWED' },
  })

  return updatedNewLease
}

export const listLeases = async (landlordId: string) => {
  const leases = await prisma.lease.findMany({
    where: {
      landlordId,
      deletedAt: null,
    },
    include: {
      unit: { include: { complex: true } },
      tenant: { include: { user: true } },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return leases
}

export const terminateLease = async (leaseId: string, landlordId: string) => {
  const lease = await prisma.lease.findFirst({
    where: {
      id: leaseId,
      landlordId: landlordId,
    },
  })
  if (!lease) {
    throw new AppError(
      'Lease not found or you do not have permission to modify it',
      404,
    )
  }

  // 2. Check if lease is already terminated or in a non-terminable state
  if (
    lease.status &&
    ['TERMINATED', 'RENEWED', 'CANCELLED'].includes(lease.status)
  ) {
    throw new AppError(
      `Lease is already in status ${lease.status} and cannot be terminated again.`,
      400,
    )
  }

  // 3. Update lease status to TERMINATED and set deletedAt (soft delete)
  const updatedLease = await prisma.lease.update({
    where: { id: leaseId },
    data: {
      status: 'TERMINATED',
      deletedAt: new Date(), // Mark as deleted now
    },
    include: {
      // Return details needed by the caller
      unit: true,
      tenant: { include: { user: true } },
      landlord: { include: { user: true } },
    },
  })

  // Add any side effects here (e.g., update unit status to 'Available')
  // await prisma.unit.update({ where: { id: lease.unitId }, data: { status: 'Available' }});

  return updatedLease
}
