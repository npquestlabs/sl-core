import express, { Request, Response } from 'express'
import authRoutes from './auth.routes'
import userRoutes from './user.routes'
import complexRoutes from './complex.routes'
import unitRoutes from './unit.routes'
import staffRoutes from './staff.routes'
import paymentRoutes from './payment.routes'
import maintenanceRoutes from './maintenance.routes'

const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, World!' })
})

router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/complexes', complexRoutes)
router.use('/units', unitRoutes)
router.use('/staff', staffRoutes)
router.use('/payments', paymentRoutes)
router.use('/maintenance', maintenanceRoutes)

export default router
