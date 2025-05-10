import express from 'express'
import * as unitsController from '../controllers/unit.controller'
import { authenticate, expect } from '../middlewares/auth.middleware'
import { validateBody, validateQuery } from '../middlewares/validator.middleware'
import { UpdateUnitSchema } from '../schemas/unit.schema'
import { PaginationSchema } from '../schemas/extras.schema'

const router = express.Router()

router.use(authenticate)

router.get('/', expect(['Landlord']), validateQuery(PaginationSchema), unitsController.landlordGetUnits)
router.get('/:unitId', expect(['Landlord', 'Tenant']), unitsController.getUnitWithPopulatedComplex)
router.patch('/:unitId', expect(['Landlord']), validateBody(UpdateUnitSchema), unitsController.updateUnit)
router.delete('/:unitId', expect(['Landlord']), unitsController.deleteUnit)

export default router