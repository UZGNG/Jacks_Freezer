const express = require('express')
const server = express()
const PORT = process.env.PORT || 3001

const helmet = require('helmet')
const cors = require('cors')
server.use(helmet())
server.use(cors())
server.use(express.json())


const router = require('./app/routes/router')
server.use('/', router)


server.listen(PORT, ()=> {
    console.log(`Chewy, ${PORT} the ice cream store port, is up and running.`)
})