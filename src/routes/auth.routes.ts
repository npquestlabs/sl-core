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

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user (Tenant, Landlord, or Vendor). Only one role is allowed per registration.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterUser'
 *     responses:
 *       201:
 *         description: User registered successfully. Verification email sent.
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
 *         description: Email already exists or validation error.
 */
router.post('/register', validateBody(RegisterUserSchema), authController.registerUser)

/**
 * @swagger
 * /auth/verify:
 *   post:
 *     summary: Verify a new user
 *     description: Complete registration by verifying the user with a token. The token is sent to the user's email after registration. On success, returns a JWT and user info.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Token'
 *     responses:
 *       200:
 *         description: User verified and created successfully. Returns user and JWT token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/RegisterUser'
 *                 token:
 *                   type: string
 *                   description: JWT token for authentication.
 *       400:
 *         description: Invalid or expired token.
 *       500:
 *         description: Failed to add user.
 */
router.post('/verify', validateBody(TokenSchema), transformTokenBody(RegisterUserSchema), authController.verifyUser)

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     description: Login with email and password.
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
 *         description: Invalid credentials.
 */
router.post('/login', validateBody(LoginSchema), authController.login)

/**
 * @swagger
 * /auth/forgot-password:
 *   post:
 *     summary: Request password reset
 *     description: Send a password reset link to the user's email.
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
 *       404:
 *         description: User not found.
 */
router.post('/forgot-password', validateBody(EmailSchema), authController.forgotPassword)

/**
 * @swagger
 * /auth/verifications/use:
 *   post:
 *     summary: Login with email verification token
 *     description: Login using a verification token sent to email.
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
 */
router.post('/verifications/use', validateBody(TokenSchema), transformTokenBody(EmailSchema), authController.loginWithEmail)

/**
 * @swagger
 * /auth/verifications/new:
 *   post:
 *     summary: Send a new verification link (deprecated)
 *     description: Send a new verification link to the authenticated user. (Deprecated)
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
 */
router.post('/verifications/new', authenticate, authController.sendVerificationLink) // is no longer needed

/**
 * @swagger
 * /auth/reset-password:
 *   post:
 *     summary: Reset user password
 *     description: Authenticated user can reset their password.
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
 *       401:
 *         description: Unauthorized.
 *       500:
 *         description: Failed to update password.
 */
router.post('/reset-password', authenticate, validateBody(PasswordSchema), authController.updatePassword)

export default router
