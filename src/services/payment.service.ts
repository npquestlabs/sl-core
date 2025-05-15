import { prisma } from '../configs/prisma'
import { AppError } from '../util/error'
import { CreatePaymentInput } from '../schemas/payment.schema'
import { generateReceiptPDF } from '../util/pdf'
import { Prisma } from '../../generated/prisma'
import { z } from 'zod'
import { PaginationSchema } from '../schemas/extras.schema'
import { PaginatedResponse } from '../types'

/**
 * Creates a new payment record and triggers receipt generation.
 * @param {string} landlordId - The ID of the authenticated landlord.
 * @param {CreatePaymentInput} input - The validated payment data.
 * @returns {Promise<PaymentWithLeaseAndTenant>} - A promise resolving to the created payment with necessary relations.
 * @throws {AppError} - If the lease is not found/owned, or transaction reference is duplicated.
 * @throws {Error} - Any other unexpected errors.
 */
export const createPayment = async (
    landlordId: string,
    input: CreatePaymentInput,
) => {
    const {
        leaseId,
        amount,
        currency,
        type,
        dueDate,
        paidAt,
        method,
        paymentStatus,
        transactionRef,
        feeAmount,
    } = input

    const lease = await prisma.lease.findUnique({
        where: { id: leaseId },
        select: { landlordId: true },
    })

    if (!lease || lease.landlordId !== landlordId) {
        throw new AppError('Lease not found or access denied', 404)
    }

    try {
        const newPayment = await prisma.payment.create({
            data: {
                leaseId: leaseId,
                amount: amount,
                currency: currency,
                type: type,
                dueDate: new Date(dueDate),
                paidAt: paidAt ? new Date(paidAt) : undefined,
                method: method,
                paymentStatus: paymentStatus,
                transactionRef: transactionRef,
                feeAmount: feeAmount ?? undefined,
            },

            include: {
                lease: {
                    include: {
                        unit: {
                            include: {
                                complex: {
                                    include: {
                                        landlord: {
                                            include: { user: true },
                                        },
                                    },
                                },
                            },
                        },
                        tenant: {
                            include: {
                                user: true,
                            },
                        },
                    },
                },
            },
        })

        generateReceiptPDF(newPayment)
            .then(async (receiptUrl: string | null) => {
                if (receiptUrl) {
                    await prisma.payment.update({
                        where: { id: newPayment.id },
                        data: { receiptUrl: receiptUrl },
                    })
                    // later, send notification to tenant about new payment + receipt
                } else {
                    console.error(
                        `Failed to generate receipt PDF for payment ${newPayment.id}`,
                    )
                    throw new Error('Failed to generate receipt PDF for payment')
                }
            })
            .catch((pdfError) => {
                console.error(
                    `Error generating receipt PDF for payment ${newPayment.id}:`,
                    pdfError,
                )
                throw new Error('Error generating receipt PDF for payment')
            })

        // later trigger other notifications immediately (e.g., landlord confirmation)

        return newPayment
    } catch (error) {
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === 'P2002' &&
            error.meta?.target === 'Payment_transactionRef_key'
        ) {
            throw new AppError('Transaction reference already exists', 409)
        }

        console.error('Error creating payment:', error)
        throw new AppError('Failed to record payment', 500)
    }
}

export const getPayments = async (
    where: Prisma.PaymentWhereInput,
    include: Prisma.PaymentInclude = {},
    pagination: z.infer<typeof PaginationSchema>,
): Promise<PaginatedResponse<Prisma.PaymentGetPayload<{ include: typeof include }>> | null> => {
    const { page, limit, order } = pagination

    //TODO: design filter logic for use with dates, or other fields

    const query_args: Prisma.PaymentFindManyArgs = {
        where: {
            ...where,
            deletedAt: null,
        },
        include,
        skip: (page - 1) * limit,
        take: limit,
    }

    if (order) {
        query_args.orderBy = order
    }

    const [payments, total] = await Promise.all([
        prisma.payment.findMany(query_args),
        prisma.payment.count({ where: query_args.where }),
    ])

    if (!payments) {
        return null
    }

    const result = {
        data: payments,
        meta: {
            total: total,
            page: page,
            limit: limit,
        },
    } as PaginatedResponse<Prisma.PaymentGetPayload<{ include: typeof include }>>

    return result
}

export const getPayment = async (where: Prisma.PaymentWhereUniqueInput,
    include: Prisma.PaymentInclude = {}) => {
    const payment = await prisma.payment.findUnique({
        where,
        include
    })

    return payment ?? null
}
