import express from 'express'
import { authenticate } from '../middlewares/authenticate'
import * as userController from '../controllers/user.controller'

const router = express.Router()

router.get('/me', authenticate, userController.getUser)
router.patch('/me/update', authenticate, userController.updateUser)

export default router
