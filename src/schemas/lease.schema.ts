// src/schemas/lease.schema.ts
import { z } from 'zod'

// --- Schema for Creating a New Lease ---
export const CreateLeaseSchema = z
  .object({
    unitId: z
      .string({ required_error: 'Unit ID is required' })
      .cuid2({ message: 'Invalid Unit ID format' }),
    tenantId: z
      .string({ required_error: 'Tenant ID is required' })
      .cuid2({ message: 'Invalid Tenant ID format' }),
    startedAt: z.coerce.date({
      // coerce attempts to convert string/number to Date
      required_error: 'Start date is required',
      invalid_type_error: 'Invalid start date format',
    }),
    endsAt: z.coerce.date({
      required_error: 'End date is required',
      invalid_type_error: 'Invalid end date format',
    }),
    advanceSeconds: z
      .number({ required_error: 'Advance seconds is required' })
      .int({ message: 'Advance seconds must be an integer' })
      .nonnegative({ message: 'Advance seconds cannot be negative' }),
    // Rent amount fetched from Unit, Currency hardcoded to GHS (as per original code)
    noticePeriod: z
      .number({ required_error: 'Notice period is required' })
      .int({ message: 'Notice period must be an integer' })
      .positive({ message: 'Notice period must be positive' }),
    rules: z.string().optional(), // Optional lease rules text
  })
  .refine((data) => data.endsAt > data.startedAt, {
    message: 'End date must be after start date',
    path: ['endsAt'], // Point error to the endsAt field
  })

// --- Schema for Renewing an Existing Lease ---
export const RenewLeaseSchema = z.object({
  // unitId, tenantId, landlordId, rentAmount, currency, noticePeriod are derived from the existing lease
  newEndsAt: z.coerce.date({
    required_error: 'New end date is required',
    invalid_type_error: 'Invalid new end date format',
  }),
  advanceSeconds: z
    .number({ required_error: 'Advance seconds is required' })
    .int({ message: 'Advance seconds must be an integer' })
    .nonnegative({ message: 'Advance seconds cannot be negative' }),
  rules: z.string().optional(), // Optional updated lease rules text
})

// Optional: Define the type for better type safety in services
export type CreateLeaseInput = z.infer<typeof CreateLeaseSchema>
export type RenewLeaseInput = z.infer<typeof RenewLeaseSchema>
