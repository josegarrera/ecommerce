const mongoose = require('mongoose');
const {Users, Favourites} = require('../models/index.js');

async function getUserFavourites(req, res) {
	const {userId} = req.query;
	try {
		let user = await Users.exists({_id: userId});
		if (user) {
			let favs = await Favourites.findOne({user: userId})
				.populate('products.product')
				.exec();
			res.send(favs.products);
		} else {
			res.status(400).send({type: 'Bad Request', message: 'user not found'});
		}
	} catch (error) {
		console.error(error);
	}
}

async function addFavourite(req, res) {
	const {userId, product} = req.body;
	try {
		let user = await Users.exists({_id: userId});
		let favs = await Favourites.exists({user: userId});
		if (user) {
			if (favs) {
				let agregar = favs.products.find((e) => e.product == product)
					? false
					: true;
				if (agregar) {
					favs.products.concat({product});
					favs.save();
				}
			} else {
				let newfavs = await new Favourites({
					user: userId,
					products: [{product}],
				});
				await newfavs.save();
			}
			let toSend = await Favourites.findOne({user: userId})
				.populate('products.product')
				.exec();
			res.send(toSend.products);
		}
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	addFavourite,
	getUserFavourites,
};
