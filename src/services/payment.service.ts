import { prisma } from '../configs/prisma';
import { AppError } from '../util/error';
import { CreatePaymentInput } from '../schemas/payment.schema'; 
import { generateReceiptPDF } from '../util/pdf';
import { Decimal } from "decimal.js";

type Payment = {
    id: string;
    leaseId: string;
    amount: Decimal;
    currency: string;
    type: "RENT" | "UTILITIES" | "DEPOSIT" | "PENALTY" | "OTHER";
    dueDate: Date;
    paidAt?: Date;
    method: "CASH" | "CARD" | "BANK_TRANSFER" | "MOBILE_MONEY";
    paymentStatus?: "PENDING" | "COMPLETED" | "FAILED";
    transactionRef?: string;
    feeAmount?: Decimal;
    receiptUrl?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
};

type PaymentWithLeaseAndTenant = Payment & {
    lease: {
        id: string;
        rentAmount: Decimal;
        currency: string;
        startedAt: Date;
        endsAt: Date;
        unit: {
            id: string;
            label: string;
            complex: {
                id: string;
                name: string;
                landlord: {
                    id: string;
                    user: {
                        id: string;
                        firstName: string;
                        lastName: string;
                        email: string;
                    };
                };
            };
        };
        tenant: {
            id: string;
            user: {
                 id: string;
                 firstName: string;
                 lastName: string;
                 email: string;
             } | null;
        };
    };
};


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
    input: CreatePaymentInput
): Promise<PaymentWithLeaseAndTenant> => {

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
    } = input;

    const lease = await prisma.lease.findUnique({
        where: { id: leaseId },
        select: { landlordId: true }
    });

    if (!lease || lease.landlordId !== landlordId) {
        throw new AppError('Lease not found or access denied', 404);
    }

    try {
        const newPayment = await prisma.payment.create({
            data: {
                leaseId: leaseId,
                amount: new Decimal(amount),
                currency: currency,
                type: type,
                dueDate: new Date(dueDate),
                paidAt: paidAt ? new Date(paidAt) : undefined, 
                method: method,
                paymentStatus: paymentStatus,
                transactionRef: transactionRef,
                feeAmount: feeAmount ? new Decimal(feeAmount) : undefined,
                // receiptUrl will be updated later
            },

            include: { 
                lease: {
                    include: {
                        unit: {
                        include: {
                            complex: {
                                include: {
                                    landlord: {
                                        include: { user: true }
                                    }
                                }
                            }
                        }
                        },
                        tenant: {
                            include: {
                            user: true
                            }
                        }
                    }
                }
            }
        });

        generateReceiptPDF(newPayment)
            .then(async (receiptUrl: string | null) => {
                if (receiptUrl) {
                    await prisma.payment.update({
                        where: { id: newPayment.id },
                        data: { receiptUrl: receiptUrl },
                    });
                    // later, send notification to tenant about new payment + receipt

                } else {
                    console.error(`Failed to generate receipt PDF for payment ${newPayment.id}`);
                    throw new Error("Failed to generate receipt PDF for payment");
                }
            })
            .catch(pdfError => {
                console.error(`Error generating receipt PDF for payment ${newPayment.id}:`, pdfError);
                throw new Error("Error generating receipt PDF for payment")
            });

        // later trigger other notifications immediately (e.g., landlord confirmation)

        return newPayment as PaymentWithLeaseAndTenant;

    } catch (error: any) {
        if (error.code === 'P2002' && error.meta?.target === 'Payment_transactionRef_key') {
            throw new AppError('Transaction reference already exists', 409);
        }

        console.error("Error creating payment:", error);
        throw new AppError('Failed to record payment', 500);
    }
};