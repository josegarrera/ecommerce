const {Router} = require('express');
const router = Router();
const {
	getUserFavourites,
	addFavourite,
	deleteFavourite,
} = require('../controllers/favourites');

const {verifyToken} = require('../middlewares/authJwt');

router.get('/', [verifyToken], getUserFavourites); //SI JWT
router.post('/', [verifyToken], addFavourite); //SI JWT
router.delete('/', [verifyToken], deleteFavourite); //SI JWT

module.exports = router;
