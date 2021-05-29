const {Router} = require('express');
const router = Router();
const {
	initiatePayment,
	getOrderData,
	getResultPayment,
	getNotificationsMp,
} = require('../controllers/checkout.js');

router.post('/', initiatePayment); //NO JWT SI VERYFY TOKEN
router.post('/mp/notifications', getNotificationsMp); //NO JWT SI VERYFY TOKEN
router.get('/mp/payments/', getResultPayment); //NO JWT SI VERYFY TOKEN
router.get('/mp/payments/:id', getOrderData); //NO JWT SI VERYFY TOKEN

module.exports = router;
