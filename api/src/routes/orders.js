const {Router} = require('express');
const router = Router();
const {
	getUserOrder,
	addProduct,
	getAllOrders,
	getOrderById,
	getAllUserOrders,
	deleteProduct,
	changeLot,
} = require('../controllers/orders');

router.post('/', addProduct);
router.delete('/', deleteProduct);
router.put('/', changeLot);
router.get('/', getUserOrder, getAllUserOrders);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);

module.exports = router;
