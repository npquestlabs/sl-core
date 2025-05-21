import express from 'express'
import { authenticate } from '../middlewares/auth.middleware'
import { transformTokenBody, validateBody } from '../middlewares/validator.middleware'
import * as authController from '../controllers/auth.controller'
import {
  LoginSchema,
  EmailSchema,
  TokenSchema,
  PasswordSchema,
  RegisterUserSchema,
} from '../schemas/user.schema'

const router = express.Router()

router.post('/register', validateBody(RegisterUserSchema), authController.registerUser)
router.post('/verify', validateBody(TokenSchema), transformTokenBody(RegisterUserSchema), authController.verifyUser)
router.post('/login', validateBody(LoginSchema), authController.login)
router.post('/forgot-password', validateBody(EmailSchema), authController.forgotPassword)
router.post('/verifications/use', validateBody(TokenSchema), transformTokenBody(EmailSchema), authController.loginWithEmail)
router.post('/verifications/new', authenticate, authController.sendVerificationLink) // is no longer needed
router.post('/reset-password', authenticate, validateBody(PasswordSchema), authController.updatePassword)

export default router
