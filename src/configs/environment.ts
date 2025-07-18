import dotenv from 'dotenv'
import envSchema from '../schemas/env.schema'

dotenv.config()

const envConfig = envSchema.parse({
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  appEmail: process.env.APP_EMAIL,
  appEmailPassword: process.env.APP_EMAIL_PASS,
  appName: 'Smart Landlord',
  allowedOrigins: process.env.ALLOWED_ORIGINS?.split(',') || [],
})

export default envConfig
