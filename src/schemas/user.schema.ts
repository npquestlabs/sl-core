import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password must be at least 3 characters long'), // only for login
})

export const RegisterTenantSchema = z.object({})

export const RegisterLandlordSchema = z.object({})

export const RegisterArtisanSchema = z.object({
  specialty: z.string().min(1, 'Specialty is required'),
})

export const RegisterUserSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  landlord: RegisterLandlordSchema.optional(),
  tenant: RegisterTenantSchema.optional(),
  vendor: RegisterArtisanSchema.optional(),
}).refine((data) => {
  const { landlord, tenant, vendor } = data
  const roles = [landlord, tenant, vendor].filter(Boolean)
  return roles.length === 1
}, {
  message: 'Exactly one role is required',
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
