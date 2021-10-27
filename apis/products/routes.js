
const express = require("express");
const {productlistFetch,productCreate,productDelete,productUpdate} = require("./controllers")
 
const router = express.Router();




router.get("/", productlistFetch);

router.post("/",productCreate);

router.delete("/:productId",productDelete);

router.put("/:productId",productUpdate)

module.exports = router;