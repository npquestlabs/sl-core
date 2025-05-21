import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware'; 
import { validateQuery } from '../middlewares/validator.middleware';
import { GetPaymentsQuerySchema } from '../schemas/payment.schema';
import * as paymentController from '../controllers/payment.controller';

const router = Router();

router.use(authenticate)

router.get('/complexes/:complexId', validateQuery(GetPaymentsQuerySchema), paymentController.getComplexPayments);
router.get('/units/:unitId', validateQuery(GetPaymentsQuerySchema), paymentController.getUnitPayments);
router.get('/leases/:leaseId', validateQuery(GetPaymentsQuerySchema), paymentController.getLeasePayments);
router.get('/', validateQuery(GetPaymentsQuerySchema), paymentController.getAllPayments)
router.get('/:id', paymentController.getPaymentById)

export default router;