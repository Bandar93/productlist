const express = require("express");
const productsRoutes = require("./apis/products/routes")
// let products = require("./data")
const app = express();
// Middleware
app.use(express.json());

app.use("/api/products",productsRoutes);
// PORT localhost
const PORT=8000;
app.listen(PORT,() => console.log(`test ${PORT}`)
);