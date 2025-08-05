import { OAuth2Client } from 'google-auth-library'
import envConfig from './environment';

class GoogleAuthConfig {
    private client;
    constructor() {
        this.client = new OAuth2Client(envConfig.googleClientId);
    }

    verifyIdToken(token: string) {
        return this.client.verifyIdToken({
            idToken: token,
            audience: envConfig.googleClientId,
        })
    }
}
const googleAuthConfig = new GoogleAuthConfig();
export default googleAuthConfig;
