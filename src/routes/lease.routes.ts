import { Router } from 'express'
import { authenticate } from '../middlewares/auth.middleware'
import * as leaseController from '../controllers/lease.controller'

const router = Router()

router.post('/lease', authenticate, leaseController.createLease)
router.post('/:id/renew', authenticate, leaseController.renewLease)
router.get('/lease', authenticate, leaseController.listStaffLeases)
router.put('/:id/terminate', authenticate, leaseController.terminateLease)

export default router
