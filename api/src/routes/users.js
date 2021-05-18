const {
	deleteUser,
	getAllUsers,
	updateUser,
} = require('../controllers/users.js');
const {Router} = require('express');
const router = Router();

router.get('/', getAllUsers);
router.put('/:id', updateUser);
router.delete('/', deleteUser);

module.exports = router;
