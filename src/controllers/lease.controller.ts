import { Request, Response } from 'express';
import { prisma } from '../configs/prisma';
import { AppError } from '../util/error';
import { CreateLeaseSchema, RenewLeaseSchema } from '../schemas/lease.schema';
import { 
  createLease, 
  renewLease, 
  listLeases, 
  terminateLease,
  getLeaseDetailsForPdf
} from '../services/lease.service';
import { LeaseStatus } from '../../generated/prisma';
import { generateLeasePDF, generateRentCardPDF } from '../util/pdfGenerator';

export const createLeaseController = async (req: Request, res: Response) => {
  try {
    const landlordId = req.user.id; // Assuming user is attached by auth middleware
    const input = CreateLeaseSchema.parse(req.body);

    const lease = await createLease(landlordId, input);

    return res.status(201).json({
      status: 'success',
      data: lease,
    });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.error('Error creating lease:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

export const renewLeaseController = async (req: Request, res: Response) => {
  try {
    const landlordId = req.user.id;
    const leaseId = req.params.leaseId;
    const input = RenewLeaseSchema.parse(req.body);

    const lease = await renewLease(leaseId, landlordId, input);

    return res.status(200).json({
      status: 'success',
      data: lease,
    });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.error('Error renewing lease:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

export const listLeasesController = async (req: Request, res: Response) => {
  try {
    const landlordId = req.user.id;
    const status = req.query.status as LeaseStatus | undefined;

    let whereClause: any = {
      landlordId,
      deletedAt: null,
    };

    if (status) {
      whereClause.status = status;
    }

    const leases = await listLeases(landlordId);

    return res.status(200).json({
      status: 'success',
      data: leases,
    });
  } catch (error) {
    console.error('Error listing leases:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

export const terminateLeaseController = async (req: Request, res: Response) => {
  try {
    const landlordId = req.user.id;
    const leaseId = req.params.leaseId;

    const lease = await terminateLease(leaseId, landlordId);

    return res.status(200).json({
      status: 'success',
      data: lease,
    });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.error('Error terminating lease:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

export const downloadLeaseDocumentController = async (req: Request, res: Response) => {
  try {
    const leaseId = req.params.leaseId;
    const type = req.query.type as 'lease' | 'rentcard';

    // Verify lease exists and user has permission
    const lease = await prisma.lease.findUnique({
      where: { id: leaseId },
      include: {
        landlord: true,
        tenant: true,
      },
    });

    if (!lease) throw new AppError('Lease not found', 404);
    
    const userId = req.user.id;
    if (lease.landlord.userId !== userId && lease.tenant.userId !== userId) {
      throw new AppError('Unauthorized to access this document', 403);
    }

    const fullLeaseDetails = await getLeaseDetailsForPdf(leaseId);
    const documentUrl = type === 'rentcard' 
      ? await generateRentCardPDF(fullLeaseDetails)
      : await generateLeasePDF(fullLeaseDetails);

    return res.redirect(documentUrl);
    

  } catch (error) {
  }
};


export const getLeaseDetailsController = async (req: Request, res: Response) => {
  try {
    const leaseId = req.params.leaseId;
    const userId = req.user.id;

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
    });

    if (!lease) {
      throw new AppError('Lease not found', 404);
    }

    // Check if user is either landlord or tenant
    if (lease.landlord.userId !== userId && lease.tenant.userId !== userId) {
      throw new AppError('Unauthorized to access this lease', 403);
    }

    return res.status(200).json({
      status: 'success',
      data: lease,
    });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.error('Error fetching lease details:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};