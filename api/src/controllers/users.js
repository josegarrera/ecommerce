const {Users, Orders} = require('../models/index.js');
const cloudinary = require('../cloudinary.js');

function deleteUser(req, res) {
	const userId = req.params.id;
	if (!userId) {
		return res.status(400).send({
			response: '',
			type: 'Bad Request',
			message: 'No ID in params',
		});
	}
	Promise.all([
		Users.findByIdAndRemove(userId),
		Orders.findOneAndRemove({users: userId}),
	])
		.then((data) => res.send({response: data, type: 'Ok', message: 'Success'}))
		.catch((err) =>
			res
				.status(500)
				.send({response: '', type: 'Internal server error.', message: err})
		);
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
	Users.findByIdAndUpdate(id, user)
		.then((doc) => {
			return Users.findOne({_id: doc._id});
		})
		.then((doc) => res.send({response: doc, type: 'Ok', message: 'Success'}))
		.catch((error) =>
			res
				.status(500)
				.send({response: '', type: 'Internal server error.', message: error})
		);
}

async function updateUserData(req, res) {
	const {id} = req.params;
	const user = JSON.parse(req.body.info);
	const file = req.files;

	if (!id) {
		return res.status(400).send({
			response: '',
			type: 'Bad Request',
			message: 'No ID in params',
		});
	}
	const userData = {
		firstName: user.firstName,
		lastName: user.lastName,
		address: user.address,
		identification: user.identification,
	};
	if (id && file.length) {
		try {
			const fileUpload = await cloudinary.v2.uploader.upload(file[0].path, {
				folder: 'Store',
			});
			userData.imageUrl = fileUpload.secure_url;
			await Users.findByIdAndUpdate(id, userData);
			return res.send({response: userData, type: 'Ok', message: 'Success'});
		} catch (error) {
			res
				.status(500)
				.send({response: '', type: 'Internal server error.', message: error});
		}
	} else {
		try {
			await Users.findByIdAndUpdate(id, userData);
			return res.send({response: userData, type: 'Ok', message: 'Success'});
		} catch (error) {
			res
				.status(500)
				.send({response: '', type: 'Internal server error.', message: error});
		}
	}
}

module.exports = {
	deleteUser,
	getAllUsers,
	updateUser,
	updateUserData,
};
