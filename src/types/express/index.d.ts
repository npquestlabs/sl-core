import { LocalUser } from '..'

declare global {
  namespace Express {
    interface Request {
      user?: LocalUser
    }
  }
}
