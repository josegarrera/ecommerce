const {Router} = require('express');
const {forgotPassword, createNewPassword} = require('../controllers/auth');
const router = Router();

router.put('/forgotPassword', forgotPassword);
router.put('/resetPassword', createNewPassword);

module.exports = router;
