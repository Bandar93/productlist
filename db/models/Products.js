const mongoose = require("mongoose");
const mongooseSlugPlugin = require('mongoose-slug-plugin');

const ProductsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: String,
    description: String,
    color: String,
    quantity: { 
        type: Number,
        
    },
    price:{ 
        type:Number,
        default: 0
    }
})

ProductsSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });

module.exports = mongoose.model("Products", ProductsSchema)


// id:3,
//       name: "Pet Chicken Helmet",
//       slug: "pet-chicken-helmet",
//       image: "https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHc9611807ce8e45959f2b83563d341239r.jpg",
//       description: "Prevent the chicken from smash and protect the chicken's head.",
//       color: "green",
//       quantity: 2,
//       price:2