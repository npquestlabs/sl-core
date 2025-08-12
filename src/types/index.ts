import z from 'zod'
import { LocalUserSchema } from '../schemas/user.schema'

export type LocalUser = z.infer<typeof LocalUserSchema>

export type PaginatedResponse<T> = {
  data: T[]
  meta: {
    limit: number
    page: number
    total: number
  }
}

export type StaffSummary = {
  totalComplexes: number
  totalUnits: number
  activeTenancies: number
  expiredLeasesCount: number
  pendingMaintenanceRequests: number
}
