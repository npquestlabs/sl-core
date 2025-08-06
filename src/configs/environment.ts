import dotenv from 'dotenv'
import envSchema from '../schemas/env.schema'

dotenv.config()

const variables = envSchema.parse({
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  appEmail: process.env.APP_EMAIL,
  appEmailPassword: process.env.APP_EMAIL_PASS,
  allowedOrigins: process.env.ALLOWED_ORIGINS?.split(',') || [],
})

const envConfig = {
  ...variables,
  appName: 'Smart Landlord',
  isProduction: variables.environment == 'production',
  clients: {
    staff: 'staff',
    tenant: 'tenant',
    vendor: 'vendor',
  },
}

export default envConfig
