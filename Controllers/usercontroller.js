const Products = require('../models/Products')

const allProducts = async (req, res) => {
    try {
        const foundProducts = await Products.find({})
        res.status(200).json({all: foundProducts})
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

module.exports= {
    allProducts,
    purchaseProduct
}
