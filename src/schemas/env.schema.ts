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
  googleClientId: z.string({
    required_error: 'GOOGLE CLIENT ID is Mandatory',
  }),
  googleClientSecret: z.string({
    required_error: 'GOOGLE CLIENT SECRET is Mandatory',
  }),
  smtpHost: z.string({
    required_error: 'SMTP HOST is Mandatory',
  }),
  smtpUser: z.string({
    required_error: 'SMTP USER is Mandatory',
  }).email("Invalid email format"),
  smtpPass: z.string({
    required_error: 'SMTP PASSWORD is Mandatory',
  }),
  emailer: z.string({
    required_error: 'EMAILER is Mandatory',
  }).email("Invalid email format"),
  allowedOrigins: z.array(z.string(), {
    required_error: 'ALLOWED ORIGINS is Mandatory',
  }),
})
