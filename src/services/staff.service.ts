import { prisma } from '../configs/prisma'
import z from 'zod'
import { UpdateStaffSchema } from '../schemas/user.schema'
import { MaintenanceStatus } from '../../generated/prisma'
import { StaffSummary } from '../types'

export const updateStaff = async (
  id: string,
  data: z.infer<typeof UpdateStaffSchema>,
) => {
  const staff = await prisma.staff.update({
    where: { id },
    data: {
      ...data,
    },
  })

  return staff ?? null
}

export const getStaffWithPopulatedUser = async (id: string) => {
  const staff = await prisma.staff.findUnique({
    where: { id },
    include: {
      user: {
        omit: {
          password: true,
        },
      },
    },
    omit: {
      userId: true,
    },
  })

  return staff ?? null
}

export async function getSummary(staffId: string): Promise<StaffSummary> {
  // Use a single timestamp for all queries in the transaction to ensure consistency
  const now = new Date();

  // This clause can be reused for any model that has a direct relation to a complex
  const managedComplexesWhere = {
    assignments: {
      some: { staffId },
    },
    deletedAt: null,
  };

  // This clause can be reused for any model related to a Unit in a managed complex
  const managedUnitsWhere = {
    complex: managedComplexesWhere,
    deletedAt: null,
  };

  const [
    totalUnits,
    totalComplexes,
    activeTenancies,
    expiredLeasesCount,
    pendingMaintenanceRequests,
  ] = await prisma.$transaction([
    prisma.unit.count({
      where: managedUnitsWhere,
    }),
    prisma.complex.count({
      where: managedComplexesWhere,
    }),
    prisma.occupancy.count({
      where: {
        unit: managedUnitsWhere,
        currentLease: {
          startsAt: { lte: now },
          endsAt: { gte: now },
          deletedAt: null,
        },
      },
    }),
    prisma.lease.count({
      where: {
        endsAt: { lt: now },
        deletedAt: null,
        currentOccupancy: {
          unit: managedUnitsWhere,
        },
      },
    }),
    prisma.maintenanceRequest.count({
      where: {
        status: MaintenanceStatus.PENDING,
        deletedAt: null,
        unit: managedUnitsWhere,
      },
    }),
  ]);

  return {
    totalUnits,
    totalComplexes,
    activeTenancies,
    expiredLeasesCount,
    pendingMaintenanceRequests,
  };
}