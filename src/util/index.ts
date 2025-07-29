import { LocalUser } from '../types'

export function sanitizeUser({
  id,
  email,
  landlord,
  tenant,
  vendor,
}: LocalUser & Record<string, unknown>): LocalUser {
  return {
    id,
    email,
    landlord,
    tenant,
    vendor,
  }
}
