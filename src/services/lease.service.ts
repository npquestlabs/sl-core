import { prisma } from '../configs/prisma';
import { generateLeasePDF, generateRentCardPDF } from '../util/pdfGenerator';

interface CreateLeaseInput {
  unitId: string;
  tenantId: string;
  startedAt: string;
  endsAt: string;
  advanceMonths: number;
  rules?: string;
}

interface RenewLeaseInput {
  startedAt: string;
  endsAt: string;
  advanceMonths: number;
  rules?: string;
}

class LeaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LeaseError';
  }
}

// Create a new lease
export const createLease = async (landlordId: string, input: CreateLeaseInput) => {
  const { unitId, tenantId, startedAt, endsAt, advanceMonths, rules } = input;

  const unit = await prisma.unit.findUnique({
    where: { id: unitId },
    include: { complex: { include: { landlord: true } } },
  });
  if (!unit) {
    throw new LeaseError('Unit not found');
  }
  if (unit.complex.landlordId !== landlordId) {
    throw new LeaseError('Unit does not belong to this landlord');
  }

  // Validate tenant exists
  const tenant = await prisma.tenant.findUnique({ 
    where: { id: tenantId }, 
    include: { user: true } 
  });
  if (!tenant) {
    throw new LeaseError('Tenant not found');
  }


  const rentAmount = 180.00; 
 
  const landlord = await prisma.landlord.findUnique({
    where: { id: landlordId },
    include: { user: true },
  });
  if (!landlord) {
    throw new LeaseError('Landlord not found');
  }

  const leaseData = {
    id: '', 
    landlord: {
      id: landlord.id,
      name: `${landlord.user?.firstName} ${landlord.user?.lastName}`,
      email: landlord.user?.email || '',
      phone: landlord.user?.phone || '',
    },
    tenant: {
      id: tenant.id,
      name: `${tenant.user?.firstName} ${tenant.user?.lastName}`,
      email: tenant.user?.email || '',
      phone: tenant.user?.phone || '',
    },
    unit: {
      id: unit.id,
      label: unit.label,
      type: unit.type || '',
    },
    startedAt: new Date(startedAt),
    endsAt: new Date(endsAt),
    advanceMonths,
    rules,
  };

  // Create lease record (without URLs first)
  const lease = await prisma.lease.create({
    data: {
      unitId,
      tenantId,
      landlordId,
      startedAt: new Date(startedAt),
      endsAt: new Date(endsAt),
      rentAmount,
      currency: 'GHS',
      advanceMonths,
      rules,
      status: 'ACTIVE',
      noticePeriod: 30,
    },
  });

  // Update leaseData with the real ID
  leaseData.id = lease.id;

  const documentUrl = await generateLeasePDF(leaseData);
  const rentCardUrl = await generateRentCardPDF(leaseData);

  // Update lease with Cloudinary URLs
  const updatedLease = await prisma.lease.update({
    where: { id: lease.id },
    data: { documentUrl, rentCardUrl },
    include: { unit: true, tenant: { include: { user: true } } },
  });

  return updatedLease;
};

// Renew an existing lease
export const renewLease = async (leaseId: string, landlordId: string, input: RenewLeaseInput) => {
  const { startedAt, endsAt, advanceMonths, rules } = input;

  // Validate lease exists and belongs to the landlord
  const existingLease = await prisma.lease.findUnique({
    where: { id: leaseId },
    include: { unit: { include: { complex: true } }, tenant: { include: { user: true } } },
  });
  if (!existingLease) {
    throw new LeaseError('Lease not found');
  }
  if (existingLease.landlordId !== landlordId) {
    throw new LeaseError('Lease does not belong to this landlord');
  }

  // Fetch landlord details
  const landlord = await prisma.landlord.findUnique({
    where: { id: landlordId },
    include: { user: true },
  });
  if (!landlord) {
    throw new LeaseError('Landlord not found');
  }

  // Construct new lease data for PDF
  const leaseData = {
    id: '', // Will be set after creation
    landlord: {
      id: landlord.id,
      name: `${landlord.user?.firstName} ${landlord.user?.lastName}`,
      email: landlord.user?.email || '',
      phone: landlord.user?.phone || '',
    },
    tenant: {
      id: existingLease.tenant.id,
      name: `${existingLease.tenant.user?.firstName} ${existingLease.tenant.user?.lastName}`,
      email: existingLease.tenant.user?.email || '',
      phone: existingLease.tenant.user?.phone || '',
    },
    unit: {
      id: existingLease.unit.id,
      label: existingLease.unit.label,
      type: existingLease.unit.type || '',
    },
    startedAt: new Date(startedAt),
    endsAt: new Date(endsAt),
    advanceMonths,
    rules,
  };

  // Create new lease as a renewal
  const newLease = await prisma.lease.create({
    data: {
      unitId: existingLease.unitId,
      tenantId: existingLease.tenantId,
      landlordId,
      startedAt: new Date(startedAt),
      endsAt: new Date(endsAt),
      rentAmount: existingLease.rentAmount, // Carry over the rent amount
      currency: 'GHS',
      advanceMonths,
      rules,
      status: 'ACTIVE',
      noticePeriod: existingLease.noticePeriod,
      parentLeaseId: leaseId,
    },
  });

  // Update leaseData with the real ID
  leaseData.id = newLease.id;

  // Generate PDFs
  const documentUrl = await generateLeasePDF(leaseData);
  const rentCardUrl = await generateRentCardPDF(leaseData);

  // Update new lease with Cloudinary URLs
  const updatedLease = await prisma.lease.update({
    where: { id: newLease.id },
    data: { documentUrl, rentCardUrl },
    include: { unit: true, tenant: { include: { user: true } } },
  });

  // Mark the original lease as renewed
  await prisma.lease.update({
    where: { id: leaseId },
    data: { status: 'RENEWED' },
  });

  return updatedLease;
};

// List leases for a landlord
export const listLeases = async (landlordId: string) => {
  const leases = await prisma.lease.findMany({
    where: { landlordId, deletedAt: null },
    include: {
      unit: { include: { complex: true } },
      tenant: { include: { user: true } },
    },
  });

  return leases;
};

// Terminate a lease
export const terminateLease = async (leaseId: string, landlordId: string) => {
  // Validate lease exists and belongs to the landlord
  const lease = await prisma.lease.findUnique({
    where: { id: leaseId },
    include: { unit: { include: { complex: true } } },
  });
  if (!lease) {
    throw new LeaseError('Lease not found');
  }
  if (lease.landlordId !== landlordId) {
    throw new LeaseError('Lease does not belong to this landlord');
  }

  // Update lease status to terminated
  const updatedLease = await prisma.lease.update({
    where: { id: leaseId },
    data: { status: 'TERMINATED', deletedAt: new Date() },
    include: { unit: true, tenant: { include: { user: true } } },
  });

  return updatedLease;
};