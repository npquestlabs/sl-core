import { Router } from 'express'
import { createLandlord, setLandLordData } from '../controllers/landlord'
import { setUserData } from '../controllers/user'
import { authenticate } from '../middlewares/authenticate'

const router = Router()

router.post('/register/step1', createLandlord)
router.post('/register/step2', authenticate, setUserData)
router.put('/register/step3', authenticate, setLandLordData)

export default router
