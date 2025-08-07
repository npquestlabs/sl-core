import express from 'express'
import { authenticate, expect } from '../middlewares/auth.middleware'
import * as staffController from '../controllers/staff.controller'
import { validateBody } from '../middlewares/validator.middleware'
import { UpdateStaffSchema } from '../schemas/user.schema'

const router = express.Router()
router.use(authenticate)
router.use(expect(['Staff']))

router.patch(
  '/me',
  validateBody(UpdateStaffSchema),
  staffController.updateStaff,
)

router.get('/me', staffController.getCurrentUser)

router.get('/summary', staffController.getStaffSummary)

export default router
