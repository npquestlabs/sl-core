import { prisma } from '../configs/prisma'
import z from 'zod'
import { UpdateLandlordSchema } from '../schemas/user.schema'

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

export const getLandlordWithPopulatedUser = async (id: string) => {
  const landlord = await prisma.landlord.findUnique({
    where: { id },
    include: {
      user: {
        omit: {
          password: true,
        }
      },
    },
    omit: {
      userId: true,
    }
  })

  return landlord ?? null
}