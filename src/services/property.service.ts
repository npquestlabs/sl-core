import { PrismaClient, Prisma } from '@prisma/client';
import { prisma } from '../configs/prisma';
import { AppError } from '../util/error'; 


interface FormattedPayment {
    id: string;
    amount: string;
    currency: string;
    type: PrismaClient['payment']['fields']['type']['type'];
    dueDate: Date;
    paidAt: Date | null;
    method: PrismaClient['payment']['fields']['method']['type'];
    paymentStatus: PrismaClient['payment']['fields']['paymentStatus']['type'] | null;
    transactionRef: string | null;
    feeAmount: string | null;
    receiptUrl: string | null;
    createdAt: Date | null;
    lease: {
        id: string;
        rentAmount: string;
        currency: string;
        startedAt: Date;
        endsAt: Date;
        tenant: {
            id: string;
            firstName: string | null;
            lastName: string | null;
            email: string | null;
        };
        unit: {
            id: string;
            label: string;
        };
    };
}

interface GetPaymentsOptions {
    take?: number;
    skip?: number;
    orderBy?: Prisma.Args<typeof prisma.payment, 'findMany'>['orderBy'];
    status?: string;
    leaseId?: string;
}

export const getPaymentsForComplex = async (
    complexId: string,
    landlordId: string,
    options: GetPaymentsOptions = {}
): Promise<FormattedPayment[]> => {

    const complex = await prisma.complex.findUnique({
        where: {
            id: complexId,
            landlordId: landlordId
        },
        select: { id: true }
    });

    if (!complex) {
        throw new AppError('Property not found or access denied', 404);
    }

    const payments = await prisma.payment.findMany({
        where: {
            lease: {
                unit: {
                    complexId: complexId
                },
                 ...(options.leaseId && { leaseId: options.leaseId }),
            },
            ...(options.status && { paymentStatus: options.status as any }),
        },
        include: {
            lease: {
                select: {
                    id: true,
                    rentAmount: true,
                    currency: true,
                    startedAt: true,
                    endsAt: true,
                    tenant: {
                         include: {
                             user: true
                         }
                    },
                    unit: {
                        select: {
                            id: true,
                            label: true
                        }
                    }
                }
            }
        },
        ...(options.take !== undefined && { take: options.take }),
        ...(options.skip !== undefined && { skip: options.skip }),
        orderBy: options.orderBy || { paidAt: 'desc' },
    });

    const formattedPayments: FormattedPayment[] = payments.map(payment => ({
        id: payment.id,
        amount: payment.amount.toString(),
        currency: payment.currency,
        type: payment.type,
        dueDate: payment.dueDate,
        paidAt: payment.paidAt,
        method: payment.method,
        paymentStatus: payment.paymentStatus,
        transactionRef: payment.transactionRef,
        feeAmount: payment.feeAmount?.toString() ?? null,
        receiptUrl: payment.receiptUrl,
        createdAt: payment.createdAt,
        lease: {
            id: payment.lease.id,
            rentAmount: payment.lease.rentAmount.toString(),
            currency: payment.lease.currency,
            startedAt: payment.lease.startedAt,
            endsAt: payment.lease.endsAt,
            tenant: {
                id: payment.lease.tenant.id,
                firstName: payment.lease.tenant.user?.firstName ?? null,
                lastName: payment.lease.tenant.user?.lastName ?? null,
                email: payment.lease.tenant.user?.email ?? null,
            }
            ,
            unit: {
                id: payment.lease.unit.id,
                label: payment.lease.unit.label
            }
        }
    }));

    return formattedPayments;
};