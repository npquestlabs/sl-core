import { Tenant, Prisma } from '../../generated/prisma'
import { prisma } from '../configs/prisma'
import bcrypt from 'bcryptjs'
import * as authService from './auth.service'
import { ServerError } from '../util/error'

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

type CreateTenantUserData = Omit<
  Prisma.UserCreateInput,
  'tenant' | 'tenant' | 'vendor'
> & {
  password: string
  tenantData?: Omit<Prisma.TenantCreateInput, 'users'>
}

export async function registerTenantUser(data: CreateTenantUserData) {
  const { password, tenantData, ...userData } = data

  const passwordHash = await bcrypt.hash(password, 10)

  const createdTenantUser = await prisma.tenant.create({
    data: {
      ...(tenantData || {}),

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

  if (!createdTenantUser) {
    throw new ServerError('Unable to create tenant user')
  }

  return await authService.loginUser(userData.email, password)
}
