/* eslint-disable @typescript-eslint/no-unused-vars */
import { faker } from '@faker-js/faker'
import request from 'supertest'
import { app } from '../src/configs/server'
import { prisma } from '../src/configs/prisma'
import { LocalUser } from '../src/types'
import { Complex, UnitType } from '../generated/prisma'
import z from 'zod'
import { RegisterUserSchema } from '../src/schemas/user.schema'
import { AuthSuccessResponseSchema } from '../src/schemas/extras.schema'
import { logger } from '../src/configs/logger'

// --- Global State & Interfaces ---

let runIdPrefix: string
let testCreatedUnitIds: string[] = []
const testCreatedUserIds: string[] = []

let staffUser1: LocalUser
let staffTokens1: { access: string }
let complex1: Complex

let staffUser2: LocalUser
let staffTokens2: { access: string }
let complex2: Complex

const testPasswordGlobal = 'passwordIsSoSecure123!'

interface RegisterStageOneResponse {
  message: string
  otp?: string
}

interface MeResponseData {
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  user: {
    id: string;
    email: string;
  }
}

// --- Test Data Generators & Setup Helpers ---

const generateUnitData = (): {
  unitNumber: string
  type: UnitType
  bedrooms: number
  rent: number
} => ({
  unitNumber: faker.string.alphanumeric(4).toUpperCase(),
  type: 'APARTMENT',
  bedrooms: faker.number.int({ min: 1, max: 4 }),
  rent: faker.number.int({ min: 1000, max: 5000 }),
})

const generateUserRegistrationData = (
  type: 'staff' | 'tenant' | 'vendor',
  emailSuffix: string = faker.string.alphanumeric(5),
): z.infer<typeof RegisterUserSchema> => {
  const email = `${runIdPrefix}_${emailSuffix}_${faker.internet.email().toLowerCase()}`
  const baseProfile = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: faker.phone.number(),
  }
  const baseData = { email, password: testPasswordGlobal }

  if (type === 'staff') return { ...baseData, staff: baseProfile }
  throw new Error('Invalid user type for test data generation')
}

const setupVerifiedUser = async (
  type: 'staff',
  emailSuffix?: string,
): Promise<{ user: LocalUser; accessToken: string }> => {
  const registrationData = generateUserRegistrationData(type, emailSuffix)

  const stageOneResponse = await request(app)
    .post('/api/v1/auth/register/stage-one')
    .send({ email: registrationData.email, user: registrationData })
  if (stageOneResponse.status !== 200)
    throw new Error(`Setup (Stage 1) failed: ${stageOneResponse.text}`)

  const { otp } = stageOneResponse.body as RegisterStageOneResponse
  if (!otp) throw new Error('Setup (Stage 1): No OTP returned.')

  const stageTwoResponse = await request(app)
    .post('/api/v1/auth/register/stage-two')
    .send({ otp, user: registrationData })
  if (stageTwoResponse.status !== 201)
    throw new Error(`Setup (Stage 2) failed: ${stageTwoResponse.text}`)

  const authData = stageTwoResponse.body as z.infer<
    typeof AuthSuccessResponseSchema
  >
  const meResponse = await request(app)
    .get('/api/v1/auth/me')
    .set('Authorization', `Bearer ${authData.tokens.access}`)

  const dbUser = await prisma.user.findUnique({
    where: { id: meResponse.body.id },
    include: { staff: true },
  })
  if (!dbUser) throw new Error('Setup: User not found in DB.')

  testCreatedUserIds.push(dbUser.id)
  return { user: { ...dbUser, tenant: null, vendor: null }, accessToken: authData.tokens.access }
}

const createComplexForStaff = async (
  staffToken: string,
  nameSuffix: string,
): Promise<Complex> => {
  const complexData = {
    name: `${faker.company.name()} ${nameSuffix}`,
    countryCode: 'GHA',
    cityName: faker.location.city(),
  }
  const response = await request(app)
    .post('/api/v1/complexes')
    .set('Authorization', `Bearer ${staffToken}`)
    .send(complexData)
  if (response.status !== 201)
    throw new Error(`Setup: Failed to create complex: ${response.text}`)
  return response.body
}

// --- Test Suite Lifecycle Hooks ---

beforeAll(async () => {
  runIdPrefix = `unit_testrun_${faker.string.alphanumeric(6)}`
  logger.info(`Unit Test Run ID Prefix: ${runIdPrefix}`)

  // Setup first staff user and their complex
  const staff1Data = await setupVerifiedUser('staff', 'staff1')
  staffUser1 = staff1Data.user
  staffTokens1 = { access: staff1Data.accessToken }
  complex1 = await createComplexForStaff(staffTokens1.access, 'Complex1')

  // Setup second staff user and their complex
  const staff2Data = await setupVerifiedUser('staff', 'staff2')
  staffUser2 = staff2Data.user
  staffTokens2 = { access: staff2Data.accessToken }
  complex2 = await createComplexForStaff(staffTokens2.access, 'Complex2')
})

afterAll(async () => {
  const users = await prisma.user.findMany({
    where: { email: { startsWith: runIdPrefix } },
    include: { staff: true },
  })
  const userIds = users.map((u) => u.id)
  const staffIds = users.map((u) => u.staff?.id).filter(Boolean) as string[]

  if (staffIds.length > 0) {
    const complexes = await prisma.complex.findMany({
      where: { assignments: { some: { staffId: { in: staffIds } } } },
    })
    const complexIds = complexes.map((c) => c.id)

    if (complexIds.length > 0) {
      await prisma.unit.deleteMany({ where: { complexId: { in: complexIds } } })
      await prisma.complexAssignment.deleteMany({
        where: { complexId: { in: complexIds } },
      })
      await prisma.complex.deleteMany({ where: { id: { in: complexIds } } })
    }
  }

  if (userIds.length > 0) {
    await prisma.staff.deleteMany({ where: { userId: { in: userIds } } })
    await prisma.user.deleteMany({ where: { id: { in: userIds } } })
  }

  await prisma.$disconnect()
})

beforeEach(() => {
  testCreatedUnitIds = []
})

afterEach(async () => {
  if (testCreatedUnitIds.length > 0) {
    await prisma.unit.deleteMany({ where: { id: { in: testCreatedUnitIds } } })
  }
})

// --- Test Cases ---

describe('Unit Routes (/api/v1/complexes/:complexId/units)', () => {
  describe('POST /complexes/:complexId/units', () => {
    it('should create a new unit in the specified complex', async () => {
      const unitData = generateUnitData()
      const response = await request(app)
        .post(`/api/v1/complexes/${complex1.id}/units`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(unitData)
        .expect(201)

      expect(response.body.unitNumber).toBe(unitData.unitNumber)
      expect(response.body.complexId).toBe(complex1.id)
      testCreatedUnitIds.push(response.body.id)
    })

    it('should return 403 if staff tries to create a unit in a complex they do not manage', async () => {
      await request(app)
        .post(`/api/v1/complexes/${complex2.id}/units`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(generateUnitData())
        .expect(403)
    })

    it('should return 400 for invalid data (e.g., missing unitNumber)', async () => {
      const { unitNumber, ...invalidData } = generateUnitData()
      await request(app)
        .post(`/api/v1/complexes/${complex1.id}/units`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(invalidData)
        .expect(400)
    })
  })

  describe('GET /complexes/:complexId/units', () => {
    it('should get a list of units for a managed complex', async () => {
      // Create a unit to ensure the list is not empty
      await request(app)
        .post(`/api/v1/complexes/${complex1.id}/units`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(generateUnitData())
        .expect(201)

      const response = await request(app)
        .get(`/api/v1/complexes/${complex1.id}/units`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .expect(200)

      expect(response.body.data).toBeInstanceOf(Array)
      expect(response.body.data.length).toBeGreaterThanOrEqual(1)
      expect(response.body.data[0].complexId).toBe(complex1.id)
    })

    it('should return 403 if trying to list units for an unmanaged complex', async () => {
      await request(app)
        .get(`/api/v1/complexes/${complex2.id}/units`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .expect(403)
    })
  })

  describe('GET /complexes/:complexId/units/:unitId', () => {
    it('should get a single unit by ID from a managed complex', async () => {
      const unitRes = await request(app)
        .post(`/api/v1/complexes/${complex1.id}/units`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(generateUnitData())
        .expect(201)
      const unitId = unitRes.body.id
      testCreatedUnitIds.push(unitId)

      const response = await request(app)
        .get(`/api/v1/complexes/${complex1.id}/units/${unitId}`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .expect(200)

      expect(response.body.id).toBe(unitId)
    })

    it('should return 403 when trying to get a unit from an unmanaged complex', async () => {
      const unitRes = await request(app)
        .post(`/api/v1/complexes/${complex2.id}/units`)
        .set('Authorization', `Bearer ${staffTokens2.access}`)
        .send(generateUnitData())
        .expect(201)
      const unitId = unitRes.body.id

      await request(app)
        .get(`/api/v1/complexes/${complex2.id}/units/${unitId}`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .expect(403)
    })
  })

  describe('PATCH /complexes/:complexId/units/:unitId', () => {
    it('should update a unit in a managed complex', async () => {
      const unitRes = await request(app)
        .post(`/api/v1/complexes/${complex1.id}/units`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(generateUnitData())
        .expect(201)
      const unitId = unitRes.body.id
      testCreatedUnitIds.push(unitId)

      const updatePayload = { rent: 9999 }
      const response = await request(app)
        .patch(`/api/v1/complexes/${complex1.id}/units/${unitId}`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(updatePayload)
        .expect(200)

      expect(response.body.rent).toBe(updatePayload.rent)
    })

    it('should return 403 when trying to update a unit in an unmanaged complex', async () => {
      const unitRes = await request(app)
        .post(`/api/v1/complexes/${complex2.id}/units`)
        .set('Authorization', `Bearer ${staffTokens2.access}`)
        .send(generateUnitData())
        .expect(201)
      const unitId = unitRes.body.id

      await request(app)
        .patch(`/api/v1/complexes/${complex2.id}/units/${unitId}`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send({ rent: 1234 })
        .expect(403)
    })
  })

  describe('DELETE /complexes/:complexId/units/:unitId', () => {
    it('should delete a unit from a managed complex', async () => {
      const unitRes = await request(app)
        .post(`/api/v1/complexes/${complex1.id}/units`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(generateUnitData())
        .expect(201)
      const unitId = unitRes.body.id

      await request(app)
        .delete(`/api/v1/complexes/${complex1.id}/units/${unitId}`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .expect(204)

      const dbUnit = await prisma.unit.findUnique({ where: { id: unitId } })
      expect(dbUnit).toBeNull()
    })

    it('should return 403 when trying to delete a unit from an unmanaged complex', async () => {
      const unitRes = await request(app)
        .post(`/api/v1/complexes/${complex2.id}/units`)
        .set('Authorization', `Bearer ${staffTokens2.access}`)
        .send(generateUnitData())
        .expect(201)
      const unitId = unitRes.body.id

      await request(app)
        .delete(`/api/v1/complexes/${complex2.id}/units/${unitId}`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .expect(403)
    })
  })
})