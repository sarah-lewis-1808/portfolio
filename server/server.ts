import express from 'express'
import { join } from 'node:path'

import projectRoutes from './routes/projects'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/projects', projectRoutes)

export default server
