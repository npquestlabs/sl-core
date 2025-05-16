import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import {
  createMaintenanceRequestController,
  listMaintenanceRequestsController,
  updateMaintenanceRequestController,
  submitVendorResponseController,
  completeMaintenanceRequestController
} from '../controllers/maintenance.controller';

const router = Router();

// Maintenance Request Routes
router.post('/', authenticate, createMaintenanceRequestController);
router.get('/', authenticate, listMaintenanceRequestsController);
router.put('/:id', authenticate, updateMaintenanceRequestController);

// Vendor-specific Routes
router.post('/:id/vendor-response', authenticate, submitVendorResponseController);
router.post('/:id/complete', authenticate, completeMaintenanceRequestController);

export default router;