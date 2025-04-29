import bcrypt from 'bcryptjs'
import { generateAccessToken, verifyEmailToken } from '../util/token'
import { AppError, LoginError } from '../util/error'
import { PrismaClient, User } from '../../generated/prisma'
import * as userService from './user.service'

const prisma = new PrismaClient()

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    throw new LoginError('Invalid email or password')
  }
  const access = generateAccessToken(user)

  return { user: user as User, access }
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
  const access = generateAccessToken(user)

  return { user: user as User, access }
}
