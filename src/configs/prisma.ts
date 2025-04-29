import { PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient()

prisma
  .$connect()
  .then(() => {
    console.log('Connected to the database')
  })
  .catch((error: Error) => {
    console.error('Error connecting to the database:', error.message)
    // process.exit(1)
  })

export { prisma }
