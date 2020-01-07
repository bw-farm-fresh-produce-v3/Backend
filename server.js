/**
 * Imports
 */
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./routes/auth-router')
const shopsRouter = require('./routes/shops-router')

const server = express()

/**
 * Consume middleware
 */
server.use(express.json())
server.use(helmet())
server.use(cors())

/**
 * Routes
 */
 
server.use('/api/auth', authRouter)
server.use('/api/shops', shopsRouter)

server.get('/', function ping (req, res) {
    res.status(200).json({ api: "running" })
})

server.use(function notFound(req, res, next) {
    const error = new Error('Not found.')
    error.status = 404

    next(error)
})

/**
 * Error handlers
 */
server.use(function errorHandler(error, req, res, next) {
    error.status = error.status || 500
    error.message = error.message || 'Internal server error'

    res.status(error.status).json({
        error: { 
            message: error.message, 
            status: error.status
        } 
    })
})

module.exports = server