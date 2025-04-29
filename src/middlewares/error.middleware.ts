import { Request, Response } from 'express'
import { AppError } from '../util/error'

export default function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
) {
  if (err instanceof AppError) {
    console.error(err.stack)
    return res.status(err.statusCode).json({
      status: 'error',
      statusCode: err.statusCode,
      message: err.message,
    })
  }
  if (err instanceof Error) {
    console.error(err.stack)
    return res.status(500).json({
      status: 'error',
      statusCode: 500,
      message: err.message,
    })
  }
  console.error(err)
  return res.status(500).json({
    status: 'error',
    statusCode: 500,
    message: 'Internal Server Error',
  })
}
