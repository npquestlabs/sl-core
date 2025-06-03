import express from 'express'
import * as unitsController from '../controllers/unit.controller'
import { authenticate, expect } from '../middlewares/auth.middleware'
import { validateBody, validateQuery } from '../middlewares/validator.middleware'
import { UpdateUnitSchema } from '../schemas/unit.schema'
import { PaginationSchema } from '../schemas/extras.schema'

const router = express.Router()

router.use(authenticate)

/**
 * @swagger
 * /units:
 *   get:
 *     summary: Get all units for the authenticated landlord
 *     description: Returns a paginated list of units belonging to the authenticated landlord. Only accessible by users with the Landlord role.
 *     tags:
 *       - Units
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 15
 *         description: Number of items per page
 *       - in: query
 *         name: filter
 *         schema:
 *           type: string
 *         description: Filter by label or description
 *     responses:
 *       200:
 *         description: Paginated list of units
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Unit'
 *                 meta:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *                     total:
 *                       type: integer
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Permission denied
 */
router.get('/', expect(['Landlord']), validateQuery(PaginationSchema), unitsController.landlordGetUnits)

/**
 * @swagger
 * /units/{unitId}:
 *   get:
 *     summary: Get a unit by ID (Landlord or Tenant)
 *     description: Returns a unit by its ID. Accessible by Landlord (if owns the unit) or Tenant (if actively leasing the unit).
 *     tags:
 *       - Units
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: unitId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the unit
 *     responses:
 *       200:
 *         description: Unit found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnitWithComplex'
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Permission denied
 *       404:
 *         description: Unit not found or access denied
 */
router.get('/:unitId', expect(['Landlord', 'Tenant']), unitsController.getUnitWithPopulatedComplex)

/**
 * @swagger
 * /units/{unitId}:
 *   patch:
 *     summary: Update a unit (Landlord only)
 *     description: Update details of a unit. Only accessible by the Landlord who owns the unit.
 *     tags:
 *       - Units
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: unitId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the unit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUnit'
 *     responses:
 *       200:
 *         description: Unit updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Unit'
 *       400:
 *         description: Failed to update unit
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Permission denied
 *       404:
 *         description: Unit not found
 */
router.patch('/:unitId', expect(['Landlord']), validateBody(UpdateUnitSchema), unitsController.updateUnit)

/**
 * @swagger
 * /units/{unitId}:
 *   delete:
 *     summary: Delete a unit (Landlord only)
 *     description: Soft delete a unit. Only accessible by the Landlord who owns the unit.
 *     tags:
 *       - Units
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: unitId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the unit
 *     responses:
 *       200:
 *         description: Unit deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Unit'
 *       401:
 *         description: Not authorized
 *       403:
 *         description: Permission denied
 *       404:
 *         description: Unit not found
 */
router.delete('/:unitId', expect(['Landlord']), unitsController.deleteUnit)

export default router