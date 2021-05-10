const {Products, Categories, Brands} = require('../models/index.js');
const mongoose = require('mongoose');

async function getProductsDetail(req, res) {
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
		Products.findById(id)
			.populate('categories', {name: true})
			.populate('brands', {name: true})
			.exec()
			.then((data) =>
				data
					? res.send(data)
					: res.status(404).send({
							type: 'Internal server error.',
							error: 'Product not found',
					  })
			)
			.cath((err) =>
				res.status(500).send({
					type: 'Internal server error.',
					error: err,
				})
			);
	}
}

async function createProduct(req, res) {
	console.log(req.body);
	const {
		name,
		description,
		price,
		imageUrl,
		variants,
		categories,
		brands,
	} = req.body;
	const checkExists = await Products.exists({name});

	if (!req.body || !name || !description || !price || !brands)
		return res
			.status(400)
			.send({type: 'Bad request.', error: 'The fields are empty.'});
	if (checkExists)
		return res.status(500).send({
			type: 'Internal server error.',
			error: 'A product with this name already exists',
		});

	const product = new Products({
		name,
		description,
		price,
		imageUrl,
		categories: [],
		brands,
		variants,
	});
	const categoriesCreated = categories.map((el) =>
		Categories.findOrCreate({name: el})
	);
	Promise.all(categoriesCreated)
		.then((data) => {
			data.map(
				(el) =>
					el.doc.products.push(product._id) &&
					product.categories.push(el.doc._id) &&
					el.doc.save((err) => {
						if (err)
							return res
								.status(500)
								.send({type: 'Internal server error.', error: err});
					})
			);
			return Brands.findOrCreate({name: brands});
		})
		.then((data) => {
			data.doc.products.push(product._id);
			product.brands = data.doc._id;
			data.doc.save((err) => {
				if (err)
					return res
						.status(500)
						.send({type: 'Internal server error.', error: err});
			});
			product.save((err) => {
				if (err)
					return res
						.status(500)
						.send({type: 'Internal server error.', error: err});
				res.send(product);
			});
		})
		.catch((error) =>
			res.status(500).send({type: 'Internal server error.', error: error})
		);
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
			console.log(data.length);
			if (!data.length)
				return res.status(404).send({
					type: 'Not found.',
					error: 'Query parameters do not match.',
				});
			let result =
				otherFilter === 'categories'
					? data.filter(
							(product) =>
								product[otherFilter].length &&
								product[otherFilter].find((categorie) =>
									categorie.name.toLowerCase().includes(otherFilterValue)
								)
					  )
					: otherFilter === 'brands'
					? data.filter(
							(product) =>
								product[otherFilter] &&
								product[otherFilter].name
									.toLowerCase()
									.includes(otherFilterValue)
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
						}&filterValue=${req.query.filterValue}&order=${
							req.query.order
						}&direction=${req.query.direction}&offset=${
							limit * index
						}&limit=${limit}`
				);
			const products =
				result.length - offset > limit
					? result.splice(offset, limit)
					: result.splice(offset);
			if (!products.length)
				return res.status(404).send({
					type: 'Not found.',
					error: 'Query parameters do not match.',
				});
			console.log(products.length);
			return res.send({products, pages});
		})
		.catch((error) =>
			res.status(500).send({type: 'Internal Server Error', error: error})
		);
}

module.exports = {
	createProduct,
	getProducts,
	getProductsDetail,
};
