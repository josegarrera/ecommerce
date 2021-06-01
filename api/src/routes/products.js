const {
	createProduct,
	getProducts,
	getProductsDetail,
	updateProduct,
	deleteProduct,
	addReview,
} = require('../controllers/products.js');

const {verifyToken, isAdmin} = require('../middlewares/authJwt');

const {Router} = require('express');

const router = Router();

const upload = require('../middlewares/uploads.js');

router.post('/', upload.array('images', 10), createProduct); //SI JWT
router.get('/', getProducts); //no JWT ✔✔
router.get('/:id', getProductsDetail); //no JWT ✔✔
router.put('/reviews/:id', [verifyToken], addReview); //SI verify JWT ✔✔
router.put(
	'/:id',
	[verifyToken, isAdmin],
	upload.array('images', 10),
	updateProduct
); //SI JWT
router.delete('/:id', [verifyToken, isAdmin], deleteProduct); //SI JWT
module.exports = router;
