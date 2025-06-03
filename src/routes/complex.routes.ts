import express from 'express'
import * as complexController from '../controllers/complex.controller'
import * as unitsController from '../controllers/unit.controller'
import { validateBody, validateQuery } from '../middlewares/validator.middleware'
import { authenticate, expect } from '../middlewares/auth.middleware'
import { PaginationSchema } from '../schemas/extras.schema'
import { CreateUnitSchema } from '../schemas/unit.schema'
import { CreateComplexSchema, UpdateComplexSchema } from '../schemas/complex.schema'

const router = express.Router()

router.use(authenticate)
router.use(expect(['Landlord']))

/**
 * @swagger
 * /complexes:
 *   post:
 *     summary: Create a new complex
 *     description: Create a new complex for the authenticated landlord.
 *     tags:
 *       - Complexes
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateComplex'
 *     responses:
 *       201:
 *         description: Complex created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Complex'
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Permission denied
 */
router.post('/', validateBody(CreateComplexSchema), complexController.createComplex)

/**
 * @swagger
 * /complexes:
 *   get:
 *     summary: Get all complexes for landlord
 *     description: Returns a paginated list of complexes belonging to the authenticated landlord.
 *     tags:
 *       - Complexes
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
 *         description: Filter by name or address
 *     responses:
 *       200:
 *         description: Paginated list of complexes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Complex'
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
router.get('/', validateQuery(PaginationSchema), complexController.getLandlordComplexes)

/**
 * @swagger
 * /complexes/{complexId}:
 *   get:
 *     summary: Get a complex by ID
 *     description: Returns a complex by its ID for the authenticated landlord.
 *     tags:
 *       - Complexes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: complexId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the complex
 *     responses:
 *       200:
 *         description: Complex found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Complex'
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Permission denied
 *       404:
 *         description: Complex not found
 */
router.get('/:complexId', complexController.getLandLordComplex)

/**
 * @swagger
 * /complexes/{complexId}:
 *   patch:
 *     summary: Update a complex
 *     description: Update details of a complex. Only accessible by the landlord who owns the complex.
 *     tags:
 *       - Complexes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: complexId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the complex
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateComplex'
 *     responses:
 *       200:
 *         description: Complex updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Complex'
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Permission denied
 *       404:
 *         description: Complex not found
 */
router.patch('/:complexId', validateBody(UpdateComplexSchema), complexController.updateComplex)

/**
 * @swagger
 * /complexes/{complexId}:
 *   delete:
 *     summary: Delete a complex
 *     description: Delete a complex by its ID. Only accessible by the landlord who owns the complex.
 *     tags:
 *       - Complexes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: complexId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the complex
 *     responses:
 *       200:
 *         description: Complex deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Complex'
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Permission denied
 *       404:
 *         description: Complex not found
 */
router.delete('/:complexId', complexController.deleteComplex)

/**
 * @swagger
 * /complexes/{complexId}/units:
 *   get:
 *     summary: Get all units in a complex
 *     description: Returns a paginated list of units in a specific complex for the authenticated landlord.
 *     tags:
 *       - Complexes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: complexId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the complex
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
 *         description: Paginated list of units in the complex
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
 *       404:
 *         description: Units not found
 */
router.get('/:complexId/units', validateQuery(PaginationSchema), unitsController.getUnitsOfComplex)

/**
 * @swagger
 * /complexes/{complexId}/units:
 *   post:
 *     summary: Create a unit in a complex
 *     description: Create a new unit in a specific complex for the authenticated landlord.
 *     tags:
 *       - Complexes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: complexId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the complex
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUnit'
 *     responses:
 *       201:
 *         description: Unit created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Unit'
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Permission denied
 *       404:
 *         description: Complex not found
 */
router.post('/:complexId/units', validateBody(CreateUnitSchema), unitsController.createUnit)

/**
 * @swagger
 * /complexes/{complexId}/units/{unitId}:
 *   get:
 *     summary: Get a unit in a complex by ID
 *     description: Returns a unit by its ID within a specific complex for the authenticated landlord.
 *     tags:
 *       - Complexes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: complexId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the complex
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
 *               $ref: '#/components/schemas/Unit'
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Permission denied
 *       404:
 *         description: Unit not found
 */
router.get('/:complexId/units/:unitId', unitsController.getUnitByComplexIdAndUnitIdParams)

export default router