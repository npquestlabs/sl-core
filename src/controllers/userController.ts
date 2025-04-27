import { Request, Response } from 'express'

export const getUser = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      status: true,
      data: {
        name: 'User',
        headers: req.headers,
        hostname: req.hostname,
        httpVersion: req.httpVersion,
        ip: req.ip,
      },
    })
  } catch (error: any) {
    throw Error(error.message)
  }
}
