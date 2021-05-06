const { Router } = require("express");
const router = Router();
const products = require("./products.js");
const categories = require("./categories.js")

router.use("/products", products);
router.use("/categories", categories);

module.exports = router;
