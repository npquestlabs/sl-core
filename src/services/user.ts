import { User } from '../../generated/prisma'
import { prisma } from '../configs/prisma'

export const updateUser = async (
  id: string,
  data: Partial<Omit<User, 'id' | 'passwordHash' | 'email' | 'phone'>>,
) => {
  return prisma.user.update({
    where: { id },
    data: {
      ...data,
    },
  })
}

export const getUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
  })
}
