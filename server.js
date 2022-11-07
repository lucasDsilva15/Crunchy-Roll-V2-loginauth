const express = require('express')
const cors = require('cors')

require('dotenv').config()

const mongoConfig = require('./config')
const app = express()

const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
    mongoConfig()
})