import express from 'express'
import 'express-async-errors'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'
import dnsPrefetchControl from 'dns-prefetch-control'
import hpp from 'hpp'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import config from './environment'
import limiterConfig from './limiter'
import errorHandler from '../middlewares/error.middleware'

import routes from '../routes'
import envConfig from './environment'
import { bouncer } from '../middlewares'
import swaggerConfig from './swagger'

const app = express()

// Helmet middleware
app.use(helmet())

// Compression middleware
app.use(compression())

// Documentation middleware
app.use('/api/v1/docs', swaggerConfig.swaggerUi.serve, swaggerConfig.swaggerUi.setup(swaggerConfig.swaggerSpec))

// Block requests from non-allowed origins
if (envConfig.isProduction) app.use(bouncer)

console.log(`Allowed Origins: ${envConfig.allowedOrigins}`)

// Add CORS headers
app.use(
  cors({
    origin: envConfig.allowedOrigins,
    methods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Client'],
  }),
)

// Rate limiting middleware
app.use(limiterConfig)

// Set X-DNS-Prefetch-Control: off
app.use(dnsPrefetchControl())

// Body parser middleware
app.use(bodyParser.json()) // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })) // Parse URL-encoded request bodies

// HTTP Parameter Pollution Protection middleware
app.use(hpp())

// Morgan middleware for logging
app.use(morgan('combined'))

// Use routes
app.use('/api/v1', routes)

// Error handling middleware
app.use(errorHandler)

const port = config.port

export { app, port }
