import { Vendor } from '../../generated/prisma'
import { prisma } from '../configs/prisma'
import bcrypt from 'bcryptjs'
import * as authService from './auth.service'
import { ServerError } from '../util/error'
import { RegisterArtisanSchema } from '../schemas/user.schema'
import z from 'zod'

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

export async function registerVendorUser(
  data: z.infer<typeof RegisterArtisanSchema>,
) {
  const { password, artisanData, ...userData } = data

  const passwordHash = await bcrypt.hash(password, 10)

  const createUserInput = {
    ...userData,
    passwordHash,
    isVerified: false,
  }

  const createVendorInput = {
    ...artisanData,
  }

  const createdVendorUser = await prisma.vendor.create({
    data: {
      ...createVendorInput,

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

  if (!createdVendorUser) {
    throw new ServerError('Unable to create vendor user')
  }

  return await authService.loginUser(userData.email, password)
}
