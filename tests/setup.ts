import { connectPrisma } from '../src/configs/prisma'
// import { connectEmail } from '../src/configs/email';

export default async () => {
  console.log('\n Jest Global Setup: Starting...')
  try {
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
