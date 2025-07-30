import { Router } from 'express'
import { authenticate } from '../middlewares/auth.middleware'
import {
  createLeaseController,
  renewLeaseController,
  listLeasesController,
  terminateLeaseController,
} from '../controllers/lease.controller'

const router = Router()

router.post('/lease', authenticate, createLeaseController)
router.post('/:id/renew', authenticate, renewLeaseController)
router.get('/lease', authenticate, listLeasesController)
router.put('/:id/terminate', authenticate, terminateLeaseController)

export default router
