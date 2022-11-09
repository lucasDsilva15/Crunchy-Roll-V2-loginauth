const express = require('express')
const router = express.Router()

const memberController = require('../Controllers/membercontroller')

router.get('/info', memberController.info)

module.exports = router