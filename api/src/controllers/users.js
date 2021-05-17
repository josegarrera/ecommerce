const {Users} = require('../models/index.js');

function deleteUser(req, res) {
	const {userId} = req.body;
	Users.findByIdAndRemove(userId, function (err, doc) {
		if (err) {
			return res.status(400).send(err);
		} else {
			res.send(doc);
		}
	});
}

module.exports = {
	deleteUser,
};
