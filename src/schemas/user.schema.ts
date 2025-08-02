import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password must be at least 3 characters long'), // only for login
})

export const RegisterTenantSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  middleName: z.string().optional(),
})

export const RegisterStaffSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  middleName: z.string().optional(),
})

export const RegisterVendorSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  middleName: z.string().optional(),
  specialty: z.string().optional().default('N/A'),
})

export const RegisterUserSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    staff: RegisterStaffSchema.optional(),
    tenant: RegisterTenantSchema.optional(),
    vendor: RegisterVendorSchema.optional(),
  })
  .refine(
    (data) => {
      const { staff, tenant, vendor } = data
      const roles = [staff, tenant, vendor].filter(Boolean)
      return roles.length === 1
    },
    {
      message: 'Exactly one role is required',
    },
  )

export const RegisterStageOneSchema = z.object({
  email: z.string().email('Invalid email address'),
  user: RegisterUserSchema,
})

export const RegisterStageTwoSchema = z.object({
  otp: z.string().min(4, 'OTP must be at least 4 characters'),
  user: RegisterUserSchema,
})

export const UpdateTenantSchema = z
  .object({
    deletedAt: z.date().optional(),
  })
  .refine((obj) => Object.keys(obj).length > 0, {
    message: 'At least one allowed field is required for update',
  })

export const UpdateStaffSchema = z
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

export const UpdateVendorSchema = z
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

export const LocalStaffSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
})

export const LocalTenantSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email().nullable(),
})

export const LocalVendorSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email().nullable(),
  specialty: z.string().nullable(),
})

export const LocalUserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  staff: LocalStaffSchema.nullable(),
  tenant: LocalTenantSchema.nullable(),
  vendor: LocalVendorSchema.nullable(),
})
