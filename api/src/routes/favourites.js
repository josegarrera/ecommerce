const {Router} = require('express');
const router = Router();
const {
	getUserFavourites,
	addFavourite,
	deleteFavourite,
} = require('../controllers/favourites');

router.get('/', getUserFavourites); //SI JWT
router.post('/', addFavourite); //SI JWT
router.delete('/', deleteFavourite); //SI JWT

module.exports = router;
