import {
  UnitType,
  MaintenanceStatus,
  StaffRole,
  RentDuration,
} from '../../generated/prisma'

export type ListedComplex = {
  id: string
  name: string
  description: string | null
  cityName: string
  countryCode: string
  address: string | null
  createdAt: Date | null
  updatedAt: Date | null
  _count: {
    units: number
    assignments: number
  }
}

export type CreatedComplex = {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
}

export type DetailedComplex = {
  id: string
  name: string
  description: string | null
  notes: string | null
  countryCode: string
  cityName: string
  address: string | null
  createdAt: Date | null
  updatedAt: Date | null
  _count: {
    units: number
    assignments: number
  }
  units: ListedUnit[]
  assignments: {
    role: StaffRole
    staff: ListedStaff
  }[]
}

// --- Staff Types ---
export type ListedStaff = {
  id: string
  firstName: string
  lastName: string
  user: { avatarUrl: string | null }
}

// --- Unit Types ---
export type ListedUnit = {
  id: string
  label: string
  type: UnitType | null
  rentAmount: string | null
  rentCurrency: string | null
  complex: {
    id: string
    name: string
  }
  leaseStatus: 'ACTIVE' | 'EXPIRED' | 'PENDING' | null
  _count: {
    maintenanceRequests: number
  }
}

export type CreatedUnit = {
  id: string
  label: string
  type: UnitType | null
  complexId: string
  createdAt: Date | null
  updatedAt: Date | null
}

export type DetailedUnit = {
  id: string
  label: string
  type: UnitType | null
  description: string | null
  notes: string | null
  rentAmount: string | null
  rentCurrency: string | null
  rentDuration: RentDuration | null
  complex: {
    id: string
    name: string
    address: string | null
  }
  activeLease: ActiveLease | null
  maintenanceRequests: ListedMaintenanceRequest[]
  createdAt: Date | null
  updatedAt: Date | null
}

type ActiveLease = {
  id: string
  startsAt: Date
  endsAt: Date
  tenant: {
    id: string
    firstName: string
    lastName: string
    email: string | null
    phone: string | null
    user: { avatarUrl: string | null } | null
  }
}

type ListedMaintenanceRequest = {
  id: string
  description: string
  status: MaintenanceStatus | null
  createdAt: Date | null
  creator: {
    avatarUrl: string | null
    tenant: Profile
    staff: Profile
    vendor: Profile
  }
}

type Profile = {
  firstName: string
  lastName: string
} | null
