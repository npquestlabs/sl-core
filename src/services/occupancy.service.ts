import { z } from 'zod'
import { prisma } from '../configs/prisma'
import { AppError } from '../util/error'
import { CreateLeaseSchema, EditLeaseSchema, RenewLeaseSchema } from '../schemas/lease.schema'
import { LeaseExtensionType, Prisma } from '../../generated/prisma'
import { generateSerial } from '@/util'
import { PaginationSchema } from '@/schemas/extras.schema'

// don't edit this one
export const createOccupancy = async (
  staffId: string,
  input: z.infer<typeof CreateLeaseSchema>,
) => {
  const { unitId, tenantId, templateId, ...leaseTimeline } = input

  const newLease = await prisma.$transaction(async (tx) => {
    // 1. Fetch all necessary records and perform validation
    const unit = await tx.unit.findFirst({
      where: { id: unitId, complex: { assignments: { some: { staffId } } } },
      include: { complex: true },
    })
    if (!unit) {
      throw new AppError('Unit not found or you do not have permission', 404)
    }

    if (!unit.rentAmount) {
      throw new AppError('rentAmount not set for this unit')
    }
    if (!unit.rentCurrency) {
      throw new AppError('rentCurrency not set for this unit')
    }
    if (!unit.rentDuration) {
      throw new AppError('rentDuration not set for this unit')
    }

    const tenant = await tx.tenant.findUnique({ where: { id: tenantId } })
    if (!tenant) throw new AppError('Tenant not found', 404)

    const template = await tx.leaseTemplate.findUnique({
      where: { id: templateId },
    })
    if (!template) throw new AppError('Lease template not found', 404)

    // 2. Check for overlapping occupancies (the new source of truth for availability)
    const existingOccupancy = await tx.occupancy.findFirst({
      where: {
        unitId,
        tenantId,
      },
    })

    if (existingOccupancy) {
      throw new AppError('An existing aggreement should be renewed', 409)
    }

    // 3. Create the new Lease record
    const leaseData = {
      serial: generateSerial(),
      propertyName: `${unit.complex.name} ${unit.type} ${unit.label}`,
      tenantName: `${tenant.firstName} ${tenant.lastName}`,
      // Core lease terms
      ...leaseTimeline,
      // Copy signer details from the template
      signedBy: template.signedBy,
      signerRole: template.signerRole,
      signature: template.signature,
      signerIdType: template.signerIdType,
      signerIdNumber: template.signerIdNumber,
      // Copy the unit details
      rentAmount: unit.rentAmount,
      rentCurrency: unit.rentCurrency,
      rentDuration: unit.rentDuration,
    }

    const lease = await tx.lease.create({
      data: {
        ...leaseData,
        currentOccupancy: {
          create: {
            unitId,
            tenantId,
          },
        },
      },
      include: {
        currentOccupancy: true,
      },
    })

    return lease
  })

  // Fetch the created lease with details for the response
  return getLeaseDetails(newLease.id)
}

export const editLease = async (
  staffId: string,
  leaseId: string,
  input: z.infer<typeof EditLeaseSchema>,
) => {
  const correctedLease = await prisma.$transaction(async (tx) => {
    const oldLease = await tx.lease.findFirst({
      where: {
        id: leaseId,
        currentOccupancy: {
          unit: { complex: { assignments: { some: { staffId } } } },
        },
      },
      include: {
        currentOccupancy: true,
      },
    });

    if (!oldLease || !oldLease.currentOccupancy) {
      throw new AppError(
        'Lease not found, is not active, or you do not have permission to edit it.',
        404,
      );
    }
    const occupancyId = oldLease.currentOccupancy.id;

    // 3. Create a new lease containing the corrected details.
    const newLease = await tx.lease.create({
      data: {
        serial: generateSerial(),
        propertyName: oldLease.propertyName,
        tenantName: oldLease.tenantName,
        startsAt: input.startsAt ?? oldLease.startsAt,
        endsAt: input.endsAt ?? oldLease.endsAt,
        rentAmount: input.rentAmount ?? oldLease.rentAmount,
        rentDuration: input.rentDuration ?? oldLease.rentDuration,
        rentCurrency: input.rentCurrency ?? oldLease.rentCurrency,
        rentQuotas: input.rentQuotas ?? oldLease.rentQuotas,
        noticePeriod: input.noticePeriod ?? oldLease.noticePeriod,
        terms: input.terms ?? oldLease.terms,
        signedBy: oldLease.signedBy,
        signerRole: oldLease.signerRole,
      },
    });

    await tx.occupancy.update({
      where: { id: occupancyId },
      data: {
        currentLeaseId: newLease.id,
        previousLeaseId: oldLease.id,
        leaseExtensionType: LeaseExtensionType.EDIT, // Set the type to EDIT
      },
    });

    return newLease;
  });

  return getLeaseDetails(correctedLease.id);
};

export const renewOccupancy = async ({ staffId, complexId, unitId }: { staffId: string, complexId: string, unitId: string },
  input: z.infer<typeof RenewLeaseSchema>,
) => {
  const { occupancyId, newStartsAt, newEndsAt, ...leaseOverrides } = input

  const renewedLease = await prisma.$transaction(async (tx) => {
    // 1. Fetch the occupancy to renew, including all related data for validation
    const occupancyToRenew = await tx.occupancy.findFirst({
      where: {
        id: occupancyId,
        unitId,
        unit: { complexId, complex: { assignments: { some: { staffId } } } },
      },
      include: {
        currentLease: true,
        unit: { include: { complex: true } },
        tenant: true,
      },
    })
    if (!occupancyToRenew) {
      throw new AppError(
        'Occupancy not found or you do not have permission',
        404,
      )
    }
    if (!occupancyToRenew.currentLease) {
      throw new AppError('Cannot renew an occupancy with no active lease', 400)
    }
    const oldLease = occupancyToRenew.currentLease

    // 2. Create the new Lease for the renewal period
    const newLease = await tx.lease.create({
      data: {
        serial: generateSerial(),
        propertyName: oldLease.propertyName,
        tenantName: oldLease.tenantName,
        startsAt: newStartsAt,
        endsAt: newEndsAt,
        // Use overrides from input, or fall back to the old lease's details
        rentAmount: leaseOverrides.rentAmount ?? oldLease.rentAmount,
        rentDuration: leaseOverrides.rentDuration ?? oldLease.rentDuration,
        rentCurrency: leaseOverrides.rentCurrency ?? oldLease.rentCurrency,
        rentQuotas: leaseOverrides.rentQuotas ?? oldLease.rentQuotas,
        noticePeriod: leaseOverrides.noticePeriod ?? oldLease.noticePeriod,
        terms: leaseOverrides.terms ?? oldLease.terms,
        signedBy: oldLease.signedBy,
        signerRole: oldLease.signerRole,
      },
    })

    // 3. Update the occupancy: the new lease becomes current, the old one becomes previous
    await tx.occupancy.update({
      where: { id: occupancyId },
      data: {
        currentLeaseId: newLease.id,
        previousLeaseId: oldLease.id,
        leaseExtensionType: LeaseExtensionType.RENEWAL,
      },
    })

    return newLease
  })

  return getLeaseDetails(renewedLease.id)
}

/**
 * REFACTORED: Retrieves full lease details via its occupancy relationship.
 */
export const getLeaseDetails = async (leaseId: string) => {
  const lease = await prisma.lease.findUnique({
    where: { id: leaseId },
    include: {
      // The path to related data is now through the occupancy record
      currentOccupancy: {
        include: {
          unit: { include: { complex: true } },
          tenant: { include: { user: true } },
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
 * REFACTORED: Lists leases by querying through the occupancy relationship.
 */
export const listLeasesForStaff = async (staffId: string,
  pagination: z.infer<typeof PaginationSchema>) => {
    
  const { page, limit } = pagination
  const leases = await prisma.lease.findMany({
    where: {
      deletedAt: null,
      // The relational path to staff must go through occupancy -> unit -> complex
      currentOccupancy: {
        unit: {
          complex: {
            assignments: {
              some: { staffId },
            },
          },
        },
      },
    },
    include: {
      currentOccupancy: {
        include: {
          unit: { include: { complex: true } },
          tenant: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: limit,
      skip: (page - 1) * limit,
  })

  return leases
}

/**
 * A generic function to count leases based on a dynamic where clause. No changes needed.
 */
export async function countLeases(where: Prisma.LeaseWhereInput = {}) {
  return prisma.lease.count({
    where,
  })
}
