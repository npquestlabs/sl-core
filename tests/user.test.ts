import request from 'supertest';
import { app } from '../src/configs/server';
import { prisma } from '../src/configs/prisma';
import {
  describe,
  it,
  expect,
  beforeAll,
  afterAll,
  beforeEach, // Added
} from '@jest/globals';
import { faker } from '@faker-js/faker';
import { generateAccessToken } from '../src/util/token';
import { User, Landlord, Tenant, Vendor, Prisma } from '../generated/prisma'; // Using Prisma generated types
import bcrypt from 'bcryptjs';

// --- Global State for Suite-Run Isolation ---
let runIdPrefix: string;

// --- Global State for Intra-Suite Test Isolation (entities created *within* an 'it' block) ---
let testCreatedUserIds_intraTest: string[] = [];
// If profiles were created/deleted independently within tests, we might track their IDs too,
// but since they are tied to users, user ID tracking should suffice for cleanup.

// --- Foundational Test Entities (created once per suite run, uniquely prefixed) ---
let landlordUser: User;
let landlordProfile: Landlord;
let landlordToken: string;

let tenantUser: User;
let tenantProfile: Tenant;
let tenantToken: string;

let vendorUser: User;
let vendorProfile: Vendor;
let vendorToken: string;

// Helper to set up a user with a role, incorporating the runIdPrefix for foundational users
const setupUserWithRole = async (
  emailPrefix: string, // This will include runIdPrefix for foundational users
  phoneSuffix: string = '',
  role: 'landlord' | 'tenant' | 'vendor',
  trackIntraTest: boolean = false // If true, IDs are added to intra-test cleanup arrays
): Promise<{ user: User; profile: Landlord | Tenant | Vendor; token: string }> => {
  const uniqueEmail = `${emailPrefix}_${faker.internet.email().toLowerCase()}`;
  const password = 'password123'; // Consistent test password
  const userData: Prisma.UserCreateInput = {
    email: uniqueEmail,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: `${faker.phone.number()}${phoneSuffix}`,
    passwordHash: await bcrypt.hash(password, 10),
    isVerified: true,
  };

  if (role === 'landlord') {
    userData.landlord = { create: {} };
  } else if (role === 'tenant') {
    userData.tenant = { create: {} };
  } else if (role === 'vendor') {
    userData.vendor = { create: { specialty: faker.company.buzzNoun() } };
  }

  const user = await prisma.user.create({
    data: userData,
    include: { landlord: true, tenant: true, vendor: true },
  });

  if (trackIntraTest) {
    testCreatedUserIds_intraTest.push(user.id);
    // If profile IDs needed separate tracking and weren't cleaned by user deletion cascade/logic:
    // if (role === 'landlord' && user.landlord) testCreatedLandlordIds_intraTest.push(user.landlord.id);
    // etc. for tenant and vendor
  }

  const profile = user.landlord || user.tenant || user.vendor;
  if (!profile) {
    // This should not happen if the create logic is correct
    throw new Error(`Profile not created for user ${user.id} with role ${role}`);
  }

  return {
    user,
    profile: profile!,
    token: generateAccessToken({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      isVerified: user.isVerified,
      landlord: user.landlord,
      tenant: user.tenant,
      vendor: user.vendor,
    }),
  };
};

// Runs ONCE before all tests in this file
beforeAll(async () => {
  runIdPrefix = `testrun_user_${faker.string.alphanumeric(8)}`;

  const landlordData = await setupUserWithRole(`${runIdPrefix}_mainlandlord`, '_L_U', 'landlord');
  landlordUser = landlordData.user;
  landlordProfile = landlordData.profile as Landlord;
  landlordToken = landlordData.token;

  const tenantData = await setupUserWithRole(`${runIdPrefix}_maintenant`, '_T_U', 'tenant');
  tenantUser = tenantData.user;
  tenantProfile = tenantData.profile as Tenant;
  tenantToken = tenantData.token;

  const vendorData = await setupUserWithRole(`${runIdPrefix}_mainvendor`, '_V_U', 'vendor');
  vendorUser = vendorData.user;
  vendorProfile = vendorData.profile as Vendor;
  vendorToken = vendorData.token;

  console.log(`User Test Run ID Prefix: ${runIdPrefix}`);
  console.log(`Main Landlord: ${landlordUser.email} (ID: ${landlordUser.id}, ProfileID: ${landlordProfile.id})`);
  console.log(`Main Tenant: ${tenantUser.email} (ID: ${tenantUser.id}, ProfileID: ${tenantProfile.id})`);
  console.log(`Main Vendor: ${vendorUser.email} (ID: ${vendorUser.id}, ProfileID: ${vendorProfile.id})`);
});

// Runs ONCE after all tests in this file
afterAll(async () => {
  // Clean up all data associated with this specific test suite run.
  // Order: Profiles (Landlord, Tenant, Vendor) -> Users
  // This order is important to respect foreign key constraints if not using cascades from User.

  await prisma.landlord.deleteMany({
    where: { user: { email: { startsWith: runIdPrefix } } },
  });
  await prisma.tenant.deleteMany({
    where: { user: { email: { startsWith: runIdPrefix } } },
  });
  await prisma.vendor.deleteMany({
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
  testCreatedUserIds_intraTest = [];
});

// Runs AFTER EACH 'it' block in the entire file
afterEach(async () => {
  // Clean up entities created *specifically by the test that just ran*
  // Order: Profiles -> Users
  if (testCreatedUserIds_intraTest.length > 0) {
    // Delete profiles linked to these intra-test users first
    await prisma.landlord.deleteMany({ where: { user: { id: { in: testCreatedUserIds_intraTest }} } });
    await prisma.tenant.deleteMany({ where: { user: { id: { in: testCreatedUserIds_intraTest }} }});
    await prisma.vendor.deleteMany({ where: { user: { id: { in: testCreatedUserIds_intraTest }} } });

    // Then delete the intra-test users themselves
    await prisma.user.deleteMany({ where: { id: { in: testCreatedUserIds_intraTest } } });
  }
});

describe('User Routes (/users)', () => {
  describe('GET /users/me', () => {
    it('should get current landlord user details', async () => {
      const response = await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${landlordToken}`);
      expect(response.status).toBe(200);
      expect(response.body.id).toBe(landlordUser.id);
      expect(response.body.email).toBe(landlordUser.email);
      expect(response.body.landlord).toBeDefined();
      expect(response.body.landlord.id).toBe(landlordProfile.id);
    });

    it('should get current tenant user details', async () => {
      const response = await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${tenantToken}`);
      expect(response.status).toBe(200);
      expect(response.body.id).toBe(tenantUser.id);
      expect(response.body.email).toBe(tenantUser.email);
      expect(response.body.tenant).toBeDefined();
      expect(response.body.tenant.id).toBe(tenantProfile.id);
    });

    it('should get current vendor user details', async () => {
      const response = await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${vendorToken}`);
      expect(response.status).toBe(200);
      expect(response.body.id).toBe(vendorUser.id);
      expect(response.body.email).toBe(vendorUser.email);
      expect(response.body.vendor).toBeDefined();
      expect(response.body.vendor.id).toBe(vendorProfile.id);
    });

    it('should return 401 if not authenticated', async () => {
      const response = await request(app).get('/users/me');
      expect(response.status).toBe(401);
    });
  });

  describe('PATCH /users/me', () => {
    const generateUpdateData = () => ({ // Use a function to get fresh faker data
      firstName: `Updated_${faker.person.firstName()}`,
      lastName: `Updated_${faker.person.lastName()}`,
      // phone: faker.phone.number(), // Assuming phone update might be a separate endpoint or more complex
    });

    it('should update current user (landlord) details (firstName, lastName)', async () => {
      const updateData = generateUpdateData();
      const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${landlordToken}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.firstName).toBe(updateData.firstName);
      expect(response.body.lastName).toBe(updateData.lastName);
      // Check that sensitive fields are not returned or changed if not intended
      expect(response.body.email).toBe(landlordUser.email); // Email shouldn't change here
      expect(response.body.passwordHash).toBeUndefined(); // Password hash should not be in response

      const dbUser = await prisma.user.findUnique({
        where: { id: landlordUser.id },
      });
      expect(dbUser?.firstName).toBe(updateData.firstName);
      expect(dbUser?.lastName).toBe(updateData.lastName);
      expect(dbUser?.email).toBe(landlordUser.email); // Verify email is unchanged in DB
    });

    it('should update current user (tenant) details (firstName, lastName)', async () => {
      const updateData = generateUpdateData();
      const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${tenantToken}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.firstName).toBe(updateData.firstName);
      const dbUser = await prisma.user.findUnique({
        where: { id: tenantUser.id },
      });
      expect(dbUser?.lastName).toBe(updateData.lastName);
    });

    it('should return 400 if trying to update only ignored/disallowed fields (e.g. email, passwordHash directly)', async () => {
      const invalidUpdatePayload = {
        email: `new_${faker.internet.email()}`, // Assuming email update is not allowed or via different flow
        passwordHash: 'newignoredpasswordhash', // Password update should be via a specific flow
        phone: '123-invalid-for-this-test-payload' // Assuming phone update is validated differently or not part of simple patch
      };
      const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${landlordToken}`)
        .send(invalidUpdatePayload);
        
      // This expectation depends on your API's behavior:
      // If it ignores these fields and there's nothing else to update, it might be 200 (no change) or 400.
      // Assuming 400 if no *valid* updatable fields are provided or if fields are explicitly disallowed.
      expect(response.status).toBe(400); 
      if (response.body.error) { // Or specific error messages your API returns
        expect(response.body.error).toBeDefined();
      }


      const dbUser = await prisma.user.findUnique({
        where: { id: landlordUser.id },
      });
      // Verify these fields were NOT changed in the database
      expect(dbUser?.email).toBe(landlordUser.email);
      expect(dbUser?.phone).toBe(landlordUser.phone); // Check against original landlordUser.phone
      const isPasswordSame = await bcrypt.compare('password123', dbUser?.passwordHash || '');
      expect(isPasswordSame).toBe(true); // Original password should still be valid
    });
    
    it('should return 400 if sending an empty payload or payload with no valid updatable fields', async () => {
        const response = await request(app)
            .patch('/users/me')
            .set('Authorization', `Bearer ${landlordToken}`)
            .send({}); // Empty payload

        expect(response.status).toBe(400); // Assuming this is the desired behavior for no actual changes
        if (response.body.error) {
            expect(response.body.error).toBeDefined();
        }
    });


    it('should return 401 if not authenticated', async () => {
      const response = await request(app).patch('/users/me').send(generateUpdateData());
      expect(response.status).toBe(401);
    });
  });

  // Example of a test that might create a new user *within the test itself*
  // This is just to demonstrate the afterEach cleanup for intra-test created users.
  // Your actual user routes might not have such a scenario directly, but other tests could.
  describe('Hypothetical scenario demonstrating intra-test user cleanup', () => {
    it('should allow an admin (not implemented here) to create a temporary user that gets cleaned up', async () => {
      // Assume an adminToken exists and an endpoint /admin/users for creation
      // For now, we'll just create one directly with the helper and mark for cleanup
      const tempUserData = await setupUserWithRole(
        `${runIdPrefix}_tempuser_intra`,
        '_TU_intra',
        'tenant',
        true // Mark for intra-test cleanup
      );
      expect(tempUserData.user).toBeDefined();
      expect(testCreatedUserIds_intraTest).toContain(tempUserData.user.id);

      // ... perform some test actions with tempUserData.user or tempUserData.token ...

      // No explicit deletion here; afterEach will handle it.
      const foundUser = await prisma.user.findUnique({ where: { id: tempUserData.user.id } });
      expect(foundUser).not.toBeNull();
    });

    // afterEach will run and delete the user created above.
    // We could add another test here to verify it's gone, but that's testing afterEach itself.
  });
});