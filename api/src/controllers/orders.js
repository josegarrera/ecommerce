const mongoose = require('mongoose');
const {Orders, Users} = require('../models/index');
const axios = require('axios');

async function getUserOrder(req, res) {
	const {userId} = req.query;
	try {
		let userExists = await Users.exists({_id: userId});
		if (userExists) {
			let orderExist = await Orders.exists({users: userId, state: 'created'});
			if (!orderExist) {
				let order = await new Orders({users: userId, items: []});
				await order.save();
			}
			let order = await Orders.findOne({users: userId, state: 'created'})
				.populate('users', {email: 1, _id: 1})
				.populate({
					path: 'items.product',
					populate: {path: 'brands', select: 'name'},
				})
				.exec();
			return res.send({response: order, type: 'Ok', message: 'Success'});
		} else {
			res.status(400).send({
				response: '',
				type: 'Bad request',
				error: 'user does not exist',
			});
		}
	} catch (error) {
		res
			.status(500)
			.send({response: '', type: 'Internal server error.', message: error});
	}
}

async function getAllUserOrders(req, res, next) {
	const {userId} = req.query;

	try {
		if (userId) {
			let userExists = await Users.exists({_id: userId});
			if (userExists) {
				let orders = await Orders.find({users: userId})
					.populate('items.product')
					.exec();
				if (orders.length) {
					return res.send({response: orders, type: 'Ok', message: 'Success'});
				} else {
					res.send({
						response: '',
						type: 'Ok',
						message: 'User do not have complete orders yet',
					});
				}
			} else {
				res.status(400).send({
					response: '',
					type: 'Bad request',
					message: 'User does not exist',
				});
			}
		}
	} catch (error) {
		res
			.status(500)
			.send({response: '', type: 'Internal server error.', message: error});
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
					if (products.length) {
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
					}
				} else {
					let toAdd = orderActive.items.find((p) => {
						return p.product.toString() === products.id;
					})
						? false
						: true;
					if (toAdd) {
						orderActive.items = orderActive.items.concat([
							{
								product: products.id,
								variant: products.variant,
								lot: products.lot,
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
								product: products.id,
								lot: products.lot,
								variant: products.variant,
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
			return res.send({response: order, type: 'Ok', message: 'Success'});
		} else {
			res.status(400).send({
				type: 'bad request',
				message: userExists ? "there's not products to add" : 'user not found',
				response: '',
			});
		}
	} catch (err) {
		res
			.status(500)
			.send({response: '', type: 'Internal server error.', message: err});
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
			res.send({response: update, type: 'Ok', message: 'Success'});
		} else {
			res.status(400).send({
				response: '',
				type: 'Bad request',
				message: 'The user id does not exist',
			});
		}
	} catch (err) {
		res
			.status(500)
			.send({response: '', type: 'Internal server error.', message: err});
	}
}

async function changeLot(req, res) {
	const {userId, productId, num, variant} = req.body;
	try {
		if (await Users.exists({_id: userId})) {
			let update = await Orders.findOne({
				users: userId,
				state: 'created',
			}).populate('items.product');
			let modificarLot = update.items.find((e) => e.product._id == productId);
			let stock = modificarLot.product.variants[variant || 0].stock;
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
			res.send({response: update, type: 'Ok', message: 'Success'});
		}
	} catch (error) {
		res
			.status(500)
			.send({response: '', type: 'Internal server error.', message: error});
	}
}

function getAllOrders(req, res) {
	const sort =
		req.query.status !== 'undefined'
			? {state: req.query.status}
			: {state: 'processing'};
	Orders.find({})
		.sort(sort)
		.exec()
		.then((data) => res.send({response: data, type: 'Ok', message: 'Success'}))
		.catch((error) =>
			res
				.status(500)
				.send({response: '', type: 'Internal Server Error', message: error})
		);
}

async function getOrderById(req, res) {
	const {id} = req.params;
	if (!id)
		return res.status(400).send({
			response: '',
			type: 'Bad Request',
			message: 'No ID in params',
		});
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(400).send({
			response: '',
			type: 'Bad Request',
			message: 'ID is invalid',
		});
	else {
		Orders.findById(id)
			.populate('products', {name: 1})
			.populate('users', {email: 1})
			.exec()
			.then((data) =>
				res.send({response: data, type: 'Ok', message: 'Success'})
			)
			.catch((err) =>
				res.status(500).send({
					response: '',
					type: 'Internal server error.',
					message: err,
				})
			);
	}
}

function deleteOrder(req, res) {
	const {id} = req.params;
	if (!id)
		return res.status(400).send({
			response: '',
			type: 'Bad Request',
			message: 'No ID in params',
		});
	Orders.findByIdAndRemove(id, function (err, doc) {
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

const sendEmails = (order) => {
	const text =
		order.state === 'dispatched'
			? 'Your order has been dispatched! We invite you to comment about the product or your experience in our store. As always, we are at your disposal. Enjoy it!'
			: order.state === 'completed'
			? 'Your order has been delivered to the address you specified.  We invite you to comment about the product or your experience in our store. As always, we are at your disposal. Enjoy it!'
			: "We're sorry, but your order has been canceled. It is likely that there was an unusual problem. If your payment was credited, you will receive a full refund within 48 hours. For more details, contact us, we are at your disposal.";
	return axios.post(`${process.env.BACKEND_URL}/checkout/send-notifications`, {
		email: order.email.email,
		subject: 'Store notifications',
		text: 'Order status.',
		html: `<div>
				  <h3>Order detail</h3>
				  <p>${text}</p>
				  <ul>
				  <li type="circle">Payment Id: ${
						order.transactionDetail && order.transactionDetail.paymentId
					}</li>
				  <li type="circle">Payment status: ${
						order.transactionDetail && order.transactionDetail.paymentStatus
					}</li>
				  </ul>
			      </div>`,
	});
};

function updateOrder(req, res) {
	const {id} = req.params;
	const body = req.body.data;
	const email = req.user;

	if (!id || !body)
		return res.status(400).send({
			response: '',
			type: 'Bad Request',
			message: 'No ID in params',
		});
	Promise.all([
		Orders.findByIdAndUpdate(id, {state: body.state}),
		sendEmails({...body, email}),
	])
		.then((data) => {
			res.send({response: data[0], type: 'Ok', message: 'Success'});
		})
		.catch((err) => {
			res.status(500).send({
				response: '',
				type: 'Internal server error.',
				message: err,
			});
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
	updateOrder,
};
