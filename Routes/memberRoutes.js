const express = require('express')
const router = express.Router()

const memberController = require('../Controllers/membercontroller')

router.get('/info', memberController.info)
router.get('/wishlistindex', memberController.allWishlistItems)
router.post('/addtowishlist', memberController.addToWishlist)

module.exports = router