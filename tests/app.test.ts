import { app } from '../src/configs/server'
import request from 'supertest'
import { describe, it, expect } from '@jest/globals'

describe('GET /', () => {
  it('should return status 200 and a hello message', async () => {
    const response = await request(app).get('/')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: 'Hello, World!' })
    expect(response.headers['content-type']).toMatch(/json/)
  })
})
