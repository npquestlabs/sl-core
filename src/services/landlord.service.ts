import { Landlord, Prisma } from '../../generated/prisma'
import { prisma } from '../configs/prisma'
import bcrypt from 'bcryptjs'
import * as authService from './auth.service'
import { ServerError } from '../util/error'

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

type CreateLandlordUserData = Omit<
  Prisma.UserCreateInput,
  'landlordId' | 'tenantId' | 'vendorId'
> & {
  password: string
  landlordData?: Omit<Prisma.LandlordCreateInput, 'users'>
}

export async function registerLandlordUser(data: CreateLandlordUserData) {
  const { password, landlordData, ...userData } = data

  const passwordHash = await bcrypt.hash(password, 10)

  const createdLandlordUser = await prisma.landlord.create({
    data: {
      ...(landlordData || {}),

      user: {
        create: {
          ...userData,
          passwordHash,
          isVerified: false,
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
