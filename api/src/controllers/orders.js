const mongoose = require('mongoose');
const {Orders, Products, Users} = require('../models/index');

async function getUserOrder(req, res, next) {
	const {userId, cart} = req.query;
	try {
		if (cart) {
			let userExists = await Users.exists({_id: userId});
			if (userExists) {
				let orderExist = await Orders.exists({users: userId, state: 'created'});
				if (!orderExist) {
					let order = await new Orders({users: userId, items: []});
					order.save();
				}
				let order = await Orders.findOne({users: userId, state: 'created'})
					.populate('users', {email: 1, _id: 1})
					.populate('items.product')
					.exec();
				return res.send(order);
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
	const {userId, products} = req.body;
	try {
		let userExists = await Users.exists({_id: userId});
		if (userExists && products) {
			let orderActive = await Orders.findOne({users: userId, state: 'created'});
			if (orderActive) {
				if (Array.isArray(products)) {
					let toAdd = products.filter((e) =>
						orderActive.items.find(
							(prod) => prod.product.toString() === e.product._id
						)
							? false
							: true
					);
					toAdd = toAdd.map((e) => {
						return {
							lot: e.lot,
							product: e.product._id,
							variant: e.variant,
						};
					});
					orderActive.items = orderActive.items.concat(toAdd);
					await orderActive.save();
				} else {
					let toAdd = orderActive.items.find((p) => {
						return p.product.toString() === products;
					})
						? false
						: true;
					if (toAdd) {
						orderActive.items = orderActive.items.concat([
							{
								product: products,
							},
						]);
						await orderActive.save();
					}
				}
			} else {
				if (Array.isArray(products)) {
					let toAdd = products.map((e) => {
						return {
							lot: e.lot,
							product: e.product._id,
							variant: e.variant,
						};
					});
					let order = await new Orders({users: userId, items: toAdd});
					await order.save();
				} else {
					let order = await new Orders({
						users: userId,
						items: [
							{
								product: products,
							},
						],
					});
					await order.save();
				}
			}
			let order = await Orders.findOne({users: userId, state: 'created'})
				.populate('users', {email: 1, _id: 1})
				.populate('items.product')
				.exec();
			return res.send(order);
		} else {
			res.status(400).send({
				type: 'bad request',
				message: userExists ? "there's not products to add" : 'user not found',
			});
		}
	} catch (err) {
		res.status(500).send({type: 'Internal server error.', error: err});
	}
}

async function deleteProduct(req, res) {
	const {userId, productId} = req.body;
	try {
		const user = await Users.exists({_id: userId});
		if (user) {
			let update = await Orders.findOneAndUpdate(
				{users: userId, state: 'created'},
				{
					$pull: {
						items: {product: {_id: productId}},
					},
				}
			).exec();
			update = await Orders.findOne({users: userId, state: 'created'})
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
			let update = await Orders.findOne({
				users: userId,
				state: 'created',
			}).populate('items.product');
			let modificarLot = update.items.find((e) => e.product._id == productId);
			let stock = modificarLot.product.variants[0].stock;
			let update2 = await Orders.findOne({
				users: userId,
				state: 'created',
			});
			let modificarLot2 = update2.items.find((e) => e.product == productId);
			if (modificarLot2) {
				modificarLot2.lot =
					modificarLot2.lot + parseInt(num) >= 1 &&
					modificarLot2.lot + parseInt(num) <= stock
						? modificarLot2.lot + parseInt(num)
						: modificarLot2.lot;
				await update2.save();
			}
			update = await Orders.findOne({users: userId, state: 'created'})
				.populate('users', {email: 1, _id: 1})
				.populate('items.product')
				.exec();
			res.send(update);
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
