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
