const {Router} = require('express');
const router = Router();
const Orders = require('../models/orders');
const {getUserOrder, addProduct} = require('../controllers/orders');

router.post('/', addProduct);

router.get('/', getUserOrder);

module.exports = router;
