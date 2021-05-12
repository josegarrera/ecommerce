const {Router} = require('express');
const router = Router();
const {
	getUserOrder,
	addProduct,
	getAllOrders,
	getOrderById,
  	getAllUserOrders,
} = require('../controllers/orders');

router.post('/', addProduct);

router.get('/', getUserOrder);
router.get('/', getAllUserOrders);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);

module.exports = router;
