import { Request, Response } from 'express'
import * as landlordService from '../services/landlord.service'
import * as unitService from '../services/unit.service'
import * as complexService from '../services/complex.service'
import * as leaseService from '../services/lease.service'
import * as maintenanceRequestsService from '../services/maintenance.service'
import { LeaseStatus, MaintenanceStatus } from '../../generated/prisma'
import { LandLordSummary } from '../types'
import { logger } from '../configs/logger'

export const updateLandlord = async (req: Request, res: Response) => {
  try {
    const landlordId = req.user?.landlord?.id
    if (!landlordId) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    const landlord = await landlordService.updateLandlord(landlordId, req.body)
    res.status(200).json(landlord)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update landlord' })
  }
}

export const getLandlordSummary = async (req: Request, res: Response) => {
  try {
    const landlordId = req.user?.landlord?.id
    if (!landlordId) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    const results = await Promise.all([
      unitService.countUnits({ complex: { landlordId }, deletedAt: null }).then(count => ({ units: count })),
      complexService.countComplexes({ landlordId, deletedAt: null }).then(count => ({ complexes: count })),
      leaseService.countLeases({ landlordId, status: LeaseStatus.ACTIVE, deletedAt: null }).then(count => ({ tenants: count })),
      unitService.countUnits({
        complex: {
          landlordId
        },
        leases: {
          some: {
            status: LeaseStatus.EXPIRED,
            deletedAt: null,
          },
        },
        deletedAt: null,
      }).then(count => ({ payments: count })),
      maintenanceRequestsService.countMaintenances({
        unit: {
          complex: { landlordId }
        },
        status: MaintenanceStatus.PENDING,
        deletedAt: null,
      }).then(count => ({ maintenanceRequests: count })),
    ]).then(results => results.reduce((acc, curr) => ({ ...acc, ...curr }), {}) as LandLordSummary);

    res.json(results)
  } catch (error) {
    logger.error('Error fetching landlord summary:', error)
    res.status(500).json({ error: 'Failed to fetch summary' })
  }
}
