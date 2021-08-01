const {
	deleteUser,
	getAllUsers,
	updateUser,
	updateUserData,
} = require('../controllers/users.js');
const {verifyToken, isAdmin} = require('../middlewares/authJwt');
const {Router} = require('express');
const router = Router();
const upload = require('../middlewares/uploads.js');

// router.get('/', [verifyToken, isAdmin], getAllUsers); // to use when we'll authenticate

router.get('/', getAllUsers); //SI JWT
router.put('/:id', [verifyToken, isAdmin], updateUser); //SI JWT
router.delete('/:id', [verifyToken, isAdmin], deleteUser); //SI JWT
router.put('/profile/:id', upload.array('images', 1), updateUserData);

module.exports = router;
