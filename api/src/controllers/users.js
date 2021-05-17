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

function getAllUsers(req, res) {
	Users.find({}, ['email', 'role'])
		.exec()
		.then((data) => res.send(data))
		.catch((error) =>
			res.status(500).send({type: 'Internal Server Error', error: error})
		);
}

module.exports = {
	deleteUser,
	getAllUsers,
};
