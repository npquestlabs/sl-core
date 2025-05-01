import { Request, Response } from 'express';
import { createLease, renewLease, listLeases, terminateLease } from '../services/lease.service';


export const createLeaseController = async (req: Request, res: Response) => {
  try {
    const landlordId = req.user?.id!;
    const { unitId, tenantId, startedAt, endsAt, advanceMonths, rules } = req.body;

    const lease = await createLease(landlordId, {
      unitId,
      tenantId,
      startedAt,
      endsAt,
      advanceMonths,
      rules,
    });

    res.status(201).json(lease);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Failed to create lease' });
    }
  }
};


export const renewLeaseController = async (req: Request, res: Response) => {
  try {
    const landlordId = req.user?.id!;
    const leaseId = req.params.id;
    const { startedAt, endsAt, advanceMonths, rules } = req.body;

    const renewedLease = await renewLease(leaseId, landlordId, {
      startedAt,
      endsAt,
      advanceMonths,
      rules,
    });

    res.status(201).json(renewedLease);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Failed to renew lease' });
    }
  }
};


export const listLeasesController = async (req: Request, res: Response) => {
  try {
    const landlordId = req.user?.id!;
    const leases = await listLeases(landlordId);
    res.status(200).json(leases);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Failed to list leases' });
    }
  }
};


export const terminateLeaseController = async (req: Request, res: Response) => {
  try {
    const landlordId = req.user?.id!;
    const leaseId = req.params.id;

    const terminatedLease = await terminateLease(leaseId, landlordId);
    res.status(200).json(terminatedLease);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Failed to terminate lease' });
    }
  }
};