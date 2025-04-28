import { Landlord, Prisma } from '../../generated/prisma'
import { prisma } from '../configs/prisma'
import bcrypt from 'bcryptjs'

export const updateLandlord = async (
  id: string,
  data: Partial<
    Omit<Landlord, 'id' | 'userId' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  >,
) => {
  return prisma.landlord.update({
    where: { id },
    data: {
      proofOfOwnership: data.proofOfOwnership,
      bankName: data.bankName,
      bankAccount: data.bankAccount,
    },
  })
}

type CreateLandlordUserData = Omit<
  Prisma.UserCreateInput,
  'landlord' | 'tenant' | 'vendor'
> & {
  password: string
  landlordData?: Omit<Prisma.LandlordCreateInput, 'users'>
}

export async function createLandlordUser(
  data: CreateLandlordUserData,
): Promise<Prisma.LandlordGetPayload<{ include: { user: true } }>> {
  const { password, landlordData, ...userData } = data

  const passwordHash = await bcrypt.hash(password, 10)

  const result = await prisma.landlord.create({
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

  return result
}
