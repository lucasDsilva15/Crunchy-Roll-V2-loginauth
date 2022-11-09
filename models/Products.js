const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema ({
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
    }  
})

const Products = mongoose.model('Products', productSchema)

module.exports = Products