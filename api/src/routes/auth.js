const {Router} = require('express');
const {forgotPassword, createNewPassword} = require('../controllers/auth');
const router = Router();

router.put('/forgotPassword', forgotPassword);
router.put('/newPassword', createNewPassword);

module.exports = router;
