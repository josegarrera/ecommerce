const {Router} = require('express');
const router = Router();
const {
	initiatePayment,
	getOrderData,
	getResultPayment,
	getNotificationsMp,
	notifyUser,
} = require('../controllers/checkout.js');

const {verifyToken} = require('../middlewares/authJwt');

router.post('/', [verifyToken], initiatePayment);
router.post('/mp/notifications', [verifyToken], getNotificationsMp);
router.get('/mp/payments/', [verifyToken], getResultPayment);
router.get('/mp/payments/:id', [verifyToken], getOrderData);
router.post('/send-notifications', [verifyToken], notifyUser);

module.exports = router;
