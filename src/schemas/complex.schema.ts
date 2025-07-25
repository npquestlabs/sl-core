import z from 'zod'

export const CreateComplexSchema = z.object({
    name: z.string().min(1, 'Name is required').max(50, 'Name must be less than 50 characters'),
    description: z.string().min(1, 'Description is required').max(500, 'Description must be less than 500 characters'),
    cityName: z.string().min(1, 'City is required').max(50, 'City must be less than 50 characters'),
    countryCode: z.string().min(1, 'Country is required').max(50, 'Country must be less than 50 characters'),
    street: z.string().min(1, 'Street is required').max(100, 'Street must be less than 100 characters').optional(),
    address: z.string().min(1, 'Address is required').max(100, 'Address must be less than 100 characters').optional(),
    notes: z.string().min(1, 'Notes are required').max(500, 'Notes must be less than 500 characters').optional(),
})

export const UpdateComplexSchema = z.object({
    name: z.string().min(1, 'Name is required').max(50, 'Name must be less than 50 characters').optional(),
    description: z.string().min(1, 'Description is required').max(500, 'Description must be less than 500 characters').optional(),
    cityName: z.string().min(1, 'City is required').max(50, 'City must be less than 50 characters').optional(),
    countryCode: z.string().min(1, 'Country is required').max(50, 'Country must be less than 50 characters').optional(),
    street: z.string().min(1, 'Street is required').max(100, 'Street must be less than 100 characters').optional(),
    address: z.string().min(1, 'Address is required').max(100, 'Address must be less than 100 characters').optional(),
    notes: z.string().min(1, 'Notes are required').max(500, 'Notes must be less than 500 characters').optional(),
}).refine((obj) => Object.keys(obj).length > 0, {
    message: 'At least one allowed field is required for update',
})