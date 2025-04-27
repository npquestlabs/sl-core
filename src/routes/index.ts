import express from 'express'
import landlordRoutes from './landlord'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hi')
})

// User Routes
router.use('/user', landlordRoutes)

export default router
