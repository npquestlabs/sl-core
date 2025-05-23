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
  const { password, landlord, tenant, vendor, ...userData } = data

  const createUserInput = {
    ...userData,
    passwordHash: password, // Already hashed
  }

  const createdUser = await prisma.user.create({
    data: {
      ...createUserInput,

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
      passwordHash: true,
      idType: true,
      idNumber: true,
      idDocumentUrl: true,
      phone: true,
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

  const options: jwt.SignOptions = { expiresIn: config.environment === 'production' ? '24h' : '24m' }

  const accessToken = generateToken(sanitizedUser, options)

  return { user: sanitizedUser, tokens: { access: accessToken } }
}

export const isUnusedEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (user) {
    throw new AppError('Email already in use', 400)
  }

  return true
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
      passwordHash: true,
      idType: true,
      idNumber: true,
      idDocumentUrl: true,
      phone: true,
    },
  })

  return user ?? null
}

export const getUserWithPopulatedData = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
    omit: {
      passwordHash: true,
      landlordId: true,
      tenantId: true,
      vendorId: true,
    },
    include: {
      landlord: true,
      tenant: true,
      vendor: true,
    },
  })

  if (!user) {
    throw new AppError('User not found', 404)
  }

  return user
}

export const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
    omit: {
      passwordHash: true,
    },
  })

  if (!user) {
    throw new AppError('User not found', 404)
  }

  return user
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
      passwordHash: true,
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

    if (await bcrypt.compare(password, user.passwordHash)) {
      throw new AppError(
        'New password cannot be the same as the old password',
        400,
      )
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const updated = await tx.user.update({
      where: { id: userId },
      data: {
        passwordHash,
      },
      omit: {
        passwordHash: true,
        idType: true,
        idNumber: true,
        idDocumentUrl: true,
        phone: true,
      },
    })

    return updated
  })

  return updatedUser ?? null
}
