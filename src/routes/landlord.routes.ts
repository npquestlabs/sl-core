import express from 'express'
import { authenticate, isVerified, expect } from '../middlewares/auth.middleware'
import * as landlordController from '../controllers/landlord.controller'
import { validateBody } from '../middlewares/validator.middleware'
import { UpdateLandlordSchema } from '../schemas/user.schema'

const router = express.Router()
router.use(authenticate)
router.use(isVerified)
router.use(expect(['Landlord']))

router.patch('/me', validateBody(UpdateLandlordSchema), landlordController.updateLandlord)

export default router
