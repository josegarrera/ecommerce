const {createBrands, getAllBrands} = require('../controllers/brands.js');
const {Router} = require('express');
const router = Router();

router.post('/', createBrands);
router.get('/', getAllBrands);

module.exports = router;
