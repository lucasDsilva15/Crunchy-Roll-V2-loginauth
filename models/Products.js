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
    price:{
        type: Number,
        require: true
    },
    Quantity: {
        type: String,
        require: true
    }  
})

const Products = mongoose.model('Products', productSchema)

module.exports = Products