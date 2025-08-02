import express from 'express'
import { authenticate, expect } from '../middlewares/auth.middleware'
import * as staffController from '../controllers/staff.controller'
import { validateBody } from '../middlewares/validator.middleware'
import { UpdateStaffSchema } from '../schemas/user.schema'

const router = express.Router()
router.use(authenticate)
router.use(expect(['Staff']))

/**
 * @swagger
 * /staff/me:
 *   patch:
 *     summary: Update staff profile
 *     description: Update the profile of the currently authenticated staff.
 *     tags:
 *       - Staff
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateStaff'
 *     responses:
 *       200:
 *         description: Staff updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Staff'
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Permission denied
 */
router.patch(
  '/me',
  validateBody(UpdateStaffSchema),
  staffController.updateStaff,
)

/**
 * @swagger
 * /staff/me:
 *   get:
 *     summary: Get current staff user
 *     description: Returns the currently authenticated staff user.
 *     tags:
 *       - Staff
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current staff user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Staff'
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Permission denied
 */
router.get('/me', staffController.getCurrentUser)

/**
 * @swagger
 * /staff/summary:
 *   get:
 *     summary: Get staff summary counts
 *     description: Returns counts for units, complexes, active tenants, active maintenance requests, and upcoming payments for the authenticated staff.
 *     tags:
 *       - Staff
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Summary counts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 units:
 *                   type: integer
 *                 complexes:
 *                   type: integer
 *                 tenants:
 *                   type: integer
 *                 maintenanceRequests:
 *                   type: integer
 *                 payments:
 *                   type: integer
 */
router.get('/summary', staffController.getStaffSummary)

export default router
