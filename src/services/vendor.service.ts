import { Vendor, Prisma } from '../../generated/prisma'
import { prisma } from '../configs/prisma'
import bcrypt from 'bcryptjs'
import * as authService from './auth.service'
import { ServerError } from '../util/error'

export const updateVendor = async (
  id: string,
  data: Partial<Omit<Vendor, 'id' | 'createdAt' | 'updatedAt'>>,
) => {
  const vendor = await prisma.vendor.update({
    where: { id },
    data: {
      ...data,
    },
  })

  return vendor ?? null
}

type CreateVendorUserData = Omit<
  Prisma.UserCreateInput,
  'vendor' | 'vendor' | 'vendor'
> & {
  password: string
  vendorData?: Omit<Prisma.VendorCreateInput, 'users'>
}

export async function registerVendorUser(data: CreateVendorUserData) {
  const { password, vendorData, ...userData } = data

  const passwordHash = await bcrypt.hash(password, 10)

  const createdVendorUser = await prisma.vendor.create({
    data: {
      ...(vendorData || {}),

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

  if (!createdVendorUser) {
    throw new ServerError('Unable to create vendor user')
  }

  return await authService.loginUser(userData.email, password)
}
