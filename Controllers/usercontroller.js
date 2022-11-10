const Products = require('../models/Products')

const allProducts = async (req, res) => {
    try {
        const foundProducts = await Products.find({})
        res.status(200).json({products: foundProducts})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const purchaseProduct = async (req, res) => {
   try {
    const updatedProduct = await Products.findOneAndUpdate({_id: req.params.id}, {$inc : {'quantity': -1}})
    res.status(200).json({updated: updatedProduct})
   } catch (error) {
    res.status(400).json({error: error.message})
   } 
    
}

const showProduct = async (req, res) => {
    try {
        const foundProduct = await Products.findOne({id: req.params.id})
        res.status(200).json({product: foundProduct})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports= {
    allProducts,
    purchaseProduct,
    showProduct
}
