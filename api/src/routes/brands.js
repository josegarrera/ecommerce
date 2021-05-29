const {
	createBrands,
	getAllBrands,
	updateBrand,
	deleteBrand,
} = require('../controllers/brands.js');

const {verifyToken, isAdmin} = require('../middlewares/authJwt');
const {Router} = require('express');
const router = Router();

router.post('/', [verifyToken, isAdmin], createBrands); //SI JWT
router.get('/', getAllBrands); //NO JWT
router.put('/:id', [verifyToken, isAdmin], updateBrand); //SI JWT
router.delete('/:id', [verifyToken, isAdmin], deleteBrand); //SI JWT

module.exports = router;
