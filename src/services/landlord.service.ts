import { prisma } from '../configs/prisma'
import bcrypt from 'bcryptjs'
import * as authService from './auth.service'
import { ServerError } from '../util/error'
import z from 'zod'
import {
  RegisterLandlordSchema,
  UpdateLandlordSchema,
} from '../schemas/user.schema'

export const updateLandlord = async (
  id: string,
  data: z.infer<typeof UpdateLandlordSchema>,
) => {
  const landlord = await prisma.landlord.update({
    where: { id },
    data: {
      ...data,
    },
  })

  return landlord ?? null
}

export async function registerLandlordUser(
  data: z.infer<typeof RegisterLandlordSchema>,
) {
  const { password, landlordData, ...userData } = data

  const passwordHash = await bcrypt.hash(password, 10)

  const createUserInput = {
    ...userData,
    passwordHash,
    isVerified: false,
  }

  const createLandlordInput = {
    ...landlordData,
  }

  const createdLandlordUser = await prisma.landlord.create({
    data: {
      ...createLandlordInput,

      user: {
        create: {
          ...createUserInput,
        },
      },
    },

    include: {
      user: true,
    },
  })

  if (!createdLandlordUser) {
    throw new ServerError('Unable to create landlord user')
  }

  return await authService.loginUser(userData.email, password)
}
