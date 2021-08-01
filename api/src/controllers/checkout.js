const mercadopago = require('mercadopago');
const {Orders, Currencies} = require('../models/index');
const {PROD_ACCESS_TOKEN, STRIPE_SECRET} = process.env;
const Stripe = require('stripe');
const stripe = new Stripe(STRIPE_SECRET);
mercadopago.configure({
	access_token: PROD_ACCESS_TOKEN,
});
const transporter = require('../middlewares/notifications.js');
const axios = require('axios');

const sendEmails = (order) => {
	const amount = order[0].items.reduce((a, b) => {
		return (a += b.product.price.value * b.lot);
	}, 0);
	const description = order[0].items.reduce((a, b) => {
		return (a +=
			b.lot +
			' ' +
			b.product.name +
			' ' +
			b.product.price.value +
			' ' +
			b.product.price.currency +
			'- ');
	}, '');
	return axios.post(`${process.env.BACKEND_URL}/checkout/send-notifications`, {
		email: order[0].users.email,
		subject: 'Store notifications',
		text: 'Transaction result.',
		html: `<div>
				  <h3>Order detail</h3>
				  <p>Thank you for choosing our store. This was the result of the operation. If your payment was successful, you will soon receive an email with the shipping details. Otherwise, you can try again. We are at your disposal.</p>
				  <ul>
				  <li type="circle">Payment Id: ${order[0].transactionDetail.paymentId}</li>
				  <li type="circle">Payment status: ${order[0].transactionDetail.paymentStatus}</li>
				  <li type="circle">Products: ${description}</li>
				  <li type="circle">Total amount: ${amount}</li>
				   <li type="circle">Currency: ${order[0].currency}</li>
				  </ul>
			      </div>`,
	});
};

function initiatePayment(req, res) {
	const {userId, shippingInfo, paymentMethod, idStripe} = req.body;
	if (!userId) {
		return res.status(400).send({
			response: '',
			type: 'Bad request',
			message: 'The fields are empty',
		});
	}
	Orders.find({
		users: userId,
		state: 'created',
	})
		.populate('users', {email: 1, _id: 1})
		.populate('items.product', {_id: 1, price: 1, name: 1})
		.exec()
		.then((order) => {
			if (!order.length)
				throw new Error('The user does not have an active order');
			if (!order[0].items.length)
				throw new Error('The user has no products in the cart');

			order[0].paymentMethod = paymentMethod || 'mercadopago';
			order[0].shipping = shippingInfo;
			const items = order[0].items.map((item) => {
				return {
					id: item.product._id,
					title: item.product.name,
					unit_price: item.product.price.value,
					quantity: item.lot,
					currency_id: item.product.price.currency,
				};
			});

			const amount = items.reduce((a, b) => {
				return (a += b.unit_price * b.quantity);
			}, 0);
			const description = items.reduce((a, b) => {
				return (a += b.title + '- ');
			}, '');
			const shippingCost = 5; //order[0].shipping.cost ||

			if (!paymentMethod || paymentMethod === 'mercadopago') {
				const expirationDate = new Date(Date.now() + 210000000);
				const preference = {
					items: items,
					external_reference: `${order[0]._id}`,
					notification_url: `${process.env.BACKEND_URL}/checkout/mp/notifications`,
					shipments: {
						cost: shippingCost,
						mode: 'not_specified',
					},
					expires: true,
					date_of_expiration: expirationDate.toISOString(),
				};

				return Promise.all([
					order[0].save(),
					mercadopago.preferences.create(preference),
				]);
			} else {
				order[0].state = 'processing';
				return Promise.all([
					order[0],
					stripe.paymentIntents.create({
						amount: (amount + shippingCost) * 100,
						currency: 'USD',
						description,
						payment_method: idStripe,
						statement_descriptor: 'Store E-commerce',
						confirm: true,
					}),
					Currencies.find().sort({month: -1, date: -1}).limit(1).exec(),
				]);
			}
		})
		.then((response) => {
			if (!response.length) throw new Error();
			if (response[1].body) {
				return response[1].body.id;
			} else {
				const {USDEUR} = response[2][0].quotes;
				let transactionDetail = {
					paymentId: response[1].id,
					datePayment: new Date(Date.now()).toDateString(),
					paymentStatus: response[1].status,
					total_amount: response[1].charges.data[0].amount_captured / 100,
					net_income:
						(response[1].charges.data[0].amount_captured / 100) * USDEUR -
						((response[1].charges.data[0].amount_captured / 100) * USDEUR * 4) /
							100,
					currency: 'EUR',
				};
				response[0].transactionDetail = transactionDetail;

				return Promise.all([response[0].save(), sendEmails(response)]);
			}
		})
		.then((data) => {
			if (typeof data === 'string') {
				res.send({
					response: data,
					type: 'Ok',
					message: 'Success',
				});
			} else {
				res.send({
					response: data[0].state,
					type: 'Ok',
					message: 'Success',
				});
			}
		})
		.catch((error) => {
			res
				.status(500)
				.send({response: '', type: 'Internal server error.', error: error});
		});
}

function notifyUser(req, res) {
	const {email, subject, text, html} = req.body;
	let mailOptions = {
		from: 'Store Henry Ecommerce',
		to: email,
		subject: subject,
		text: text,
		html: html,
	};
	transporter
		.sendMail(mailOptions)
		.then((data) => {
			res.send({
				response: data,
				type: 'Ok',
				message: 'Success',
			});
		})
		.catch((error) => {
			res
				.status(500)
				.send({response: '', type: 'Internal server error.', error: error});
		});
}

function getOrderData(req, res) {
	const id = req.params.id;
	mercadopago
		.get('/v1/payments/search', {status: 'pending', external_reference: id})
		.then((payment) => {
			const transactionStatus = payment.body.results[0].status;
			Orders.find({_id: id})
				.exec()
				.then((order) => {
					order[0].transactionStatus = transactionStatus;
					return order[0].save();
				})
				.then((orderSaved) => {
					return res.send({
						response: orderSaved,
						type: 'Ok',
						message: 'Success',
					});
				})
				.catch((error) => {
					res.status(500).send({
						response: '',
						type: 'Internal server error.',
						message: error,
					});
				});
		})
		.catch((error) => {
			res
				.status(500)
				.send({response: '', type: 'Internal server error.', message: error});
		});
}

function getResultPayment(req, res) {
	const orderId = req.query.external_reference;
	if (!orderId)
		return res.status(400).send({
			response: '',
			type: 'Bad request.',
			error: 'The fields are empty.',
		});
	mercadopago
		.get('/v1/payments/search', {external_reference: orderId})
		.then((payment) => {
			return res.send({response: payment.body, type: 'Ok', message: 'Success'});
		})
		.catch((error) => {
			res
				.status(500)
				.send({response: '', type: 'Internal server error.', message: error});
		});
}

function getNotificationsMp(req, res) {
	if (req.query.id)
		return res.send({
			response: 'Success',
			type: 'Ok',
			message: 'The payment has already been registered',
		});
	const id = req.query['data.id'];
	if (id) {
		let transactionDetail;

		mercadopago
			.get(`/v1/payments/${id}`)
			.then((payment) => {
				transactionDetail = {
					paymentId: payment.body.id,
					datePayment: new Date(payment.body.date_approved).toDateString(),
					paymentStatus: payment.body.status,
					total_amount: payment.body.transaction_details.total_paid_amount,
					net_income: payment.body.transaction_details.net_received_amount,
					currency: payment.body.currency_id,
				};
				const orderId = payment.body.external_reference;
				return Orders.find({_id: orderId})
					.populate('users', {email: 1, _id: 1})
					.populate('items.product', {_id: 1, price: 1, name: 1})
					.exec();
			})
			.then((order) => {
				order[0].transactionDetail = transactionDetail;
				order[0].state = 'processing';

				return Promise.all([order[0].save(), sendEmails(order)]);
			})
			.then((data) => {
				return res.send({response: data[0], type: 'Ok', message: 'Success'});
			})
			.catch((error) => {
				res
					.status(500)
					.send({response: '', type: 'Internal server error.', message: error});
			});
	} else {
		res.status(400).send('El id no existe');
	}
}

module.exports = {
	initiatePayment,
	getOrderData,
	getResultPayment,
	getNotificationsMp,
	notifyUser,
};
