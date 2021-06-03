const {Router} = require('express');
const router = Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const products = require('./products.js');
const categories = require('./categories.js');
const brands = require('./brands.js');
const orders = require('./orders.js');
const currencies = require('./currencies.js');
const users = require('./users.js');
const checkout = require('./checkout.js');
const favourites = require('./favourites.js');
const auth = require('./auth.js');
const newsLetter = require('./newsLetter');
const {getAllProducts} = require('../controllers/products.js');
const {Users} = require('../models/index.js');

// authentication
router.post(
	'/signup',
	passport.authenticate('signup', {session: false}),
	async (req, res, next) => {
		const idUser = req.user._id;
		try {
			await Users.findByIdAndUpdate(idUser, {
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				imageUrl: req.body.profileImage,
			});
		} catch (error) {
			return next(e);
		}

		res.json({
			message: req.authInfo,
			user: {
				...req.user,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				imageUrl: req.body.profileImage,
			},
		});
	}
);

router.post('/login', async (req, res, next) => {
	passport.authenticate('login', async (err, user, info) => {
		try {
			if (err || !user) {
				const error = new Error('new Error');
				return res.json({
					notLogin: info.message,
				});
			}
			req.login(user, {session: false}, async (err) => {
				if (err) return next(err);
				const body = {_id: user._id, email: user.email};

				const token = jwt.sign({user: body}, 'top_secret', {
					expiresIn: 86400,
				});
				return res.json({
					login: info.message,
					token,
					user,
				});
			});
		} catch (e) {
			return next(e);
		}
	})(req, res, next);
});

router.get(
	'/profile',
	passport.authenticate('jwt', {session: false}),
	(req, res, next) => {
		res.json({
			message: 'You did it!',
			user: req.user,
			token: req.query.secret_token,
		});
	}
);

router.get('/allproducts', getAllProducts); //no JWT
router.use('/auth', auth);
router.use('/products', products); //SI JWT
router.use('/categories', categories); //SI JWT
router.use('/brands', brands); //SI JWT
router.use('/orders', orders); //SI JWT
router.use('/currencies', currencies); //?????
router.use('/users', users); //SI JWT
router.use('/checkout', checkout); //SI JWT | VERIFY IF EXISTS TOKEN
router.use('/favourites', favourites); //SI JWT | VERIFY IF EXISTS TOKEN
router.use('/newsLetter', newsLetter);

module.exports = router;
