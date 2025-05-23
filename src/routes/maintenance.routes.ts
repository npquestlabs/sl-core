import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import * as maintenanceRequestsController from '../controllers/maintenance.controller';
import { validateBody, validateQuery } from '../middlewares/validator.middleware';
import { PaginationSchema } from '../schemas/extras.schema';
import { CreateMaintenanceRequestSchema, UpdateMaintenanceRequestSchema } from '../schemas/maintenance.schema';

const router = Router();
router.use(authenticate)

// Maintenance Request Routes
router.post('/', validateBody(CreateMaintenanceRequestSchema), maintenanceRequestsController.createMaintenanceRequest);
router.get('/', validateQuery(PaginationSchema), maintenanceRequestsController.getMaintenanceRequests);
router.put('/:id', validateBody(UpdateMaintenanceRequestSchema), maintenanceRequestsController. updateMaintenanceRequest);
router.get('/units/:unitId', validateQuery(PaginationSchema), maintenanceRequestsController.getMaintenanceRequestsOfUnit);
router.get('/complexes/:complexId', validateQuery(PaginationSchema), maintenanceRequestsController.getMaintenanceRequestsOfComplex);

// Vendor-specific Routes
router.post('/:id/vendor-response', maintenanceRequestsController.submitVendorResponse);
router.post('/:id/complete', maintenanceRequestsController.completeMaintenanceRequest);

export default router;