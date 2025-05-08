/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from '../../generated/prisma'
import { LocalUser } from '../types'

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


export function stripPasswordHash({ passwordHash, ...otherFields}: User & Record<string, unknown>) {
  return otherFields;
}