import { Landlord, Tenant, Vendor } from '../../generated/prisma'

export type LocalUser = {
  id: string
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

export type LandLordSummary = {
  complexes: number; // Total complexes
  units: number; // Total units
  tenants: number; // Total tenants
  payments: number; // Pending payments made
  maintenanceRequests: number; // Pending maintenance requests
}