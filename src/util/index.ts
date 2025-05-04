import { LocalUser } from './types'

export function sanitizeUser({
  id,
  email,
  firstName,
  lastName,
  isVerified,
  landlord,
  tenant,
  vendor,
}: LocalUser & Record<string, unknown>): LocalUser {
  return {
    id,
    email,
    firstName,
    lastName,
    isVerified,
    landlord,
    tenant,
    vendor,
  }
}
