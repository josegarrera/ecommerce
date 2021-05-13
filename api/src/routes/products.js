const {
	createProduct,
	getProducts,
	getProductsDetail,
	updateProduct,
	deleteProduct,
} = require('../controllers/products.js');
const {Router} = require('express');
const router = Router();
const upload = require('../middlewares/uploads.js');

router.post('/', upload.array('images'), createProduct);
router.get('/', getProducts);
router.get('/:id', getProductsDetail);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
module.exports = router;
