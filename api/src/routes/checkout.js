const {Router} = require('express');
const router = Router();
const {
	initiatePayment,
	getOrderData,
	getResultPayment,
	getNotificationsMp,
} = require('../controllers/checkout.js');

router.post('/', initiatePayment);
router.post('/mp/notifications', getNotificationsMp);
router.get('/mp/payments/', getResultPayment);
router.get('/mp/payments/:id', getOrderData);

module.exports = router;
