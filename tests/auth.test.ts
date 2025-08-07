import { faker } from '@faker-js/faker'
import request from 'supertest'
import { app } from '../src/configs/server'
import { prisma } from '../src/configs/prisma'
import { LocalUser } from '../src/types'
import z from 'zod'
import { RegisterUserSchema } from '../src/schemas/user.schema'
import { logger } from '../src/configs/logger'
import { AuthSuccessResponseSchema } from '../src/schemas/extras.schema'

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

interface RegisterStageOneResponse {
  message: string
  otp?: string
}

let runIdPrefix: string
let testCreatedUserIds: string[] = []

let foundationalUser: LocalUser
let foundationalUserToken: string

const testPasswordGlobal = 'passwordIsSoSecure123!'

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
): Promise<{ user: LocalUser; accessToken: string; rawPassword: string }> => {
  const registrationData = generateUserRegistrationData(type, emailSuffix)

  // Step 1: Hit /auth/register/stage-one to get an OTP
  const stageOneResponse = await request(app)
    .post('/api/v1/auth/register/stage-one')
    .send({
      email: registrationData.email,
      user: registrationData, // Send the full user object
    })

  if (stageOneResponse.status !== 200) {
    throw new Error(
      `Setup (Stage 1): Registration failed with status ${stageOneResponse.status
      } and body: ${JSON.stringify(stageOneResponse.body)}`,
    )
  }

  const { otp } = stageOneResponse.body as RegisterStageOneResponse
  if (!otp) {
    throw new Error(
      'Setup (Stage 1): No OTP returned from registration. Ensure NODE_ENV is not "production".',
    )
  }

  // Step 2: Hit /auth/register/stage-two with the OTP to finalize registration
  const stageTwoResponse = await request(app)
    .post('/api/v1/auth/register/stage-two')
    .send({
      otp,
      user: registrationData,
    })

  if (stageTwoResponse.status !== 201) {
    throw new Error(
      `Setup (Stage 2): Verification failed with status ${stageTwoResponse.status
      } and body: ${JSON.stringify(stageTwoResponse.body)}`,
    )
  }

  const authData = stageTwoResponse.body as z.infer<typeof AuthSuccessResponseSchema>
  const successMessage = authData.message;
  logger.info(successMessage)
  const me = await request(app)
    .post('/api/v1/auth/me')
    .set('Authorization', `Bearer ${authData.tokens.access}`)
    .send({
      otp,
      user: registrationData,
    })
  const createdUserFromApi = me.body as MeResponseData
  const accessToken = authData.tokens.access

  if (!createdUserFromApi || !accessToken) {
    throw new Error(
      'Setup (Stage 2): User data or access token not found in verification response',
    )
  }

  // Fetch the user from the DB to ensure all relations (staff, tenant, etc.) are loaded
  const dbUser = await prisma.user.findUnique({
    where: { id: createdUserFromApi.id },
    include: { staff: true, tenant: true, vendor: true },
  })

  if (!dbUser) {
    throw new Error(
      'Setup: User not found in DB after verification, though API indicated success.',
    )
  }

  // Add the created user's ID to the global list for cleanup
  testCreatedUserIds.push(dbUser.id)

  return {
    user: dbUser as LocalUser,
    accessToken,
    rawPassword: registrationData.password!,
  }
}

// --- Test Suite Lifecycle Hooks ---

beforeAll(async () => {
  runIdPrefix = `auth_testrun_${faker.string.alphanumeric(6)}`
  console.log(`Auth Test Run ID Prefix: ${runIdPrefix}`)
  // Set up a foundational user for tests that need an existing, authenticated user
  const setup = await setupVerifiedUser('tenant', 'foundational')
  foundationalUser = setup.user
  foundationalUserToken = setup.accessToken
})

afterAll(async () => {
  // A final, broad cleanup based on the run ID prefix to catch any orphaned records
  const usersToDelete = await prisma.user.findMany({
    where: { email: { startsWith: runIdPrefix } },
    select: { id: true },
  })
  const userIdsToDelete = usersToDelete.map((u) => u.id)

  if (userIdsToDelete.length > 0) {
    // Delete role profiles first due to foreign key constraints
    await prisma.staff.deleteMany({ where: { userId: { in: userIdsToDelete } } })
    await prisma.tenant.deleteMany({ where: { userId: { in: userIdsToDelete } } })
    await prisma.vendor.deleteMany({ where: { userId: { in: userIdsToDelete } } })
    // Then delete the users
    await prisma.user.deleteMany({ where: { id: { in: userIdsToDelete } } })
  }
  await prisma.$disconnect()
})

beforeEach(() => {
  // Reset the list of created users before each test
  testCreatedUserIds = []
})

afterEach(async () => {
  // Clean up users created specifically within a single test case
  if (testCreatedUserIds.length > 0) {
    await prisma.staff.deleteMany({ where: { userId: { in: testCreatedUserIds } } })
    await prisma.tenant.deleteMany({ where: { userId: { in: testCreatedUserIds } } })
    await prisma.vendor.deleteMany({ where: { userId: { in: testCreatedUserIds } } })
    await prisma.user.deleteMany({ where: { id: { in: testCreatedUserIds } } })
  }
})

// --- Test Cases ---

describe('Auth Routes', () => {
  describe('POST /auth/register/stage-one & POST /auth/register/stage-two', () => {
    it('should successfully register a new staff user through the two-stage process', async () => {
      const registrationData = generateUserRegistrationData('staff')

      // Stage 1
      const stageOneRes = await request(app)
        .post('/api/v1/auth/register/stage-one')
        .send({ email: registrationData.email, user: registrationData })
        .expect(200)

      expect(stageOneRes.body.otp).toBeDefined()
      const { otp } = stageOneRes.body

      // Stage 2
      const stageTwoRes = await request(app)
        .post('/api/v1/auth/register/stage-two')
        .send({ otp, user: registrationData })
        .expect(201)

      expect(stageTwoRes.body.user).toBeDefined()
      expect(stageTwoRes.body.tokens.access).toBeDefined()
      expect(stageTwoRes.body.user.email).toBe(registrationData.email)
      expect(stageTwoRes.body.user.staff).toBeDefined()
      expect(stageTwoRes.body.user.staff.firstName).toBe(
        registrationData.staff!.firstName,
      )
    })

    it('should fail stage-two if the OTP is incorrect', async () => {
      const registrationData = generateUserRegistrationData('tenant')

      // Stage 1 - successful
      await request(app)
        .post('/api/v1/auth/register/stage-one')
        .send({ email: registrationData.email, user: registrationData })
        .expect(200)

      // Stage 2 - with wrong OTP
      const stageTwoRes = await request(app)
        .post('/api/v1/auth/register/stage-two')
        .send({ otp: 'WRONG_OTP', user: registrationData })
        .expect(400)

      expect(stageTwoRes.body.message).toContain('Invalid or expired OTP')
    })

    it('should fail stage-one if the email is already in use', async () => {
      // Use the foundational user's email, which is guaranteed to exist
      const registrationData = generateUserRegistrationData('vendor')
      registrationData.email = foundationalUser.email

      await request(app)
        .post('/api/v1/auth/register/stage-one')
        .send({ email: registrationData.email, user: registrationData })
        .expect(409) // 409 Conflict
    })
  })

  describe('POST /auth/login', () => {
    it('should log in a verified user and return tokens', async () => {
      const { user, rawPassword } = await setupVerifiedUser('tenant')

      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: user.email, password: rawPassword })
        .expect(200)

      expect(res.body.user).toBeDefined()
      expect(res.body.tokens.access).toBeDefined()
      expect(res.body.user.id).toBe(user.id)
    })

    it('should fail to log in with an incorrect password', async () => {
      const { user } = await setupVerifiedUser('vendor')

      await request(app)
        .post('/api/v1/auth/login')
        .send({ email: user.email, password: 'thisIsTheWrongPassword' })
        .expect(401)
    })
  })

  describe('GET /auth/me', () => {
    it('should return the current user details for a valid token', async () => {
      const res = await request(app)
        .get('/api/v1/auth/me')
        .set('Authorization', `Bearer ${foundationalUserToken}`)
        .expect(200)

      expect(res.body.user.id).toBe(foundationalUser.id)
      expect(res.body.user.email).toBe(foundationalUser.email)
      expect(res.body.user.password).toBeUndefined()
    })

    it('should return 401 Unauthorized if no token is provided', async () => {
      await request(app).get('/api/v1/auth/me').expect(401)
    })
  })
})
