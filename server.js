const express = require('express')
const cors = require('cors')
const developerRoutes = require('./Routes/developerroutes')
const authRoutes = require('./Routes/authRoutes')
const memberRoutes = require('./Routes/memberRoutes')
const {authorizedev} = require('./MIddleware/authmiddleware')
const {authorizemember} = require('./MIddleware/membermiddleware')


require('dotenv').config()

const mongoConfig = require('./config')
const app = express()

const PORT = 8080

app.use(cors())
app.use(express.json())

app.use('/developer', authorizedev, developerRoutes)
app.use('/auth', authRoutes )
app.use('/members', authorizemember, memberRoutes)

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
    mongoConfig()
})