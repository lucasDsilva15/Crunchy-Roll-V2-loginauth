const Products = require('../models/Products')

const newProduct = async (req, res) => {
    try {
        const addedProduct = await Products.create(req.body)
        res.status(200).json({products: addedProduct})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Products.findByIdAndDelete(req.params.id)
        res.status(200).json({products: deletedProduct})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const editedProduct = async (req, res) => {
    try {
        const editedProduct = await Products.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({products: editedProduct})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}






module.exports = {
    newProduct,
    deleteProduct,
    editedProduct
}