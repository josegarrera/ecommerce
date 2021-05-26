const {
	getCurrencyToday,
	getCurrencies,
} = require('../controllers/currencies.js');
const {Router} = require('express');
const router = Router();

router.get('/today', getCurrencyToday);
router.get('/', getCurrencies);

module.exports = router;
