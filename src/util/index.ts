import { LocalUser } from '../types'

export function sanitizeUser({
  id,
  email,
  firstName,
  lastName,
  landlord,
  tenant,
  vendor,
}: LocalUser & Record<string, unknown>): LocalUser {
  return {
    id,
    email,
    firstName,
    lastName,
    landlord,
    tenant,
    vendor,
  }
}
