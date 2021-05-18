const {
	createBrands,
	getAllBrands,
	updateBrand,
	deleteBrand,
} = require('../controllers/brands.js');
const {Router} = require('express');
const router = Router();

router.post('/', createBrands);
router.get('/', getAllBrands);
router.put('/:id', updateBrand);
router.delete('/:id', deleteBrand);

module.exports = router;
