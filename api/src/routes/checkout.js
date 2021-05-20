const {Router, response} = require('express');
const router = Router();
const {
	initiatePayment,
	getOrderData,
	getResultPayment,
} = require('../controllers/mercadopago.js');

router.post('/', initiatePayment);
router.get('/mp/payments/', getResultPayment);
router.get('/mp/payments/:id', getOrderData);

module.exports = router;
