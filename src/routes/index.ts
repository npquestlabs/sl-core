import express, {Request, Response } from 'express'
import authRoutes from './auth.routes'
import userRoutes from './user.routes'
import complexRoutes from './complex.routes'
import unitRoutes from './unit.routes'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, World!' })
})

// User Routes
router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/complexes', complexRoutes)
router.use('/units', unitRoutes)

export default router
