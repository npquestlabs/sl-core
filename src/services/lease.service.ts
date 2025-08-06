import { z } from 'zod'
import { prisma } from '../configs/prisma'
import { AppError } from '../util/error'
import { CreateLeaseSchema, RenewLeaseSchema } from '../schemas/lease.schema'
import { LeaseStatus, Prisma } from '../../generated/prisma'

/**
 * Retrieves full lease details, including related unit, complex, tenant, and staff information.
 * This is a foundational function for operations that need comprehensive lease data.
 */
export const getLeaseDetails = async (leaseId: string) => {
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
      staff: {
        // Updated from 'staff'
        include: {
          user: true,
        },
      },
    },
  })

  if (!lease) {
    throw new AppError('Failed to retrieve lease details', 404)
  }

  return lease
}

/**
 * Creates a new lease agreement.
 * Ensures the staff member has permission to create a lease for the specified unit,
 * and that the unit is not already leased for an overlapping period.
 */
export const createLease = async (
  staffId: string,
  input: z.infer<typeof CreateLeaseSchema>,
) => {
  const { unitId, tenantId, startedAt, endsAt } = input

  // Verify the unit exists and the staff member is assigned to its complex
  const unit = await prisma.unit.findFirst({
    where: {
      id: unitId,
      complex: {
        assignments: {
          some: { staffId },
        },
      },
    },
  })

  if (!unit) {
    throw new AppError(
      'Unit not found or you do not have permission for this complex',
      404,
    )
  }

  if (unit.rentAmount == null || unit.rentCurrency == null) {
    throw new AppError(
      `Unit ${unitId} is missing required rent information.`,
      400,
    )
  }

  // Verify tenant exists
  const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } })
  if (!tenant) {
    throw new AppError('Tenant not found', 404)
  }

  // Check for any overlapping leases on the same unit
  const overlappingLease = await prisma.lease.findFirst({
    where: {
      unitId: unitId,
      status: { in: ['ACTIVE', 'PENDING'] },
      OR: [{ startedAt: { lte: endsAt }, endsAt: { gte: startedAt } }],
      deletedAt: null,
    },
  })

  if (overlappingLease) {
    throw new AppError('Unit is already leased for an overlapping period.', 409)
  }

  // Create the lease record
  const lease = await prisma.lease.create({
    data: {
      ...input,
      staffId,
      rentAmount: unit.rentAmount,
      rentCurrency: unit.rentCurrency,
      status: 'ACTIVE',
    },
    include: {
      unit: true,
      tenant: { include: { user: true } },
      staff: { include: { user: true } },
    },
  })

  // Advanced features like PDF generation can be added back here later.
  return lease
}

/**
 * Renews an existing lease.
 * It creates a new lease linked to the old one and updates the old lease's status to RENEWED.
 */
export const renewLease = async (
  leaseId: string,
  staffId: string,
  input: z.infer<typeof RenewLeaseSchema>,
) => {
  const { newEndsAt, ...restOfInput } = input

  // Find the lease and verify the staff member has permission to modify it
  const existingLease = await prisma.lease.findFirst({
    where: {
      id: leaseId,
      unit: {
        complex: {
          assignments: {
            some: { staffId },
          },
        },
      },
    },
  })

  if (!existingLease) {
    throw new AppError(
      'Lease not found or you do not have permission to modify it',
      404,
    )
  }

  if (existingLease.status !== 'ACTIVE' && existingLease.status !== 'EXPIRED') {
    throw new AppError(
      `Cannot renew a lease with status: ${existingLease.status}`,
      400,
    )
  }

  if (newEndsAt <= existingLease.endsAt) {
    throw new AppError(
      'New end date must be after the current lease end date',
      400,
    )
  }

  // Set the new start date to the day after the old lease ends
  const newStartedAt = new Date(existingLease.endsAt)
  newStartedAt.setDate(newStartedAt.getDate() + 1)

  // Use a transaction to ensure both creation and update succeed or fail together
  const [newLease] = await prisma.$transaction([
    prisma.lease.create({
      data: {
        ...restOfInput,
        startedAt: newStartedAt,
        endsAt: newEndsAt,
        parentLeaseId: leaseId,
        status: LeaseStatus.ACTIVE,
        unitId: existingLease.unitId,
        tenantId: existingLease.tenantId,
        staffId: existingLease.staffId,
        rentAmount: existingLease.rentAmount, // Or allow new amount in input
        rentCurrency: existingLease.rentCurrency,
        noticePeriod: existingLease.noticePeriod,
      },
      include: {
        unit: true,
        tenant: { include: { user: true } },
        staff: { include: { user: true } },
      },
    }),
    prisma.lease.update({
      where: { id: leaseId },
      data: { status: 'RENEWED' },
    }),
  ])

  return newLease
}

/**
 * Lists all leases associated with complexes managed by a specific staff member.
 */
export const listLeasesForStaff = async (staffId: string) => {
  const leases = await prisma.lease.findMany({
    where: {
      deletedAt: null,
      unit: {
        complex: {
          assignments: {
            some: { staffId },
          },
        },
      },
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

/**
 * Terminates a lease by setting its status to TERMINATED and marking it as deleted.
 */
export const terminateLease = async (leaseId: string, staffId: string) => {
  // Use findFirst with a nested condition to check for permissions before updating
  const leaseToTerminate = await prisma.lease.findFirst({
    where: {
      id: leaseId,
      unit: {
        complex: {
          assignments: {
            some: { staffId },
          },
        },
      },
    },
  })

  if (!leaseToTerminate) {
    throw new AppError(
      'Lease not found or you do not have permission to modify it',
      404,
    )
  }

  if (leaseToTerminate.status === 'TERMINATED') {
    throw new AppError('Lease has already been terminated.', 400)
  }

  const terminatedLease = await prisma.lease.update({
    where: { id: leaseId },
    data: {
      status: 'TERMINATED',
      deletedAt: new Date(),
    },
  })

  return terminatedLease
}

/**
 * A generic function to count leases based on a dynamic where clause.
 */
export async function countLeases(where: Prisma.LeaseWhereInput = {}) {
  return prisma.lease.count({
    where,
  })
}
