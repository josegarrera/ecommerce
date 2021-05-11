const {Router} = require('express');
const router = Router();
const products = require('./products.js');
const categories = require('./categories.js');
const brands = require('./brands.js');
const cart = require('./cart.js');

router.use('/products', products);
router.use('/categories', categories);
router.use('/brands', brands);
router.use('/cart', cart);

module.exports = router;
