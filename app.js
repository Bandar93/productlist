const express = require("express");
const data = require("./data")
const app = express();

const PORT=8000;

app.listen(PORT,() =>
console.log(`test ${PORT}`)
);
app.get("/products", (req , res)=> {
    res.json(data)
})