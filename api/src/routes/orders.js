const {Router} = require('express');
const router = Router();
const Orders = require('../models/orders');
const {
	getUserOrder,
	addProduct,
	getAllUserOrders,
} = require('../controllers/orders');

router.post('/', addProduct);

router.get('/', getUserOrder);
router.get('/userOrders', getAllUserOrders);

module.exports = router;
