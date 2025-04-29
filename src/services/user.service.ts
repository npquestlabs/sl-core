import { User } from '../../generated/prisma'
import { prisma } from '../configs/prisma'
import bcrypt from 'bcryptjs'

export const updateUser = async (
  id: string,
  data: Partial<Omit<User, 'id' | 'passwordHash' | 'email' | 'phone'>>,
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
  const passwordHash = await bcrypt.hash(password, 10)

  const user = await prisma.user.update({
    where: { email },
    data: {
      passwordHash,
    },
  })

  return user ?? null
}

export const verifyUserEmail = async (email: string) => {
  const user = await prisma.user.update({
    where: { email },
    data: {
      isVerified: true,
    },
  })

  return user ?? null
}
