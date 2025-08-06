import { PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient()

export async function connectPrisma() {
  return await prisma.$connect().then(() => {
    console.log('Connected to the database')
  })
}

export async function disconnectPrisma() {
  return await prisma
    .$disconnect()
    .then(() => {
      console.log('Disconnected from the database')
    })
    .catch((error: Error) => {
      console.error('Error disconnecting from the database:', error.message)
    })
}

export { prisma }
