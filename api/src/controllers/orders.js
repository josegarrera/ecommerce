const mongoose = require('mongoose');
const {Orders, Products, Users} = require('../models/index');

async function getUserOrder(req, res, next) {
	const {userId, cart} = req.query;
	try {
		if (cart) {
			let userExists = await Users.exists({_id: userId});
			if (userExists) {
				let orderExist = await Orders.exists({users: userId, state: 1});
				if (orderExist) {
					let order = await Orders.findOne({users: userId, state: 1})
						.populate('users', {email: 1, _id: 1})
						.populate('items.product')
						.exec();
					return res.send(order);
				} else {
					let order = await new Orders({users: userId, items: []});
					order.save();
					res.send(order);
				}
			} else {
				res
					.status(400)
					.send({type: 'Bad request', error: 'user does not exist'});
			}
		} else {
			next();
		}
	} catch (error) {
		res.status(500).send({type: 'Internal server error.', error: error});
	}
}

async function getAllUserOrders(req, res, next) {
	const {userId} = req.query;
	try {
		if (userId) {
			let userExists = await Users.exists({_id: userId});
			if (userExists) {
				let orders = await Orders.find({users: userId, state: 0});
				if (orders.length) {
					return res.send(orders);
				} else {
					res.send({message: 'user do not have complete orders yet'});
				}
			} else {
				res
					.status(400)
					.send({type: 'Bad request', error: 'user does not exist'});
			}
		} else {
			next();
		}
	} catch (error) {
		res.status(500).send({type: 'Internal server error.', error: error});
	}
}

async function addProduct(req, res) {
	const {userId, products} = req.body.data;
	try {
		let userExists = await Users.exists({_id: userId});
		if (userExists) {
			let orderActive = await Orders.findOne({users: userId, state: 1});
			if (orderActive) {
				if (Array.isArray(products)) {
					let toAdd = products.filter((e) =>
						orderActive.items.find((prod) => prod.product == e.product._id)
							? false
							: true
					);
					toAdd = toAdd.map((e) => {
						return {lot: e.lot, product: e.product._id};
					});
					orderActive.items = orderActive.items.concat(toAdd);
					await orderActive.save();
					orderActive = await Orders.findOne({users: userId, state: 1})
						.populate('users', {email: 1, _id: 1})
						.populate('items.product')
						.exec();
					return res.send(orderActive);
				} else {
					let toAdd = orderActive.items.find(
						(p) => p.product == products.product._id
					)
						? false
						: true;
					if (toAdd) {
						orderActive.items = orderActive.items.concat([
							{lot: products.lot, product: products.product._id},
						]);
						orderActive.save();
					}
					orderActive = await Orders.findOne({users: userId, state: 1})
						.populate('users', {email: 1, _id: 1})
						.populate('items.product')
						.exec();
					return res.send(orderActive);
				}
			} else {
				if (Array.isArray(products)) {
					let toAdd = products.map((e) => {
						return {lot: e.lot, product: e.product._id};
					});
					let order = await new Orders({users: userId, items: toAdd})
						.populate('users', {email: 1, _id: 1})
						.populate('items.product')
						.exec();
					order.save();
					res.send(order);
				} else {
					console.log(products.lot);
					let order = await new Orders({
						users: userId,
						items: [{lot: products.lot, product: products.product._id}],
					});
					await order.save();
					order = await await Orders.findOne({users: userId, state: 1})
						.populate('users', {email: 1, _id: 1})
						.populate('items.product')
						.exec();
					res.send(order);
				}

				order.save();
				res.send(order);
			}
		}
	} catch (err) {
		res.status(500).send({type: 'Internal server error.', error: error});
	}
}

async function deleteProduct(req, res) {
	const {userId, productId} = req.body;
	try {
		const user = await Users.exists({_id: userId});
		if (user) {
			let update = await Orders.findOneAndUpdate(
				{users: userId, state: 1},
				{
					$pull: {
						items: {product: {_id: productId}},
					},
				}
			).exec();
			update = await Orders.findOne({users: userId, state: 1})
				.populate('users', {email: 1, _id: 1})
				.populate('items.product')
				.exec();
			res.send(update);
		} else {
			res.send({message: 'The user id does not exist'});
		}
	} catch (err) {
		res.status(500).send({type: 'Internal server error.', error: error});
	}
}

async function changeLot(req, res) {
	const {userId, productId, num} = req.body;
	try {
		if (await Users.exists({_id: userId})) {
			let update = await Orders.findOne({users: userId, state: 1});
			let modificarLot = update.items.find((e) => e.product == productId);
			if (modificarLot) {
				modificarLot.lot =
					modificarLot.lot + num >= 1
						? modificarLot.lot + num
						: modificarLot.lot;
				await update.save();
				update = await Orders.findOne({users: userId, state: 1})
					.populate('users', {email: 1, _id: 1})
					.populate('items.product')
					.exec();
				res.send(update);
			} else {
				update = await Orders.findOne({users: userId, state: 1})
					.populate('users', {email: 1, _id: 1})
					.populate('items.product')
					.exec();
				res.send(update);
			}
		}
	} catch (error) {
		res.status(500).send({type: 'Internal server error.', error: error});
	}
}

function getAllOrders(req, res) {
	Orders.find({})
		.exec()
		.then((data) => res.send(data))
		.catch((error) =>
			res.status(500).send({type: 'Internal Server Error', error: error})
		);
}

async function getOrderById(req, res) {
	const {id} = req.params;
	if (!id)
		return res.status(400).send({
			type: 'Bad Request',
			error: 'No ID in params',
		});
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(400).send({
			type: 'Bad Request',
			error: 'ID is invalid',
		});
	else {
		Orders.findById(id)
			.populate('products', {name: 1})
			.populate('users', {email: 1})
			.exec()
			.then((data) => res.send(data))
			.catch((err) =>
				res.status(500).send({
					type: 'Internal server error.',
					error: err,
				})
			);
	}
}

function deleteOrder(req, res) {
	const {id} = req.params;
	Orders.findByIdAndRemove(id, function (err, doc) {
		if (err) {
			return res.status(400).send(err);
		} else {
			res.send(doc);
		}
	});
}

module.exports = {
	getUserOrder,
	addProduct,
	getAllUserOrders,
	getAllOrders,
	getOrderById,
	deleteProduct,
	changeLot,
	deleteOrder,
};
