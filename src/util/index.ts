import { LocalUser } from './types'

export function sanitizeUser({
  id,
  email,
  firstName,
  lastName,
  isVerified,
  landlordId,
  tenantId,
  vendorId,
}: LocalUser & Record<string, unknown>): LocalUser {
  return {
    id,
    email,
    firstName,
    lastName,
    isVerified,
    landlordId,
    tenantId,
    vendorId,
  }
}
