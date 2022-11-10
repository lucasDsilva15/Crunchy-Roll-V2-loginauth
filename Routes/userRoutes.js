const express = require('express')
const router = express.Router()

const userController = require('../Controllers/usercontroller')

router.get('/index', userController.allProducts)
router.post('/purchase', userController.purchaseProduct)
router.get('/show', userController.showProduct)

module.exports = router