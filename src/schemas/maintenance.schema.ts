import { z } from 'zod';

export const CreateMaintenanceRequestSchema = z.object({
    description: z.string({ required_error: 'Description is required' }).min(10, {message: 'Description must be at least 10 characters long'}),
    photoUrl: z.string().url({ message: 'Invalid photo URL' }).optional(),
    scheduledFor: z.coerce.date({ invalid_type_error: 'Invalid scheduled date format' }).optional(),
}).refine(data => {
    if (data.scheduledFor) {
        return data.scheduledFor > new Date();
    }
    return true;
}, {
    message: 'Scheduled date must be in the future',
    path: ['scheduledFor'],
});

export const UpdateMaintenanceRequestSchema = z.object({
    description: z.string().min(10, { message: 'Description must be at least 10 characters long' }).optional(),
    photoUrl: z.string().url({ message: 'Invalid photo URL' }).optional(),
    status: z.enum(['PENDING', 'SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELED']).optional(),
    vendorId: z.string().uuid({ message: 'Invalid Vendor ID format' }).optional(),
    vendorResponse: z.string().optional(),
    scheduledFor: z.coerce.date({ invalid_type_error: 'Invalid scheduled date format' }).optional(),
    completedAt: z.coerce.date({ invalid_type_error: 'Invalid completion date format' }).optional(),
    cost: z.number().positive({ message: 'Cost must be a positive number' }).optional(),
    paymentStatus: z.enum(['PENDING', 'PAID', 'OVERDUE', 'CANCELED']).optional(),
}).refine(data => {
    if (data.scheduledFor) {
        return data.scheduledFor > new Date();
    }
    return true;
}, {
    message: 'Scheduled date must be in the future',
    path: ['scheduledFor'],
}).refine(data => {
    if (data.completedAt && data.status !== 'COMPLETED') {
        return false;
    }
    return true;
}, {
    message: 'Status must be COMPLETED when providing completion date',
    path: ['status'],
});

// -- Schema for vendor response
export const VendorResponseSchema = z.object({
    vendorResponse: z.string({
        required_error: 'Response is required'
    }).min(10, {
        message: 'Response must be at least 10 characters long'
    }),
    scheduledFor: z.coerce.date({
        required_error: 'Scheduled date is required',
        invalid_type_error: 'Invalid scheduled date format'
    }),
    cost: z.number({
        required_error: 'Cost estimate is required'
    }).positive({
        message: 'Cost must be a positive number'
    }),
}).refine(data => data.scheduledFor > new Date(), {
    message: 'Scheduled date must be in the future',
    path: ['scheduledFor'],
});

// -- Schema for completing maintenance
export const CompleteMaintenanceSchema = z.object({
    completedAt: z.coerce.date({
        required_error: 'Completion date is required',
        invalid_type_error: 'Invalid completion date format'
    }).default(new Date()),
    cost: z.number({
        required_error: 'Actual cost is required'
    }).positive({
        message: 'Cost must be a positive number'
    }),
    receiptUrl: z.string().url({
        message: 'Invalid receipt URL'
    }).optional(),
});

// Type definitions
export type CreateMaintenanceRequestInput = z.infer<typeof CreateMaintenanceRequestSchema>;
export type UpdateMaintenanceRequestInput = z.infer<typeof UpdateMaintenanceRequestSchema>;
export type VendorResponseInput = z.infer<typeof VendorResponseSchema>;
export type CompleteMaintenanceInput = z.infer<typeof CompleteMaintenanceSchema>;