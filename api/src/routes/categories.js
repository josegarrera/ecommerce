const {createCategories} = require("../controllers/categories.js");
const { Router } = require("express");
const router = Router();

router.post("/", createCategories);

module.exports = router;
