import { Router } from 'express'
import {
  createLandlordStep1,
  createLandlordStep2,
} from '../controllers/landlord'

const router = Router()

router.post('/register/step1', createLandlordStep1)
router.put('/register/step2/:id', createLandlordStep2)

export default router
