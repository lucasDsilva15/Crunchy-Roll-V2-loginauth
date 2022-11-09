const express = require('express')
const cors = require('cors')
const developerRoutes = require('./Routes/developerroutes')
const authRoutes = require('./Routes/authRoutes')
const {authorize} = require('./MIddleware/authmiddleware')

require('dotenv').config()

const mongoConfig = require('./config')
const app = express()

const PORT = 8080

app.use(cors())
app.use(express.json())

app.use('/developer', authorize, developerRoutes)
app.use('/auth', authRoutes )

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
    mongoConfig()
})