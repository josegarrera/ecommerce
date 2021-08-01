const {Users} = require('../models/index.js');
const jwt = require('jsonwebtoken');

async function verifyToken(req, res, next) {
	const authHeader = req.headers.authorization;
	if (authHeader) {
		const token = authHeader.split(' ')[1];
		jwt.verify(token, 'top_secret', (err, user) => {
			if (err) {
				console.log(err);
				return res.sendStatus(403);
			}
			req.user = user.user;
			next();
		});
	} else {
		res.sendStatus(401);
	}
}

async function isAdmin(req, res, next) {
	const id = req.user._id;
	const user = await Users.findById(id);
	if (user.role === 'admin') {
		next();
	} else {
		res.sendStatus(401);
	}
}

module.exports = {
	verifyToken,
	isAdmin,
};
