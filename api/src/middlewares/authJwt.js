const jwt = require('jsonwebtoken');

async function verifyToken(req, res, next) {
	const authHeader = req.headers.authorization;
	if (authHeader) {
		const token = authHeader.split(' ')[1];
		jwt.verify(token, 'top_secret', (err, user) => {
			if (err) {
				return res.sendStatus(403);
			}
			req.user = user;
			console.log(user);
			next();
		});
	} else {
		res.sendStatus(401);
	}
}

module.exports = {
	verifyToken,
};
