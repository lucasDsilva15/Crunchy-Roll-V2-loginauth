const Products = require('../models/Products')

const newProduct = async (req, res) => {
    try {
        const addedProduct = await Products.create(req.body)
        res.status(200).json({products: addedProduct})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}




module.exports = {
    newProduct,
}