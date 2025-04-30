import { LocalUser } from '../../util/types'

declare global {
  namespace Express {
    interface Request {
      user?: LocalUser
    }
  }
}
