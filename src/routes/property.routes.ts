import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware'; 
import {getPropertyPaymentsController} from '../controllers/property.controller'
const router = Router();

router.get('/:id/payments', authenticate, getPropertyPaymentsController);
router.get('/', (req, res) => {
    res.json("Property route is live...")
})

export default router;