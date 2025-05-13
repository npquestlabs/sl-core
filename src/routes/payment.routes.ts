import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware'; 

const router = Router();

router.post('/', authenticate)

export default router;