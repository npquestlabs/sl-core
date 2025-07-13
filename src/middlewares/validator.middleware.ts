import { Request, Response, NextFunction } from 'express'
import { ZodSchema } from 'zod'
import { verifyToken } from '../util/token'

/**
 * Middleware to validate request body using Zod schema
 * @param schema - Zod schema to validate the request body
 */
export const validateBody = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
      const firstError = result.error.errors[0]

      return res.status(400).json({ error: firstError.message })
    }

    req.body = result.data

    next()
  }
}

/**
 * Middleware to validate request query using Zod schema
 * @param schema - Zod schema to validate the request query
 */
export const validateQuery = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Coerce query parameters into an object for validation
    const queryObject = req.query

    const result = schema.safeParse(queryObject)

    if (!result.success) {
      const firstError = result.error.errors[0]

      return res.status(400).json({ error: firstError.message })
    }

    req.query = result.data

    next()
  }
}

/**
 * Middleware to validate request params using Zod schema
 * @param schema - Zod schema to validate the request params
 */
export const validateParams = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.params)

    if (!result.success) {
      const firstError = result.error.errors[0]

      return res.status(400).json({ error: firstError.message })
    }

    req.params = result.data

    next()
  }
}

export const transformBody = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
      const firstError = result.error.errors[0]

      return res.status(400).json({ error: firstError.message })
    }

    req.body = result.data

    next()
  }
}

export const transformTokenBody = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.body
    const data = verifyToken(token)
    const result = schema.safeParse(data)

    if (!result.success) {
      return res.status(400).json({ error: "Invalid token" })
    }

    req.body = result.data

    next()
  }
}
