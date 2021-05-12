const mongoose = require('mongoose');
const Orders = require('../models/orders');
const Users = require('../models/users');

async function getUserOrder(req, res) {
	const {userId} = req.body;
	try {
		let userExists = await Users.exists({_id: userId});
		if (userExists) {
			let orderExist = await Orders.exists({users: userId, state: 1});
			if (orderExist) {
				let order = await Orders.findOne({users: userId, state: 1})
					.populate('users', {email: 1, _id: 1})
					.populate('items.product', {name: 1, price: 1, _id: 1})
					.exec();
				console.log(order);
				return res.send(order);
			}
			let order = await new Orders({users: userId});
			order.save();
			res.send(order);
		} else {
			res.status(400).send({type: 'Bad request', error: 'user does not exist'});
		}
	} catch (error) {
		res.status(500).send({type: 'Internal server error.', error: error});
	}
}

async function addProduct(req, res) {
	const {userId, products} = req.body;
	try {
		let userExists = await Users.exists({_id: userId});
		if (userExists) {
			let existe = await Orders.exists({users: userId, state: 1});
			if (existe) {
				let order = await Orders.findOne({users: userId, state: 1});
				console.log(order);
				console.log(products);

				order.products = order.products.concat(products);
				console.log(order.products);
				await order.save();
				return res.send(order);
			}
			let order = await new Orders({users: userId, products});
			order.save();
			res.send(order);
		}
	} catch (err) {
		console.log(err);
	}
}

module.exports = {
	getUserOrder,
	addProduct,
};
