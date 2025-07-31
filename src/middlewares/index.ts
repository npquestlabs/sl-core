import { Request, Response, NextFunction } from 'express'
import { logger } from '../configs/logger'
import envConfig from '../configs/environment'

export function bouncer(req: Request, res: Response, next: NextFunction) {
  const origin = req.get('origin')
  const client = req.headers['x-client']
  const permittedOrigin = envConfig.allowedOrigins.includes(origin || 'not-set')
  const permittedClient =
    typeof client == 'string' && client in envConfig.clients

  if (!permittedOrigin || !permittedClient) {
    logger.warn(
      `Blocked request with client: "${client}" from origin: "${origin}"`,
    )
    return res.status(403).json({ error: 'Permission denied' })
  }

  next()
}
