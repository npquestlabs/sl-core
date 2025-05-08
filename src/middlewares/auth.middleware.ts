import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../configs/environment'
import { LocalUser } from '../types'

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, config.jwtSecret) as LocalUser
    req.user = decoded
    next()
  } catch (err) {
    console.error(err)
    return res.status(401).json({ error: 'Invalid token' })
  }
}

export function expect(allowed: ('Tenant' | 'Landlord' | 'Vendor')[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    const userPermissions: ('Tenant' | 'Landlord' | 'Vendor')[] = []

    if (user.tenant) {
      userPermissions.push('Tenant')
    }

    if (user.landlord) {
      userPermissions.push('Landlord')
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

export function isVerified(req: Request, res: Response, next: NextFunction) {
  const user = req.user

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const permitted = user.isVerified || config.environment === 'test' || config.environment === 'development'

  if (!permitted) {
    return res.status(403).json({ error: 'User not verified' })
  }

  next()
}
