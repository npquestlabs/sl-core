import { Request, Response } from 'express';
import { AppError } from '../util/error';
import {  createPayment } from '../services/payment.service'; 
import { CreatePaymentSchema, CreatePaymentInput } from '../schemas/payment.schema';
import { z } from 'zod';

/**
 * Controller for POST /api/v1/payments
 * Records a new payment for a lease owned by the authenticated landlord.
 * @param {Request} req - Express request object with user info and body.
 * @param {Response} res - Express response object.
 */

export const createPaymentController = async (req: Request, res: Response): Promise<Response> => {

    const user = req.user;

    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    if (!user.landlord) {
        throw new AppError('User does not have landlord privileges', 403);
    }

    let input: CreatePaymentInput;
    try {
        input = CreatePaymentSchema.parse(req.body);
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                error: 'Validation failed',
                details: error.errors,
            });
        }
        console.error("Error parsing request body:", error);
        throw new AppError('Invalid request body', 400);
    }

    try {
        const newPayment = await createPayment(
            user.landlord.id,
            input
        );

        return res.status(201).json({
            success: true,
            data: newPayment,
        });

    } catch (error: any) {
        console.error("Error in createPaymentController:", error);

        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        return res.status(500).json({ error: 'An unexpected error occurred while recording payment' });
    }
};