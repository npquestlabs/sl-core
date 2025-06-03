import { z } from 'zod';

export const AuthTokensSchema = z.object({
    access: z.string(),
});

export const AuthSuccessResponseSchema = z.object({
    user: z.any(), // Replace with your actual user schema import if available
    tokens: AuthTokensSchema,
});

export const MessageResponseSchema = z.object({
    message: z.string(),
});
