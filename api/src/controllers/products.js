const {
	Products,
	Categories,
	Brands,
	Currencies,
} = require('../models/index.js');
const mongoose = require('mongoose');
const {filterProducts} = require('../utils/utils.js');

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
			.then((data) => res.send(data))
			.catch((err) =>
				res.status(500).send({
					type: 'Internal server error.',
					error: err,
				})
			);
	}
}

async function createProduct(req, res) {
	const {name, description, price, imageUrl, variants, categories, brands} =
		req.body;
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
	const name =
		req.query.name && req.query.name !== 'undefined'
			? {name: new RegExp(req.query.name, 'i')}
			: {name: new RegExp('[A-Za-z]', 'i')};

	const category =
		req.query.category &&
		req.query.category !== 'undefined' &&
		(!req.query.name || req.query.name === 'undefined')
			? req.query.category.toLowerCase()
			: '';

	const brand =
		req.query.brand && req.query.brand !== 'undefined'
			? req.query.brand.toLowerCase()
			: '';

	const variantSelected =
		req.query.variants && req.query.variants !== 'undefined'
			? req.query.variants.split('-')
			: '';

	const price =
		req.query.price && req.query.price !== 'undefined'
			? req.query.price.split('-')
			: '';

	const direction =
		req.query.direction && req.query.direction.toLowerCase() === 'desc'
			? -1
			: 1;

	const order =
		req.query.order === 'price'
			? {'price.value': direction}
			: {name: direction};

	const offset =
		req.query.offset && req.query.offset !== 'undefined'
			? Number(req.query.offset)
			: 0;
	const limit =
		req.query.limit && req.query.limit !== 'undefined'
			? Number(req.query.limit)
			: 12;

	Promise.all([
		Products.find(name)
			.populate('categories', {name: 1})
			.populate('brands', {name: 1})
			.sort(order)
			.exec(),
		Currencies.find().sort({month: -1}).limit(1).exec(),
	])
		.then((data) => {
			if (!data[0].length)
				return res.send({
					products: [],
					pages: [],
					message: 'Query parameters do not match.',
				});
			const quotes = data[1] && data[1][0].quotes;
			let result = filterProducts(
				data[0],
				category,
				brand,
				variantSelected,
				price,
				quotes
			);
			const totalPages = Math.ceil(result.length / limit);
			const pages = new Array(totalPages)
				.fill('')
				.map(
					(path, index) =>
						`http://localhost:3001/products/?name=${req.query.name}&category=${
							req.query.category
						}&brand=${req.query.brand}&variants=${req.query.variants}&price=${
							req.query.price
						}&order=${req.query.order}&direction=${
							req.query.direction
						}&offset=${limit * index}&limit=${limit}`
				);
			const products =
				result.length - offset > limit
					? result.splice(offset, limit)
					: result.splice(offset);
			return res.send({products, pages});
		})
		.catch((error) =>
			res.status(500).send({type: 'Internal Server Error', error: error})
		);
}

async function updateProduct(req, res) {
	const {body} = req;
	if (!body)
		return res
			.status(400)
			.send({type: 'Bad request.', error: 'The fields are empty.'});
	const product = {};
	for (const key in body) {
		if (body[key]) product[key] = body[key];
	}
	try {
		const updatedProduct = await Products.findByIdAndUpdate(
			{_id: req.params.id},
			product
		);
		if (updatedProduct) return res.send(product);
		return res.send({message: 'No results.'});
	} catch (error) {
		res.status(500).send({type: 'Internal Server Error', error: error});
	}
}

async function deleteProduct(req, res) {
	const idProduct = req.params.id;
	if (!idProduct)
		return res
			.status(400)
			.send({type: 'Bad request.', error: 'The fields are empty.'});
	try {
		const deletedProduct = await Products.findByIdAndDelete(idProduct);
		if (deletedProduct) return res.send(deletedProduct);
		return res.send({message: 'No results.'});
	} catch (error) {
		res.status(500).send({type: 'Internal Server Error', error: error});
	}
}

module.exports = {
	createProduct,
	getProducts,
	getProductsDetail,
	updateProduct,
	deleteProduct,
};
