import { Request, Response } from 'express'
import { prisma } from '../configs/prisma'
import { AppError } from '../util/error'
import { CreateLeaseSchema, RenewLeaseSchema } from '../schemas/lease.schema'
import {
  createLease,
  renewLease,
  listLeases,
  terminateLease,
  getLeaseDetailsForPdf,
} from '../services/lease.service'
import { generateLeasePDF, generateRentCardPDF } from '../util/pdfGenerator'

export const createLeaseController = async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord) {
    throw new AppError('User is not a landlord', 403)
  }

  const input = CreateLeaseSchema.parse(req.body)

  const lease = await createLease(user.landlord.id, input)

  return res.status(201).json({
    success: true,
    data: lease,
  })
}

export const renewLeaseController = async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord) {
    throw new AppError('User is not a landlord', 403)
  }
  const leaseId = req.params.leaseId
  const input = RenewLeaseSchema.parse(req.body)

  const lease = await renewLease(leaseId, user.landlord.id, input)

  return res.status(200).json({
    success: true,
    data: lease,
  })
}

export const listLeasesController = async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord) {
    throw new AppError('User is not a landlord', 403)
  }

  const leases = await listLeases(user.landlord.id)

  return res.status(200).json({
    success: true,
    data: leases,
  })
}

export const terminateLeaseController = async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord) {
    throw new AppError('User is not a landlord', 403)
  }
  const leaseId = req.params.leaseId

  const lease = await terminateLease(leaseId, user.landlord.id)

  return res.status(200).json({
    success: true,
    data: lease,
  })
}

export const downloadLeaseDocumentController = async (
  req: Request,
  res: Response,
) => {
  const user = req.user

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord && !user.tenant) {
    throw new AppError('User is not a landlord or tenant', 403)
  }

  const leaseId = req.params.leaseId
  const type = req.query.type as 'lease' | 'rentcard'

  // Verify lease exists and user has permission
  const lease = await prisma.lease.findUnique({
    where: { id: leaseId },
    include: {
      landlord: true,
      tenant: true,
    },
  })

  if (!lease) throw new AppError('Lease not found', 404)

  if (lease.landlord.id !== user.landlord?.id && lease.tenant.id !== user.tenant?.id) {
    throw new AppError('Unauthorized to access this document', 403)
  }

  const fullLeaseDetails = await getLeaseDetailsForPdf(leaseId)
  const documentUrl =
    type === 'rentcard'
      ? await generateRentCardPDF(fullLeaseDetails)
      : await generateLeasePDF(fullLeaseDetails)

  return res.status(200).json({
    success: true,
    url: documentUrl,
  })
}

export const getLeaseDetailsController = async (
  req: Request,
  res: Response,
) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (!user.landlord && !user.tenant) {
    throw new AppError('User is not a landlord or tenant', 403)
  }


  const leaseId = req.params.leaseId

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
    throw new AppError('Lease not found', 404)
  }

  // Check if user is either landlord or tenant
  if (lease.landlord.id !== user.landlord?.id && lease.tenant.id !== user.tenant?.id) {
    throw new AppError('Unauthorized to access this lease', 403)
  }

  return res.status(200).json({
    success: true,
    data: lease,
  })
}
