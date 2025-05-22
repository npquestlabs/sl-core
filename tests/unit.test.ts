import request from 'supertest';
import { app } from '../src/configs/server';
import { prisma } from '../src/configs/prisma';
import {
  describe,
  it,
  expect,
  beforeAll,
  afterAll,
  beforeEach,
} from '@jest/globals';
import { faker } from '@faker-js/faker';
import { generateToken } from '../src/util/token';
import {
  Landlord,
  User,
  Complex,
  Unit,
  Tenant,
  UnitType,
  Prisma,
} from '../generated/prisma';

// --- Global State for Suite-Run Isolation ---
let runIdPrefix: string;

// --- Global State for Intra-Suite Test Isolation (entities created *within* an 'it' block) ---
let testCreatedUnitIds: string[] = [];
let testCreatedComplexIds_intraTest: string[] = []; // For complexes created *inside* a test, not the main testComplex
let testCreatedUserIds_intraTest: string[] = [];   // For users (like temporary tenants) created *inside* a test
let testCreatedTenantIds_intraTest: string[] = []; // For tenant profiles created *inside* a test

// --- Foundational Test Entities (created once per suite run, uniquely prefixed) ---
let landlordUser: User;
let landlord: Landlord;
let landlordTokens: { access: string };

let tenantUser: User;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let tenant: Tenant;
let tenantTokens: { access: string };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let otherLandlordUser: User;
let otherLandlord: Landlord;
// let otherLandlordToken: string; // Not used yet but good for future

let mainTestComplex: Complex; // The primary complex for most unit tests, owned by `landlord`

// Helper to generate unique data
const generateUnitData = (labelSuffix: string = '') => ({
  label: `Unit ${faker.string.alphanumeric(3)}${labelSuffix}`,
  type: UnitType.APARTMENT,
  description: 'A cozy apartment unit for testing',
  rentAmount: parseFloat(faker.finance.amount({ min: 300, max: 1500, dec: 2 })),
  rentCurrency: 'GHS',
});

const generateComplexData = (nameSuffix: string = '') => ({
  name: `${faker.company.name()} Complex ${faker.string.alphanumeric(4)}${nameSuffix}`,
  description: faker.lorem.sentence(),
  countryCode: 'GHA',
  cityName: faker.location.city(),
  street: faker.location.streetAddress(),
  address: faker.location.secondaryAddress(),
});

// Helper to set up a user with a role, incorporating the runIdPrefix for foundational users
const setupUserWithRole = async (
  emailPrefix: string, // This will include runIdPrefix for foundational users
  phoneSuffix: string = '',
  role: 'landlord' | 'tenant',
  trackIntraTest: boolean = false // If true, IDs are added to intra-test cleanup arrays
) => {
  const uniqueEmail = `${emailPrefix}_${faker.internet.email().toLowerCase()}`;
  const userData: Prisma.UserCreateInput = {
    email: uniqueEmail,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: `${faker.phone.number()}${phoneSuffix}`,
    passwordHash: await faker.internet.password(),
  };

  if (role === 'landlord') {
    userData.landlord = { create: {} };
  } else {
    userData.tenant = { create: {} };
  }

  const user = await prisma.user.create({
    data: userData,
    include: { landlord: true, tenant: true },
  });

  if (trackIntraTest) {
    testCreatedUserIds_intraTest.push(user.id);
    if (role === 'tenant' && user.tenant) {
      testCreatedTenantIds_intraTest.push(user.tenant.id);
    }
    // Add landlord tracking if needed for intra-test landlords
  }

  return {
    user,
    profile: role === 'landlord' ? user.landlord! : user.tenant!,
    tokens: {
      access: generateToken({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      landlord: user.landlord,
      tenant: user.tenant,
      vendor: null,
    }),
    }
  };
};

// Helper to create a Unit and track its ID for per-test cleanup (afterEach)
const createUnitForTestAndTrack = async (
  data: Prisma.UnitCreateArgs
): Promise<Unit> => {
  const unit = await prisma.unit.create(data);
  testCreatedUnitIds.push(unit.id);
  return unit;
};




// Runs ONCE before all tests in this file
beforeAll(async () => {
  runIdPrefix = `testrun_unit_${faker.string.alphanumeric(8)}`;

  const landlordData = await setupUserWithRole(`${runIdPrefix}_mainlandlord`, '_L1_U', 'landlord');
  landlordUser = landlordData.user;
  landlord = landlordData.profile as Landlord;
  landlordTokens = landlordData.tokens;

  const tenantData = await setupUserWithRole(`${runIdPrefix}_maintenant`, '_T1_U', 'tenant');
  tenantUser = tenantData.user;
  tenant = tenantData.profile as Tenant;
  tenantTokens = tenantData.tokens;

  const otherLandlordData = await setupUserWithRole(`${runIdPrefix}_otherlandlord`, '_OL1_U', 'landlord');
  otherLandlordUser = otherLandlordData.user;
  otherLandlord = otherLandlordData.profile as Landlord;

  mainTestComplex = await prisma.complex.create({
    data: {
      ...generateComplexData('_main_U'),
      landlordId: landlord.id, // Owned by our main test landlord
    },
  });

  console.log(`Unit Test Run ID Prefix: ${runIdPrefix}`);
  console.log(`Main Landlord: ${landlordUser.email}`);
  console.log(`Main Tenant: ${tenantUser.email}`);
  console.log(`Main Test Complex ID: ${mainTestComplex.id}`);
});

// Runs ONCE after all tests in this file
afterAll(async () => {
  // Clean up all data associated with this specific test suite run.
  // Order: Units -> Complexes -> Landlords/Tenants (profiles) -> Users

  // Delete units potentially linked to run-specific complexes or tenants
  // This is a broad sweep; afterEach handles more granular unit cleanup.
  // We can target units in complexes owned by run-specific landlords.
  const runLandlordIds = [landlord.id, otherLandlord.id].filter(id => !!id);
  if (runLandlordIds.length > 0) {
    await prisma.unit.deleteMany({
      where: { complex: { landlordId: { in: runLandlordIds } } },
    });
  }

  // Delete the mainTestComplex and any other complexes created by run-specific landlords
  if (mainTestComplex?.id) {
    await prisma.complex.deleteMany({
      where: {
        OR: [
          { id: mainTestComplex.id },
          { landlordId: { in: runLandlordIds } } // Catches other complexes by these landlords
        ]
      }
    });
  } else if (runLandlordIds.length > 0) { // If mainTestComplex failed to create but landlords exist
    await prisma.complex.deleteMany({
      where: { landlordId: { in: runLandlordIds } }
    });
  }


  // Delete the run-specific landlord and tenant profiles
  await prisma.landlord.deleteMany({
    where: { user: { email: { startsWith: runIdPrefix } } },
  });
  await prisma.tenant.deleteMany({
    where: { user: { email: { startsWith: runIdPrefix } } },
  });

  // Delete the run-specific users
  await prisma.user.deleteMany({
    where: { email: { startsWith: runIdPrefix } },
  });

  await prisma.$disconnect();
});

// Runs BEFORE EACH 'it' block in the entire file
beforeEach(async () => {
  // Reset tracking arrays for entities created *within* the upcoming test
  testCreatedUnitIds = [];
  testCreatedComplexIds_intraTest = [];
  testCreatedUserIds_intraTest = [];
  testCreatedTenantIds_intraTest = [];
});

// Runs AFTER EACH 'it' block in the entire file
afterEach(async () => {
  // Clean up entities created *specifically by the test that just ran*
  // Order: Units -> Complexes (intra-test) -> Tenants (intra-test) -> Users (intra-test)
  if (testCreatedUnitIds.length > 0) {
    await prisma.unit.deleteMany({ where: { id: { in: testCreatedUnitIds } } });
  }
  if (testCreatedComplexIds_intraTest.length > 0) {
    await prisma.complex.deleteMany({ where: { id: { in: testCreatedComplexIds_intraTest } } });
  }
  if (testCreatedTenantIds_intraTest.length > 0) {
    await prisma.tenant.deleteMany({ where: { id: { in: testCreatedTenantIds_intraTest } } });
  }
  if (testCreatedUserIds_intraTest.length > 0) {
    await prisma.user.deleteMany({ where: { id: { in: testCreatedUserIds_intraTest } } });
  }
});

describe('Unit Routes', () => {
  //const baseUnitData = generateUnitData(); // Generate once if fields are mostly static for tests

  describe('POST /complexes/:complexId/units', () => {
    it('should create a new unit in the specified complex for the landlord', async () => {
      const unitDataPayload = generateUnitData('_post_new');
      const response = await request(app)
        .post(`/complexes/${mainTestComplex.id}/units`)
        .set('Authorization', `Bearer ${landlordTokens.access}`)
        .send(unitDataPayload);

      expect(response.status).toBe(201);
      expect(response.body.label).toBe(unitDataPayload.label);
      expect(response.body.complexId).toBe(mainTestComplex.id);
      testCreatedUnitIds.push(response.body.id); // Track for afterEach
    });

    it('should return 404 if landlord tries to create unit in another landlord complex', async () => {
      // Complex owned by `otherLandlord` of this test run
      const otherComplex = await prisma.complex.create({
        data: { ...generateComplexData('_other_L_post'), landlordId: otherLandlord.id },
      });
      // This otherComplex will be cleaned up by afterAll since it's linked to a run-specific landlord.
      // If it needed to be cleaned by *this test's afterEach*, it would be:
      // const otherComplex = await createComplexForTestAndTrack_intraTest({ ... })

      const response = await request(app)
        .post(`/complexes/${otherComplex.id}/units`)
        .set('Authorization', `Bearer ${landlordTokens.access}`) // Main landlord's token
        .send(generateUnitData('_post_other_complex'));
      expect(response.status).toBe(404);
    });

    it('should return 401 if not authenticated', async () => {
      const response = await request(app)
        .post(`/complexes/${mainTestComplex.id}/units`)
        .send(generateUnitData('_post_unauth'));
      expect(response.status).toBe(401);
    });
  });

  describe('GET /complexes/:complexId/units', () => {
    let unitInComplex: Unit;
    beforeEach(async () => {
      unitInComplex = await createUnitForTestAndTrack({
        data: {
          ...generateUnitData('_get_list_setup'),
          complexId: mainTestComplex.id,
        },
      });
    });

    it('should get units for a complex owned by the landlord', async () => {
      const response = await request(app)
        .get(`/complexes/${mainTestComplex.id}/units`)
        .set('Authorization', `Bearer ${landlordTokens.access}`);

      expect(response.status).toBe(200);
      expect(response.body.data).toBeInstanceOf(Array);
      expect(response.body.data.length).toBe(1); // Because beforeEach creates one for this landlord
      expect(response.body.data[0].id).toBe(unitInComplex.id);
    });

    it('should return 403 if landlord tries to get units from another landlord complex', async () => {
      const otherComplex = await prisma.complex.create({
        data: { ...generateComplexData('_other_L_get_units'), landlordId: otherLandlord.id },
      });
      // This otherComplex will be cleaned by afterAll.

      const response = await request(app)
        .get(`/complexes/${otherComplex.id}/units`)
        .set('Authorization', `Bearer ${landlordTokens.access}`);
      expect(response.status).toBe(403); // Or 404 if your API treats it as not found for this user
    });
  });

  describe('GET /units/:unitId', () => {
    let testUnit: Unit;
    beforeEach(async () => {
      testUnit = await createUnitForTestAndTrack({
        data: {
          ...generateUnitData('_get_unit_by_id'),
          complexId: mainTestComplex.id,
        }
      });
    });

    it('should get a specific unit if landlord owns the complex', async () => {
      const response = await request(app)
        .get(`/units/${testUnit.id}`)
        .set('Authorization', `Bearer ${landlordTokens.access}`);
      expect(response.status).toBe(200);
      expect(response.body.id).toBe(testUnit.id);
    });

    it('should return 404 if tenant tries to access unit not assigned to them', async () => {
      // testUnit is created by beforeEach but NOT assigned to the main tenantToken's user
      const response = await request(app)
        .get(`/units/${testUnit.id}`)
        .set('Authorization', `Bearer ${tenantTokens.access}`);
      expect(response.status).toBe(404);
    });
  });

  describe('PATCH /units/:unitId', () => {
    let unitToUpdate: Unit;
    const updatePayload = { label: 'Updated Unit Label XYZ' };
    beforeEach(async () => {
      unitToUpdate = await createUnitForTestAndTrack({
        data: {
          ...generateUnitData('_patch_setup'),
          complexId: mainTestComplex.id,
        }
      });
    });

    it('should update a unit if landlord owns the complex', async () => {
      const response = await request(app)
        .patch(`/units/${unitToUpdate.id}`)
        .set('Authorization', `Bearer ${landlordTokens.access}`)
        .send(updatePayload);
      expect(response.status).toBe(200);
      expect(response.body.label).toBe(updatePayload.label);
    });

    it('should return 403 if tenant tries to update a unit', async () => {
      const response = await request(app)
        .patch(`/units/${unitToUpdate.id}`)
        .set('Authorization', `Bearer ${tenantTokens.access}`)
        .send(updatePayload);
      expect(response.status).toBe(403);
    });

    it('should return 404 if landlord tries to update unit in another landlord complex', async () => {
      const otherComplex = await prisma.complex.create({
        data: { ...generateComplexData('_other_L_patch_unit'), landlordId: otherLandlord.id },
      });
      const unitInOtherComplex = await prisma.unit.create({
        data: { ...generateUnitData('_other_unit_patch'), complexId: otherComplex.id },
      });
      // These (otherComplex, unitInOtherComplex) will be cleaned by afterAll.

      const response = await request(app)
        .patch(`/units/${unitInOtherComplex.id}`)
        .set('Authorization', `Bearer ${landlordTokens.access}`) // Main landlord's token
        .send(updatePayload);
      expect(response.status).toBe(404);

      // Manual cleanup if these were meant to be very short-lived for this test only
      await prisma.unit.delete({ where: { id: unitInOtherComplex.id } });
      await prisma.complex.delete({ where: { id: otherComplex.id } });
    });
  });

  describe('DELETE /units/:unitId', () => {
    let unitToDelete: Unit;
    beforeEach(async () => {
      unitToDelete = await createUnitForTestAndTrack({
        data: {
          ...generateUnitData('_delete_setup'),
          complexId: mainTestComplex.id,
        }
      });
    });

    it('should soft delete a unit if landlord owns the complex', async () => {
      const response = await request(app)
        .delete(`/units/${unitToDelete.id}`)
        .set('Authorization', `Bearer ${landlordTokens.access}`);
      expect(response.status).toBe(200);
      expect(response.body.deletedAt).not.toBeNull();
      // afterEach will hard-delete this soft-deleted unit.
    });

    it('should return 404 if landlord tries to delete unit in another landlord complex', async () => {
      const otherComplex = await prisma.complex.create({
        data: { ...generateComplexData('_other_L_delete_unit'), landlordId: otherLandlord.id },
      });
      const unitInOtherComplex = await prisma.unit.create({
        data: { ...generateUnitData('_other_unit_delete'), complexId: otherComplex.id },
      });
      // These will be cleaned by afterAll.

      const response = await request(app)
        .delete(`/units/${unitInOtherComplex.id}`)
        .set('Authorization', `Bearer ${landlordTokens.access}`); // Main landlord's token
      expect(response.status).toBe(404);

      // Manual cleanup if these were meant to be very short-lived for this test only
      await prisma.unit.delete({ where: { id: unitInOtherComplex.id } });
      await prisma.complex.delete({ where: { id: otherComplex.id } });
    });
  });
});