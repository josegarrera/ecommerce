const {createProduct} = require("../controllers/products.js");
const { Router } = require("express");
const router = Router();

router.post("/", createProduct);

module.exports = router;
