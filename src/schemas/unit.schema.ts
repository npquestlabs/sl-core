import { z } from 'zod';
// REFACTORED: We now import RentDuration as it's an enum, not a number.
import { UnitType, RentDuration } from '../../generated/prisma';

export const CreateUnitSchema = z.object({
  type: z.nativeEnum(UnitType),
  // REFACTORED: The 'label' field is required in the database. 
  // Changed from optional to a string with a minimum length.
  label: z.string().min(1, { message: 'Label cannot be empty' }),
  description: z.string().optional(),
  notes: z.string().optional(),
  // Type is correct (number becomes Decimal), no change.
  rentAmount: z.number().positive().optional(),
  rentCurrency: z.string().optional(),
  // REMOVED: The 'rentAdvance' field does not exist on the 'Unit' model in your schema.
  // rentAdvance: z.number().optional(), 
  // REFACTORED: 'rentDuration' is an ENUM in the schema, not a number.
  rentDuration: z.nativeEnum(RentDuration).optional(),
});

export const UpdateUnitSchema = z
  .object({
    type: z.nativeEnum(UnitType).optional(),
    label: z.string().optional(),
    // CORRECTED: Fixed typo from 'desciption' to 'description'.
    description: z.string().optional(),
    notes: z.string().optional(),
    rentAmount: z.number().positive().optional(),
    rentCurrency: z.string().optional(),
    // REMOVED: The 'rentAdvance' field does not exist on the 'Unit' model.
    // rentAdvance: z.number().optional(), 
    // REFACTORED: 'rentDuration' is an ENUM in the schema, not a number.
    rentDuration: z.nativeEnum(RentDuration).optional(),
  })
  .refine((obj) => Object.keys(obj).length > 0, {
    message: 'At least one allowed field is required for update',
  });

/**
 * NOTE: This schema is for a custom bulk creation logic and does not directly map
 * all fields to the Unit model. It is correct for its intended purpose and
 * does not require changes based on the schema alignment.
 */
export const CreateUnitInBulkSchema = z
  .object({
    quantity: z.number().min(1, 'Quantity is required').optional(),
    labeling: z.string().optional(),
    notes: z.string().optional(),
  })
  .refine((obj) => obj.quantity !== undefined || obj.labeling !== undefined, {
    message: 'Either quantity or a labeling scheme is required for bulk creation',
  });