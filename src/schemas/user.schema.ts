import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password must be at least 3 characters long'), // only for login
})

export const RegisterUserSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
})

export const RegisterTenantSchema = z.object({
  ...RegisterUserSchema.shape,
  tenantData: z.object({}).optional(),
})

export const RegisterLandlordSchema = z.object({
  ...RegisterUserSchema.shape,
  landlordData: z.object({}).optional(),
})

export const RegisterArtisanSchema = z.object({
  ...RegisterUserSchema.shape,
  artisanData: z
    .object({
      specialty: z.string().min(1, 'Specialty is required'),
    })
    .optional(),
})

export const UpdateTenantSchema = z
  .object({
    deletedAt: z.date().optional(),
  })
  .refine((obj) => Object.keys(obj).length > 0, {
    message: 'At least one allowed field is required for update',
  })

export const UpdateLandlordSchema = z
  .object({
    proofOfOwnership: z.string().url('Invalid URL').optional(),
    bankName: z.string().optional(),
    bankAccount: z
      .string()
      .min(8, 'Invalid bank account number')
      .max(20, 'Invalid bank account number')
      .optional(),
    mobileMoneyNumber: z.string().optional(),
  })
  .refine((obj) => Object.keys(obj).length > 0, {
    message: 'At least one allowed field is required for update',
  })

export const UpdateArtisanSchema = z
  .object({
    deletedAt: z.date().optional(),
    specialty: z.string().optional(),
    rating: z.number().optional(),
  })
  .refine((obj) => Object.keys(obj).length > 0, {
    message: 'At least one allowed field is required for update',
  })

export const UpdateUserSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required').optional(),
    lastName: z.string().min(1, 'Last name is required').optional(),
    notificationPrefs: z
      .object({
        email: z.boolean().default(true),
        sms: z.boolean().default(true),
      })
      .optional(),
  })
  .refine((obj) => Object.keys(obj).length > 0, {
    message: 'At least one allowed field is required for update',
  })

export const EmailSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export const TokenSchema = z.object({
  token: z.string().min(1, 'Token is required'),
})

export const PasswordSchema = z.object({
  password: z.string().min(8, 'Password must be at least 8 characters long'),
})
