import { prisma } from '../configs/prisma'
import z from 'zod'
import { UpdateStaffSchema } from '../schemas/user.schema'
import { LeaseStatus, MaintenanceStatus } from '../../generated/prisma'
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
  const whereClauseForManagedComplexes = {
    complex: {
      assignments: {
        some: { staffId },
      },
    },
    deletedAt: null,
  }

  const [
    totalUnits,
    totalComplexes,
    activeTenants,
    unitsWithExpiredLeases,
    pendingMaintenanceRequests,
  ] = await prisma.$transaction([
    prisma.unit.count({
      where: whereClauseForManagedComplexes,
    }),
    prisma.complex.count({
      where: {
        assignments: {
          some: { staffId },
        },
        deletedAt: null,
      },
    }),
    prisma.lease.count({
      where: {
        status: LeaseStatus.ACTIVE,
        deletedAt: null,
        unit: whereClauseForManagedComplexes,
      },
    }),
    prisma.unit.count({
      where: {
        ...whereClauseForManagedComplexes,
        leases: {
          some: {
            status: LeaseStatus.EXPIRED,
            deletedAt: null,
          },
        },
      },
    }),
    prisma.maintenanceRequest.count({
      where: {
        status: MaintenanceStatus.PENDING,
        deletedAt: null,
        unit: whereClauseForManagedComplexes,
      },
    }),
  ])

  return {
    totalUnits,
    totalComplexes,
    activeTenants,
    unitsWithExpiredLeases,
    pendingMaintenanceRequests,
  }
}
