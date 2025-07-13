import { NextFunction, Request, Response } from 'express'
import { Prisma } from '../../generated/prisma'
import { AppError } from '../util/error'
import { logger } from '../configs/logger'
import config from '../configs/environment'

const isProduction = config.environment === 'production'

function handlePrismaError(err: Prisma.PrismaClientKnownRequestError): {
  statusCode: number
  message: string
  logMessage: string
} {
  let statusCode = 500
  let message = 'A database error occurred. Please try again later.'
  let logMessage = `Prisma Error ${err.code}: ${err.message}`

  switch (err.code) {
    case 'P2002': {
      statusCode = 400
      const target = err.meta?.target
      let field = 'field'
      if (Array.isArray(target) && typeof target[0] === 'string') {
        field = target[0]
      } else if (typeof target === 'string') {
        field = target
      }

      const capitalizedField = field.charAt(0).toUpperCase() + field.slice(1)
      message = `${capitalizedField} already exists. Please choose a different one.`
      logMessage = `Prisma Error ${
        err.code
      }: Unique constraint violation on field(s): ${
        Array.isArray(target) ? target.join(', ') : target
      }`
      break
    }
    case 'P2003': {
      statusCode = 400
      message =
        'The operation failed because it references a resource that does not exist or cannot be modified/deleted.'
      logMessage = `Prisma Error ${
        err.code
      }: Foreign key constraint violation. Field: ${
        err.meta?.field_name || 'unknown'
      }`
      break
    }
    case 'P2025': {
      statusCode = 404
      message = 'The requested resource was not found.'
      logMessage = `Prisma Error ${err.code}: Required record not found. ${
        err.meta?.cause || ''
      }`
      break
    }
  }

  return { statusCode, message, logMessage }
}

export default function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): void {
  let statusCode = 500
  const responseBody = {
    error: 'An unexpected internal server error occurred.',
  }

  let logMessage = 'Unhandled error'
  let errorToLog: unknown = err

  if (err instanceof AppError) {
    statusCode = err.statusCode
    responseBody.error = err.message
    logMessage = `AppError: ${err.message}`
    errorToLog = err
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    const prismaError = handlePrismaError(err)
    statusCode = prismaError.statusCode
    responseBody.error = prismaError.message
    logMessage = prismaError.logMessage
    errorToLog = err
  } else if (err instanceof Error) {
    logMessage = `Generic Error: ${err.message}`
    errorToLog = err
    if (!isProduction) {
      responseBody.error = err.message
    }
  } else {
    statusCode = 500
    logMessage = 'Unknown error type thrown'
    errorToLog = err
    responseBody.error = 'An unexpected error occurred.'
  }

  logger.error(logMessage, {
    error: errorToLog,
    stack: errorToLog instanceof Error ? errorToLog.stack : undefined,
    statusCode,
    request: {
      method: req.method,
      url: req.originalUrl,
      ip: req.ip,
    },
  })

  if (!res.headersSent) {
    res.status(statusCode).json(responseBody)
  } else {
    logger.warn('Headers already sent, could not send error response', {
      url: req.originalUrl,
    })
  }
}
