import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../util/token'

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

export function me(req: Request, res: Response) {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const user = verifyToken(token)
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    return res.status(200).json(user || null)
  } catch (err) {
    console.error(err)
    return res.status(401).json({ error: 'Invalid token' })
  }
}
