const {Users, Favourites} = require('../models/index.js');

async function getUserFavourites(req, res) {
	const {userId} = req.query;
	try {
		let user = await Users.exists({_id: userId});
		if (user) {
			let favsExist = await Favourites.exists({user: userId});
			if (!favsExist) {
				let newfavs = await new Favourites({
					user: userId,
					products: [],
				});
				await newfavs.save();
			}
			let favs = await Favourites.findOne({user: userId})
				.populate('products.product')
				.exec();
			res.send({response: favs.products, type: 'Ok', message: 'Success'});
		} else {
			res.status(400).send({type: 'Bad Request', message: 'user not found'});
		}
	} catch (err) {
		res
			.status(500)
			.send({response: '', type: 'Internal server error.', message: err});
	}
}

async function addFavourite(req, res) {
	const {userId, productId} = req.body;
	try {
		let user = await Users.exists({_id: userId});
		let favs = await Favourites.exists({user: userId});
		if (user) {
			if (favs) {
				favs = await Favourites.findOne({user: userId});
				let add = favs.products.find((e) => e.product == productId)
					? false
					: true;

				if (add) {
					favs.products = favs.products.concat([{product: productId}]);
					await favs.save();
				}
			} else {
				let newfavs = await new Favourites({
					user: userId,
					products: [{product: productId}],
				});
				await newfavs.save();
			}
			let toSend = await Favourites.findOne({user: userId})
				.populate('products.product')
				.exec();
			res.send({response: toSend.products, type: 'Ok', message: 'Success'});
		} else {
			res.status(400).send({type: 'Bad Request', message: 'user not found'});
		}
	} catch (err) {
		res
			.status(500)
			.send({response: '', type: 'Internal server error.', message: err});
	}
}

async function deleteFavourite(req, res) {
	const {userId, productId} = req.body;
	try {
		let user = await Users.exists({_id: userId});
		if (user) {
			let update = await Favourites.findOneAndUpdate(
				{user: userId},
				{
					$pull: {
						products: {product: {_id: productId}},
					},
				}
			).exec();
			update = await Favourites.findOne({user: userId}).populate(
				'products.product'
			);
			res.send({response: update.products, type: 'Ok', message: 'Success'});
		} else {
			res.status(400).send({type: 'Bad Request', message: 'user not found'});
		}
	} catch (err) {
		res
			.status(500)
			.send({response: '', type: 'Internal server error.', message: err});
	}
}

module.exports = {
	addFavourite,
	getUserFavourites,
	deleteFavourite,
};
