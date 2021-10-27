const express = require("express");
const productsRoutes = require("./apis/products/routes")

const app = express();
const connectDB = require("./database")
// Middleware

app.use(express.json());
// we can use morgan dev libary
app.use((req,res,next) => {
    console.log(req.originalUrl)
    console.log(req.protocol)
    console.log(req.method)
    console.log(req.get("host"))
    next()
})
connectDB();
app.use("/api/products",productsRoutes);

app.use((req,res,next) => {
    res.status(404).json({ massage: "Path Not Found"});
    next()
})

app.use((err,req,res,next) => {
    res.status(err.status || 500).json({massage: err.massage ||  "Internal Server Error"  });
})
// PORT localhost
const PORT=8000;
app.listen(PORT,() => console.log(`test ${PORT}`)

);
