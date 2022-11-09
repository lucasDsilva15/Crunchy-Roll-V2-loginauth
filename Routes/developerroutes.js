const express = require('express')
const router = express.Router()

const developerController = require('../Controllers/developercontrollers')

router.post('/add', developerController.newProduct)

module.exports = router