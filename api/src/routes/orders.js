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
	deleteOrder,
} = require('../controllers/orders');

router.post('/', addProduct);
router.delete('/', deleteProduct);
router.delete('/:id', deleteOrder);
router.put('/', changeLot);
router.get('/', getUserOrder, getAllUserOrders);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);

module.exports = router;
