import express from 'express'
import * as unitsController from '../controllers/unit.controller'
import { authenticate, expect } from '../middlewares/auth.middleware'
import {
  validateBody,
  validateQuery,
} from '../middlewares/validator.middleware'
import { UpdateUnitSchema } from '../schemas/unit.schema'
import { PaginationSchema } from '../schemas/extras.schema'

const router = express.Router()

router.use(authenticate)

router.get(
  '/',
  expect(['Staff']),
  validateQuery(PaginationSchema),
  unitsController.staffGetUnits,
)

router.get('/:unitId', expect(['Staff', 'Tenant']), unitsController.getUnit)

router.patch(
  '/:unitId',
  expect(['Staff']),
  validateBody(UpdateUnitSchema),
  unitsController.updateUnit,
)

router.delete('/:unitId', expect(['Staff']), unitsController.deleteUnit)

export default router
