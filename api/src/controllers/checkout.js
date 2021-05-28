const mercadopago = require('mercadopago');
const {Orders} = require('../models/index');
const {PROD_ACCESS_TOKEN, STRIPE_SECRET, ETHEREAL_USER, ETHEREAL_PASSWORD} =
	process.env;
const Stripe = require('stripe');
const stripe = new Stripe(STRIPE_SECRET);
mercadopago.configure({
	access_token: PROD_ACCESS_TOKEN,
});
const nodemailer = require('nodemailer');

function initiatePayment(req, res) {
	console.log(req.body);
	/* {
  userId: '60a00272322a89771f81269c',
  idStripe: "",
  paymentMethod: "",
  shippingInfo: {
    firstName: '',
    lastName: '',
    zip_code: '',
    street_name: '',
    street_number: '',
    id: ''
  }
} */
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
		state: {$in: ['created', 'processing']},
	})
		.populate('users', {email: 1, _id: 1})
		.populate('items.product', {_id: 1, price: 1, name: 1})
		.exec()
		.then((order) => {
			if (!order.length)
				throw new Error('The user does not have an active order');
			if (!order[0].items.length)
				throw new Error('The user has no products in the cart');

			order[0].state = 'processing';
			order[0].paymentMethod = paymentMethod;
			const items = order[0].items.map((item) => {
				return {
					id: item.product._id,
					title: item.product.name,
					unit_price: item.product.price.value,
					quantity: item.lot,
					currency_id: item.product.price.currency,
				};
			});
			const userEmail = order[0].users.email;
			console.log(userEmail);
			const amount = items.reduce((a, b) => {
				return (a += b.unit_price * b.quantity);
			}, 0);
			const description = items.reduce((a, b) => {
				return (a += b.title + '- ');
			}, '');
			const shippingCost = 5; //order[0].shipping.cost ||

			if (paymentMethod === 'mercadopago') {
				const expirationDate = new Date(Date.now() + 210000000);
				const preference = {
					items: items,
					payer: {
						name: shippingInfo.firstName,
						surname: shippingInfo.lastName,
						email: userEmail,

						identification: {
							type: 'DNI',
							number: shippingInfo.id,
						},
					},
					purpose: 'wallet_purchase',
					external_reference: `${order[0]._id}`,
					notification_url: `${process.env.BACKEND_URL}/checkout/mp/notifications`,
					shipments: {
						cost: shippingCost,
						mode: 'not_specified',
					},
					expires: true,
					date_of_expiration: expirationDate.toISOString(),
				};

				return Promise.all([mercadopago.preferences.create(preference)]);
			} else {
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
				]);
			}
		})
		.then((response) => {
			if (!response.length) throw new Error();
			if (response[1].body)
				return res.send({
					response: response[1].body.id,
					type: 'Ok',
					message: 'Success',
				});

			let paymentId = response[1].id;
			let transactionStatus = response[1].status;
			let datePayment = new Date(Date.now());
			let paymentStatus = 'acredited';
			let transactionDetail = {
				total_amount: response[1].charges.data[0].amount_captured,
				net_income: payment.body.net_received_amount,
				installments: payment.body.installments,
				shipping_cost: payment.body.shipping_cost,
				currency: payment.body.currency_id,
			};
			let netIncome = response[1].amount_received;
			let shipping = response[1].shipping;
			response[0].paymentId = paymentId;
			response[0].transactionStatus = transactionStatus;
			response[0].paymentStatus = paymentStatus;
			response[0].datePayment = datePayment;
			response[0].transactionDetail = transactionDetail;
			response[0].state =
				transactionStatus === 'succeeded' ? 'completed' : 'canceled';
			response[0].amount = amount / 100;
			response[0].shipping = shipping;
			response[0].netIncome = netIncome;

			response[0].save((err, data) => {
				if (err) throw new Error(err);
				res.send({
					response: data.state,
					type: 'Ok',
					message: 'Success',
				});
			});
		});
}

function notifyUser(req, res) {
	const {email} = req.body;
	let transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		puerto: 587,
		auth: {
			usuario: ETHEREAL_USER,
			pase: ETHEREAL_PASSWORD,
		},
		secure: false,
	});
	let mailOptions = {
		from: 'Sender',
		to: email,
		subject: 'Store notifications',
		text: 'Your payment was accepted',
	};

	transporter
		.sendMail(mailOptions)
		.then((data) =>
			res.send({
				response: data,
				type: 'Ok',
				message: 'Success',
			})
		)
		.catch((error) => {
			console.log(error);
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
	const id = req.query.id || req.query['data.id'];
	if (id) {
		let paymentId;
		let transactionStatus;
		let datePayment;
		let paymentStatus;
		let transactionDetail;

		mercadopago
			.get(`/v1/payments/${id}`)
			.then((payment) => {
				paymentId = payment.body.id;
				transactionStatus = payment.body.status;
				datePayment = payment.body.date_approved;
				paymentStatus = payment.body.status_detail;
				transactionDetail = {
					total_amount: payment.body.total_paid_amount,
					net_income: payment.body.net_received_amount,
					installments: payment.body.installments,
					shipping_cost: payment.body.shipping_cost,
					currency: payment.body.currency_id,
				};
				const orderId = payment.body.external_reference;
				return Orders.find({_id: orderId}).exec();
			})
			.then((order) => {
				order[0].paymentId = paymentId;
				order[0].transactionStatus = transactionStatus;
				order[0].paymentStatus = paymentStatus;
				order[0].datePayment = datePayment;
				order[0].transactionDetail = transactionDetail;
				order[0].state =
					transactionStatus === 'approved' ? 'completed' : 'canceled';

				return order[0].save();
			})
			.then((orderSaved) => {
				return res.send({response: orderSaved, type: 'Ok', message: 'Success'});
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
