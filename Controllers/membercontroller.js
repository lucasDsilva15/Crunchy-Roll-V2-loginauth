const User = require('../models/Users')
const Wishlist = require('../models/Wishlist')

const info = async (req, res) => { 
    try {
        const user = await User.findById(req.userId)
        res.status(200).json({username: user.username, email: user.email, developer: user.developer })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const allWishlistItems = async(req, res) => {
    try {
        const foundWishList = await Wishlist.find({userN: req.user})
        res.status(200).json({userWishlist: foundWishList}) 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

const addToWishlist = async (req, res) => {
    try {
        const addWish = await Wishlist.create(req.body)
        res.status(200).json({wishlistitem: addWish})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    info,
    allWishlistItems,
    addToWishlist
}