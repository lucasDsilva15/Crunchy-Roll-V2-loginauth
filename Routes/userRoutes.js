const express = require('express')
const router = express.Router()

const userController = require('../Controllers/usercontroller')

router.get('/:id/show', userController.showProduct)
router.get('/index', userController.allProducts)
router.post('/purchase', userController.purchaseProduct)


module.exports = router