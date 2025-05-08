import express, { Request, Response } from 'express'
import authRoutes from './auth.routes'
import userRoutes from './user.routes'
import complexRoutes from './complex.routes'
import unitRoutes from './unit.routes'
import landlordRoutes from './landlord.routes'
import propertyRoutes from './property.routes'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, World!' })
})

router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/complexes', complexRoutes)
router.use('/units', unitRoutes)
router.use('/landlords', landlordRoutes)
router.use('/properties', propertyRoutes)

export default router
