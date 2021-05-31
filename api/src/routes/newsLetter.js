const {Router} = require('express');
const router = Router();
const {suscribe} = require('../controllers/newsLetter');

router.put('/suscribe', suscribe);

module.exports = router;
