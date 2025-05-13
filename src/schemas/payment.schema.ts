import { z } from 'zod';

const PaymentTypeEnum = z.enum([
    'RENT', 'UTILITY', 'MAINTENANCE', 'DEPOSIT'
]);
const PaymentMethodEnum = z.enum([
    'MOBILE_MONEY', 'BANK_TRANSFER', 'CARD', 'CASH'
]);
const PaymentStatusEnum = z.enum([
    'PENDING', 'COMPLETED', 'FAILED', 'REFUNDED'
]);

const CurrencyString = z.string().min(3).max(3);

export const CreatePaymentSchema = z.object({
    leaseId: z.string().uuid('Invalid lease ID format'),
    amount: z.number().positive('Amount must be a positive number'),
    currency: CurrencyString,
    type: PaymentTypeEnum,
    dueDate: z.string().datetime('Invalid due date format (expected ISO 8601)'),
    paidAt: z.string().datetime('Invalid paid date format (expected ISO 8601)').optional(), 
    method: PaymentMethodEnum,
    paymentStatus: PaymentStatusEnum.default('COMPLETED').optional(),
    transactionRef: z.string().max(255).optional(), 
    feeAmount: z.number().nonnegative('Fee amount must be non-negative').optional(),
    // receiptUrl is generated later, not sent in the request body
});

export type CreatePaymentInput = z.infer<typeof CreatePaymentSchema>;