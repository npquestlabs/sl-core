import { Tenant, Prisma } from '../../generated/prisma'
import { prisma } from '../configs/prisma'
import bcrypt from 'bcryptjs'
import * as authService from './auth.service'
import { ServerError } from '../util/error'
import { RegisterTenantSchema } from '../schemas/user.schema'
import z from 'zod'

export const updateTenant = async (
  id: string,
  data: Partial<Omit<Tenant, 'id' | 'createdAt' | 'updatedAt'>>,
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
  } as Prisma.UserCreateWithoutTenantInput

  const createTenantInput = {
    ...tenantData,
  } as Prisma.TenantCreateWithoutUserInput

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
