const {deleteUser} = require('../controllers/users.js');
const {Router} = require('express');
const router = Router();

router.delete('/', deleteUser);

module.exports = router;
