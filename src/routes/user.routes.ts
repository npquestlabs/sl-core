import express from 'express'
import { authenticate, isVerified } from '../middlewares/auth.middleware'
import * as userController from '../controllers/user.controller'
import { validateBody } from '../middlewares/validator.middleware'
import { UpdateUserSchema } from '../schemas/user.schema'

const router = express.Router()
router.use(authenticate)
router.use(isVerified)

router.get('/me', userController.getCurrentUser)
router.patch('/me', validateBody(UpdateUserSchema), userController.updateUser)

export default router
