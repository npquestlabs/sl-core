import z from 'zod'

export default z.object({
  environment: z
    .enum(['development', 'production', 'local', 'test'])
    .default('development'),
  port: z.string().transform((value) => {
    const parsedValue = Number(value)
    if (isNaN(parsedValue) || parsedValue <= 0) {
      throw new Error('PORT must be a positive number')
    }
    return parsedValue
  }),
  databaseUrl: z.string({
    required_error: 'DATABASE URL is Mandatory',
  }),
  jwtSecret: z.string({
    required_error: 'JWT SECRET is Mandatory',
  }),
  appEmail: z.string(),
  appEmailPassword: z.string(),
  allowedOrigins: z.array(z.string(), {
    required_error: 'ALLOWED_ORIGINS is Mandatory',
  }),
})
