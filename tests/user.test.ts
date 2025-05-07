import request from 'supertest'
import { app } from '../src/configs/server'
import { prisma } from '../src/configs/prisma'
import { describe, it, expect, beforeAll, afterAll } from '@jest/globals'
import { faker } from '@faker-js/faker'
import { generateAccessToken } from '../src/util/token'
import { Prisma } from '../generated/prisma'
import bcrypt from 'bcryptjs'
import { LocalUser } from '../src/types'

let testLandlord: LocalUser
let landlordToken: string
let testTenant: LocalUser
let tenantToken: string
let testVendor: LocalUser
let vendorToken: string

const createUserWithRole = async (
  role: 'landlord' | 'tenant' | 'vendor',
  emailSuffix: string = '',
): Promise<{ user: LocalUser; token: string }> => {
  const email = faker.internet.email().replace('@', `${emailSuffix}@`)
  const phone = faker.phone.number()
  const password = 'password123'

  const createData: Prisma.UserCreateInput = {
    email,
    phone,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    passwordHash: await bcrypt.hash(password, 10),
    isVerified: true,
  }

  if (role === 'landlord') createData.landlord = { create: {} }
  else if (role === 'tenant') createData.tenant = { create: {} }
  else if (role === 'vendor')
    createData.vendor = { create: { specialty: 'Plumbing' } }

  const user = await prisma.user.create({
    data: createData,
    include: { landlord: true, tenant: true, vendor: true },
  })

  const token = generateAccessToken({
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    isVerified: user.isVerified,
    landlord: user.landlord,
    tenant: user.tenant,
    vendor: user.vendor,
  })
  return { user, token }
}

beforeAll(async () => {
  const landlordData = await createUserWithRole('landlord', '_landlord')
  testLandlord = landlordData.user
  landlordToken = landlordData.token

  const tenantData = await createUserWithRole('tenant', '_tenant')
  testTenant = tenantData.user
  tenantToken = tenantData.token

  const vendorData = await createUserWithRole('vendor', '_vendor')
  testVendor = vendorData.user
  vendorToken = vendorData.token
})

afterAll(async () => {
  await prisma.user.deleteMany()
  await prisma.$disconnect()
})

describe('User Routes (/users)', () => {
  describe('GET /users/me', () => {
    it('should get current landlord user details', async () => {
      const response = await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${landlordToken}`)
      expect(response.status).toBe(200)
      expect(response.body.id).toBe(testLandlord.id)
      expect(response.body.email).toBe(testLandlord.email)
      expect(response.body.landlord).toBeDefined()
    })

    it('should get current tenant user details', async () => {
      const response = await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${tenantToken}`)
      expect(response.status).toBe(200)
      expect(response.body.id).toBe(testTenant.id)
      expect(response.body.email).toBe(testTenant.email)
      expect(response.body.tenant).toBeDefined()
    })

    it('should get current vendor user details', async () => {
      const response = await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${vendorToken}`)
      expect(response.status).toBe(200)
      expect(response.body.id).toBe(testVendor.id)
      expect(response.body.email).toBe(testVendor.email)
      expect(response.body.vendor).toBeDefined()
    })

    it('should return 401 if not authenticated', async () => {
      const response = await request(app).get('/users/me')
      expect(response.status).toBe(401)
    })
  })

  describe('PATCH /users/me', () => {
    const updateData = {
      firstName: 'UpdatedFirstName',
      lastName: 'UpdatedLastName',
      phone: faker.phone.number(),
    }

    it('should update current user (landlord) details', async () => {
      const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${landlordToken}`)
        .send(updateData)

      expect(response.status).toBe(200)
      expect(response.body.firstName).toBe(updateData.firstName)
      expect(response.body.lastName).toBe(updateData.lastName)

      const dbUser = await prisma.user.findUnique({
        where: { id: testLandlord.id },
      })
      expect(dbUser?.firstName).toBe(updateData.firstName)
    })

    it('should update current user (tenant) details', async () => {
      const tenantUpdateData = { ...updateData, phone: faker.phone.number() }
      const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${tenantToken}`)
        .send(tenantUpdateData)

      expect(response.status).toBe(200)
      expect(response.body.firstName).toBe(tenantUpdateData.firstName)
      const dbUser = await prisma.user.findUnique({
        where: { id: testTenant.id },
      })
      expect(dbUser?.phone).toBe(tenantUpdateData.phone)
    })

    it('should return 400 for empty update data (phone, email, passwordHash must be ignored)', async () => {
      const invalidUpdate = {
        phone: 'ignored-phone-number',
        email: 'ignored-email',
        passwordHash: 'ignored-password',
      }
      const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${landlordToken}`)
        .send(invalidUpdate)
      expect(response.status).toBe(400)
      expect(response.body.error).toBeDefined()

      const dbUser = await prisma.user.findUnique({
        where: { id: testLandlord.id },
      })
      expect(dbUser?.email).toBe(testLandlord.email)
      expect(dbUser?.phone).not.toBe(invalidUpdate.phone)
      expect(dbUser?.passwordHash).not.toBe(invalidUpdate.passwordHash)
    })

    it('should return 401 if not authenticated', async () => {
      const response = await request(app).patch('/users/me').send(updateData)
      expect(response.status).toBe(401)
    })
  })
})
