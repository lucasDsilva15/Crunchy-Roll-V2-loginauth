const mongoose = require('mongoose')

const Schema = mongoose.Schema

const wishlistSchema = new Schema ({
    user: {
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    description:{
        type: String,
    },
    image:{
        type: String,
    },
    category: {
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    productid: {
        type: String,
        require: true
    }  
})

const Wishlist = mongoose.model('Wishlist', wishlistSchema )

module.exports = Wishlist