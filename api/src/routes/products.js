const {
	createProduct,
	getProducts,
	getProductsDetail,
	updateProduct,
} = require('../controllers/products.js');
const {Router} = require('express');
const router = Router();
const upload = require('../middlewares/uploads.js');

router.post('/', upload.array('images'), createProduct);
router.get('/', getProducts);
router.get('/:id', getProductsDetail);
router.put('/:id', updateProduct);
module.exports = router;
