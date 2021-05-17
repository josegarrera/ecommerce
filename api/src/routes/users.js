const {deleteUser, getAllUsers} = require('../controllers/users.js');
const {Router} = require('express');
const router = Router();

router.get('/', getAllUsers);
router.delete('/', deleteUser);

module.exports = router;
