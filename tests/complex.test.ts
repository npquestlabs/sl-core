/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'supertest';
import { app } from '../src/configs/server';
import { prisma } from '../src/configs/prisma';
import { describe, it, expect, beforeAll, afterAll, beforeEach } from '@jest/globals';
import { faker } from '@faker-js/faker';
import { generateAccessToken } from '../src/util/token';
import { Landlord, User, Complex } from '../generated/prisma';

let landlordUser: User;
let landlord: Landlord;
let landlordToken: string;

let otherLandlordUser: User;
let otherLandlord: Landlord;
let otherLandlordToken: string;

const setupLandlord = async (email: string, phone: string) => {
    const user = await prisma.user.create({
        data: {
            email: email,
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            phone: phone,
            passwordHash: await faker.internet.password(),
            isVerified: true,
            landlord: {
                create: {},
            },
        },
        include: { landlord: true },
    });
    return {
        user,
        landlord: user.landlord!,
        token: generateAccessToken({
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            isVerified: user.isVerified,
            landlord: user.landlord,
            tenant: null,
            vendor: null,
        }),
    };
};

beforeAll(async () => {
    // await prisma.lease.deleteMany();
    // await prisma.unit.deleteMany();
    // await prisma.complex.deleteMany();
    // await prisma.user.deleteMany(); // Clears users, which cascades to landlords due to relation
    // multiple tests might be running on separate devices simultaneously -- so no clearing the tables

    const landlord1 = await setupLandlord(faker.internet.email().toLowerCase(), faker.phone.number());
    landlordUser = landlord1.user;
    landlord = landlord1.landlord;
    landlordToken = landlord1.token;

    const landlord2 = await setupLandlord(faker.internet.email().toLowerCase(), faker.phone.number());
    otherLandlordUser = landlord2.user;
    otherLandlord = landlord2.landlord;
    otherLandlordToken = landlord2.token;
});

afterAll(async () => {
    // await prisma.lease.deleteMany();
    // await prisma.unit.deleteMany();
    // await prisma.complex.deleteMany();
    // await prisma.user.deleteMany();
    // Must not clear the tables -- clearing will be done in the database administration tool
    // to avoid data loss in case of multiple tests running on different devices
    await prisma.$disconnect();
});

beforeEach(async () => {
    // Clear complexes before each test to ensure isolation for creation/listing tests
    await prisma.complex.deleteMany();
});

describe('Complex Routes', () => {
    const complexData = {
        name: faker.company.name() + ' Complex',
        description: faker.lorem.sentence(),
        countryCode: 'GHA',
        cityName: faker.location.city(),
        street: faker.location.streetAddress(),
        address: faker.location.secondaryAddress(),
    };

    describe('POST /complexes', () => {
        it('should create a new complex for the authenticated landlord', async () => {
            const response = await request(app)
                .post('/complexes')
                .set('Authorization', `Bearer ${landlordToken}`)
                .send(complexData);

            expect(response.status).toBe(200); // Controller returns 200 on success
            expect(response.body.name).toBe(complexData.name);
            expect(response.body.landlordId).toBe(landlord.id);
        });

        it('should return 401 if not authenticated', async () => {
            const response = await request(app)
                .post('/complexes')
                .send(complexData);
            expect(response.status).toBe(401);
        });

        it('should return 400 for invalid complex data', async () => {
            const response = await request(app)
                .post('/complexes')
                .set('Authorization', `Bearer ${landlordToken}`)
                .send({ ...complexData, name: '' }); // Invalid name
            expect(response.status).toBe(400);
        });
    });

    describe('GET /complexes', () => {
        let createdComplex: Complex;
        beforeEach(async () => {
            createdComplex = await prisma.complex.create({
                data: { ...complexData, landlordId: landlord.id },
            });
            // Create a complex for another landlord to test filtering
            await prisma.complex.create({
                data: { ...complexData, name: "Other Landlord's Complex", landlordId: otherLandlord.id },
            });
        });

        it('should get a list of complexes for the authenticated landlord', async () => {
            const response = await request(app)
                .get('/complexes')
                .set('Authorization', `Bearer ${landlordToken}`);

            expect(response.status).toBe(200);
            expect(response.body.data).toBeInstanceOf(Array);
            expect(response.body.data.length).toBe(1);
            expect(response.body.data[0].id).toBe(createdComplex.id);
            expect(response.body.data[0].landlordId).toBe(landlord.id);
        });

        it('should support pagination (page and limit)', async () => {
            await prisma.complex.createMany({
                data: Array.from({ length: 5 }).map((_, i) => ({
                    ...complexData,
                    name: `Complex ${i + 2}`,
                    landlordId: landlord.id,
                })),
            }); // Total 6 complexes for landlord1

            const responsePage1 = await request(app)
                .get('/complexes?page=1&limit=3')
                .set('Authorization', `Bearer ${landlordToken}`);
            expect(responsePage1.status).toBe(200);
            expect(responsePage1.body.data.length).toBe(3);
            expect(responsePage1.body.meta.total).toBe(6);
            expect(responsePage1.body.meta.page).toBe(1);
            expect(responsePage1.body.meta.limit).toBe(3);

            const responsePage2 = await request(app)
                .get('/complexes?page=2&limit=3')
                .set('Authorization', `Bearer ${landlordToken}`);
            expect(responsePage2.status).toBe(200);
            expect(responsePage2.body.data.length).toBe(3);
        });

        it('should support filtering by name', async () => {
            const uniqueName = "UniqueSearchName Complex";
            await prisma.complex.create({
                data: { ...complexData, name: uniqueName, landlordId: landlord.id },
            });
             const response = await request(app)
                .get(`/complexes?filter=${uniqueName.substring(0,10)}`)
                .set('Authorization', `Bearer ${landlordToken}`);
            expect(response.status).toBe(200);
            expect(response.body.data.length).toBe(1);
            expect(response.body.data[0].name).toBe(uniqueName);
        });


        it('should return 401 if not authenticated', async () => {
            const response = await request(app).get('/complexes');
            expect(response.status).toBe(401);
        });
    });

    describe('GET /complexes/:complexId', () => {
        let complexOfLandlord: Complex;
        let complexOfOtherLandlord: Complex;

        beforeEach(async () => {
            complexOfLandlord = await prisma.complex.create({
                data: { ...complexData, landlordId: landlord.id },
            });
            complexOfOtherLandlord = await prisma.complex.create({
                data: { ...complexData, name: "Other's Complex", landlordId: otherLandlord.id },
            });
        });

        it('should get a specific complex if owned by the authenticated landlord', async () => {
            const response = await request(app)
                .get(`/complexes/${complexOfLandlord.id}`)
                .set('Authorization', `Bearer ${landlordToken}`);

            expect(response.status).toBe(200);
            expect(response.body.id).toBe(complexOfLandlord.id);
        });

        it('should return 404 if complex does not exist', async () => {
            const nonExistentId = faker.string.uuid();
            const response = await request(app)
                .get(`/complexes/${nonExistentId}`)
                .set('Authorization', `Bearer ${landlordToken}`);
            expect(response.status).toBe(404);
        });

        it('should return 404 if complex belongs to another landlord', async () => {
            const response = await request(app)
                .get(`/complexes/${complexOfOtherLandlord.id}`)
                .set('Authorization', `Bearer ${landlordToken}`);
            // The controller checks landlordId in the where clause, so it effectively becomes a 404
            expect(response.status).toBe(404);
        });

        it('should return 401 if not authenticated', async () => {
            const response = await request(app).get(`/complexes/${complexOfLandlord.id}`);
            expect(response.status).toBe(401);
        });
    });

    describe('PATCH /complexes/:complexId', () => {
        let complexToUpdate: Complex;
        const updateData = { name: 'Updated Complex Name' };

        beforeEach(async () => {
            complexToUpdate = await prisma.complex.create({
                data: { ...complexData, landlordId: landlord.id },
            });
        });

        it('should update a complex if owned by the authenticated landlord', async () => {
            const response = await request(app)
                .patch(`/complexes/${complexToUpdate.id}`)
                .set('Authorization', `Bearer ${landlordToken}`)
                .send(updateData);

            expect(response.status).toBe(200);
            expect(response.body.name).toBe(updateData.name);
            const dbComplex = await prisma.complex.findUnique({ where: { id: complexToUpdate.id } });
            expect(dbComplex?.name).toBe(updateData.name);
        });

        it('should return 404 if complex belongs to another landlord', async () => {
            const otherComplex = await prisma.complex.create({
                data: { ...complexData, landlordId: otherLandlord.id },
            });
            const response = await request(app)
                .patch(`/complexes/${otherComplex.id}`)
                .set('Authorization', `Bearer ${landlordToken}`)
                .send(updateData);
            expect(response.status).toBe(404);
        });

        it('should return 400 for invalid update data', async () => {
            const response = await request(app)
                .patch(`/complexes/${complexToUpdate.id}`)
                .set('Authorization', `Bearer ${landlordToken}`)
                .send({ name: '' }); // Invalid name
            expect(response.status).toBe(400);
        });
    });

    describe('DELETE /complexes/:complexId', () => {
        let complexToDelete: Complex;

        beforeEach(async () => {
            complexToDelete = await prisma.complex.create({
                data: { ...complexData, landlordId: landlord.id },
            });
        });

        it('should soft delete a complex if owned by the authenticated landlord', async () => {
            const response = await request(app)
                .delete(`/complexes/${complexToDelete.id}`)
                .set('Authorization', `Bearer ${landlordToken}`);

            expect(response.status).toBe(200);
            expect(response.body.id).toBe(complexToDelete.id);
            expect(response.body.deletedAt).not.toBeNull();

            const dbComplex = await prisma.complex.findUnique({ where: { id: complexToDelete.id } });
            expect(dbComplex?.deletedAt).not.toBeNull();
        });

        it('should return 404 if complex belongs to another landlord', async () => {
             const otherComplex = await prisma.complex.create({
                data: { ...complexData, landlordId: otherLandlord.id },
            });
            const response = await request(app)
                .delete(`/complexes/${otherComplex.id}`)
                .set('Authorization', `Bearer ${landlordToken}`);
            expect(response.status).toBe(404); // Prisma P2025 (Record to update not found)
        });
    });
});

