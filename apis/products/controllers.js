const { json } = require("express");
const Product = require("../../db/models/Products");

const productlistFetch = async (req , res , next) => {
    try {
        const products = await Product.find();
        return res.json(products);
    } catch (error){
        next(error)
       // res.status(500).json({massage: error});
    }
    
};

const productCreate = async (req,res, next) => {
    try{
    const newProduct = await Product.create(req.body);
    // console.log(newProduct)
    res.status(201).json(newProduct)
    }catch (error){
        next(error)
    // res.status(500).json({massage: error});
    }
};

const productDelete = async (req,res,next) => {
    try {
    const product = await Product.findById(req.params.productId);
    if(product){
        await product.remove();
        return res.status(204).end();
    }else{
        next({
            status: 404,
            massage: "Product Not Found!",
        })
        // return res.status(404).json({massage: "error"});
    }
    
} catch (error) {
    next(error)
    // res.status(500).json({massage: error});
}
}

const productUpdate = async (req,res,next) => {
    // const productId = res.params.productId;
    const { productId } = req.params;
    try{ 
    const product = await Product.findByIdAndUpdate(
        {_id: productId},
        req.body,
        {new: true }
    );
    if (product){
        return res.json(product);

    }else {
        // return res.status(404),json({ massage: "Not Found"});
        next({
            status: 404,
            massage: "Product Not Found!",
        })
    }

    } catch (error) {
        next(error)
        // return res.status(500).json({massage: "error"})
    }
}

module.exports = {productlistFetch,
productCreate, productDelete,productUpdate};