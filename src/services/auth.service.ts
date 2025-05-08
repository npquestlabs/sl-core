import bcrypt from 'bcryptjs'
import { generateAccessToken, verifyEmailToken } from '../util/token'
import { AppError, LoginError } from '../util/error'
import { PrismaClient } from '../../generated/prisma'
import * as userService from './user.service'
import { sanitizeUser } from '../util'

const prisma = new PrismaClient()

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
    include: { landlord: true, tenant: true, vendor: true },
  })
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    throw new LoginError()
  }

  const sanitizedUser = sanitizeUser(user)

  const access = generateAccessToken(sanitizedUser)

  return { user: sanitizedUser, access }
}

export const loginWithToken = async (token: string) => {
  const email = verifyEmailToken(token)
  if (!email) {
    throw new AppError('Invalid token', 400)
  }
  const user = await userService.verifyUserEmail(email)
  if (!user) {
    throw new AppError('User not found', 404)
  }

  const sanitizedUser = sanitizeUser(user)

  const access = generateAccessToken(sanitizedUser)

  return { user: sanitizedUser, access }
}
