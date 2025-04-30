import { Landlord, Prisma } from '../../generated/prisma'
import { prisma } from '../configs/prisma'
import bcrypt from 'bcryptjs'
import * as authService from './auth.service'
import { ServerError } from '../util/error'
import z from 'zod'
import { RegisterLandlordSchema } from '../schemas/user.schema'

export const updateLandlord = async (
  id: string,
  data: Partial<Omit<Landlord, 'id' | 'createdAt' | 'updatedAt'>>,
) => {
  const landlord = await prisma.landlord.update({
    where: { id },
    data: {
      proofOfOwnership: data.proofOfOwnership,
      bankName: data.bankName,
      bankAccount: data.bankAccount,
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
  } as Prisma.UserCreateWithoutLandlordInput

  const createLandlordInput = {
    ...landlordData,
  } as Prisma.LandlordCreateWithoutUserInput

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
