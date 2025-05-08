import { Request, Response } from 'express';
import { AppError } from '../util/error';
import { getPaymentsForComplex } from '../services/property.service'; 

/**
 * Controller for GET /api/v1/properties/:id/payments
 * Lists payments for a property (complex) owned by the authenticated landlord.
 * Uses the augmented Request type from src/@types/express/index.d.ts.
 * @param {Request} req - Express request object with user info (typed by declaration merging).
 * @param {Response} res - Express response object.
 */

export const getPropertyPaymentsController = async (req: Request, res: Response): Promise<Response> => {

    const user = req.user;

    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    if (!user.landlord) {
        throw new AppError('User does not have landlord privileges', 403);
    }

    const complexId = req.params.id as string;

    if (!complexId) {
        throw new AppError('Property ID is required', 400);
    }

    const queryOptions: any = {};

    if (req.query.pageSize) {
        const pageSize = parseInt(req.query.pageSize as string, 10);
        if (!isNaN(pageSize) && pageSize > 0) queryOptions.take = pageSize;
    }
    if (req.query.page && queryOptions.take !== undefined) {
        const page = parseInt(req.query.page as string, 10);
        if (!isNaN(page) && page > 0) {
            queryOptions.skip = (page - 1) * queryOptions.take;
        }
    }

    if (req.query.status) queryOptions.status = req.query.status as string;
    if (req.query.leaseId) queryOptions.leaseId = req.query.leaseId as string;

    try {
        const payments = await getPaymentsForComplex(
            complexId,
            user.landlord.id,
            queryOptions
        );

        return res.status(200).json({
            success: true,
            data: payments,
        });

    } catch (error: any) {
        console.error("Error in getPropertyPaymentsController:", error);

        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        return res.status(500).json({ error: 'An unexpected error occurred' });
    }
};