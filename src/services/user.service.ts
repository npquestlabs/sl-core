import { prisma } from '../configs/prisma'
import bcrypt from 'bcryptjs'
import { AppError, ServerError } from '../util/error'
import { z } from 'zod'
import { RegisterUserSchema, UpdateUserSchema } from '../schemas/user.schema'
import { Prisma } from '../../generated/prisma'
import { sanitizeUser } from '../util'
import { generateToken } from '../util/token'
import config from '../configs/environment'
import jwt from 'jsonwebtoken'

export const createUser = async (data: z.infer<typeof RegisterUserSchema>) => {
  data.password = await bcrypt.hash(data.password, 10)
  const { landlord, tenant, vendor, ...userData } = data

  const createdUser = await prisma.user.create({
    data: {
      ...userData,

      landlord: {
        ...(landlord && {
          create: {
            ...landlord,
          },
        }),
      },
      tenant: {
        ...(tenant && {
          create: {
            ...tenant,
          },
        }),
      },
      vendor: {
        ...(vendor && {
          create: {
            ...vendor,
          },
        }),
      },
    },
    omit: {
      password: true,
    },
    include: {
      landlord: true,
      tenant: true,
      vendor: true,
    },
  })

  if (!createdUser) {
    throw new ServerError('Unable to create user')
  }

  const sanitizedUser = sanitizeUser(createdUser)

  const options: jwt.SignOptions = {
    expiresIn: config.isProduction ? '24h' : '24m',
  }

  const accessToken = generateToken(sanitizedUser, options)

  return { user: sanitizedUser, tokens: { access: accessToken } }
}

export const updateUser = async (
  id: string,
  data: z.infer<typeof UpdateUserSchema>,
) => {
  const user = await prisma.user.update({
    where: { id },
    data: {
      ...data,
    },
    omit: {
      password: true,
    },
  })

  return user ?? null
}

export const getUserWithPopulatedData = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
    omit: {
      password: true,
    },
    include: {
      landlord: {
        omit: {
          userId: true,
        },
      },
      tenant: {
        omit: {
          userId: true,
        },
      },
      vendor: {
        omit: {
          userId: true,
        },
      },
    },
  })

  return user ?? null
}

export const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
    omit: {
      password: true,
    },
  })

  return user ?? null
}

export const getUserByEmail = async (
  email: string,
  omit: Prisma.UserOmit = {},
  include: Prisma.UserInclude = {},
) => {
  const user = await prisma.user.findUnique({
    where: { email },
    omit: {
      ...omit,
      password: true,
    },
    include,
  })

  return user ?? null
}

export const updateUserPassword = async (userId: string, password: string) => {
  const updatedUser = await prisma.$transaction(async (tx) => {
    const user = await tx.user.findUnique({
      where: { id: userId },
    })

    if (!user) {
      throw new AppError('User not found', 404)
    }

    if (user.password && (await bcrypt.compare(password, user.password))) {
      throw new AppError(
        'New password cannot be the same as the old password',
        400,
      )
    }

    password = await bcrypt.hash(password, 10)

    const updated = await tx.user.update({
      where: { id: userId },
      data: {
        password,
      },
      omit: {
        password: true,
      },
    })

    return updated
  })

  return updatedUser ?? null
}
