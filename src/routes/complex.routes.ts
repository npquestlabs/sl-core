import express from 'express'
import * as complexController from '../controllers/complex.controller'
import * as unitsController from '../controllers/unit.controller'
import { validateBody, validateQuery } from '../middlewares/validator.middleware'
import { authenticate, expect, isVerified } from '../middlewares/auth.middleware'
import { PaginationSchema } from '../schemas/extras.schema'
import { CreateUnitSchema } from '../schemas/unit.schema'
import { CreateComplexSchema, UpdateComplexSchema } from '../schemas/complex.schema'

const router = express.Router()

router.use(authenticate)
router.use(expect(['Landlord']))

router.post('/', isVerified, validateBody(CreateComplexSchema), complexController.createComplex)
router.get('/', validateQuery(PaginationSchema), complexController.getLandlordComplexes)
router.get('/:complexId', complexController.getLandLordComplex)
router.patch('/:complexId', validateBody(UpdateComplexSchema), complexController.updateComplex)
router.delete('/:complexId', complexController.deleteComplex)
router.get('/:complexId/units', validateQuery(PaginationSchema), unitsController.getUnitsOfComplex)
router.post('/:complexId/units', validateBody(CreateUnitSchema), unitsController.createUnit)
router.get('/:complexId/units/:unitId', unitsController.getUnitByComplexIdAndUnitIdParams)

export default router