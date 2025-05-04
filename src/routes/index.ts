import express from 'express'
import authRoutes from './auth.routes'
import userRoutes from './user.routes'
import complexRoutes from './complex.routes'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hi')
})

// User Routes
router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/complexes', complexRoutes)

export default router
