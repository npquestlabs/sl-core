import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../util/token'
import { logger } from '../configs/logger'
import { LocalUser } from '../types'

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const token = authHeader.split(' ')[1]

  try {
    req.user = verifyToken(token)
    next()
  } catch (err) {
    logger.error(err)
    return res.status(401).json({ error: 'Invalid token' })
  }
}

export function expect(allowed: ('Tenant' | 'Staff' | 'Vendor')[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    const userPermissions: ('Tenant' | 'Staff' | 'Vendor')[] = []

    if (user.tenant) {
      userPermissions.push('Tenant')
    }

    if (user.staff) {
      userPermissions.push('Staff')
    }

    if (user.vendor) {
      userPermissions.push('Vendor')
    }

    const permitted = userPermissions.some((perm) => allowed.includes(perm))

    if (!permitted) {
      return res.status(403).json({ error: 'Permission denied' })
    }

    next()
  }
}

export function me(req: Request, res: Response) {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const { staff, tenant, vendor, ...user } = verifyToken<LocalUser>(token)
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    return res.status(200).json({
      ...(staff || {}),
      ...(tenant || {}),
      ...(vendor || {}),
      user,
    })
  } catch (err) {
    logger.error(err)
    return res.status(401).json({ error: 'Invalid token' })
  }
}
