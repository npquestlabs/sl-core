/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { generateAccessToken } from '../src/util/token'
import {
  Landlord,
  User,
  Complex,
  Unit,
  Tenant,
  UnitType,
  Prisma,
} from '../generated/prisma'

let landlordUser: User
let landlord: Landlord
let landlordToken: string
let testComplex: Complex

let tenantUser: User
let tenant: Tenant
let tenantToken: string

let otherLandlordUser: User
let otherLandlord: Landlord
// let otherLandlordToken: string; // Not used in current tests but good for future

const setupUserWithRole = async (
  email: string,
  phone: string,
  role: 'landlord' | 'tenant',
) => {
  const userData: Prisma.UserCreateInput = {
    email: email,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: phone,
    passwordHash: faker.internet.password(),
    isVerified: true,
  }

  if (role === 'landlord') {
    userData.landlord = { create: {} }
  } else {
    userData.tenant = { create: {} }
  }

  const user = await prisma.user.create({
    data: userData,
    include: { landlord: true, tenant: true },
  })

  return {
    user,
    profile: role === 'landlord' ? user.landlord! : user.tenant!,
    token: generateAccessToken({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      isVerified: user.isVerified,
      landlord: user.landlord,
      tenant: user.tenant,
      vendor: null,
    }),
  }
}

beforeAll(async () => {
  // await prisma.lease.deleteMany()
  // await prisma.unit.deleteMany()
  // await prisma.complex.deleteMany()
  // await prisma.user.deleteMany()

  const landlordData = await setupUserWithRole(
    faker.internet.email().toLowerCase(),
    faker.phone.number(),
    'landlord',
  )
  landlordUser = landlordData.user
  landlord = landlordData.profile as Landlord
  landlordToken = landlordData.token

  const tenantData = await setupUserWithRole(
    faker.internet.email().toLowerCase(),
    faker.phone.number(),
    'tenant',
  )
  tenantUser = tenantData.user
  tenant = tenantData.profile as Tenant
  tenantToken = tenantData.token

  const otherLandlordData = await setupUserWithRole(
    faker.internet.email().toLowerCase(),
    faker.phone.number(),
    'landlord',
  )
  otherLandlordUser = otherLandlordData.user
  otherLandlord = otherLandlordData.profile as Landlord
  // otherLandlordToken = otherLandlordData.token;

  testComplex = await prisma.complex.create({
    data: {
      name: 'Test Complex for Units',
      landlordId: landlord.id,
      countryCode: 'GHA',
      cityName: 'Accra',
    },
  })
})

afterAll(async () => {
  // await prisma.lease.deleteMany()
  // await prisma.unit.deleteMany()
  // await prisma.complex.deleteMany()
  // await prisma.user.deleteMany()
  await prisma.$disconnect()
})

beforeEach(async () => {
  await prisma.unit.deleteMany({ where: { complexId: testComplex.id } })
})

describe('Unit Routes', () => {
  const unitData = {
    label: 'Unit A1',
    type: UnitType.APARTMENT,
    description: 'A cozy apartment unit',
    rentAmount: 500,
    rentAmountCurrency: 'GHS',
  }

  describe('POST /complexes/:complexId/units', () => {
    it('should create a new unit in the specified complex for the landlord', async () => {
      const response = await request(app)
        .post(`/complexes/${testComplex.id}/units`)
        .set('Authorization', `Bearer ${landlordToken}`)
        .send(unitData)

      expect(response.status).toBe(201)
      expect(response.body.label).toBe(unitData.label)
      expect(response.body.complexId).toBe(testComplex.id)
    })

    it('should return 404 if landlord tries to create unit in another landlord complex', async () => {
      const otherComplex = await prisma.complex.create({
        data: {
          name: "Other's Complex",
          landlordId: otherLandlord.id,
          countryCode: 'GHA',
          cityName: 'Kumasi',
        },
      })
      const response = await request(app)
        .post(`/complexes/${otherComplex.id}/units`)
        .set('Authorization', `Bearer ${landlordToken}`) // Landlord 1 token
        .send(unitData)
      expect(response.status).toBe(404)
      if (response.status === 201) {
        await prisma.unit.delete({ where: { id: response.body.id } })
      }
    })

    it('should return 401 if not authenticated', async () => {
      const response = await request(app)
        .post(`/complexes/${testComplex.id}/units`)
        .send(unitData)
      expect(response.status).toBe(401)
    })
  })

  describe('GET /complexes/:complexId/units', () => {
    let unitInComplex: Unit
    beforeEach(async () => {
      unitInComplex = await prisma.unit.create({
        data: { ...unitData, complexId: testComplex.id },
      })
    })

    it('should get units for a complex owned by the landlord', async () => {
      const response = await request(app)
        .get(`/complexes/${testComplex.id}/units`)
        .set('Authorization', `Bearer ${landlordToken}`)

      expect(response.status).toBe(200)
      expect(response.body.data).toBeInstanceOf(Array)
      expect(response.body.data.length).toBe(1)
      expect(response.body.data[0].id).toBe(unitInComplex.id)
    })

    it('should return 403 if landlord tries to get units from another landlord complex', async () => {
      const otherComplex = await prisma.complex.create({
        data: {
          name: "Other's Complex",
          landlordId: otherLandlord.id,
          countryCode: 'GHA',
          cityName: 'Kumasi',
        },
      })
      const response = await request(app)
        .get(`/complexes/${otherComplex.id}/units`)
        .set('Authorization', `Bearer ${landlordToken}`)
      expect(response.status).toBe(403)
    })
  })

  describe('GET /units/:unitId', () => {
    let testUnit: Unit
    beforeEach(async () => {
      testUnit = await prisma.unit.create({
        data: { ...unitData, complexId: testComplex.id },
      })
    })

    it('should get a specific unit if landlord owns the complex', async () => {
      const response = await request(app)
        .get(`/units/${testUnit.id}`)
        .set('Authorization', `Bearer ${landlordToken}`)
      expect(response.status).toBe(200)
      expect(response.body.id).toBe(testUnit.id)
    })

    it('should get a specific unit if tenant is assigned to the unit', async () => {
      const unitWithTenant = await prisma.unit.update({
        where: { id: testUnit.id },
        data: { tenantId: tenant.id },
      })
      const response = await request(app)
        .get(`/units/${unitWithTenant.id}`)
        .set('Authorization', `Bearer ${tenantToken}`)
      expect(response.status).toBe(200)
      expect(response.body.id).toBe(unitWithTenant.id)
    })

    it('should return 403 if tenant tries to access unit not assigned to them', async () => {
      const response = await request(app)
        .get(`/units/${testUnit.id}`) // testUnit is not assigned to tenantToken's user
        .set('Authorization', `Bearer ${tenantToken}`)
      expect(response.status).toBe(403)
    })
  })

  describe('PATCH /units/:unitId', () => {
    let unitToUpdate: Unit
    const updatePayload = { label: 'Updated Unit Label X' }
    beforeEach(async () => {
      unitToUpdate = await prisma.unit.create({
        data: { ...unitData, complexId: testComplex.id },
      })
    })

    it('should update a unit if landlord owns the complex', async () => {
      const response = await request(app)
        .patch(`/units/${unitToUpdate.id}`)
        .set('Authorization', `Bearer ${landlordToken}`)
        .send(updatePayload)
      expect(response.status).toBe(200)
      expect(response.body.label).toBe(updatePayload.label)
    })

    it('should return 403 if tenant tries to update a unit', async () => {
      const response = await request(app)
        .patch(`/units/${unitToUpdate.id}`)
        .set('Authorization', `Bearer ${tenantToken}`)
        .send(updatePayload)
      expect(response.status).toBe(403)
    })

    it('should return 404 if landlord tries to update unit in another landlord complex', async () => {
      const otherComplex = await prisma.complex.create({
        data: {
          name: 'Other Complex',
          landlordId: otherLandlord.id,
          countryCode: 'GHA',
          cityName: 'Tema',
        },
      })
      const unitInOtherComplex = await prisma.unit.create({
        data: { ...unitData, label: 'Other Unit', complexId: otherComplex.id },
      })

      const response = await request(app)
        .patch(`/units/${unitInOtherComplex.id}`)
        .set('Authorization', `Bearer ${landlordToken}`) // Landlord 1 token
        .send(updatePayload)
      expect(response.status).toBe(404)
    })
  })

  describe('PATCH /units/:unitId/assign/:tenantId', () => {
    let unitToAssign: Unit
    beforeEach(async () => {
      unitToAssign = await prisma.unit.create({
        data: { ...unitData, complexId: testComplex.id },
      })
    })

    it('should assign a tenant to a unit if landlord owns the complex', async () => {
      const response = await request(app)
        .patch(`/units/${unitToAssign.id}/assign/${tenant.id}`)
        .set('Authorization', `Bearer ${landlordToken}`)
      expect(response.status).toBe(200)
      expect(response.body.data.tenantId).toBe(tenant.id)
    })

    it('should return 500 if unit already has a tenant', async () => {
      await prisma.unit.update({
        where: { id: unitToAssign.id },
        data: { tenantId: tenant.id },
      })
      const anotherTenant = await setupUserWithRole(
        faker.internet.email().toLowerCase(),
        faker.phone.number(),
        'tenant',
      )

      const response = await request(app)
        .patch(`/units/${unitToAssign.id}/assign/${anotherTenant.profile.id}`)
        .set('Authorization', `Bearer ${landlordToken}`)
      // Prisma P2025 is thrown by service if tenantId is not null, caught by error handler
      expect(response.status).toBe(500) // Or specific error if assignTenant handles P2025 by returning null
      expect(response.body.error).toContain('Tenant assignment failed')
    })
  })

  describe('PATCH /units/:unitId/remove/:tenantId', () => {
    let unitWithTenant: Unit
    beforeEach(async () => {
      unitWithTenant = await prisma.unit.create({
        data: { ...unitData, complexId: testComplex.id, tenantId: tenant.id },
      })
    })

    it('should remove a tenant from a unit if landlord owns the complex', async () => {
      const response = await request(app)
        .patch(`/units/${unitWithTenant.id}/remove/${tenant.id}`)
        .set('Authorization', `Bearer ${landlordToken}`)
      expect(response.status).toBe(200)
      expect(response.body.data.tenantId).toBeNull()
    })

    it('should return 500 if tenantId in param does not match unit tenant', async () => {
      const anotherTenant = await setupUserWithRole(
        faker.internet.email().toLowerCase(),
        faker.phone.number(),
        'tenant',
      )
      const response = await request(app)
        .patch(`/units/${unitWithTenant.id}/remove/${anotherTenant.profile.id}`)
        .set('Authorization', `Bearer ${landlordToken}`)
      // Prisma P2025 is thrown by service if tenantId doesn't match, caught by error handler
      expect(response.status).toBe(500)
      expect(response.body.error).toContain('Tenant removal failed')
    })
  })

  describe('DELETE /units/:unitId', () => {
    let unitToDelete: Unit
    beforeEach(async () => {
      unitToDelete = await prisma.unit.create({
        data: { ...unitData, complexId: testComplex.id },
      })
    })

    it('should soft delete a unit if landlord owns the complex', async () => {
      const response = await request(app)
        .delete(`/units/${unitToDelete.id}`)
        .set('Authorization', `Bearer ${landlordToken}`)
      expect(response.status).toBe(200)
      expect(response.body.deletedAt).not.toBeNull()
    })

    it('should return 404 if landlord tries to delete unit in another landlord complex', async () => {
      const otherComplex = await prisma.complex.create({
        data: {
          name: 'Other Complex',
          landlordId: otherLandlord.id,
          countryCode: 'GHA',
          cityName: 'Tema',
        },
      })
      const unitInOtherComplex = await prisma.unit.create({
        data: { ...unitData, label: 'Other Unit', complexId: otherComplex.id },
      })

      const response = await request(app)
        .delete(`/units/${unitInOtherComplex.id}`)
        .set('Authorization', `Bearer ${landlordToken}`) // Landlord 1 token
      // `deleteUnit` service uses `complex: { landlordId: user.landlord.id }` in where clause
      expect(response.status).toBe(404) // Prisma P2025 (Record to update not found)
    })
  })
})
