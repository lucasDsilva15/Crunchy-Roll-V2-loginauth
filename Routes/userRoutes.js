const express = require('express')
const router = express.Router()

const userController = require('../Controllers/usercontroller')

router.get('/all', userController.allProducts)
router.post('/put', userController.purchaseProduct)

module.exports = router