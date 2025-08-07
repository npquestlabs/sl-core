import express from 'express'
import { authenticate, me } from '../middlewares/auth.middleware'
import {
  transformTokenBody,
  validateBody,
} from '../middlewares/validator.middleware'
import * as authController from '../controllers/auth.controller'
import {
  LoginSchema,
  OAuthUserSchema,
  RegisterStageOneSchema,
  RegisterStageTwoSchema,
} from '../schemas/user.schema'
import {
  EmailSchema,
  TokenSchema,
  PasswordSchema,
} from '../schemas/extras.schema'

const router = express.Router()

router.post(
  '/register/stage-one',
  validateBody(RegisterStageOneSchema),
  authController.registerStageOne,
)

router.post(
  '/register/stage-two',
  validateBody(RegisterStageTwoSchema),
  authController.registerStageTwo,
)

router.post(
  '/register/resend-verification',
  validateBody(RegisterStageOneSchema),
  authController.resendVerificationCode,
)

router.post('/login', validateBody(LoginSchema), authController.login)

router.post(
  '/forgot-password',
  validateBody(EmailSchema),
  authController.forgotPassword,
)

router.post(
  '/verifications/use',
  validateBody(TokenSchema),
  transformTokenBody(EmailSchema),
  authController.loginWithEmail,
)

router.post('/verifications/new', authController.sendVerificationLink)

router.post(
  '/reset-password',
  authenticate,
  validateBody(PasswordSchema),
  authController.updatePassword,
)

router.post('/google', validateBody(TokenSchema), authController.googleAuth)

router.post(
  '/google/register',
  validateBody(TokenSchema),
  transformTokenBody(OAuthUserSchema),
  authController.googleAuthCompleteRegistration,
)

router.get('/me', me)

export default router
