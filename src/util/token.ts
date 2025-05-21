import jwt from 'jsonwebtoken'
import config from '../configs/environment'
import { AppError } from './error'

export function generateToken<T extends object>(
  data: T,
  options: jwt.SignOptions = { expiresIn: '1h' },
): string {
  const token = jwt.sign(data, config.jwtSecret, options)
  return token
}

export function verifyToken<T>(token: string): T {
  try {
    const decoded = jwt.verify(token, config.jwtSecret) as jwt.JwtPayload
    // A validator middleware must be used to check if the type of the decoded token is correct
    return decoded as T
  } catch (error) {
    throw new AppError('Invalid or expired token', 401)
  }
}
