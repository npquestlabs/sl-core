import express from 'express'
import { authenticate } from '../middlewares/authenticate'

const router = express.Router()

router.use(authenticate)

router.post('//register/landlord')
router.post('/register/tenant')
router.post('/register/artisan')
router.post('/login')
router.post('/request-password-reset')
router.post('/verify')
router.post('/reset-password')
router.get('/me')

module.exports = router
