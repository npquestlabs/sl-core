import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { User } from '../../generated/prisma'

dotenv.config()

const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET || 'access_secret_key'
// const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET || "refresh_secret_key";

const generateToken = (user: User) => {
  const accessToken = jwt.sign({ user }, ACCESS_SECRET, { expiresIn: '1h' })

  return accessToken
}

export { generateToken }
