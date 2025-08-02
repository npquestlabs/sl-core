import { LocalUserSchema } from '../schemas/user.schema'
import { LocalUser } from '../types'

export function sanitizeUser(
  user: LocalUser & Record<string, unknown>,
): LocalUser {
  const safeUser = LocalUserSchema.parse(user)
  return safeUser
}
