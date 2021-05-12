const {Router} = require('express');
const router = Router();
const {
	getUserOrder,
	addProduct,
	getAllOrders,
} = require('../controllers/orders');

router.post('/', addProduct);

router.get('/', getUserOrder);
router.get('/', getAllOrders);

module.exports = router;
