import express from 'express'
import { authenticate } from '../middlewares/auth.middleware'
import * as authController from '../controllers/auth.controller'

const router = express.Router()

router.post('/register/landlord', authController.registerLandlord)
router.post('/register/tenant', authController.registerTenant)
router.post('/register/vendor', authController.registerArtisan)
router.post('/login', authController.login)

router.post('/forgot-password', authController.forgotPassword)
router.post('/verify', authController.loginWithToken)
router.post('/reset-password', authenticate, authController.updatePassword)

export default router
