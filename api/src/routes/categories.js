const {
	createCategories,
	getAllCategories,
	updateACategory,
	deleteACategory,
} = require('../controllers/categories.js');
const {Router} = require('express');
const router = Router();

router.get('/', getAllCategories);
router.post('/', createCategories);
router.put('/:id', updateACategory);
router.delete('/:id', deleteACategory);

module.exports = router;
