import express from 'express'
import { authenticate, me } from '../middlewares/auth.middleware'
import {
  transformTokenBody,
  validateBody,
} from '../middlewares/validator.middleware'
import * as authController from '../controllers/auth.controller'
import {
  LoginSchema,
  RegisterStageOneSchema,
  RegisterStageTwoSchema,
} from '../schemas/user.schema'
import {
  EmailSchema,
  TokenSchema,
  PasswordSchema,
} from '../schemas/extras.schema'

const router = express.Router()

/**
 * @swagger
 * /auth/register/stage-one:
 *   post:
 *     summary: Start registration (send verification code)
 *     description: Accepts email, sends a verification code (OTP) to the user's email.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterStageOne'
 *     responses:
 *       201:
 *         description: Verification code sent to email.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 otp:
 *                   type: string
 *                   description: Only present in non-production environments.
 *       400:
 *         description: Email already exists or validation error.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post(
  '/register/stage-one',
  validateBody(RegisterStageOneSchema),
  authController.registerStageOne,
)

/**
 * @swagger
 * /auth/register/stage-two:
 *   post:
 *     summary: Complete registration (verify code and create user)
 *     description: Accepts OTP and user data, verifies code, and creates the user account.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterStageTwo'
 *     responses:
 *       200:
 *         description: User verified and created successfully. Returns user and tokens.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthSuccessResponse'
 *       400:
 *         description: Invalid or expired verification code.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Failed to add user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post(
  '/register/stage-two',
  validateBody(RegisterStageTwoSchema),
  authController.registerStageTwo,
)

/**
 * @swagger
 * /auth/register/resend-verification:
 *   post:
 *     summary: Resend verification code (OTP)
 *     description: Resends a verification code (OTP) to the user's email.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterStageOne'
 *     responses:
 *       201:
 *         description: Verification code resent to email.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       400:
 *         description: Validation error.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post(
  '/register/resend-verification',
  validateBody(RegisterStageOneSchema),
  authController.resendVerificationCode,
)

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     description: Login with email and password.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Login successful. Returns user and tokens.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthSuccessResponse'
 *       400:
 *         description: Validation error.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Invalid credentials.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/login', validateBody(LoginSchema), authController.login)

/**
 * @swagger
 * /auth/forgot-password:
 *   post:
 *     summary: Request password reset
 *     description: Send a password reset link to the user's email.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Email'
 *     responses:
 *       200:
 *         description: Password reset URL sent to email.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 emailToken:
 *                   type: string
 *                   description: Only present in non-production environments.
 *       400:
 *         description: Validation error.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post(
  '/forgot-password',
  validateBody(EmailSchema),
  authController.forgotPassword,
)

/**
 * @swagger
 * /auth/verifications/use:
 *   post:
 *     summary: Login with email verification token
 *     description: Login using a verification token sent to email.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             allOf:
 *               - $ref: '#/components/schemas/Token'
 *               - $ref: '#/components/schemas/Email'
 *     responses:
 *       200:
 *         description: Login successful. Returns user and tokens.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthSuccessResponse'
 *       400:
 *         description: Invalid or expired token.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post(
  '/verifications/use',
  validateBody(TokenSchema),
  transformTokenBody(EmailSchema),
  authController.loginWithEmail,
)

/**
 * @swagger
 * /auth/verifications/new:
 *   post:
 *     summary: Send a new verification link (deprecated)
 *     description: Send a new magic login link to the user's email. (Deprecated)
 *     tags:
 *       - Auth
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Verification link sent.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       401:
 *         description: Unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/verifications/new', authController.sendVerificationLink)

/**
 * @swagger
 * /auth/reset-password:
 *   post:
 *     summary: Reset user password
 *     description: Authenticated user can reset their password. Use `/forgot-password` to get magic login link before this
 *     tags:
 *       - Auth
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Password'
 *     responses:
 *       200:
 *         description: Password updated!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Validation error.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Failed to update password.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post(
  '/reset-password',
  authenticate,
  validateBody(PasswordSchema),
  authController.updatePassword,
)

/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: Get current user from JWT
 *     description: Returns the user payload from the JWT token of the currently authenticated user. This does not perform a database lookup.
 *     tags:
 *       - Auth
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current user payload from JWT
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/me', me)

export default router
