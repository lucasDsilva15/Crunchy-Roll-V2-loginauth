const express = require('express')
const router = express.Router()

const developerController = require('../Controllers/developercontrollers')

router.post('/add', developerController.newProduct)
router.delete('/delete', developerController.deleteProduct)

module.exports = router