const {Products, Categories} = require('../models/index.js');

async function createProduct(req, res) {
	if (!req.body || !req.body.name || !req.body.description)
		return res
			.status(400)
			.send({type: 'Bad request.', error: 'The fields are empty.'});
	const product = new Products(req.body);
	await product.save((err, data) => {
		if (err)
			return res.status(500).send({type: 'Internal server error.', error: err});
		res.send(product);
	});
}

function getProducts(req, res) {
	const filterValue = req.query.filterValue
		? req.query.filterValue.toLowerCase()
		: '';
	const filter =
		req.query.filter && req.query.filter === 'price'
			? {'price.value': {$lt: Number(filterValue)}}
			: req.query.filter === 'name'
			? {name: new RegExp(filterValue, 'i')}
			: {name: new RegExp('[A-Za-z]', 'i')};
	const otherFilter =
		req.query.filter === 'brands'
			? 'brands'
			: req.query.filter === 'variants'
			? 'variants'
			: req.query.filter === 'categories'
			? 'categories'
			: '';
	const otherFilterValue =
		req.query.filter === 'categories' ||
		req.query.filter === 'brands' ||
		req.query.filter === 'variants'
			? filterValue
			: '';
	const direction =
		req.query.direction && req.query.direction.toLowerCase() === 'desc'
			? -1
			: 1;
	const order =
		req.query.order === 'price'
			? {'price.value': direction}
			: {name: direction};
	const offset = req.query.offset ? Number(req.query.offset) : 0;
	const limit = req.query.limit ? Number(req.query.limit) : 12;

	Products.find(filter)
		.populate('categories', {name: 1})
		.populate('brands', {name: 1})
		.sort(order)
		.exec()
		.then((data) => {
			if (!data.length)
				return res
					.status(404)
					.send({type: 'Not found.', error: 'Query parameters do not match.'});
			let result =
				otherFilter === 'categories' || otherFilter === 'brands'
					? data.filter(
							(product) =>
								product[otherFilter].length &&
								product[otherFilter].find((categorie) =>
									categorie.name.toLowerCase().includes(otherFilterValue)
								)
					  )
					: otherFilter === 'variants'
					? data.filter((product) =>
							product.variants[filterValue.split('-')[0]] &&
							filterValue.split('-')[0] === 'stock'
								? Number(product.variants.stock) >=
								  Number(filterValue.split('-')[1])
								: String(product.variants[filterValue.split('-')[0]])
										.toLowerCase()
										.includes(filterValue.split('-')[1])
					  )
					: data;
			const totalPages = Math.ceil(result.length / limit);
			const pages = new Array(totalPages)
				.fill('')
				.map(
					(path, index) =>
						`http://localhost:3001/products/?filter=${
							req.query.filter
						}&filtervalue=${req.query.filterValue}&order=${
							req.query.order
						}&direction=${req.query.direction}&offset=${
							limit * index
						}&limit=${limit}`
				);
			const products =
				result.length - offset > limit
					? result.slice(offset, limit)
					: result.slice(offset);
			res.send({products, pages});
		})
		.catch((error) =>
			res.status(500).send({type: 'Internal Server Error', error: error})
		);
}

module.exports = {
	createProduct,
	getProducts,
};
