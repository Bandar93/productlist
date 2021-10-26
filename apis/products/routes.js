
const express = require("express");
const {productlistFetch,productCreate,productDelete} = require("./controllers")
 
const router = express.Router();




router.get("/", productlistFetch);

router.post("/",productCreate);

router.delete("/:productId",productDelete);

module.exports = router;