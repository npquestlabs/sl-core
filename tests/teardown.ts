import { disconnectPrisma } from '../src/configs/prisma'

export default async () => {
  console.log('\n Jest Global Teardown: Starting...')
  try {
    await disconnectPrisma()
    console.log(' Jest Global Teardown: Completed Successfully.')
  } catch (error) {
    console.error(' Jest Global Teardown: Failed:', error)
    process.exit(1)
  }
}
