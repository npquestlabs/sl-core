import { Request, Response } from 'express'
import * as staffService from '../services/staff.service'
import { logger } from '../configs/logger'

export const updateStaff = async (req: Request, res: Response) => {
  try {
    const user = req.user
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    if (!user.staff) {
      return res.status(403).json({ error: 'Permission denied' })
    }
    const staff = await staffService.updateStaff(user.staff.id, req.body)
    res.status(200).json(staff)
  } catch (error) {
    logger.error('Error updating staff:', error)
    res.status(500).json({ error: 'Failed to update staff' })
  }
}

export const getStaffSummary = async (req: Request, res: Response) => {
  try {
    const user = req.user
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    if (!user.staff) {
      return res.status(403).json({ error: 'Permission denied' })
    }
    const summary = await staffService.getSummary(user.staff.id)
    res.json(summary)
  } catch (error) {
    logger.error('Error fetching staff summary:', error)
    res.status(500).json({ error: 'Failed to fetch summary' })
  }
}

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const user = req.user
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    if (!user.staff) {
      return res.status(403).json({ error: 'Permission denied' })
    }
    const staff = await staffService.getStaffWithPopulatedUser(user.staff.id)
    res.status(200).json(staff)
  } catch (error) {
    logger.error('Error getting current staff user:', error)
    res.status(500).json({ error: 'Failed to get current user' })
  }
}
