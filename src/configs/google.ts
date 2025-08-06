import { OAuth2Client } from 'google-auth-library'
import envConfig from './environment'

class AuthClient {
  private client
  constructor(origin: string) {
    this.client = new OAuth2Client({
      clientId: envConfig.googleClientId,
      clientSecret: envConfig.googleClientSecret,
      redirectUri: origin + '/google-auth',
    })
  }

  verifyIdToken(token: string) {
    return this.client.verifyIdToken({
      idToken: token,
      audience: envConfig.googleClientId,
    })
  }

  getToken(code: string) {
    return this.client.getToken(code)
  }
}

const clients = envConfig.allowedOrigins
  .map((origin) => ({ [origin]: new AuthClient(origin) }))
  .reduce((acc, curr) => {
    return { ...acc, ...curr }
  }, {})

class GoogleAuthConfig {
  getClient(origin: string) {
    return clients[origin] ?? null
  }
}
const googleAuthConfig = new GoogleAuthConfig()
export default googleAuthConfig
