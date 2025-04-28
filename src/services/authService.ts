import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
import { generateToken } from '../util/generateToken'

const prisma = new PrismaClient()

export const registerUser = async (role: string, data: any) => {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10)

    // if email needs to be verified

    const user = await prisma.users.create({
      data: { ...data, password: hashedPassword },
    })

    return { user, token: generateToken(user) }
  } catch (error) {
    throw new Error('Registration failed')
  }
}

export const login = async (email: string, password: string) => {
  try {
    const user = await prisma.users.findUnique({ where: { email } })
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials')
    }
    return { user, token: generateToken(user) }
  } catch (error) {
    throw new Error('Login failed')
  }
}

export const getUserById = async (userId: string) => {
  try {
    return await prisma.user.findUnique({ where: { id: userId } })
  } catch (error) {
    throw new Error('User retrieval failed')
  }
}
