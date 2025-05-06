// import request from 'supertest';
// import { app } from '../src/configs/server';
// import { prisma } from '../src/configs/prisma';
// import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';
// import { faker } from '@faker-js/faker'


// beforeAll(async () => {
//     await prisma.user.deleteMany();
// });

// afterAll(async () => {
//     await prisma.user.deleteMany();
//     await prisma.tenant.deleteMany();
//     await prisma.landlord.deleteMany();
//     await prisma.vendor.deleteMany();
//     await prisma.$disconnect();
// });

// describe('Auth Routes', () => {
//     const testPassword = 'password123';
//     const landlordData = {
//         email: faker.internet.email().toLowerCase(),
//         password: testPassword,
//         firstName: faker.person.firstName(),
//         lastName: faker.person.lastName(),
//         phone: faker.phone.number(),
//         landlordData: {},
//     };
//     const tenantData = {
//         email: faker.internet.email().toLowerCase(),
//         password: testPassword,
//         firstName: faker.person.firstName(),
//         lastName: faker.person.lastName(),
//         phone: faker.phone.number(),
//         tenantData: {},
//     };
//     const vendorData = {
//         email: faker.internet.email().toLowerCase(),
//         password: testPassword,
//         firstName: faker.person.firstName(),
//         lastName: faker.person.lastName(),
//         phone: faker.phone.number(),
//         artisanData: { specialty: 'Plumbing' },
//     };

//     describe('POST /auth/register/landlord', () => {
//         it('should register a new landlord successfully', async () => {
//             const response = await request(app)
//                 .post('/auth/register/landlord')
//                 .send(landlordData);

//             expect(response.status).toBe(201);
//             expect(response.body).toHaveProperty('access');
//             expect(response.body.user).toBeDefined();
//             expect(response.body.user.email).toBe(landlordData.email);
//             expect(response.body.user.landlord).toBeDefined();
//             expect(response.body.user.tenant).toBeNull();
//             expect(response.body.user.vendor).toBeNull();
//         });

//         it('should return 400 if email is already in use', async () => {
//             const response = await request(app)
//                 .post('/auth/register/landlord')
//                 .send(landlordData); // Send the same data again

//             expect(response.status).toBe(400);
//             expect(response.body.error).toContain('Email already exists');
//         });

//         it('should return 400 for invalid registration data', async () => {
//             const invalidData = { ...landlordData, email: 'not-an-email' };
//             const response = await request(app)
//                 .post('/auth/register/landlord')
//                 .send(invalidData);

//             expect(response.status).toBe(400);
//             expect(response.body.error).toContain('Invalid email address');
//         });
//     });

//     describe('POST /auth/register/tenant', () => {
//         it('should register a new tenant successfully', async () => {
//             const response = await request(app)
//                 .post('/auth/register/tenant')
//                 .send(tenantData);

//             expect(response.status).toBe(201);
//             expect(response.body).toHaveProperty('access');
//             expect(response.body.user).toBeDefined();
//             expect(response.body.user.email).toBe(tenantData.email);
//             expect(response.body.user.tenant).toBeDefined();
//             expect(response.body.user.landlord).toBeNull();
//             expect(response.body.user.vendor).toBeNull();
//         });
//     });

//      describe('POST /auth/register/vendor', () => {
//         it('should register a new vendor successfully', async () => {
//             const response = await request(app)
//                 .post('/auth/register/vendor')
//                 .send(vendorData);

//             expect(response.status).toBe(201);
//             expect(response.body).toHaveProperty('access');
//             expect(response.body.user).toBeDefined();
//             expect(response.body.user.email).toBe(vendorData.email);
//             expect(response.body.user.vendor).toBeDefined();
//             expect(response.body.user.vendor.specialty).toBe(vendorData.artisanData.specialty);
//             expect(response.body.user.landlord).toBeNull();
//             expect(response.body.user.tenant).toBeNull();
//         });
//     });

//     describe('POST /auth/login', () => {
//         it('should login an existing user successfully', async () => {
//             // Use the landlord registered earlier
//             const response = await request(app)
//                 .post('/auth/login')
//                 .send({ email: landlordData.email, password: testPassword });

//             expect(response.status).toBe(200);
//             expect(response.body).toHaveProperty('access');
//             expect(response.body.user).toBeDefined();
//             expect(response.body.user.email).toBe(landlordData.email);
//         });

//         it('should return 401 for incorrect password', async () => {
//             const response = await request(app)
//                 .post('/auth/login')
//                 .send({ email: landlordData.email, password: 'wrongpassword' });

//             expect(response.status).toBe(401);
//             expect(response.body.error).toBe('Invalid email or password');
//         });

//         it('should return 401 for non-existent user', async () => {
//             const response = await request(app)
//                 .post('/auth/login')
//                 .send({ email: 'nonexistent@example.com', password: testPassword });

//             expect(response.status).toBe(401);
//             expect(response.body.error).toBe('Invalid email or password');
//         });

//          it('should return 400 for invalid login data', async () => {
//             const response = await request(app)
//                 .post('/auth/login')
//                 .send({ email: 'not-an-email', password: testPassword });

//             expect(response.status).toBe(400);
//             expect(response.body.error).toContain('Invalid email address');
//         });
//     });

//     // TODO: Add tests for /forgot-password, /verify, /reset-password
// });

import { app } from '../src/configs/server'
import request from 'supertest'
import { describe, it, expect } from '@jest/globals'

describe('GET /', () => {
  it('should return status 200 and a hello message', async () => {
    const response = await request(app).get('/')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: 'Hello, World!' })
    expect(response.headers['content-type']).toMatch(/json/)
  })
})
