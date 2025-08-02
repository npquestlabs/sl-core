import swaggerUi from 'swagger-ui-express'
import {
  RegisterUserSchema,
  RegisterStageOneSchema,
  RegisterStageTwoSchema,
  LoginSchema,
} from '../schemas/user.schema'
import {
  EmailSchema,
  TokenSchema,
  PasswordSchema,
} from '../schemas/extras.schema'
import { extendZodWithOpenApi, createDocument } from 'zod-openapi'
import swaggerJsdoc from 'swagger-jsdoc'
import { z } from 'zod'

extendZodWithOpenApi(z)

RegisterUserSchema.openapi({
  ref: 'RegisterUser',
  description: 'Register a new user (Tenant, Staff, or Vendor)',
})
RegisterStageOneSchema.openapi({
  ref: 'RegisterStageOne',
  description: 'Start registration by sending OTP to email',
})
RegisterStageTwoSchema.openapi({
  ref: 'RegisterStageTwo',
  description: 'Complete registration by verifying OTP and providing user data',
})
LoginSchema.openapi({
  ref: 'Login',
  description: 'Login with email and password',
})
EmailSchema.openapi({
  ref: 'Email',
  description: 'Email address for verification or password reset',
})
TokenSchema.openapi({
  ref: 'Token',
  description: 'Token for verification or authentication',
})
PasswordSchema.openapi({
  ref: 'Password',
  description: 'Password for reset or authentication',
})

export const openApiDoc = createDocument({
  openapi: '3.0.0',
  info: {
    title: 'SL-Core API',
    version: '1.0.0',
    description: 'API documentation for SL-Core',
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Development server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      RegisterUser: RegisterUserSchema,
      RegisterStageOne: RegisterStageOneSchema,
      RegisterStageTwo: RegisterStageTwoSchema,
      Login: LoginSchema,
      Email: EmailSchema,
      Token: TokenSchema,
      Password: PasswordSchema,
      User: {
        type: 'object',
        properties: {
          id: { type: 'string', example: 'user-uuid' },
          firstName: { type: 'string', example: 'John' },
          lastName: { type: 'string', example: 'Doe' },
          email: {
            type: 'string',
            format: 'email',
            example: 'user@example.com',
          },
          staff: {
            type: 'object',
            nullable: true,
            additionalProperties: true,
            description: 'Staff profile data if user is a staff',
          },
          tenant: {
            type: 'object',
            nullable: true,
            additionalProperties: true,
            description: 'Tenant profile data if user is a tenant',
          },
          vendor: {
            type: 'object',
            nullable: true,
            additionalProperties: true,
            description: 'Vendor profile data if user is a vendor',
          },
        },
        required: [
          'id',
          'firstName',
          'lastName',
          'email',
          'staff',
          'tenant',
          'vendor',
        ],
      },
      AuthSuccessResponse: {
        type: 'object',
        properties: {
          user: { $ref: '#/components/schemas/User' },
          tokens: {
            type: 'object',
            properties: {
              access: { type: 'string', example: 'jwt-access-token' },
            },
            required: ['access'],
          },
        },
        required: ['user', 'tokens'],
      },
      MessageResponse: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Operation successful' },
        },
        required: ['message'],
      },
      ErrorResponse: {
        type: 'object',
        properties: {
          error: { type: 'string', example: 'Error message' },
        },
        required: ['error'],
      },
    },
  },
})

const options = {
  definition: openApiDoc,
  apis: ['src/routes/*.ts'],
}
const swaggerSpec = swaggerJsdoc(options)

const swaggerConfig = { swaggerSpec, swaggerUi }

export default swaggerConfig
