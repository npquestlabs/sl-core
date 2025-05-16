import { prisma } from '../configs/prisma';
import { AppError } from '../util/error';
import { 
  CreateMaintenanceRequestSchema,
  UpdateMaintenanceRequestSchema,
  VendorResponseSchema,
  CompleteMaintenanceSchema
} from '../schemas/maintenance.schema';
import { MaintenanceStatus, InvoiceStatus } from '../../generated/prisma';

// Type for createMaintenanceRequest input
type CreateRequestInput = {
  unitId: string;
  tenantId?: string;
  description: string;
  photoUrl?: string;
  scheduledFor?: Date;
};

// Type for listMaintenanceRequests filter
type ListRequestsFilter = {
  userId: string;
  landlordId?: string;
  tenantId?: string;
  vendorId?: string;
  status?: string;
  unitId?: string;
};

export const createMaintenanceRequest = async (input: CreateRequestInput) => {
  const { unitId, tenantId, description, photoUrl, scheduledFor } = input;

  // Verify unit exists
  const unit = await prisma.unit.findUnique({
    where: { id: unitId },
    include: { complex: true }
  });
  
  if (!unit) {
    throw new AppError('Unit not found', 404);
  }

  // If tenantId is provided, verify it exists
  if (tenantId) {
    const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
    if (!tenant) {
      throw new AppError('Tenant not found', 404);
    }
  }

  const request = await prisma.maintenanceRequest.create({
    data: {
      unitId,
      tenantId: tenantId || null,
      description,
      photoUrl: photoUrl || null,
      scheduledFor: scheduledFor || null,
      status: 'PENDING'
    },
    include: {
      unit: true,
      tenant: { include: { user: true } },
      vendor: { include: { user: true } }
    }
  });

  return request;
};

export const listMaintenanceRequests = async (filter: ListRequestsFilter) => {
  const { userId, landlordId, tenantId, vendorId, status, unitId } = filter;

  // Base where clause
  const where: any = { deletedAt: null };

  // Add status filter if provided
  if (status) {
    where.status = status;
  }

  // Add unit filter if provided
  if (unitId) {
    where.unitId = unitId;
  }

  // Filter based on user role
  if (landlordId) {
    // Landlord can see requests for all their units
    const complexes = await prisma.complex.findMany({
      where: { landlordId },
      select: { id: true }
    });
    where.unitId = { in: complexes.map(c => c.id) };
  } else if (tenantId) {
    // Tenant can only see their own requests
    where.tenantId = tenantId;
  } else if (vendorId) {
    // Vendor can only see requests assigned to them
    where.vendorId = vendorId;
  } else {
    // Regular user - only their own requests
    where.OR = [
      { tenant: { userId } },
      { unit: { complex: { landlord: { userId } } }}
    ];
  }

  const requests = await prisma.maintenanceRequest.findMany({
    where,
    include: {
      unit: { include: { complex: true } },
      tenant: { include: { user: true } },
      vendor: { include: { user: true } }
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return requests;
};

export const updateMaintenanceRequest = async (
  requestId: string,
  userId: string,
  input: UpdateMaintenanceRequestSchema
) => {
  // Verify request exists and user has permission
  const request = await prisma.maintenanceRequest.findUnique({
    where: { id: requestId },
    include: {
      tenant: { include: { user: true } },
      unit: { include: { complex: { include: { landlord: { include: { user: true } } } } } }
    }
  });

  if (!request) {
    throw new AppError('Maintenance request not found', 404);
  }

  // Check permissions
  const isTenant = request.tenant?.userId === userId;
  const isLandlord = request.unit.complex.landlord.userId === userId;

  if (!isTenant && !isLandlord) {
    throw new AppError('Unauthorized to update this request', 403);
  }

  const updatedRequest = await prisma.maintenanceRequest.update({
    where: { id: requestId },
    data: {
      description: input.description,
      photoUrl: input.photoUrl,
      status: input.status,
      // Only landlord can assign vendor
      ...(isLandlord && input.vendorId ? { vendorId: input.vendorId } : {}),
      ...(input.scheduledFor ? { scheduledFor: input.scheduledFor } : {}),
      ...(input.completedAt ? { completedAt: input.completedAt } : {})
    },
    include: {
      unit: true,
      tenant: { include: { user: true } },
      vendor: { include: { user: true } }
    }
  });

  return updatedRequest;
};

export const submitVendorResponse = async (
  requestId: string,
  vendorId: string,
  input: VendorResponseSchema
) => {
  // Verify request exists and is assigned to this vendor
  const request = await prisma.maintenanceRequest.findUnique({
    where: { id: requestId }
  });

  if (!request) {
    throw new AppError('Maintenance request not found', 404);
  }

  if (request.vendorId !== vendorId) {
    throw new AppError('This request is not assigned to you', 403);
  }

  const updatedRequest = await prisma.maintenanceRequest.update({
    where: { id: requestId },
    data: {
      vendorResponse: input.vendorResponse,
      scheduledFor: input.scheduledFor,
      cost: input.cost,
      costCurrency: 'GHS',
      status: 'SCHEDULED'
    },
    include: {
      unit: true,
      tenant: { include: { user: true } },
      vendor: { include: { user: true } }
    }
  });

  return updatedRequest;
};

export const completeMaintenanceRequest = async (
  requestId: string,
  vendorId: string,
  input: CompleteMaintenanceSchema
) => {
  // Verify request exists and is assigned to this vendor
  const request = await prisma.maintenanceRequest.findUnique({
    where: { id: requestId }
  });

  if (!request) {
    throw new AppError('Maintenance request not found', 404);
  }

  if (request.vendorId !== vendorId) {
    throw new AppError('This request is not assigned to you', 403);
  }

  const updatedRequest = await prisma.maintenanceRequest.update({
    where: { id: requestId },
    data: {
      completedAt: input.completedAt,
      cost: input.cost,
      receiptUrl: input.receiptUrl || null,
      status: 'COMPLETED',
      paymentStatus: input.receiptUrl ? 'PAID' : 'PENDING'
    },
    include: {
      unit: true,
      tenant: { include: { user: true } },
      vendor: { include: { user: true } }
    }
  });

  return updatedRequest;
};