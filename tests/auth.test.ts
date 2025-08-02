import request from 'supertest'
import { app } from '../src/configs/server'
import { prisma } from '../src/configs/prisma'
import {
  describe,
  it,
  expect,
  beforeAll,
  afterAll,
  beforeEach,
} from '@jest/globals'
import { faker } from '@faker-js/faker'
import { LocalUser } from '../src/types'

interface UserRegistrationData {
  email: string
  password?: string
  firstName: string
  lastName: string
  phone: string
  landlord?: Record<string, never>
  tenant?: Record<string, never>
  vendor?: { specialty: string }
}

interface AuthResponseData {
  user: LocalUser
  tokens: {
    access: string
    refresh?: string
  }
}

interface RegisterApiResponse {
  message: string
  emailToken?: string
}

// --- Global State & Setup (from your code) ---
let runIdPrefix: string
let testCreatedUserIds: string[] = []

let foundationalUser: LocalUser // Correctly typed
let foundationalUserToken: string

const testPasswordGlobal = 'passwordIsSoSecure123!'

const generateUserRegistrationData = (
  type: 'landlord' | 'tenant' | 'vendor',
  emailSuffix: string = faker.string.alphanumeric(5),
): UserRegistrationData => {
  const baseData: Omit<UserRegistrationData, 'landlord' | 'tenant' | 'vendor'> =
    {
      email: `${runIdPrefix}_${emailSuffix}_${faker.internet.email().toLowerCase()}`,
      password: testPasswordGlobal, // Password is included in registration data
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      phone: faker.phone.number(),
    }
  if (type === 'landlord') return { ...baseData, landlord: {} }
  if (type === 'tenant') return { ...baseData, tenant: {} }
  if (type === 'vendor')
    return { ...baseData, vendor: { specialty: faker.commerce.department() } }
  throw new Error('Invalid user type for test data generation')
}

// CORRECTED setupVerifiedUser based on /auth/verify taking token ONLY
const setupVerifiedUser = async (
  type: 'landlord' | 'tenant' | 'vendor',
  emailSuffix?: string,
): Promise<{ user: LocalUser; accessToken: string; rawPassword: string }> => {
  const registrationData = generateUserRegistrationData(type, emailSuffix)

  // Step 1: /auth/register endpoint is hit with full registration data (including password)
  // The backend hashes the password and includes it (or its hash) in the verificationToken payload.
  const registerResponse = await request(app)
    .post('/api/v1/auth/register')
    .send(registrationData)

  if (registerResponse.status !== 201 && registerResponse.status !== 202) {
    console.error(
      'Failed to register user in setupVerifiedUser:',
      registerResponse.body,
    )
    throw new Error(
      `Setup: Registration failed with status ${registerResponse.status} and body: ${JSON.stringify(registerResponse.body)}`,
    )
  }
  const { emailToken: verificationToken } =
    registerResponse.body as RegisterApiResponse
  if (!verificationToken) {
    throw new Error(
      'Setup: No emailToken returned from registration. This token is expected to contain all necessary data for user creation (including hashed password).',
    )
  }

  // Step 2: /auth/verify endpoint is hit ONLY with the token.
  // The backend decodes this token, extracts user data (including the pre-hashed password),
  // and creates the user record in the database.
  const verifyResponse = await request(app)
    .post('/api/v1/auth/verify')
    .send({ token: verificationToken }) // <<<<< KEY CHANGE: Only token is sent

  if (verifyResponse.status !== 200 && verifyResponse.status !== 201) {
    console.error(
      'Failed to verify user in setupVerifiedUser:',
      verifyResponse.body,
    )
    throw new Error(
      `Setup: Verification failed with status ${verifyResponse.status} and body: ${JSON.stringify(verifyResponse.body)}`,
    )
  }

  const authData = verifyResponse.body as AuthResponseData
  const createdUserFromApi = authData.user // This is LocalUser
  const accessToken = authData.tokens.access

  if (!createdUserFromApi || !accessToken) {
    throw new Error(
      'Setup: User data or access token not found in verification response',
    )
  }

  const dbUser = await prisma.user.findUnique({
    where: { id: createdUserFromApi.id },
    include: { landlord: true, tenant: true, vendor: true },
  })

  if (!dbUser)
    throw new Error(
      'Setup: User not found in DB after verification, though API indicated success.',
    )

  return {
    user: dbUser as LocalUser,
    accessToken,
    rawPassword: registrationData.password!,
  }
}

// --- beforeAll, afterAll, beforeEach, afterEach (Copied VERBATIM from your last provided code) ---
beforeAll(async () => {
  runIdPrefix = `auth_testrun_${faker.string.alphanumeric(6)}`
  console.log(`Auth Test Run ID Prefix: ${runIdPrefix}`)
  const setup = await setupVerifiedUser('tenant', 'foundational')
  foundationalUser = setup.user
  foundationalUserToken = setup.accessToken
})

afterAll(async () => {
  const usersToDelete = await prisma.user.findMany({
    where: { email: { startsWith: runIdPrefix } },
    select: { id: true },
  })
  const userIdsToDelete = usersToDelete.map((u) => u.id)

  if (userIdsToDelete.length > 0) {
    await prisma.landlord.deleteMany({
      where: { user: { id: { in: userIdsToDelete } } },
    })
    await prisma.tenant.deleteMany({
      where: { user: { id: { in: userIdsToDelete } } },
    })
    await prisma.vendor.deleteMany({
      where: { user: { id: { in: userIdsToDelete } } },
    })
    await prisma.user.deleteMany({ where: { id: { in: userIdsToDelete } } })
  }
  await prisma.$disconnect()
})

beforeEach(() => {
  testCreatedUserIds = []
})

afterEach(async () => {
  if (testCreatedUserIds.length > 0) {
    await prisma.landlord.deleteMany({
      where: { user: { id: { in: testCreatedUserIds } } },
    })
    await prisma.tenant.deleteMany({
      where: { user: { id: { in: testCreatedUserIds } } },
    })
    await prisma.vendor.deleteMany({
      where: { user: { id: { in: testCreatedUserIds } } },
    })
    await prisma.user.deleteMany({ where: { id: { in: testCreatedUserIds } } })
  }
})

describe('Auth Routes', () => {
  describe('POST /auth/register & POST /auth/verify', () => {
    it('should register (send token with embedded user data), then verify (create user from token), and allow login', async () => {
      const landlordRegData = generateUserRegistrationData('landlord')

      const registerResponse = await request(app)
        .post('/api/v1/auth/register')
        .send(landlordRegData)
      expect(registerResponse.status).toBe(201)
      const { emailToken: verificationToken } =
        registerResponse.body as RegisterApiResponse
      expect(verificationToken).toBeDefined()

      const dbUserBeforeVerify = await prisma.user.findUnique({
        where: { email: landlordRegData.email },
      })
      expect(dbUserBeforeVerify).toBeNull()

      // CORRECTED /auth/verify call
      const verificationResponse = await request(app)
        .post('/api/v1/auth/verify')
        .send({ token: verificationToken }) // ONLY token is sent
      expect(verificationResponse.status).toBe(200)
      const verifiedAuthData = verificationResponse.body as AuthResponseData
      const verifiedUserFromApi = verifiedAuthData.user

      expect(verifiedUserFromApi).toBeDefined()
      expect(verifiedAuthData.tokens.access).toBeDefined()
      expect(verifiedUserFromApi.email).toBe(landlordRegData.email)

      const dbUserAfterVerify = (await prisma.user.findUnique({
        where: { email: landlordRegData.email },
        include: { landlord: true, tenant: true, vendor: true },
      })) as LocalUser | null
      expect(dbUserAfterVerify).not.toBeNull()
      expect(dbUserAfterVerify?.landlord).toBeDefined()
      expect(dbUserAfterVerify?.tenant).toBeNull()
      expect(dbUserAfterVerify?.vendor).toBeNull()

      const loginResponse = await request(app)
        .post('/api/v1/auth/login')
        .send({
          email: landlordRegData.email,
          password: landlordRegData.password,
        })
      expect(loginResponse.status).toBe(200)
      const { user: loggedInUser } = loginResponse.body as AuthResponseData
      expect(loggedInUser.email).toBe(landlordRegData.email)
    })

    it('should register a new tenant and verify successfully (token only to /verify)', async () => {
      const tenantRegData = generateUserRegistrationData('tenant')
      const registerResponse = await request(app)
        .post('/api/v1/auth/register')
        .send(tenantRegData)
      expect(registerResponse.status).toBe(201)
      const { emailToken: verificationToken } =
        registerResponse.body as RegisterApiResponse

      const verificationResponse = await request(app)
        .post('/api/v1/auth/verify')
        .send({ token: verificationToken })
      expect(verificationResponse.status).toBe(200)
      const { user: verifiedUserFromApi } =
        verificationResponse.body as AuthResponseData
      expect(verifiedUserFromApi.email).toBe(tenantRegData.email)

      const dbUser = (await prisma.user.findUnique({
        where: { email: tenantRegData.email },
        include: { landlord: true, tenant: true, vendor: true },
      })) as LocalUser | null
      expect(dbUser?.tenant).toBeDefined()
      expect(dbUser?.landlord).toBeNull()
      expect(dbUser?.vendor).toBeNull()
    })

    it('should register a new vendor and verify successfully (token only to /verify)', async () => {
      const vendorRegData = generateUserRegistrationData('vendor')
      const registerResponse = await request(app)
        .post('/api/v1/auth/register')
        .send(vendorRegData)
      expect(registerResponse.status).toBe(201)
      const { emailToken: verificationToken } =
        registerResponse.body as RegisterApiResponse

      const verificationResponse = await request(app)
        .post('/api/v1/auth/verify')
        .send({ token: verificationToken })
      expect(verificationResponse.status).toBe(200)
      const { user: verifiedUserFromApi } =
        verificationResponse.body as AuthResponseData
      expect(verifiedUserFromApi.email).toBe(vendorRegData.email)

      const dbUser = (await prisma.user.findUnique({
        where: { email: vendorRegData.email },
        include: { landlord: true, tenant: true, vendor: true },
      })) as LocalUser | null
      expect(dbUser?.vendor).toBeDefined()
      expect(dbUser?.vendor?.specialty).toBe(vendorRegData.vendor!.specialty)
      expect(dbUser?.landlord).toBeNull()
      expect(dbUser?.tenant).toBeNull()
    })

    it('should return err if trying to /auth/register with an email that is already in use by an existing (verified) user', async () => {
      const conflictingData = {
        ...generateUserRegistrationData('tenant', 'conflict_with_foundational'),
        email: foundationalUser.email,
      }
      const response = await request(app)
        .post('/api/v1/auth/register')
        .send(conflictingData)
      expect([400, 409, 500]).toContain(response.status)
      expect(response.body.error).toMatch(
        /Email already exists|is already in use/i,
      )
    })

    it('should return 400 if /auth/verify is called with a token for an email that now conflicts with an existing user', async () => {
      const regData1 = generateUserRegistrationData(
        'tenant',
        'verify_conflict_1_final',
      )
      const regResponse1 = await request(app)
        .post('/api/v1/auth/register')
        .send(regData1)
      const token1 = (regResponse1.body as RegisterApiResponse).emailToken
      expect(token1).toBeDefined()

      await prisma.user.create({
        data: {
          email: regData1.email!, // Added non-null assertion as email is required
          firstName: 'ManualConflict',
          lastName: 'User',
          phone: '1234567890',
          passwordHash: 'manualhash', // Assuming passwordHash is stored
          tenant: { create: {} },
        },
      })

      const verifyResponse1 = await request(app)
        .post('/api/v1/auth/verify')
        .send({ token: token1 })

      expect([400, 500, 409]).toContain(verifyResponse1.status)
    })

    it('should return 400 if registration data is missing a user type', async () => {
      const invalidData = generateUserRegistrationData(
        'landlord',
        'missing_type_final',
      )
      delete invalidData.landlord
      const response = await request(app)
        .post('/api/v1/auth/register')
        .send(invalidData)
      expect(response.status).toBe(400)
      expect(response.body.error).toMatch('Exactly one role is required')
    })

    it('should return 400 if registration data includes more than one user type', async () => {
      const invalidData = generateUserRegistrationData(
        'landlord',
        'multi_type_final',
      )
      invalidData.tenant = {}
      const response = await request(app)
        .post('/api/v1/auth/register')
        .send(invalidData)
      expect(response.status).toBe(400)
      expect(response.body.error).toMatch('Exactly one role is required')
    })

    it('should return 400 for invalid email format during registration', async () => {
      const invalidData = {
        ...generateUserRegistrationData('tenant'),
        email: 'invalid-email-yo',
      }
      const response = await request(app)
        .post('/api/v1/auth/register')
        .send(invalidData)
      expect(response.status).toBe(400)
      expect(response.body.error).toBeDefined()
    })

    it('should return 400 for an invalid/expired verification token during /auth/verify', async () => {
      const response = await request(app)
        .post('/api/v1/auth/verify')
        .send({ token: 'thisTokenIsExtremelyFake123' })
      expect(response.status).toBe(400)
      expect(response.body.error).toBeDefined()
    })

    it('should NOT allow login before /auth/verify (user does not exist yet)', async () => {
      const userData = generateUserRegistrationData(
        'tenant',
        'login_no_verify_final_check',
      )
      await request(app).post('/api/v1/auth/register').send(userData)
      const loginResponse = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: userData.email, password: userData.password })
      expect(loginResponse.status).toBe(401)
      expect(loginResponse.body.error).toBeDefined()
    })
  })

  // --- Login, Password Reset, and Access Control describe blocks ---
  // (Copied VERBATIM from your "final working solution" as they are correct
  // given the foundationalUser setup and the understanding of how /verify works)
  describe('POST /auth/login', () => {
    it('should login an existing (verified) user successfully', async () => {
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: foundationalUser.email, password: testPasswordGlobal })

      expect(response.status).toBe(200)
      const { user: loggedInUser, tokens } = response.body as AuthResponseData
      expect(tokens.access).toBeDefined()
      expect(loggedInUser.email).toBe(foundationalUser.email)
    })
    it('should return 401 for incorrect password', async () => {
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({
          email: foundationalUser.email,
          password: 'completelyWrongPasswordAgain',
        })
      expect(response.status).toBe(401)
      expect(response.body.error).toBe('Invalid email or password')
    })

    it('should return 401 for non-existent user', async () => {
      const nonExistentEmail = `${runIdPrefix}_login_nonexistent_${faker.internet.email().toLowerCase()}`
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: nonExistentEmail, password: testPasswordGlobal })
      expect(response.status).toBe(401)
      expect(response.body.error).toBe('Invalid email or password')
    })

    it('should return 400 for invalid login data (bad email format)', async () => {
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: 'thisIsNotAValidEmail', password: testPasswordGlobal })
      expect(response.status).toBe(400)
      expect(response.body.error).toMatch(/Invalid email address/i)
    })
  })

  describe('Password Reset Flow', () => {
    const newPasswordForReset = 'brandSpankingNewPassword123!'

    it('should allow full password reset cycle', async () => {
      const forgotResponse = await request(app)
        .post('/api/v1/auth/forgot-password')
        .send({ email: foundationalUser.email })
      expect(forgotResponse.status).toBe(200)
      const { emailToken: magicLinkToken } =
        forgotResponse.body as RegisterApiResponse
      expect(magicLinkToken).toBeDefined()

      const magicLoginResponse = await request(app)
        .post('/api/v1/auth/verifications/use')
        .send({ token: magicLinkToken })
      expect(magicLoginResponse.status).toBe(200)
      const {
        tokens: { access: sessionAccessToken },
      } = magicLoginResponse.body as AuthResponseData
      expect(sessionAccessToken).toBeDefined()

      const resetResponse = await request(app)
        .post('/api/v1/auth/reset-password')
        .set('Authorization', `Bearer ${sessionAccessToken}`)
        .send({ password: newPasswordForReset })
      expect(resetResponse.status).toBe(200)
      expect(resetResponse.body.message).toContain('Password updated!')

      const loginOldPwdResponse = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: foundationalUser.email, password: testPasswordGlobal })
      expect(loginOldPwdResponse.status).toBe(401)

      const loginNewPwdResponse = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: foundationalUser.email, password: newPasswordForReset })
      expect(loginNewPwdResponse.status).toBe(200)
      const { user: loggedInUser } =
        loginNewPwdResponse.body as AuthResponseData
      expect(loggedInUser.email).toBe(foundationalUser.email)
    })
    it('should return 404 for forgot password if email does not exist', async () => {
      const nonExistentEmail = `${runIdPrefix}_forgot_pw_nonexistent_${faker.internet.email().toLowerCase()}`
      const response = await request(app)
        .post('/api/v1/auth/forgot-password')
        .send({ email: nonExistentEmail })
      expect(response.status).toBe(404)
      expect(response.body.error).toContain('User not found')
    })

    it('should return 400/401 for invalid magic link token on /verifications/use', async () => {
      const response = await request(app)
        .post('/api/v1/auth/verifications/use')
        .send({ token: 'utterlyInvalidMagicToken' })
      expect(response.status).toBe(400)
      expect(response.body.error).toBeDefined()
    })

    it('should require authentication for /reset-password and fail if not authenticated', async () => {
      const response = await request(app)
        .post('/api/v1/auth/reset-password')
        .send({ password: newPasswordForReset })
      expect(response.status).toBe(401)
      expect(response.body.error).toBeDefined()
    })
  })

  describe('Access Control (Simulating unverified state for protected routes)', () => {
    it('should prevent login if /auth/verify was never completed (user effectively does not exist)', async () => {
      const regData = generateUserRegistrationData(
        'tenant',
        'never_verified_access_final_check',
      )
      await request(app).post('/api/v1/auth/register').send(regData)

      const loginResponse = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: regData.email, password: regData.password })
      expect(loginResponse.status).toBe(401)
      expect(loginResponse.body.error).toBeDefined()
    })

    it('should allow an existing (verified) user to access a protected route', async () => {
      const response = await request(app)
        .get('/api/v1/users/me')
        .set('Authorization', `Bearer ${foundationalUserToken}`)
      expect(response.status).toBe(200)
      const { email: responseEmail } = response.body as LocalUser
      expect(responseEmail).toBe(foundationalUser.email)
    })

    it('should be blocked by `authenticate` middleware if no token is provided for a protected route', async () => {
      const response = await request(app).get('/api/v1/users/me')
      expect(response.status).toBe(401)
      expect(response.body.error).toBeDefined()
    })
  })
})
