import express from 'express'
import { authenticate } from '../middlewares/auth.middleware'
import { validateBody } from '../middlewares/validator.middleware'
import * as authController from '../controllers/auth.controller'
import {
  RegisterLandlordSchema,
  RegisterTenantSchema,
  RegisterArtisanSchema,
  LoginSchema,
  EmailSchema,
  TokenSchema,
  PasswordSchema,
} from '../schemas/user.schema'

const router = express.Router()

router.post('/register/landlord', validateBody(RegisterLandlordSchema), authController.registerLandlord)
router.post('/register/tenant', validateBody(RegisterTenantSchema), authController.registerTenant)
router.post('/register/vendor', validateBody(RegisterArtisanSchema), authController.registerArtisan)
router.post('/login', validateBody(LoginSchema), authController.login)
router.post('/forgot-password', validateBody(EmailSchema), authController.forgotPassword)
router.post('/verifications/use', validateBody(TokenSchema), authController.loginWithToken)
router.post('/verifications/new', authenticate, authController.sendVerificationLink)
router.post('/reset-password', authenticate, validateBody(PasswordSchema), authController.updatePassword)

export default router
