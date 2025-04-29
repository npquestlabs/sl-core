import jwt from 'jsonwebtoken'
import config from '../configs/environment'
import { User } from '../../generated/prisma'
import { AppError } from './error'

export function generateAccessToken(user: User) {
  const accessToken = jwt.sign({ user }, config.jwtSecret, { expiresIn: '1h' })

  return accessToken
}

export function verifyAccessToken(token: string): User {
  try {
    const decoded = jwt.verify(token, config.jwtSecret) as jwt.JwtPayload
    return decoded.user as User
  } catch (error) {
    throw new AppError('Invalid or expired token', 401)
  }
}

export function generateEmailToken(email: string): string {
  const token = jwt.sign({ email }, config.jwtSecret, { expiresIn: '5m' })
  return token
}

export function verifyEmailToken(token: string): string {
  try {
    const decoded = jwt.verify(token, config.jwtSecret) as jwt.JwtPayload
    return decoded.email
  } catch (error) {
    throw new Error('Invalid or expired token')
  }
}
