let products = require("../../data")

const productlistFetch = (req , res) => {
    return res.json(products);
};

const productCreate = (req,res) => {
    products.push(req.body)
    res.status(201);
    return res.json(req.body)
};

const productDelete = (req,res) => {
    const productId = req.params.productId;
    const product = products.find((product) => product.id === +productId);
    if (product) {
        products = products.filter((product) => product.id !== +productId);
        return res.status(204).end();
    }else{
        return res.status(404).json({ message: "Product Not Found"});
    }
}

module.exports = {productlistFetch,
productCreate, productDelete};