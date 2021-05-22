const {Router} = require('express');
const router = Router();
const {
	getUserFavourites,
	addFavourite,
	deleteFavourite,
} = require('../controllers/favourites');

router.get('/', getUserFavourites);
router.post('/', addFavourite);
router.delete('/', deleteFavourite);

module.exports = router;
