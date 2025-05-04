import express from 'express'
import * as unitsController from '../controllers/unit.controller'
import { authenticate, expect } from '../middlewares/auth.middleware'
import { validateBody } from '../middlewares/validator.middleware'
import { UpdateUnitSchema } from '../schemas/unit.schema'

const router = express.Router()

router.use(authenticate)

router.get('/:unitId', expect(['Landlord', 'Tenant']), unitsController.getUnitWithPopulatedComplex)
router.patch('/:unitId', expect(['Landlord']), validateBody(UpdateUnitSchema), unitsController.updateUnit)
router.patch('/:unitId/assign/:tenantId', expect(['Landlord']), unitsController.assignTenant)
router.patch('/:unitId/remove/:tenantId', expect(['Landlord']), unitsController.removeTenant)

export default router