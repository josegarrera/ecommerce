const {
	createCategories,
	getAllCategories,
} = require('../controllers/categories.js');
const {Router} = require('express');
const router = Router();

router.post('/', createCategories);
router.get('/', getAllCategories);

module.exports = router;
