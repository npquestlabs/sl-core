/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import * as occupancyService from '../services/occupancy.service'
import { CreateLeaseSchema } from '../schemas/lease.schema'
import { AppError } from '../util/error'

/**
 * Handles the creation of a new lease.
 * Requires the user to be an authenticated staff member.
 */
export const createLease = async (req: Request, res: Response) => {
  const user = req.user
  if (!user?.staff) {
    return res
      .status(403)
      .json({ error: 'Permission denied: Staff access required' })
  }

  const input = CreateLeaseSchema.parse(req.body)
  const lease = await occupancyService.createOccupancy(user.staff.id, input)

  return res.status(201).json(lease)
}

/**
 * Handles the renewal of an existing lease.
 * Requires the user to be an authenticated staff member with access to the lease's complex.
 */
export const renewOccupancy = async (req: Request, res: Response) => {
  const user = req.user
  if (!user?.staff) {
    return res
      .status(403)
      .json({ error: 'Permission denied: Staff access required' })
  }

  const { complexId, unitId } = req.params

  const renewedLease = await occupancyService.renewOccupancy(
    { staffId: user.staff.id, unitId, complexId },
    req.body as unknown as any,
  )

  return res.status(200).json(renewedLease)
}

/**
 * Lists all leases for the complexes managed by the authenticated staff member.
 */
export const listStaffLeases = async (req: Request, res: Response) => {
  const user = req.user
  if (!user?.staff) {
    return res
      .status(403)
      .json({ error: 'Permission denied: Staff access required' })
  }

  const leases = await occupancyService.listLeasesForStaff(user.staff.id, req.query as any)

  return res.status(200).json(leases)
}

/**
 * Retrieves the details of a single lease.
 * Accessible by the staff member who manages the lease or the tenant of the lease.
 */
export const getLease = async (req: Request, res: Response) => {
  const user = req.user
  if (!user || (!user.staff && !user.tenant)) {
    return res.status(403).json({ error: 'Permission denied' })
  }

  const { leaseId } = req.params

  const lease = await occupancyService.getLeaseDetails(leaseId)

  // Security check: Verify the user is either the assigned staff or the tenant
  const isStaff = user.staff?.id === lease.staffId
  const isTenant = user.tenant?.id === lease.tenantId

  if (!isStaff && !isTenant) {
    throw new AppError('You do not have permission to view this lease', 403)
  }

  return res.status(200).json(lease)
}

/**
 * Handles the termination of an active lease.
 * Requires the user to be an authenticated staff member with access to the lease's complex.
 */
export const terminateLease = async (req: Request, res: Response) => {
  const user = req.user
  if (!user?.staff) {
    return res
      .status(403)
      .json({ error: 'Permission denied: Staff access required' })
  }

  const { leaseId } = req.params
  const terminatedLease = await leaseService.terminateLease(
    leaseId,
    user.staff.id,
  )

  return res.status(200).json(terminatedLease)
}
