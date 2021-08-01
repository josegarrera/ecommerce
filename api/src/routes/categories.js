const {
	createCategories,
	getAllCategories,
	updateACategory,
	deleteACategory,
} = require('../controllers/categories.js');
const {verifyToken, isAdmin} = require('../middlewares/authJwt');
const {Router} = require('express');
const router = Router();

router.get('/', getAllCategories); //NO JWT
router.post('/', [verifyToken, isAdmin], createCategories); //SI JWT
router.put('/:id', [verifyToken, isAdmin], updateACategory); //SI JWT
router.delete('/:id', [verifyToken, isAdmin], deleteACategory); //SI JWT

module.exports = router;
