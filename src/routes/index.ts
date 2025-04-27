import express from 'express'
import userRoutes from './userRoutes'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hi')
})

// User Routes
router.use('/user', userRoutes)

export default router
