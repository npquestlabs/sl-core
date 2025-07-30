import { z } from 'zod'
import {
  PaymentMethod,
  PaymentStatus,
  PaymentType,
} from '../../generated/prisma'
import { PaginationSchema } from './extras.schema'

export const CreatePaymentSchema = z.object({
  leaseId: z.string().uuid('Invalid lease ID format'),
  amount: z.number().positive('Amount must be a positive number'),
  currency: z.string().min(3).max(3),
  type: z.nativeEnum(PaymentType),
  dueDate: z.string().datetime('Invalid due date format (expected ISO 8601)'),
  paidAt: z
    .string()
    .datetime('Invalid paid date format (expected ISO 8601)')
    .optional(),
  method: z.nativeEnum(PaymentMethod),
  paymentStatus: z
    .nativeEnum(PaymentStatus)
    .optional()
    .default(PaymentStatus.PENDING),
  transactionRef: z.string().max(255).optional(),
  feeAmount: z
    .number()
    .nonnegative('Fee amount must be non-negative')
    .optional(),
  // receiptUrl is generated later, not sent in the request body
})

export const GetPaymentsQuerySchema = z.object({
  ...PaginationSchema.shape,
  status: z.nativeEnum(PaymentStatus).optional(),
  leaseId: z.string().uuid('Invalid lease ID format'),
})

export type CreatePaymentInput = z.infer<typeof CreatePaymentSchema>
