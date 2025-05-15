import { Request, Response } from 'express'
import { AppError } from '../util/error'
import { createPayment, getPayments, getPayment } from '../services/payment.service'
import {
    CreatePaymentInput,
    GetPaymentsQuerySchema,
} from '../schemas/payment.schema'
import { z } from 'zod'
import { Prisma } from '../../generated/prisma'

/**
 * Controller for POST /api/v1/payments
 * Records a new payment for a lease owned by the authenticated landlord.
 * @param {Request} req - Express request object with user info and body.
 * @param {Response} res - Express response object.
 */

export const createPaymentController = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const user = req.user

    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' })
    }
    if (!user.landlord) {
        throw new AppError('User does not have landlord privileges', 403)
    }

    const input = req.body as CreatePaymentInput

    try {
        const newPayment = await createPayment(user.landlord.id, input)

        return res.status(201).json(newPayment)
    } catch (error) {
        console.error('Error in createPaymentController:', error)

        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ error: error.message })
        }

        return res
            .status(500)
            .json({ error: 'An unexpected error occurred while recording payment' })
    }
}

/**
 * Controller for GET /api/v1/properties/:id/payments
 * Lists payments for a property (complex) owned by the authenticated landlord.
 * Uses the augmented Request type from src/@types/express/index.d.ts.
 * @param {Request} req - Express request object with user info (typed by declaration merging).
 * @param {Response} res - Express response object.
 */

export const getComplexPayments = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const user = req.user

    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    if (!user.landlord) {
        return res.status(403).json({ error: 'Permission denied' })
    }

    const { complexId } = req.params
    if (!complexId) {
        return res.status(400).json({ error: 'Invalid params' })
    }

    const whereClause: Prisma.PaymentWhereInput = {
        lease: {
            landlordId: user.landlord.id,
            unit: {
                complexId: complexId,
            },
        },
    }

    const query = req.query as unknown as z.infer<typeof GetPaymentsQuerySchema>

    const { status, leaseId, ...pagination } = query

    if (status) {
        whereClause.paymentStatus = status
    }

    if (leaseId) {
        whereClause.leaseId = leaseId
    }

    const includeArgs: Prisma.PaymentInclude = {
        lease: {
            include: {
                unit: true,
                tenant: true,
            },
        },
    }

    try {
        const payments = await getPayments(whereClause, includeArgs, pagination)

        return res.status(200).json(payments)
    } catch (error) {
        console.error('Error in getPropertyPaymentsController:', error)

        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ error: error.message })
        }

        return res.status(500).json({ error: 'An unexpected error occurred' })
    }
}

export const getUnitPayments = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const user = req.user

    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    const { unitId } = req.params
    if (!unitId) {
        return res.status(400).json({ error: 'Invalid params' })
    }

    const whereClause: Prisma.PaymentWhereInput & {
        lease: Prisma.XOR<Prisma.LeaseScalarRelationFilter, Prisma.LeaseWhereInput>
    } = {
        lease: {
            unitId: unitId,
        },
    }

    if (user.landlord) {
        whereClause.lease.landlordId = user.landlord.id
    } else if (user.tenant) {
        whereClause.lease.tenantId = user.tenant.id
    } else {
        return res.status(403).json({ error: 'Permission denied' })
    }

    const query = req.query as unknown as z.infer<typeof GetPaymentsQuerySchema>

    const { status, leaseId, ...pagination } = query

    if (status) {
        whereClause.paymentStatus = status
    }

    if (leaseId) {
        whereClause.leaseId = leaseId
    }

    const includeArgs: Prisma.PaymentInclude = {
        lease: {
            include: {
                unit: true,
                tenant: true,
            },
        },
    }

    try {
        const payments = await getPayments(whereClause, includeArgs, pagination)

        return res.status(200).json(payments)
    } catch (error) {
        console.error('Error in getUnitPaymentsController:', error)

        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ error: error.message })
        }

        return res.status(500).json({ error: 'An unexpected error occurred' })
    }
}

export const getLeasePayments = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const user = req.user

    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    const { leaseId } = req.params
    if (!leaseId) {
        return res.status(400).json({ error: 'Invalid params' })
    }

    const whereClause: Prisma.PaymentWhereInput & {
        lease: Prisma.XOR<Prisma.LeaseScalarRelationFilter, Prisma.LeaseWhereInput>
    } = {
        lease: {
            id: leaseId,
        },
    }

    if (user.landlord) {
        whereClause.lease.landlordId = user.landlord.id
    } else if (user.tenant) {
        whereClause.lease.tenantId = user.tenant.id
    } else {
        return res.status(403).json({ error: 'Permission denied' })
    }

    const query = req.query as unknown as z.infer<typeof GetPaymentsQuerySchema>

    const { status, ...pagination } = query

    if (status) {
        whereClause.paymentStatus = status
    }

    const includeArgs: Prisma.PaymentInclude = {
        lease: {
            include: {
                unit: true,
                tenant: true,
            },
        },
    }

    try {
        const payments = await getPayments(whereClause, includeArgs, pagination)

        return res.status(200).json(payments)
    } catch (error) {
        console.error('Error in getLeasePaymentsController:', error)

        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ error: error.message })
        }

        return res.status(500).json({ error: 'An unexpected error occurred' })
    }
}

export const getAllPayments = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const user = req.user

    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    if (!user.landlord) {
        return res.status(403).json({ error: 'Permission denied' })
    }

    const whereClause: Prisma.PaymentWhereInput = {
        lease: {
            landlordId: user.landlord.id,
        },
    }

    const includeArgs: Prisma.PaymentInclude = {
        lease: {
            include: {
                unit: true,
                tenant: true,
            },
        },
    }

    const query = req.query as unknown as z.infer<typeof GetPaymentsQuerySchema>

    const { status, leaseId, ...pagination } = query

    if (status) {
        whereClause.paymentStatus = status
    }

    if (leaseId) {
        whereClause.leaseId = leaseId
    }

    const payments = await getPayments(whereClause, includeArgs, pagination);

    if (!payments) {
        return res.status(404).json({ error: 'No payments found' })
    }

    return res.status(200).json(payments)
}


export const getPaymentById = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const user = req.user

    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    const { id } = req.params
    if (!id) {
        return res.status(400).json({ error: 'Invalid params' })
    }

    const accessOrConditions: Prisma.PaymentWhereInput[] = []

    if (user.landlord?.id) {
        accessOrConditions.push({
            lease: {
                landlordId: user.landlord.id,
            },
        })
    }

    if (user.tenant?.id) {
        accessOrConditions.push({
            lease: {
                tenantId: user.tenant.id,
            },
        })
    }

    const whereClause: Prisma.PaymentWhereUniqueInput = {
        id,
        deletedAt: null,
        OR: accessOrConditions,
    }

    const payment = getPayment(whereClause, { lease: { include: { tenant: true, landlord: true } } })

    return res.status(200).json(payment)
}
