const {
	deleteUser,
	getAllUsers,
	updateUser,
} = require('../controllers/users.js');
const {verifyToken, isAdmin} = require('../middlewares/authJwt');
const {Router} = require('express');
const router = Router();

// router.get('/', [verifyToken, isAdmin], getAllUsers); // to use when we'll authenticate
router.get('/', getAllUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
