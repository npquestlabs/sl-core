import bcrypt from 'bcryptjs'
import { AppError, LoginError } from '../util/error'
import * as userService from './user.service'
import { sanitizeUser } from '../util'
import { generateToken } from '../util/token'
import config from '../configs/environment'
import jwt from 'jsonwebtoken'
import { prisma } from '../configs/prisma'

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
    include: { landlord: true, tenant: true, vendor: true },
  })

  if (
    !user ||
    !(user.password && (await bcrypt.compare(password, user.password)))
  ) {
    throw new LoginError()
  }

  const sanitizedUser = sanitizeUser(user)

  const options: jwt.SignOptions = {
    expiresIn: config.isProduction ? '24h' : '24m',
  }

  const accessToken = generateToken(sanitizedUser, options)

  return { user: sanitizedUser, tokens: { access: accessToken } }
}

export const loginWithEmail = async (email: string) => {
  const omit = {
    password: true,
  }
  const include = {
    landlord: true,
    tenant: true,
    vendor: true,
  }
  const user = await userService.getUserByEmail(email, omit, include)
  if (!user) {
    throw new AppError('User not found', 404)
  }

  const sanitizedUser = sanitizeUser(user)

  const options: jwt.SignOptions = { expiresIn: '24m' }

  const accessToken = generateToken(sanitizedUser, options)

  return { user: sanitizedUser, tokens: { access: accessToken } }
}
