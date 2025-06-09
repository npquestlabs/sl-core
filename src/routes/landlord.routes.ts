import express from 'express'
import { authenticate, expect } from '../middlewares/auth.middleware'
import * as landlordController from '../controllers/landlord.controller'
import { validateBody } from '../middlewares/validator.middleware'
import { UpdateLandlordSchema } from '../schemas/user.schema'

const router = express.Router()
router.use(authenticate)
router.use(expect(['Landlord']))

/**
 * @swagger
 * /landlord/me:
 *   patch:
 *     summary: Update landlord profile
 *     description: Update the profile of the currently authenticated landlord.
 *     tags:
 *       - Landlord
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateLandlord'
 *     responses:
 *       200:
 *         description: Landlord updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Landlord'
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Permission denied
 */
router.patch('/me', validateBody(UpdateLandlordSchema), landlordController.updateLandlord)

export default router
