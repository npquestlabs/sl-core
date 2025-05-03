import { z } from 'zod'

export const PaginationSchema = z.object({
  limit: z.number().default(15),
  page: z.number().default(1),
  filter: z.string().max(255).optional(),
})
