const {
	createCategories,
	getAllCategories,
	updateACategorie,
	deleteACategorie,
} = require('../controllers/categories.js');
const {Router} = require('express');
const router = Router();

router.get('/', getAllCategories);
router.post('/', createCategories);
router.put('/', updateACategorie);
router.delete('/', deleteACategorie);

module.exports = router;
