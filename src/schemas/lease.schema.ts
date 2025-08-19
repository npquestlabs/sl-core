import { z } from 'zod';
import { RentDuration, IdType } from '../../generated/prisma';


export const CreateLeaseTemplateSchema = z.object({
  name: z.string().min(1, { message: 'Template name is required' }),

  signedBy: z.string().min(1, { message: 'Signer name is required' }),
  signerRole: z.string().min(1, { message: 'Signer role is required' }),

  signature: z.string().optional(),
  signerIdType: z.nativeEnum(IdType).optional(),
  signerIdNumber: z.string().optional(),

  terms: z.string().optional(),
  noticePeriod: z.number().int().positive().optional().default(30),
});

export const UpdateLeaseTemplateSchema = z
  .object({
    name: z.string().min(1).optional(),
    signedBy: z.string().min(1).optional(),
    signerRole: z.string().min(1).optional(),
    signature: z.string().optional(),
    signerIdType: z.nativeEnum(IdType).optional(),
    signerIdNumber: z.string().optional(),
    terms: z.string().optional(),
    noticePeriod: z.number().int().positive().optional(),
  })
  .refine((obj) => Object.keys(obj).length > 0, {
    message: 'At least one field is required for an update',
  });

export const CreateLeaseSchema = z
  .object({
    unitId: z.string().uuid({ message: 'Invalid Unit ID format' }),
    tenantId: z.string().uuid({ message: 'Invalid Tenant ID format' }),
    templateId: z.string().uuid({ message: 'A valid Lease Template ID is required' }),

    startsAt: z.coerce.date({ required_error: 'Start date is required' }),
    endsAt: z.coerce.date({ required_error: 'End date is required' }),
  })
  .refine((data) => data.endsAt > data.startsAt, {
    message: 'End date must be after start date',
    path: ['endsAt'],
  });

export const EditLeaseSchema = z
  .object({
    startsAt: z.coerce.date().optional(),
    endsAt: z.coerce.date().optional(),
    rentAmount: z.number().positive().optional(),
    rentDuration: z.nativeEnum(RentDuration).optional(),
    rentCurrency: z.string().optional(),
    rentQuotas: z.number().int().positive().optional(),
    noticePeriod: z.number().int().positive().optional(),
    terms: z.string().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided to edit the lease',
  })
  .refine((data) => {
      if (data.startsAt && data.endsAt) {
        return data.endsAt > data.startsAt;
      }
      return true;
    }, {
      message: 'End date must be after start date',
      path: ['endsAt'],
    });

export const RenewLeaseSchema = z
  .object({
    occupancyId: z.string().uuid({ message: 'Invalid Occupancy ID format' }),
    newStartsAt: z.coerce.date({ required_error: 'New start date is required' }),
    newEndsAt: z.coerce.date({ required_error: 'New end date is required' }),

    // Optional overrides for the new lease
    rentAmount: z.number().positive().optional(),
    rentDuration: z.nativeEnum(RentDuration).optional(),
    rentCurrency: z.string().optional(),
    rentQuotas: z.number().int().positive().optional(),
    noticePeriod: z.number().int().positive().optional(),
    terms: z.string().optional(),
  })
  .refine((data) => data.newEndsAt > data.newStartsAt, {
    message: 'New end date must be after new start date',
    path: ['newEndsAt'],
  });
