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
const {verifyToken, isAdmin} = require('../middlewares/authJwt');

router.post('/', addProduct); //NO JWT
router.delete('/', deleteProduct); //NO JWT
router.delete('/:id', [verifyToken, isAdmin], deleteOrder); //SI JWT
router.put('/', changeLot); //NO JWT
router.get('/', getUserOrder, getAllUserOrders); //NO JWT
router.get('/user', getAllUserOrders); //NO JWT
router.get('/all', [verifyToken, isAdmin], getAllOrders); //SI JWT
router.get('/:id', [verifyToken], getOrderById); //??????

module.exports = router;
