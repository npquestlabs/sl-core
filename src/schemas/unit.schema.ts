import z from 'zod'
import { UnitType } from '../../generated/prisma'

export const CreateUnitSchema = z.object({
  type: z.nativeEnum(UnitType),
  label: z.string().optional().default(''),
  description: z.string().optional(),
  notes: z.string().optional(),
  rentAmount: z.number().optional(),
  rentCurrency: z.string().optional(),
  rentAdvance: z.number().optional(),
  rentDuration: z.number().optional(),
})

export const UpdateUnitSchema = z
  .object({
    type: z.nativeEnum(UnitType).optional(),
    label: z.string().optional().default(''),
    desciption: z.string().optional(),
    notes: z.string().optional(),
    rentAmount: z.number().optional(),
    rentCurrency: z.string().optional(),
    rentAdvance: z.number().optional(),
    rentDuration: z.number().optional(),
  })
  .refine((obj) => Object.keys(obj).length > 0, {
    message: 'At least one allowed field is required for update',
  })

export const CreateUnitInBulkSchema = z
  .object({
    quantity: z.number().min(1, 'Quantity is required').optional(),
    labeling: z.string().optional(),
    notes: z.string().optional(),
  })
  .refine((obj) => obj.quantity !== undefined || obj.labeling !== undefined, {
    message: 'At least one allowed field is required for bulk creation',
  })
