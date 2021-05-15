const {
	createBrands,
	getAllBrands,
	updateBrand,
} = require('../controllers/brands.js');
const {Router} = require('express');
const router = Router();

router.post('/', createBrands);
router.get('/', getAllBrands);
router.put('/:id', updateBrand);

module.exports = router;
