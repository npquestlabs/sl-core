import { z } from 'zod'
import { IdType } from '../../generated/prisma'

export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(3, 'Password must be at least 3 characters long'), // only for login
})

export const RegisterTenantSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  idType: z.nativeEnum(IdType).optional(),
  idNumber: z.string().optional(),
  idDocumentUrl: z.string().url('Invalid URL').optional(),
  tenantData: z.object({}).optional(),
})

export const RegisterLandlordSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  idType: z.nativeEnum(IdType).optional(),
  idNumber: z.string().optional(),
  idDocumentUrl: z.string().url('Invalid URL').optional(),
  landlordData: z.object({}).optional(),
})

export const RegisterArtisanSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  idType: z.nativeEnum(IdType).optional(),
  idNumber: z.string().optional(),
  idDocumentUrl: z.string().url('Invalid URL').optional(),
  artisanData: z.object({}).optional(),
})

export const UpdateTenantSchema = z.object({
  deletedAt: z.date().optional(),
})

export const UpdateLandlordSchema = z.object({
  deletedAt: z.date().optional(),
  proofOfOwnership: z.string().url('Invalid URL').optional(),
  bankName: z.string().optional(),
  bankAccount: z.string().optional(),
  mobileMoneyNumber: z.string().optional(),
  notificationPrefs: z.object({
    email: z.boolean().optional(),
    sms: z.boolean().optional(),
  }),
})
export const UpdateArtisanSchema = z.object({
  deletedAt: z.date().optional(),
  specialty: z.string().optional(),
  rating: z.number().optional(),
})

export const UserUpdateSchema = z.object({
  firstName: z.string().min(1, 'First name is required').optional(),
  lastName: z.string().min(1, 'Last name is required').optional(),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .optional(),
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
