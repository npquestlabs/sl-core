import { Landlord, Tenant, Vendor } from '../../generated/prisma'

export type LocalUser = {
  id: string
  firstName: string
  lastName: string
  email: string
  landlord: Landlord | null
  tenant: Tenant | null
  vendor: Vendor | null
}

export type PaginatedResponse<T> = {
  data: T[]
  meta: {
    limit: number
    page: number
    total: number
  }
}
