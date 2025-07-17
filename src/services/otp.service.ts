import { PrismaClient } from "../../generated/prisma"
import { addMinutes } from 'date-fns'

const prisma = new PrismaClient()

export async function createOtp(email: string, otp: string, expiresInMinutes = 10) {
  const expiresAt = addMinutes(new Date(), expiresInMinutes)
  return prisma.otp.create({
    data: {
      email,
      otp,
      expiresAt,
    },
  })
}

export async function getValidOtp(email: string, otp: string) {
  return prisma.otp.findFirst({
    where: {
      email,
      otp,
      used: false,
      expiresAt: {
        gt: new Date(),
      },
    },
  })
}

export async function markOtpUsed(id: string) {
  return prisma.otp.update({
    where: { id },
    data: { used: true },
  })
}

export async function deleteOtpsForEmail(email: string) {
  return prisma.otp.deleteMany({
    where: { email },
  })
}
