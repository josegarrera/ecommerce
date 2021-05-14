const {Router} = require('express');
const router = Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const products = require('./products.js');
const categories = require('./categories.js');
const brands = require('./brands.js');
const orders = require('./orders.js');
const currencies = require('./currencies.js');

// authentication
router.post(
	'/signup',
	passport.authenticate('signup', {session: false}),
	async (req, res, next) => {
		res.json({
			message: req.authInfo,
			user: req.user,
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

				const token = jwt.sign({user: body}, 'top_secret');
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

router.use('/products', products);
router.use('/categories', categories);
router.use('/brands', brands);
router.use('/orders', orders);
router.use('/currencies', currencies);

module.exports = router;
