const {Products} = require('../models/index.js');

async function createProduct(req, res) {
	if (!req.body || !req.body.name || !req.body.description)
		return res
			.status(400)
			.send({type: 'Bad request.', error: 'The fields are empty.'});
	const product = new Products(req.body);
	await product.save((err, data) => {
		if (err)
			return res
				.status(500)
				.send({type: 'Internal server error.', error: err.message});
		res.send(product);
	});
}

function getProducts(req, res) {
	const filterValue = req.query.filterValue
		? new RegExp(req.query.filterValue.toLowerCase(), 'i')
		: new RegExp('[A-Za-z]', 'i');
	const filter =
		req.query.filter && req.query.filter === 'price'
			? {price: {value: filterValue}}
			: {name: filterValue};
	const direction =
		req.query.direction && req.query.direction.toLowerCase() === 'desc'
			? -1
			: 1;
	const order =
		req.query.order === 'price'
			? {price: {value: direction}}
			: {name: direction};
	const offset = req.query.offset ? Number(req.query.offset) : 0;
	const limit = req.query.limit ? Number(req.query.limit) : 12;

	Products.find(filter)
		.populate({path: 'categories'})
		.sort(order)
		.skip(offset)
		.limit(limit)
		.exec()
		.then((data) => {
			if (!data.length)
				return res
					.status(404)
					.send({type: 'Not found.', error: 'Query parameters do not match.'});
			res.send(data);
		})
		.catch((error) =>
			res.status(500).send({type: 'Internal Server Error', error: error})
		);
}

module.exports = {
	createProduct,
	getProducts,
};
