import { prisma } from '../configs/prisma'
import bcrypt from 'bcryptjs'
import { AppError } from '../util/error'
import { z } from 'zod'
import { UpdateUserSchema } from '../schemas/user.schema'

export const updateUser = async (
  id: string,
  data: z.infer<typeof UpdateUserSchema>,
) => {
  const user = await prisma.user.update({
    where: { id },
    data: {
      ...data,
    },
  })

  return user ?? null
}

export const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  })

  return user ?? null
}

export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  })

  return user ?? null
}

export const updateUserPassword = async (email: string, password: string) => {
  const user = await getUserByEmail(email)

  if (!user) {
    throw new AppError('User not found', 404)
  }

  if (await bcrypt.compare(password, user.passwordHash)) {
    throw new AppError(
      'New password cannot be the same as the old password',
      400,
    )
  }

  const passwordHash = await bcrypt.hash(password, 10)

  const updatedUser = await prisma.user.update({
    where: { email },
    data: {
      passwordHash,
    },
  })

  return updatedUser ?? null
}

export const verifyUserEmail = async (email: string) => {
  const user = await prisma.user.update({
    where: { email },
    data: {
      isVerified: true,
    },
    omit: {
      passwordHash: true,
      idType: true,
      idNumber: true,
      idDocumentUrl: true,
      phone: true,
    },
  })

  return user ?? null
}
