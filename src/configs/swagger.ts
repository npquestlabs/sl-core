import swaggerUi from 'swagger-ui-express';
import { RegisterUserSchema, LoginSchema, EmailSchema, TokenSchema, PasswordSchema } from '../schemas/user.schema';
import { AuthTokensSchema, AuthSuccessResponseSchema, MessageResponseSchema } from '../schemas/auth.schema';
import { extendZodWithOpenApi, createDocument } from 'zod-openapi';
import swaggerJsdoc from 'swagger-jsdoc';
import { z } from 'zod';

extendZodWithOpenApi(z);


RegisterUserSchema.openapi({ ref: 'RegisterUser', description: 'Register a new user (Tenant, Landlord, or Vendor)' });
LoginSchema.openapi({ ref: 'Login', description: 'Login with email and password' });
EmailSchema.openapi({ ref: 'Email', description: 'Email address for verification or password reset' });
TokenSchema.openapi({ ref: 'Token', description: 'Token for verification or authentication' });
PasswordSchema.openapi({ ref: 'Password', description: 'Password for reset or authentication' });
AuthTokensSchema.openapi({ ref: 'AuthTokens', description: 'Authentication tokens' });
AuthSuccessResponseSchema.openapi({ ref: 'AuthSuccessResponse', description: 'Successful authentication response' });
MessageResponseSchema.openapi({ ref: 'MessageResponse', description: 'Simple message response' });

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
            Login: LoginSchema,
            Email: EmailSchema,
            Token: TokenSchema,
            Password: PasswordSchema,
            AuthTokens: AuthTokensSchema,
            AuthSuccessResponse: AuthSuccessResponseSchema,
            MessageResponse: MessageResponseSchema,
        },
    },
});

const options = {
    definition: openApiDoc,
    apis: [
        'src/routes/*.ts',
        'src/controllers/*.ts',
        // ...other paths to scan for JSDoc comments
    ],
};
const swaggerSpec = swaggerJsdoc(options);

const swaggerConfig = { swaggerSpec, swaggerUi };

export default swaggerConfig;