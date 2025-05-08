import { prisma } from '../configs/prisma'
import bcrypt from 'bcryptjs'
import * as authService from './auth.service'
import { ServerError } from '../util/error'
import { RegisterTenantSchema, UpdateTenantSchema } from '../schemas/user.schema'
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

export async function registerTenantUser(
  data: z.infer<typeof RegisterTenantSchema>,
) {
  const { password, tenantData, ...userData } = data

  const passwordHash = await bcrypt.hash(password, 10)

  const createUserInput = {
    ...userData,
    passwordHash,
    isVerified: false,
  }

  const createTenantInput = {
    ...tenantData,
  }

  const createdTenantUser = await prisma.tenant.create({
    data: {
      ...createTenantInput,

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

  if (!createdTenantUser) {
    throw new ServerError('Unable to create tenant user')
  }

  return await authService.loginUser(userData.email, password)
}
