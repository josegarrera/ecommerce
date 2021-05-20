const mercadopago = require('mercadopago');
const {Orders} = require('../models/index');
const {PROD_ACCESS_TOKEN} = process.env;

mercadopago.configure({
	access_token: PROD_ACCESS_TOKEN,
});

function initiatePayment(req, res) {
	const userId = req.body.userId;
	if (!userId) {
		return res
			.status(400)
			.send({type: 'Bad request.', error: 'The fields are empty.'});
	}
	Orders.find({users: userId, state: 'created'})
		.populate('users', {email: 1, _id: 1})
		.populate('items.product', {_id: 1, price: 1, name: 1})
		.exec()
		.then((order) => {
			if (!order.length) return res.send('The order does not exist.');
			if (!order[0].items.length) return res.send('Product list is empty.');
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
				auto_return: 'approved',
				back_urls: {
					success: 'http://localhost:3001/checkout/mp/payments',
					failure: 'http://localhost:3001/checkout/mp/payments/',
					pending: `http://localhost:3001/checkout/mp/payments/${order[0]._id}`,
				},

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
			if (!response.length)
				return res
					.status(500)
					.send({type: 'Internal server error.', error: error});
			res.send(response[1]);
		})
		.catch((error) => {
			res.status(500).send({type: 'Internal server error.', error: error});
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
					res.redirect('http://localhost:3000/catalogue');
				})
				.catch((error) => {
					res.status(500).send({type: 'Internal server error.', error: error});
				});
		})
		.catch((error) => {
			res.status(500).send({type: 'Internal server error.', error: error});
		});
}

function getResultPayment(req, res) {
	const orderId = req.query.external_reference;
	if (!orderId)
		return res
			.status(400)
			.send({type: 'Bad request.', error: 'The fields are empty.'});
	mercadopago
		.get('/v1/payments/search', {external_reference: orderId})
		.then((payment) => {
			const paymentId = payment.body.results[0].id;
			const transactionStatus = payment.body.results[0].status;
			const datePayment = payment.body.results[0].date_approved;
			const paymentStatus = payment.body.results[0].status_detail;
			const transactionDetail = {
				...payment.body.results[0].transaction_details,
				installments: payment.body.results[0].installments,
				shippingCost: payment.body.results[0].shipping_cost,
				currency: payment.body.results[0].currency_id,
			};

			Orders.find({_id: orderId})
				.exec()
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
				.then(() => {
					res.redirect('http://localhost:3000/catalogue');
				})
				.catch((error) => {
					res.status(500).send({type: 'Internal server error.', error: error});
				});
		});
}

module.exports = {
	initiatePayment,
	getOrderData,
	getResultPayment,
};
