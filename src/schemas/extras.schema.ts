import { z } from 'zod'

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
