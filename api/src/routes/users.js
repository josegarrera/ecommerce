const {
	deleteUser,
	getAllUsers,
	updateUser,
} = require('../controllers/users.js');
const {verifyToken, isAdmin} = require('../middlewares/authJwt');
const {Router} = require('express');
const router = Router();

// router.get('/', [verifyToken, isAdmin], getAllUsers); // to use when we'll authenticate

router.get('/', [verifyToken, isAdmin], getAllUsers); //SI JWT
router.put('/:id', [verifyToken, isAdmin], updateUser); //SI JWT
router.delete('/:id', [verifyToken, isAdmin], deleteUser); //SI JWT

module.exports = router;
