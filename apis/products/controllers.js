const Product = require("../../db/models/Products");

const productlistFetch = async (req , res) => {
    try {
        const products = await Product.find();
        return res.json(products);
    } catch (error){
        res.status(500).json({massage: error});
    }
    
};

const productCreate = async (req,res) => {
    try{
    const newProduct = await Product.create(req.body);
    // console.log(newProduct)
    res.status(201).json(newProduct)
    }catch (error){
    res.status(500).json({massage: error});
    }
};

const productDelete = async (req,res) => {
    try {
    const product = await Product.findById(req.params.productId);
    if(product){
        await product.remove();
        return res.status(204).end();
    }else{
        return res.status(404).json({massage: "error"});
    }
    
} catch (error) {
    res.status(500).json({massage: error});
}
}

module.exports = {productlistFetch,
productCreate, productDelete};