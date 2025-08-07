/* eslint-disable @typescript-eslint/no-unused-vars */
import { faker } from '@faker-js/faker'
import request from 'supertest'
import { app } from '../src/configs/server'
import { prisma } from '../src/configs/prisma'
import { LocalUser } from '../src/types'
import { Complex } from '../generated/prisma'
import z from 'zod'
import { RegisterUserSchema } from '../src/schemas/user.schema'
import { AuthSuccessResponseSchema } from '../src/schemas/extras.schema'
import { logger } from '../src/configs/logger'

// --- Global State & Interfaces ---

let runIdPrefix: string
let testCreatedComplexIds: string[] = []
const testCreatedUserIds: string[] = []

let staffUser1: LocalUser
let staffTokens1: { access: string }
let staffUser2: LocalUser
let staffTokens2: { access: string }

const testPasswordGlobal = 'passwordIsSoSecure123!'

interface RegisterStageOneResponse {
  message: string
  otp?: string
}

// --- Test Data Generators & Setup Helpers ---

const generateComplexData = (nameSuffix: string = '') => ({
  name: `${faker.company.name()} Estates ${nameSuffix}`,
  countryCode: 'GHA',
  cityName: faker.location.city(),
  address: faker.location.streetAddress(),
  description: faker.lorem.sentence(),
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

  const baseData = {
    email,
    password: testPasswordGlobal,
  }

  if (type === 'staff') {
    return { ...baseData, staff: baseProfile }
  }
  if (type === 'tenant') {
    return { ...baseData, tenant: baseProfile }
  }
  if (type === 'vendor') {
    return {
      ...baseData,
      vendor: { ...baseProfile, specialty: faker.commerce.department() },
    }
  }
  throw new Error('Invalid user type for test data generation')
}

const setupVerifiedUser = async (
  type: 'staff' | 'tenant' | 'vendor',
  emailSuffix?: string,
): Promise<{ user: LocalUser; accessToken: string }> => {
  const registrationData = generateUserRegistrationData(type, emailSuffix)

  const stageOneResponse = await request(app)
    .post('/api/v1/auth/register/stage-one')
    .send({ email: registrationData.email, user: registrationData })

  if (stageOneResponse.status !== 200) {
    throw new Error(
      `Setup (Stage 1): Registration failed with status ${
        stageOneResponse.status
      } and body: ${JSON.stringify(stageOneResponse.body)}`,
    )
  }

  const { otp } = stageOneResponse.body as RegisterStageOneResponse
  if (!otp) {
    throw new Error(
      'Setup (Stage 1): No OTP returned. Ensure NODE_ENV is not "production".',
    )
  }

  const stageTwoResponse = await request(app)
    .post('/api/v1/auth/register/stage-two')
    .send({ otp, user: registrationData })

  if (stageTwoResponse.status !== 201) {
    throw new Error(
      `Setup (Stage 2): Verification failed with status ${
        stageTwoResponse.status
      } and body: ${JSON.stringify(stageTwoResponse.body)}`,
    )
  }

  const authData = stageTwoResponse.body as z.infer<
    typeof AuthSuccessResponseSchema
  >
  const meResponse = await request(app)
    .get('/api/v1/auth/me')
    .set('Authorization', `Bearer ${authData.tokens.access}`)

  const createdUserFromApi = meResponse.body as LocalUser
  const accessToken = authData.tokens.access

  if (!createdUserFromApi || !accessToken) {
    throw new Error('Setup (Stage 2): User data or token not found.')
  }

  const dbUser = await prisma.user.findUnique({
    where: { id: createdUserFromApi.id },
    include: { staff: true, tenant: true, vendor: true },
  })

  if (!dbUser) {
    throw new Error('Setup: User not found in DB after verification.')
  }

  testCreatedUserIds.push(dbUser.id)

  return {
    user: dbUser as LocalUser,
    accessToken,
  }
}

// --- Test Suite Lifecycle Hooks ---

beforeAll(async () => {
  runIdPrefix = `complex_testrun_${faker.string.alphanumeric(6)}`
  logger.info(`Complex Test Run ID Prefix: ${runIdPrefix}`)

  const staff1Data = await setupVerifiedUser('staff', 'staff1')
  staffUser1 = staff1Data.user
  staffTokens1 = { access: staff1Data.accessToken }

  const staff2Data = await setupVerifiedUser('staff', 'staff2')
  staffUser2 = staff2Data.user
  staffTokens2 = { access: staff2Data.accessToken }
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
  testCreatedComplexIds = []
})

afterEach(async () => {
  if (testCreatedComplexIds.length > 0) {
    await prisma.complexAssignment.deleteMany({
      where: { complexId: { in: testCreatedComplexIds } },
    })
    await prisma.complex.deleteMany({
      where: { id: { in: testCreatedComplexIds } },
    })
  }
})

// --- Test Cases ---

describe('Complex Routes (/api/v1/complexes)', () => {
  describe('POST /complexes', () => {
    it('should create a new complex for the authenticated staff user', async () => {
      const complexData = generateComplexData('_post')
      const response = await request(app)
        .post('/api/v1/complexes')
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(complexData)
        .expect(201)

      expect(response.body.name).toBe(complexData.name)
      expect(response.body.id).toBeDefined()
      testCreatedComplexIds.push(response.body.id)

      const assignment = await prisma.complexAssignment.findFirst({
        where: {
          complexId: response.body.id,
          staffId: staffUser1.staff!.id,
        },
      })
      expect(assignment).not.toBeNull()
    })

    it('should return 401 if not authenticated', async () => {
      await request(app)
        .post('/api/v1/complexes')
        .send(generateComplexData('_unauth'))
        .expect(401)
    })

    it('should return 400 for invalid data (e.g., missing name)', async () => {
      const { name: _, ...invalidData } = generateComplexData('_invalid')
      await request(app)
        .post('/api/v1/complexes')
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(invalidData)
        .expect(400)
    })
  })

  describe('GET /complexes', () => {
    it('should get a list of complexes assigned to the authenticated staff user', async () => {
      const complexData = generateComplexData('_staff1_get')
      const complexRes = await request(app)
        .post('/api/v1/complexes')
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(complexData)
        .expect(201)
      testCreatedComplexIds.push(complexRes.body.id)

      const response = await request(app)
        .get('/api/v1/complexes')
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .expect(200)

      expect(response.body.data).toBeInstanceOf(Array)
      expect(response.body.data.length).toBeGreaterThanOrEqual(1)
      expect(response.body.data.some((c: Complex) => c.id === complexRes.body.id)).toBe(true)
    })

    it('should not list complexes belonging to other staff members', async () => {
      const response = await request(app)
        .get('/api/v1/complexes')
        .set('Authorization', `Bearer ${staffTokens2.access}`)
        .expect(200)

      expect(response.body.data).toBeInstanceOf(Array)
      const complexForStaff1 = testCreatedComplexIds[0]
      expect(response.body.data.some((c: Complex) => c.id === complexForStaff1)).toBe(false)
    })
  })

  describe('GET /complexes/:complexId', () => {
    it('should get a single complex by ID if assigned', async () => {
      const complexRes = await request(app)
        .post('/api/v1/complexes')
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(generateComplexData('_get_one'))
        .expect(201)
      const complexId = complexRes.body.id
      testCreatedComplexIds.push(complexId)

      const response = await request(app)
        .get(`/api/v1/complexes/${complexId}`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .expect(200)

      expect(response.body.id).toBe(complexId)
    })

    it('should return 403 if trying to get a complex not assigned', async () => {
      const complexRes = await request(app)
        .post('/api/v1/complexes')
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(generateComplexData('_get_forbidden'))
        .expect(201)
      const complexId = complexRes.body.id
      testCreatedComplexIds.push(complexId)

      await request(app)
        .get(`/api/v1/complexes/${complexId}`)
        .set('Authorization', `Bearer ${staffTokens2.access}`)
        .expect(403)
    })
  })

  describe('PATCH /complexes/:complexId', () => {
    it('should update an assigned complex', async () => {
      const complexRes = await request(app)
        .post('/api/v1/complexes')
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(generateComplexData('_patch_target'))
        .expect(201)
      const complexId = complexRes.body.id
      testCreatedComplexIds.push(complexId)

      const updatePayload = { name: 'Updated Name' }
      const response = await request(app)
        .patch(`/api/v1/complexes/${complexId}`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(updatePayload)
        .expect(200)

      expect(response.body.name).toBe(updatePayload.name)
    })

    it('should return 403 if trying to update a complex not assigned', async () => {
      const complexRes = await request(app)
        .post('/api/v1/complexes')
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(generateComplexData('_patch_forbidden'))
        .expect(201)
      const complexId = complexRes.body.id
      testCreatedComplexIds.push(complexId)

      await request(app)
        .patch(`/api/v1/complexes/${complexId}`)
        .set('Authorization', `Bearer ${staffTokens2.access}`)
        .send({ name: 'Forbidden Update' })
        .expect(403)
    })
  })

  describe('DELETE /complexes/:complexId', () => {
    it('should delete an assigned complex', async () => {
      const complexRes = await request(app)
        .post('/api/v1/complexes')
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(generateComplexData('_delete_target'))
        .expect(201)
      const complexId = complexRes.body.id
      // Don't track for afterEach cleanup, as this test cleans it up itself

      await request(app)
        .delete(`/api/v1/complexes/${complexId}`)
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .expect(204)

      const dbComplex = await prisma.complex.findUnique({ where: { id: complexId } })
      expect(dbComplex).toBeNull()
    })

    it('should return 403 if trying to delete a complex not assigned', async () => {
      const complexRes = await request(app)
        .post('/api/v1/complexes')
        .set('Authorization', `Bearer ${staffTokens1.access}`)
        .send(generateComplexData('_delete_forbidden'))
        .expect(201)
      const complexId = complexRes.body.id
      testCreatedComplexIds.push(complexId)

      await request(app)
        .delete(`/api/v1/complexes/${complexId}`)
        .set('Authorization', `Bearer ${staffTokens2.access}`)
        .expect(403)
    })
  })
})