const mercadopago = require('mercadopago');
const {Orders} = require('../models/index');
const {PROD_ACCESS_TOKEN} = process.env;
// Agrega credenciales

mercadopago.configure({
	access_token: PROD_ACCESS_TOKEN, // se coloca el del vendedor real
});

function makePayment(req, res) {
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
			const items = order[0].items.map((item) => {
				return {
					id: item.product._id,
					title: item.product.name,
					unit_price: item.product.price.value,
					quantity: item.lot,
					currency_id: item.product.price.currency,
				};
			});
			const preference = {items: items};

			mercadopago.preferences.create(preference).then((response) => {
				res.send(response.body);
			});
		})
		.catch((error) => {
			res.status(500).send({type: 'Internal server error.', error: error});
		});
}

module.exports = {
	makePayment,
};
