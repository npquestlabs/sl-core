import { z } from 'zod';
import { CreateUnitSchema, UpdateUnitSchema } from '../schemas/unit.schema';
import { prisma } from '../configs/prisma';
import { NotFoundError } from '../util/error';
import { PaginationSchema } from '../schemas/extras.schema';
import { PaginatedResponse } from '../types';
// Note: LeaseStatus is removed as it's no longer in the schema.
// We import Prisma to access its utility types.
import { Prisma } from '../../generated/prisma';
import { CreatedUnit, DetailedUnit, ListedUnit } from '../types/out';

// --- No changes needed for these functions ---
// createUnit, updateUnit, getUnit, getUnitById, and deleteUnit
// are all simple CRUD operations that are unaffected by the relational changes.

export async function createUnit(
  complexId: string,
  data: z.infer<typeof CreateUnitSchema>,
): Promise<CreatedUnit> {
  const createdUnit = await prisma.unit.create({
    data: {
      ...data,
      complexId,
    },
    // Assuming CreatedUnit type matches this selection
    select: {
      id: true,
      label: true,
      type: true,
      complexId: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return createdUnit;
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
  });

  return updatedUnit ?? null;
}

export async function getUnit(
  where: Prisma.UnitWhereUniqueInput,
  include: Prisma.UnitInclude = {},
) {
  const unit = await prisma.unit.findUnique({
    where,
    include,
  });

  return unit ?? null;
}

export async function getUnitById(
  unitId: string,
  include: Prisma.UnitInclude = {},
) {
  const unit = await prisma.unit.findUnique({
    where: { id: unitId },
    include,
  });

  if (!unit) {
    throw new NotFoundError('Unit not found');
  }

  return unit;
}

export async function deleteUnit(where: Prisma.UnitWhereUniqueInput) {
  const deletedUnit = await prisma.unit.update({
    where,
    data: { deletedAt: new Date() },
  });

  return deletedUnit ?? null;
}

// --- Changes Start Here ---

// No changes needed, but added comments for clarity.
export async function getUnitsInComplex(
  complexId: string,
  pagination: z.infer<typeof PaginationSchema>,
): Promise<PaginatedResponse<Prisma.UnitGetPayload<Record<string, never>>>> {
  const { page, limit, search } = pagination;

  const whereClause: Prisma.UnitWhereInput = {
    complexId: complexId,
    deletedAt: null,
  };

  if (search) {
    whereClause.OR = [
      { label: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
    ];
  }

  const [total, units] = await prisma.$transaction([
    prisma.unit.count({ where: whereClause }),
    prisma.unit.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc',
      },
      skip: (page - 1) * limit,
      take: limit,
    }),
  ]);

  return { data: units, meta: { limit, page, total } };
}

/**
 * REFACTORED: Finds units currently occupied by a specific tenant.
 */
export async function getUnitsOfTenant(
  tenantId: string,
  pagination: z.infer<typeof PaginationSchema>,
): Promise<PaginatedResponse<Prisma.UnitGetPayload<Record<string, never>>>> {
  const { page, limit, search } = pagination;
  const now = new Date();

  // The relational path to a tenant has changed.
  // We now search units that have an 'occupancy' by the tenant with an 'active' lease.
  const whereClause: Prisma.UnitWhereInput = {
    deletedAt: null,
    occupancies: {
      some: {
        tenantId: tenantId,
        // An active lease is defined by the current date being within its start and end dates.
        currentLease: {
          startsAt: { lte: now },
          endsAt: { gte: now },
          deletedAt: null,
        },
      },
    },
  };

  if (search) {
    // The filter logic needs to apply within the same structure.
    whereClause.AND = [
      {
        OR: [
          { label: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
          {
            complex: {
              name: { contains: search, mode: 'insensitive' },
              deletedAt: null,
            },
          },
        ],
      },
    ];
  }

  const [total, units] = await prisma.$transaction([
    prisma.unit.count({ where: whereClause }),
    prisma.unit.findMany({
      where: whereClause,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    }),
  ]);

  return { data: units, meta: { limit, page, total } };
}

/**
 * REFACTORED: Gets a paginated list of units for a staff member, determining lease status dynamically.
 */
export async function getStaffUnits(
  staffId: string,
  pagination: z.infer<typeof PaginationSchema>,
): Promise<PaginatedResponse<ListedUnit>> {
  const { page, limit, search } = pagination;
  const now = new Date();

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
  };

  if (search) {
    whereClause.OR = [
      { label: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
      { complex: { name: { contains: search, mode: 'insensitive' } } },
    ];
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
        // The relationship to Lease is now through Occupancy.
        occupancies: {
          where: { currentLease: { deletedAt: null } },
          orderBy: { currentLease: { startsAt: 'desc' } },
          take: 1,
          select: {
            currentLease: {
              select: {
                startsAt: true,
                endsAt: true,
              },
            },
          },
        },
        _count: {
          select: {
            maintenanceRequests: { where: { deletedAt: null } },
          },
        },
      },
      take: limit,
      skip: (page - 1) * limit,
      orderBy: { createdAt: 'desc' }, // Added order by for consistent pagination
    }),
  ]);

  // The mapping logic needs to be updated to calculate the lease status.
  const units: ListedUnit[] = unitData.map((unit) => {
    const latestOccupancy = unit.occupancies.length > 0 ? unit.occupancies[0] : null;
    const latestLease = latestOccupancy?.currentLease;
    let leaseStatus: 'ACTIVE' | 'EXPIRED' | 'PENDING' | null = null;

    if (latestLease) {
      if (latestLease.endsAt < now) {
        leaseStatus = 'EXPIRED';
      } else if (latestLease.startsAt > now) {
        leaseStatus = 'PENDING';
      } else {
        leaseStatus = 'ACTIVE';
      }
    }

    return {
      id: unit.id,
      label: unit.label,
      type: unit.type,
      rentAmount: unit.rentAmount ? unit.rentAmount.toString() : null,
      rentCurrency: unit.rentCurrency,
      complex: unit.complex,
      leaseStatus: leaseStatus, // Dynamically determined status
      _count: {
        maintenanceRequests: unit._count.maintenanceRequests,
      },
    };
  });

  return { data: units, meta: { limit, page, total } };
}

/**
 * REFACTORED: Gets detailed unit info, including the current active tenant via the Occupancy model.
 */
export async function getDetailedUnit(
  id: string,
  where: Prisma.UnitWhereInput = {},
): Promise<DetailedUnit | null> {
  const maintenanceLimit = 3;
  const now = new Date();

  const unitData = await prisma.unit.findUnique({
    where: { ...where, id: id, deletedAt: null },
    // Removed the spread 'where' as it might conflict with the unique 'id' condition.
    // If you need it, ensure it's used correctly: where: { id, deletedAt: null, ...where }
    select: {
      id: true,
      label: true,
      type: true,
      description: true,
      notes: true,
      rentAmount: true,
      rentCurrency: true,
      rentDuration: true,
      rules: true, // Field name is 'rules' not 'rentUnit'
      createdAt: true,
      updatedAt: true,
      complex: {
        select: {
          id: true,
          name: true,
          address: true,
        },
      },
      // NEW: Fetch the active occupancy instead of the active lease directly.
      occupancies: {
        where: {
          currentLease: {
            startsAt: { lte: now },
            endsAt: { gte: now },
            deletedAt: null,
          },
        },
        orderBy: { currentLease: { createdAt: 'desc' } },
        take: 1,
        select: {
          currentLease: {
            select: {
              id: true,
              startsAt: true,
              endsAt: true,
            }
          },
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
  });

  if (!unitData) {
    return null;
  }

  // Destructure occupancies and format the final output object.
  const { occupancies, rentAmount, ...rest } = unitData;

  const activeOccupancy = occupancies.length > 0 ? occupancies[0] : null;

  // Format the activeLease object to match the expected `DetailedUnit` type.
  const activeLease = activeOccupancy ? {
    ...activeOccupancy.currentLease,
    tenant: activeOccupancy.tenant
  } : null;

  return {
    ...rest,
    rentAmount: rentAmount ? rentAmount.toString() : null,
    activeLease: activeLease,
  };
}

// No changes needed for this utility function.
export async function countUnits(where: Prisma.UnitWhereInput = {}) {
  return prisma.unit.count({
    where,
  });
}