import { app, port } from './configs/server'
import { connectPrisma, prisma } from './configs/prisma'
import config from './configs/environment'
import { logger } from './configs/logger'
import { connectEmail } from './configs/email'

Promise.all([connectPrisma(), connectEmail()])
  .then(() => {
    logger.info('Connected to the database and email service')
  })
  .catch((error) => {
    logger.error('Error during initialization:', error)
    process.exit(1)
  })
  .finally(() => {
    logger.info('Initialization complete')
  })

const server = app.listen(port, () => {
  logger.info(`Server is running on ${config.port}`)
  logger.info(
    `Documentation is live on http://localhost:${config.port}/api/v1/docs`,
  )
})

process.on('exit', () => {
  logger.info('Exiting Server...')
  return prisma.$disconnect()
})

server.on('error', (error) => {
  logger.error('Express server error:', error.message)

  prisma.$disconnect()

  process.exit(1)
})
;['SIGINT', 'SIGTERM'].forEach((signal) => {
  process.on(signal, () => {
    logger.info(`Received ${signal}. Shutting down gracefully...`)

    server.close(() => {
      logger.info('Express server closed')

      prisma.$disconnect()

      process.exit(0)
    })
  })
})
