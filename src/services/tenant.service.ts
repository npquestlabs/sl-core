import { prisma } from '../configs/prisma'
import { UpdateTenantSchema } from '../schemas/user.schema'
import z from 'zod'

export const updateTenant = async (
  id: string,
  data: z.infer<typeof UpdateTenantSchema>,
) => {
  const tenant = await prisma.tenant.update({
    where: { id },
    data: {
      ...data,
    },
  })

  return tenant ?? null
}
