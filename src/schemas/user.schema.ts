import { z } from 'zod';

// --- No changes needed for these schemas ---
// Login, registration, and OAuth schemas are well-defined for their purpose.

export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password must be at least 1 character long'),
});

export const RegisterTenantSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  middleName: z.string().optional(),
});

export const RegisterStaffSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  middleName: z.string().optional(),
});

export const RegisterVendorSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  middleName: z.string().optional(),
  specialty: z.string().optional().default('N/A'),
});

export const RegisterUserSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    avatarUrl: z.string().url().optional(),
    staff: RegisterStaffSchema.optional(),
    tenant: RegisterTenantSchema.optional(),
    vendor: RegisterVendorSchema.optional(),
  })
  .refine((data) => [data.staff, data.tenant, data.vendor].filter(Boolean).length === 1, {
    message: 'Exactly one role (staff, tenant, or vendor) is required',
  });

// --- Changes Start Here ---

/**
 * REFACTORED: The schema for updating a Tenant's own profile information.
 * - Removed 'deletedAt' as this is an administrative action.
 * - Added fields from the Tenant model that a user would realistically update.
 */
export const UpdateTenantSchema = z
  .object({
    firstName: z.string().min(1).optional(),
    lastName: z.string().min(1).optional(),
    middleName: z.string().optional(),
    phone: z.string().min(10, 'Invalid phone number').optional(),
    email: z.string().email('Invalid email address').optional(),
  })
  .refine((obj) => Object.keys(obj).length > 0, {
    message: 'At least one allowed field is required for update',
  });

/**
 * REFACTORED: The schema for updating a Staff member's own profile information.
 * This schema was already correct, just adding a comment for consistency.
 */
export const UpdateStaffSchema = z
  .object({
    firstName: z.string().min(1).optional(),
    lastName: z.string().min(1).optional(),
    middleName: z.string().optional(),
    phone: z.string().min(10, 'Invalid phone number').optional(),
  })
  .refine((obj) => Object.keys(obj).length > 0, {
    message: 'At least one allowed field is required for update',
  });

export const UpdateVendorSchema = z
  .object({
    firstName: z.string().min(1).optional(),
    lastName: z.string().min(1).optional(),
    middleName: z.string().optional(),
    phone: z.string().min(10, 'Invalid phone number').optional(),
    email: z.string().email('Invalid email address').optional(),
    specialty: z.string().optional(),
    bankName: z.string().optional(),
    bankAccount: z.string().optional(),
    mobileMoneyNumber: z.string().optional(),
  })
  .refine((obj) => Object.keys(obj).length > 0, {
    message: 'At least one allowed field is required for update',
  });

export const UpdateUserSchema = z
  .object({
    password: z.string().min(6, 'Password must be at least 6 characters long').optional(),
    avatarUrl: z.string().url('Invalid URL').optional(),
  })
  .refine((obj) => Object.keys(obj).length > 0, {
    message: 'At least one allowed field is required for update',
  });

export const LocalStaffSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});

export const LocalTenantSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email().nullable(),
});

export const LocalVendorSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email().nullable(),
  specialty: z.string().nullable(),
});

export const LocalUserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  staff: LocalStaffSchema.nullable(),
  tenant: LocalTenantSchema.nullable(),
  vendor: LocalVendorSchema.nullable(),
});
