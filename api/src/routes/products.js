const {
	createProduct,
	getProducts,
	getProductsDetail,
} = require('../controllers/products.js');
const {Router} = require('express');
const router = Router();
const upload = require('../middlewares/uploads.js');

router.post('/', upload.array('images'), createProduct);
router.get('/', getProducts);
router.get('/:id', getProductsDetail);

module.exports = router;
