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
import { Landlord, Complex, User } from '../generated/prisma'
import { generateToken } from '../src/util/token'

let runIdPrefix: string

let testCreatedComplexIds: string[] = []

let landlordUser: User
let otherLandlordUser: User
let landlord: Landlord
let landlordTokens: { access: string }
let otherLandlord: Landlord

const generateComplexData = (nameSuffix: string = '') => ({
  name: `${faker.company.name()} Complex ${faker.string.alphanumeric(4)}${nameSuffix}`,
  description: faker.lorem.sentence(),
  countryCode: 'GHA',
  cityName: faker.location.city(),
  street: faker.location.streetAddress(),
  address: faker.location.secondaryAddress(),
})

// Helper to set up a landlord (foundational or temporary)
// Foundational landlords (from beforeAll) will use the runIdPrefix.
// Temporary landlords created within a test won't be automatically tracked by this helper for afterEach cleanup;
// that would need to be handled explicitly in the test if such a landlord's ID needs afterEach cleanup.
const setupLandlord = async (emailPrefix: string, phoneSuffix: string = '') => {
  const user = await prisma.user.create({
    data: {
      email: `${emailPrefix}_${faker.internet.email().toLowerCase()}`,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      phone: `${faker.phone.number()}${phoneSuffix}`,
      passwordHash: await faker.internet.password(),
      landlord: {
        create: {},
      },
    },
    include: { landlord: true },
  })
  return {
    user,
    landlord: user.landlord!,
    tokens: {
      access: generateToken({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        landlord: user.landlord,
        tenant: null,
        vendor: null,
      }),
    },
  }
}

// Helper to create a complex and track its ID for per-test cleanup (afterEach)
const createComplexForTestAndTrack = async (
  data: Omit<
    Complex,
    'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'notes'
  > & { landlordId: string },
): Promise<Complex> => {
  const complex = await prisma.complex.create({ data })
  testCreatedComplexIds.push(complex.id)
  return complex
}

// Runs ONCE before all tests in this file
beforeAll(async () => {
  runIdPrefix = `testrun_${faker.string.alphanumeric(8)}`

  const landlord1Details = await setupLandlord(runIdPrefix, '_L1')
  landlordUser = landlord1Details.user
  landlord = landlord1Details.landlord
  landlordTokens = landlord1Details.tokens

  const landlord2Details = await setupLandlord(runIdPrefix, '_L2')
  otherLandlordUser = landlord2Details.user
  otherLandlord = landlord2Details.landlord

  console.log(`Landlord 1: ${landlordUser.email}`)
  console.log(`Landlord 2: ${otherLandlordUser.email}`)
  console.log(`Run ID Prefix: ${runIdPrefix}`)
})

// Runs ONCE after all tests in this file
afterAll(async () => {
  // Clean up all data associated with this specific test suite run,
  // identified by the runIdPrefix in the foundational users' emails.
  // Order: Complexes -> Landlords -> Users

  // Delete complexes belonging to the run-specific landlords
  if (landlord?.id || otherLandlord?.id) {
    const landlordIdsForRun: string[] = []
    if (landlord?.id) landlordIdsForRun.push(landlord.id)
    if (otherLandlord?.id) landlordIdsForRun.push(otherLandlord.id)

    if (landlordIdsForRun.length > 0) {
      await prisma.complex.deleteMany({
        where: { landlordId: { in: landlordIdsForRun } },
      })
    }
  }

  // Delete the run-specific landlords (identified by their user's email prefix)
  await prisma.landlord.deleteMany({
    where: { user: { email: { startsWith: runIdPrefix } } },
  })

  // Delete the run-specific users
  await prisma.user.deleteMany({
    where: { email: { startsWith: runIdPrefix } },
  })

  await prisma.$disconnect()
})

// Runs BEFORE EACH 'it' block in the entire file
beforeEach(async () => {
  // Reset tracking arrays for entities created *within* the upcoming test
  testCreatedComplexIds = []
})

// Runs AFTER EACH 'it' block in the entire file
afterEach(async () => {
  // Clean up entities created *specifically by the test that just ran*
  if (testCreatedComplexIds.length > 0) {
    await prisma.complex.deleteMany({
      where: { id: { in: testCreatedComplexIds } },
    })
  }
  // Add cleanup for other tracked entity types if necessary (e.g., testCreatedUnitIds)
})

describe('Complex Routes', () => {
  describe('POST /complexes', () => {
    it('should create a new complex for the authenticated landlord', async () => {
      const complexData = generateComplexData('_post')
      const response = await request(app)
        .post('/api/v1/complexes')
        .set('Authorization', `Bearer ${landlordTokens.access}`)
        .send(complexData)

      expect(response.status).toBe(200)
      expect(response.body.name).toBe(complexData.name)
      expect(response.body.landlordId).toBe(landlord.id) // landlord is run-specific
      testCreatedComplexIds.push(response.body.id) // Track for afterEach cleanup

      const dbComplex = await prisma.complex.findUnique({
        where: { id: response.body.id },
      })
      expect(dbComplex).not.toBeNull()
    })

    // ... other POST tests (401, 400) remain largely the same, as they don't create data successfully
    it('should return 401 if not authenticated', async () => {
      const complexData = generateComplexData()
      const response = await request(app)
        .post('/api/v1/complexes')
        .send(complexData)
      expect(response.status).toBe(401)
    })

    it('should return 400 for invalid complex data', async () => {
      const complexData = generateComplexData()
      const response = await request(app)
        .post('/api/v1/complexes')
        .set('Authorization', `Bearer ${landlordTokens.access}`)
        .send({ ...complexData, name: '' })
      expect(response.status).toBe(400)
    })
  })

  describe('GET /complexes', () => {
    it('should get an empty list of complexes if none exist for the authenticated landlord', async () => {
      // `landlord` is specific to this test run.
      // `afterEach` from previous tests (if any) and `beforeEach` for this test ensure a clean slate for *tracked* items.
      const response = await request(app)
        .get('/api/v1/complexes')
        .set('Authorization', `Bearer ${landlordTokens.access}`)

      expect(response.status).toBe(200)
      expect(response.body.data).toBeInstanceOf(Array)
      expect(response.body.data.length).toBe(0)
      expect(response.body.meta.total).toBe(0)
    })

    it('should get a list of complexes specifically created for the authenticated landlord', async () => {
      const complexData = generateComplexData('_get_list')
      // Use helper to create and track for afterEach
      const createdComplex = await createComplexForTestAndTrack({
        ...complexData,
        landlordId: landlord.id,
      })

      // Create a complex for the *other foundational landlord* of this test run.
      // This complex will be cleaned up by afterAll, not this test's afterEach (unless explicitly tracked).
      await prisma.complex.create({
        data: {
          ...generateComplexData('_other_landlord_temp'),
          landlordId: otherLandlord.id,
        },
      })

      const response = await request(app)
        .get('/api/v1/complexes')
        .set('Authorization', `Bearer ${landlordTokens.access}`)

      expect(response.status).toBe(200)
      expect(response.body.data).toBeInstanceOf(Array)
      expect(response.body.data.length).toBe(1)
      expect(response.body.data[0].id).toBe(createdComplex.id)
      expect(response.body.meta.total).toBe(1)
    })

    it('should support pagination (page and limit)', async () => {
      const numComplexesToCreate = 6
      const createdComplexesApi: Complex[] = [] // For checking order if needed
      for (let i = 0; i < numComplexesToCreate; i++) {
        const c = await createComplexForTestAndTrack({
          ...generateComplexData(`_pg_${i + 1}`),
          landlordId: landlord.id,
        })
        createdComplexesApi.push(c)
      }
      // This one for otherLandlord is not part of landlordToken's results or afterEach cleanup for this test
      await prisma.complex.create({
        data: {
          ...generateComplexData('_pg_other'),
          landlordId: otherLandlord.id,
        },
      })

      const responsePage1 = await request(app)
        .get('/api/v1/complexes?page=1&limit=3')
        .set('Authorization', `Bearer ${landlordTokens.access}`)
      expect(responsePage1.status).toBe(200)
      expect(responsePage1.body.data.length).toBe(3)
      expect(responsePage1.body.meta.total).toBe(numComplexesToCreate)

      const responsePage2 = await request(app)
        .get('/api/v1/complexes?page=2&limit=3')
        .set('Authorization', `Bearer ${landlordTokens.access}`)
      expect(responsePage2.status).toBe(200)
      expect(responsePage2.body.data.length).toBe(3)
      expect(responsePage2.body.meta.total).toBe(numComplexesToCreate)
    })

    it('should support filtering by name', async () => {
      const uniqueName = `${runIdPrefix}_UniqueSearchName_${faker.string.alphanumeric(5)}`
      const targetComplex = await createComplexForTestAndTrack({
        ...generateComplexData(),
        name: uniqueName,
        landlordId: landlord.id,
      })
      await createComplexForTestAndTrack({
        // Another complex for the same landlord, won't match filter
        ...generateComplexData('_filter_nonmatch'),
        landlordId: landlord.id,
      })

      const response = await request(app)
        .get(`/api/v1/complexes?filter=${uniqueName.substring(0, 25)}`) // Use a significant part of unique name
        .set('Authorization', `Bearer ${landlordTokens.access}`)
      console.log(response.body)
      expect(response.status).toBe(200)
      expect(response.body.data.length).toBe(1)
      expect(response.body.data[0].id).toBe(targetComplex.id)
      expect(response.body.meta.total).toBe(1)
    })
    // ... GET /complexes 401 test remains the same
    it('should return 401 if not authenticated', async () => {
      const response = await request(app).get('/api/v1/complexes')
      expect(response.status).toBe(401)
    })
  })

  describe('GET /complexes/:complexId', () => {
    let complexOfLandlord: Complex
    let complexOfOtherRunLandlord: Complex // Belongs to otherLandlord of this run

    beforeEach(async () => {
      // This runs AFTER global beforeEach
      complexOfLandlord = await createComplexForTestAndTrack({
        ...generateComplexData('_get_by_id'),
        landlordId: landlord.id,
      })
      // This complex belongs to `otherLandlord` (part of the same test run).
      // It will be cleaned by `afterAll`. Not tracked for this test's `afterEach`.
      complexOfOtherRunLandlord = await prisma.complex.create({
        data: {
          ...generateComplexData('_get_by_id_other'),
          landlordId: otherLandlord.id,
        },
      })
    })

    it('should get a specific complex if owned by the authenticated landlord', async () => {
      const response = await request(app)
        .get(`/api/v1/complexes/${complexOfLandlord.id}`)
        .set('Authorization', `Bearer ${landlordTokens.access}`)
      expect(response.status).toBe(200)
      expect(response.body.id).toBe(complexOfLandlord.id)
    })

    it('should return 404 if complex belongs to another landlord (of this run)', async () => {
      const response = await request(app)
        .get(`/api/v1/complexes/${complexOfOtherRunLandlord.id}`)
        .set('Authorization', `Bearer ${landlordTokens.access}`)
      expect(response.status).toBe(404)
    })
    // ... Other GET /complexes/:complexId tests (404 non-existent, 401) remain similar
    it('should return 404 if complex does not exist', async () => {
      const nonExistentId = faker.string.uuid()
      const response = await request(app)
        .get(`/api/v1/complexes/${nonExistentId}`)
        .set('Authorization', `Bearer ${landlordTokens.access}`)
      expect(response.status).toBe(404)
    })
    it('should return 401 if not authenticated', async () => {
      const response = await request(app).get(
        `/api/v1/complexes/${complexOfLandlord.id}`,
      )
      expect(response.status).toBe(401)
    })
  })

  describe('PATCH /complexes/:complexId', () => {
    let complexToUpdate: Complex
    const updateData = { name: 'Updated Complex Name by Patch Test' }

    beforeEach(async () => {
      complexToUpdate = await createComplexForTestAndTrack({
        ...generateComplexData('_patch_target'),
        landlordId: landlord.id,
      })
    })

    it('should update a complex if owned by the authenticated landlord', async () => {
      const response = await request(app)
        .patch(`/api/v1/complexes/${complexToUpdate.id}`)
        .set('Authorization', `Bearer ${landlordTokens.access}`)
        .send(updateData)
      expect(response.status).toBe(200)
      expect(response.body.name).toBe(updateData.name)
    })

    it('should return 404 if complex belongs to another landlord (of this run)', async () => {
      const otherComplex = await prisma.complex.create({
        // Belongs to otherLandlord of this run
        data: {
          ...generateComplexData('_patch_other'),
          landlordId: otherLandlord.id,
        },
      })
      // This otherComplex will be cleaned by afterAll.
      // If immediate cleanup after this test was vital, one could:
      // testCreatedComplexIds.push(otherComplex.id); // to clean in this test's afterEach
      // OR await prisma.complex.delete({ where: {id: otherComplex.id }}); // manual immediate
      const response = await request(app)
        .patch(`/api/v1/complexes/${otherComplex.id}`)
        .set('Authorization', `Bearer ${landlordTokens.access}`)
        .send(updateData)
      expect(response.status).toBe(404)
      await prisma.complex.delete({ where: { id: otherComplex.id } }) // Manual immediate for hygiene
    })
    // ... Other PATCH tests (400, 401, 404 non-existent) remain similar
    it('should return 400 for invalid update data', async () => {
      const response = await request(app)
        .patch(`/api/v1/complexes/${complexToUpdate.id}`)
        .set('Authorization', `Bearer ${landlordTokens.access}`)
        .send({ name: '' })
      expect(response.status).toBe(400)
    })
    it('should return 401 if not authenticated', async () => {
      const response = await request(app)
        .patch(`/api/v1/complexes/${complexToUpdate.id}`)
        .send(updateData)
      expect(response.status).toBe(401)
    })
    it('should return 404 if complex does not exist for patching', async () => {
      const nonExistentId = faker.string.uuid()
      const response = await request(app)
        .patch(`/api/v1/complexes/${nonExistentId}`)
        .set('Authorization', `Bearer ${landlordTokens.access}`)
        .send(updateData)
      expect(response.status).toBe(404)
    })
  })

  describe('DELETE /complexes/:complexId', () => {
    let complexToDelete: Complex

    beforeEach(async () => {
      complexToDelete = await createComplexForTestAndTrack({
        ...generateComplexData('_delete_target'),
        landlordId: landlord.id,
      })
    })

    it('should soft delete a complex if owned by the authenticated landlord', async () => {
      const response = await request(app)
        .delete(`/api/v1/complexes/${complexToDelete.id}`)
        .set('Authorization', `Bearer ${landlordTokens.access}`)
      expect(response.status).toBe(200)
      expect(response.body.deletedAt).not.toBeNull()
      // The complex is soft-deleted. `afterEach` will hard-delete it via `deleteMany`.
    })

    it('should return 404 if complex belongs to another landlord (of this run)', async () => {
      const otherComplex = await prisma.complex.create({
        // Belongs to otherLandlord of this run
        data: {
          ...generateComplexData('_delete_other'),
          landlordId: otherLandlord.id,
        },
      })
      // This otherComplex will be cleaned by afterAll.
      const response = await request(app)
        .delete(`/api/v1/complexes/${otherComplex.id}`)
        .set('Authorization', `Bearer ${landlordTokens.access}`)
      expect(response.status).toBe(404)
      await prisma.complex.delete({ where: { id: otherComplex.id } }) // Manual immediate for hygiene
    })
    // ... Other DELETE tests (401, 404 non-existent) remain similar
    it('should return 401 if not authenticated', async () => {
      const response = await request(app).delete(
        `/api/v1/complexes/${complexToDelete.id}`,
      )
      expect(response.status).toBe(401)
    })
    it('should return 404 if complex does not exist for deleting', async () => {
      const nonExistentId = faker.string.uuid()
      const response = await request(app)
        .delete(`/api/v1/complexes/${nonExistentId}`)
        .set('Authorization', `Bearer ${landlordTokens.access}`)
      expect(response.status).toBe(404)
    })
  })
})
