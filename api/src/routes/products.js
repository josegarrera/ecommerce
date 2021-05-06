const {createProduct, getProducts} = require("../controllers/products.js");
const { Router } = require("express");
const router = Router();

router.post("/", createProduct);
router.get("/", getProducts)

module.exports = router;
