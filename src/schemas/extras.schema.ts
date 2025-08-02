import { z } from 'zod'
import { RegisterUserSchema } from './user.schema'

export const PaginationSchema = z.object({
  limit: z
    .string()
    .transform((val) => parseInt(val, 10))
    .default('15')
    .refine((val) => !isNaN(val) && val > 0, {
      message: 'Limit must be a positive number',
    }),
  page: z
    .string()
    .transform((val) => parseInt(val, 10))
    .default('1')
    .refine((val) => !isNaN(val) && val > 0, {
      message: 'Page must be a positive number',
    }),
  filter: z.string().max(99, 'Filter text too long').optional(),
  order: z.record(z.enum(['asc', 'desc'])).optional(),
})

export const EmailSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export const TokenSchema = z.object({
  token: z.string().min(1, 'Token is required'),
})

export const PasswordSchema = z.object({
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})

export const AuthTokensSchema = z.object({
  access: z.string(),
})

// TODO: revisit
export const AuthSuccessResponseSchema = z.object({
  user: RegisterUserSchema,
  tokens: AuthTokensSchema,
})

export const MessageResponseSchema = z.object({
  message: z.string(),
})
