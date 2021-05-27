const mercadopago = require('mercadopago');
const {Orders} = require('../models/index');
const {PROD_ACCESS_TOKEN} = process.env;

mercadopago.configure({
	access_token: PROD_ACCESS_TOKEN,
});

function initiatePayment(req, res) {
	console.log(req.body);
	/* {
  userId: '60a00272322a89771f81269c',
  shippingInfo: {
    firstName: '',
    lastName: '',
    zip_code: '',
    street_name: '',
    street_number: '',
    id: ''
  }
} */
	const userId = req.body.userId;
	if (!userId) {
		return res.status(400).send({
			response: '',
			type: 'Bad request',
			message: 'The fields are empty',
		});
	}
	Orders.find({users: userId, state: 'created'})
		.populate('users', {email: 1, _id: 1})
		.populate('items.product', {_id: 1, price: 1, name: 1})
		.exec()
		.then((order) => {
			if (!order.length) throw new Error('fallo la peticion');
			if (!order[0].items.length) throw new Error('fallo la peticion');

			const items = order[0].items.map((item) => {
				return {
					id: item.product._id,
					title: item.product.name,
					unit_price: item.product.price.value,
					quantity: item.lot,
					currency_id: item.product.price.currency,
				};
			});
			const expirationDate = new Date(Date.now() + 210000000);
			const preference = {
				items: items,
				purpose: 'wallet_purchase',
				external_reference: `${order[0]._id}`,
				notification_url: `${process.env.BACKEND_URL}/checkout/mp/notifications`,
				shipments: {
					cost: 500,
					mode: 'not_specified',
				},
				expires: true,
				date_of_expiration: expirationDate.toISOString(),
			};
			order[0].state = 'processing';
			return Promise.all([
				order[0].save(),
				mercadopago.preferences.create(preference),
			]);
		})
		.then((response) => {
			if (!response.length) throw new Error();
			res.send({
				response: response[1].body.id,
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
					...payment.body.transaction_details,
					installments: payment.body.installments,
					shippingCost: payment.body.shipping_cost,
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
};
