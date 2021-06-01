const {Router} = require('express');
const router = Router();
const {suscribe, unSuscribe} = require('../controllers/newsLetter');

router.put('/suscribe', suscribe);
router.put('/unSuscribe', unSuscribe);

module.exports = router;
