const {createProduct, getProducts} = require('../controllers/products.js');
const {Router} = require('express');
const router = Router();
const upload = require('../middlewares/uploads.js');

router.post('/', upload.array('images'), createProduct);
router.get('/', getProducts);

module.exports = router;
