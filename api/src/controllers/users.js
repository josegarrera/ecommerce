const {Users} = require('../models/index.js');

function deleteUser(req, res) {
	const userId = req.params.id;
	if (!userId) {
		return res.status(400).send({
			response: '',
			type: 'Bad Request',
			message: 'No ID in params',
		});
	}
	// Falta eliminar la order activa del usuario
	Users.findByIdAndRemove(userId, function (err, doc) {
		if (err) {
			res.status(500).send({
				response: '',
				type: 'Internal server error.',
				message: err,
			});
		} else {
			res.send({response: doc, type: 'Ok', message: 'Success'});
		}
	});
}

function getAllUsers(req, res) {
	Users.find({}, ['email', 'role'])
		.exec()
		.then((data) => res.send({response: data, type: 'Ok', message: 'Success'}))
		.catch((error) =>
			res
				.status(500)
				.send({response: '', type: 'Internal server error.', message: error})
		);
}

function updateUser(req, res) {
	const {id} = req.params;
	const user = req.body; // por body se puede enviar email, role

	//Falta contemplar si actualiza la orden
	Users.findOne({_id: id})
		.then((doc) => Users.updateOne({_id: doc._id}, user))
		.then(() => Users.findOne({_id: id}))
		.then((doc) => res.send({response: doc, type: 'Ok', message: 'Success'}))
		.catch((error) =>
			res
				.status(500)
				.send({response: '', type: 'Internal server error.', message: error})
		);
}

module.exports = {
	deleteUser,
	getAllUsers,
	updateUser,
};
