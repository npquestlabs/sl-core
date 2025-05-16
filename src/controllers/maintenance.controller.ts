import { Request, Response } from 'express';
import { prisma } from '../configs/prisma';
import { AppError } from '../util/error';
import { 
  CreateMaintenanceRequestSchema, 
  UpdateMaintenanceRequestSchema,
  VendorResponseSchema,
  CompleteMaintenanceSchema
} from '../schemas/maintenance.schema';
import {
  createMaintenanceRequest,
  listMaintenanceRequests,
  updateMaintenanceRequest,
  submitVendorResponse,
  completeMaintenanceRequest
} from '../services/maintenance.service';

export const createMaintenanceRequestController = async (req: Request, res: Response) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Currently allowing landlords to create requests (as per task document)
  if (!user.landlord && !user.tenant) {
    throw new AppError('User is not authorized to create maintenance requests', 403);
  }

  const input = CreateMaintenanceRequestSchema.parse(req.body);
  
  // If tenant is creating, ensure they're creating for their own unit
  const tenantId = user.tenant?.id;
  const request = await createMaintenanceRequest({
    ...input,
    tenantId: tenantId || input.tenantId // Use logged-in tenant if available
  });

  return res.status(201).json({
    success: true,
    data: request,
  });
};

export const listMaintenanceRequestsController = async (req: Request, res: Response) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Get query params for filtering
  const { status, unitId } = req.query;

  const requests = await listMaintenanceRequests({
    userId: user.id,
    landlordId: user.landlord?.id,
    tenantId: user.tenant?.id,
    vendorId: user.vendor?.id,
    status: status as string | undefined,
    unitId: unitId as string | undefined
  });

  return res.status(200).json({
    success: true,
    data: requests,
  });
};

export const updateMaintenanceRequestController = async (req: Request, res: Response) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const requestId = req.params.id;
  const input = UpdateMaintenanceRequestSchema.parse(req.body);

  const updatedRequest = await updateMaintenanceRequest(requestId, user.id, input);

  return res.status(200).json({
    success: true,
    data: updatedRequest,
  });
};

export const submitVendorResponseController = async (req: Request, res: Response) => {
  const user = req.user;
  if (!user || !user.vendor) {
    return res.status(401).json({ error: 'Unauthorized - Vendor access only' });
  }

  const requestId = req.params.id;
  const input = VendorResponseSchema.parse(req.body);

  const updatedRequest = await submitVendorResponse(requestId, user.vendor.id, input);

  return res.status(200).json({
    success: true,
    data: updatedRequest,
  });
};

export const completeMaintenanceRequestController = async (req: Request, res: Response) => {
  const user = req.user;
  if (!user || !user.vendor) {
    return res.status(401).json({ error: 'Unauthorized - Vendor access only' });
  }

  const requestId = req.params.id;
  const input = CompleteMaintenanceSchema.parse(req.body);

  const completedRequest = await completeMaintenanceRequest(requestId, user.vendor.id, input);

  return res.status(200).json({
    success: true,
    data: completedRequest,
  });
};