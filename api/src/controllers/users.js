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

function updateUser(req, res) {
	const {id} = req.params;
	const user = req.body; // por body se puede enviar email, role
	console.log(id, user);
	Users.findOne({_id: id})
		.then((doc) => Users.updateOne({_id: doc._id}, user))
		.then(() => Users.findOne({_id: id}))
		.then((doc) => res.send(doc))
		.catch((error) =>
			res.status(500).send({type: 'Internal Server Error', error: error})
		);
}

module.exports = {
	deleteUser,
	getAllUsers,
	updateUser,
};
