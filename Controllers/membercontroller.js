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
        const foundWishList = await Wishlist.find({user: req.user})
        res.status(200).json({userWishlist: foundWishList}) 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

const addToWishlist = async (req, res) => {
    try {
        const findWishlistItem = await Wishlist.findOne({user: req.user, productid: req.body.productid})
        if(findWishlistItem){
            return res.status(400).json({error: 'Item Already in WishList'})
        }
        const addWish = await Wishlist.create({...req.body, user: req.user})
        res.status(200).json({wishlistitem: addWish})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteWishListItem = async (req, res) => {
    try {
        const deletedItem = await Wishlist.findByIdAndDelete(req.params.id)
        res.status(200).json({wishlistItem: deletedItem})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const editWishListItem = async (req,res) => {
    try {
        console.log(req.params.id)
        const editedItem = await Wishlist.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({editedItem: editedItem})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    info,
    allWishlistItems,
    addToWishlist,
    deleteWishListItem,
    editWishListItem
}