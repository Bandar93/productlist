const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: String,
    image: String,
    description: String,
    color: String,
    quantity: Number,
    price:{ 
        type:Number,
        default:"price"
    },
    
});

module.exports = mongoose.model("Products", ProductsSchema)


// id:3,
//       name: "Pet Chicken Helmet",
//       slug: "pet-chicken-helmet",
//       image: "https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHc9611807ce8e45959f2b83563d341239r.jpg",
//       description: "Prevent the chicken from smash and protect the chicken's head.",
//       color: "green",
//       quantity: 2,
//       price:2