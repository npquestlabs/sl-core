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

  if (!user) {
    throw new AppError('User not found', 404)
  }

  user.passwordHash = ''

  return user
}

export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    throw new AppError('User not found', 404)
  }

  user.passwordHash = ''

  return user
}

export const updateUserPassword = async (userId: string, password: string) => {
  const updatedUser = await prisma.$transaction(async (tx) => {
    const user = await tx.user.findUnique({
      where: { id: userId },
    })

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

    const updated = await tx.user.update({
      where: { id: userId },
      data: {
        passwordHash,
      },
    })

    return updated
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
