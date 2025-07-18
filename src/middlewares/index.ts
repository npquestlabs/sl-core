import { Request, Response, NextFunction } from 'express'
import { logger } from '../configs/logger'
import envConfig from '../configs/environment'

export function bouncer(req: Request, res: Response, next: NextFunction) {
    const permitted = envConfig.allowedOrigins.includes(req.get('origin') || 'not-set')

    if (!permitted) {
        logger.warn(`Blocked request from origin: ${req.get('origin')}`)
        return res.status(403).json({ error: 'Permission denied' })
    }

    next()
}