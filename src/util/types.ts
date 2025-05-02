export type LocalUser = {
  id: string
  firstName: string
  lastName: string
  email: string
  isVerified: boolean | null
  landlordId: string | null
  tenantId: string | null
  vendorId: string | null
}
