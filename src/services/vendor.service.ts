import { prisma } from '../configs/prisma'
import { UpdateArtisanSchema } from '../schemas/user.schema'
import z from 'zod'

export const updateVendor = async (
  id: string,
  data: z.infer<typeof UpdateArtisanSchema>,
) => {
  const vendor = await prisma.vendor.update({
    where: { id },
    data: {
      ...data,
    },
  })

  return vendor ?? null
}
