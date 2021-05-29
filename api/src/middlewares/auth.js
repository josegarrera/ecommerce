const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/users');

const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
	'signup',
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		async (email, password, done) => {
			try {
				const user = await Users.exists({email});
				if (!user) {
					const newUser = await Users.create({
						email,
						password,
					});
					const message = 'Signup successfull!';
					return done(null, newUser, message);
				} else {
					const message = 'Email already registered';
					return done(null, user, message);
				}
			} catch (e) {
				done(e);
			}
		}
	)
);

passport.use(
	'login',
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		async (email, password, done) => {
			try {
				const user = await Users.findOne({email});
				if (!user) {
					return done(null, false, {message: 'User not found'});
				}

				const validate = await user.isValidPassword(password);

				if (!validate) {
					return done(null, false, {message: 'Wrong password'});
				}

				return done(null, user, {message: 'Login successfull'});
			} catch (e) {
				return done(e);
			}
		}
	)
);

passport.use(
	new JWTStrategy(
		{
			secretOrKey: 'top_secret',
			jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token'),
		},
		async (token, done) => {
			try {
				return done(null, token.user);
			} catch (e) {
				done(error);
			}
		}
	)
);
