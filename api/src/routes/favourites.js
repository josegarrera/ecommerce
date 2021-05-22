const {Router} = require('express');
const router = Router();
const {getUserFavourites, addFavourite} = require('../controllers/favourites');

router.get('/', getUserFavourites);
router.post('/', addFavourite);

module.exports = router;
