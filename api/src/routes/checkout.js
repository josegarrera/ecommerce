const {Router} = require('express');
const router = Router();
const {makePayment} = require('../controllers/mercadopago.js');

router.post('/', makePayment);
/* router.post("/", otroController) aca mando la info del carrito*/

module.exports = router;
