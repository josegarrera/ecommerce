const {getCurrencyToday} = require('../controllers/currencies.js');
const {Router} = require('express');
const router = Router();

router.get('/', getCurrencyToday);

module.exports = router;
