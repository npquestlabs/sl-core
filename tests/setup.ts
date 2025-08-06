import { connectPrisma } from '../src/configs/prisma'
// import { connectEmail } from '../src/configs/email';

import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

const isCI = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true'

export default async () => {
  console.log('\n Jest Global Setup: Starting...')
  try {
    if (!isCI) {
      const envFile = path.resolve(process.cwd(), '.env.testing')
      if (!fs.existsSync(envFile)) {
        console.error(
          '⛔  Missing required .env.testing file. Aborting local tests.',
        )
        process.exit(1)
      }
      dotenv.config({ path: envFile })
    } else {
      console.log('ℹ️  Running in CI: skipping .env.testing check.')
    }
    console.log('Jest Global Setup: Environment variables loaded.')

    await Promise.all([
      connectPrisma(),
      // connectEmail(),
    ])
    console.log(' Jest Global Setup: Completed Successfully.')
  } catch (error) {
    console.error(' Jest Global Setup: Failed:', error)
    process.exit(1)
  }
}
