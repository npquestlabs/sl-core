import { z } from 'zod'
import { IdType } from '../../generated/prisma'

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(3, 'Password must be at least 3 characters long'), // only for login
})

export const registerTenantSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  idType: z.enum(Object.values(IdType) as [string, ...string[]]).optional(),
  idNumber: z.string().optional(),
  idDocumentUrl: z.string().url('Invalid URL').optional(),
  tenantData: z.object({}).optional(),
})

export const registerLandlordSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  idType: z.enum(Object.values(IdType) as [string, ...string[]]).optional(),
  idNumber: z.string().optional(),
  idDocumentUrl: z.string().url('Invalid URL').optional(),
  landlordData: z.object({}).optional(),
})

export const registerArtisanSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  idType: z.enum(Object.values(IdType) as [string, ...string[]]).optional(),
  idNumber: z.string().optional(),
  idDocumentUrl: z.string().url('Invalid URL').optional(),
  artisanData: z.object({}).optional(),
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

export const updateUserSchema = z.object({
  id: z.string().min(1, 'User ID is required'),
  firstName: z.string().min(1, 'First name is required').optional(),
  lastName: z.string().min(1, 'Last name is required').optional(),
  email: z.string().email('Invalid email address').optional(),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .optional(),
  idType: z.enum(Object.values(IdType) as [string, ...string[]]).optional(),
  idNumber: z.string().optional(),
  idDocumentUrl: z.string().url('Invalid URL').optional(),
})
