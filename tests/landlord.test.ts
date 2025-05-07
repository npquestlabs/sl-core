import request from 'supertest'
import { app } from '../src/configs/server'
import { prisma } from '../src/configs/prisma'
import { describe, it, expect, beforeAll, afterAll } from '@jest/globals'
import { faker } from '@faker-js/faker'
import { generateAccessToken } from '../src/util/token'
import { Prisma } from '../generated/prisma'
import bcrypt from 'bcryptjs'
import { LocalUser } from '../src/types'

let testLandlordUser: LocalUser
let landlordToken: string

let otherTestLandlordUser: LocalUser
let otherLandlordToken: string

const createLandlordUser = async (): Promise<{
  user: LocalUser
  token: string
}> => {
  const email = faker.internet.email()
  const phone = faker.phone.number()
  const password = 'password123'

  const createData: Prisma.UserCreateInput = {
    email,
    phone,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    passwordHash: await bcrypt.hash(password, 10),
    isVerified: true,
    landlord: { create: {} },
  }

  const user = await prisma.user.create({
    data: createData,
    include: { landlord: true, tenant: true, vendor: true }, // tenant & vendor will be null
  })

  const token = generateAccessToken({
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    isVerified: user.isVerified,
    landlord: user.landlord,
    tenant: null, // Explicitly null for clarity
    vendor: null, // Explicitly null for clarity
  })
  return { user, token }
}

beforeAll(async () => {
  const landlordData = await createLandlordUser()
  testLandlordUser = landlordData.user
  landlordToken = landlordData.token

  const otherLandlordData = await createLandlordUser()
  otherTestLandlordUser = otherLandlordData.user
  otherLandlordToken = otherLandlordData.token
  expect(otherTestLandlordUser.id).toBeDefined()
  expect(otherLandlordToken).toBeDefined()
})

afterAll(async () => {
  await prisma.$disconnect()
})

describe('Landlord Specific Routes', () => {
  const landlordProfileRoute = '/landlords/me'

  describe(`GET ${landlordProfileRoute}`, () => {
    const landlordProfileData = {
      bankName: 'Test Bank International',
      bankAccount: faker.finance.accountNumber(),
      mobileMoneyNumber: faker.phone.number(),
    }

    it("should not exist as get users/me handles getting user's profile data", async () => {
      const response = await request(app)
        .get(landlordProfileRoute)
        .set('Authorization', `Bearer ${landlordToken}`)

      expect(response.status).toBe(404)

      const dbLandlordProfile = await prisma.landlord.findUnique({
        where: { id: testLandlordUser.landlord?.id },
      })
      expect(dbLandlordProfile?.bankName).toBe(
        testLandlordUser.landlord?.bankName,
      )
    })

    it('should return 401 if not authenticated', async () => {
      const response = await request(app)
        .patch(landlordProfileRoute)
        .send(landlordProfileData)
      expect(response.status).toBe(401)
    })

    it('should return 403 if authenticated user is not a landlord (e.g., a tenant tries)', async () => {
      const tenantUserForTest = await prisma.user.create({
        data: {
          email: faker.internet
            .email()
            .replace('@', '_tenant_for_landlord_test@'),
          phone: faker.phone.number(),
          firstName: 'Test',
          lastName: 'Tenant',
          passwordHash: 'hash',
          isVerified: true,
          tenant: { create: {} },
        },
        include: { tenant: true },
      })
      const tenantTokenForTest = generateAccessToken({
        id: tenantUserForTest.id,
        email: tenantUserForTest.email,
        firstName: tenantUserForTest.firstName,
        lastName: tenantUserForTest.lastName,
        isVerified: true,
        landlord: null,
        tenant: tenantUserForTest.tenant,
        vendor: null,
      })

      const response = await request(app)
        .patch(landlordProfileRoute)
        .set('Authorization', `Bearer ${tenantTokenForTest}`)
        .send(landlordProfileData)

      expect(response.status).toBe(403)
    })

    it('should return 400 for invalid data (e.g., bankAccount too long if schema has limits)', async () => {
      const invalidData = {
        ...landlordProfileData,
        bankAccount: faker.string.alphanumeric(200),
      }
      const response = await request(app)
        .patch(landlordProfileRoute)
        .set('Authorization', `Bearer ${landlordToken}`)
        .send(invalidData)

      expect(response.status).toBe(400)
      expect(response.body.error).toBeDefined()
    })
  })
})
