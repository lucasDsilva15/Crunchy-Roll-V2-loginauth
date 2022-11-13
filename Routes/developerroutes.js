const express = require('express')
const router = express.Router()

const developerController = require('../Controllers/developercontrollers')

router.delete('/:id/delete', developerController.deleteProduct)
router.post('/add', developerController.newProduct)
router.put('/:id/edit', developerController.editedProduct )

module.exports = router