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
		Products.findById(id)
			.populate('categories', {name: true})
			.populate('brands', {name: true})
			.exec()
			.then((data) =>
				res.send({response: data, type: 'Ok', message: 'Success'})
			)
			.catch((err) =>
				res
					.status(500)
					.send({response: '', type: 'Internal Server Error', message: err})
			);
	}
}

async function createProduct(req, res) {
	const {
		name,
		description,
		price,
		imageUrl,
		variants,
		categories,
		brands,
		specs,
	} = req.body;
	const checkExists = await Products.exists({name});

	if (!req.body || !name || !description || !price || !brands || !imageUrl)
		return res.status(400).send({
			response: '',
			type: 'Bad request.',
			message: 'The fields are empty.',
		});
	if (checkExists)
		return res.status(500).send({
			response: '',
			type: 'Internal server error.',
			message: 'A product with this name already exists',
		});

	const product = new Products({
		name,
		description,
		price,
		imageUrl,
		categories: [],
		brands: [],
		variants,
		specs,
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
							return res.status(500).send({
								response: '',
								type: 'Internal Server Error',
								message: err,
							});
					})
			);
			const brandsCreated = brands.map((el) => Brands.findOrCreate({name: el}));
			return Promise.all(brandsCreated);
		})
		.then((data) => {
			data.map(
				(el) =>
					el.doc.products.push(product._id) &&
					product.brands.push(el.doc._id) &&
					el.doc.save((err) => {
						if (err)
							return res.status(500).send({
								response: '',
								type: 'Internal Server Error',
								message: err,
							});
					})
			);

			product.save((err) => {
				if (err)
					return res.status(500).send({
						response: '',
						type: 'Internal Server Error',
						message: err,
					});
				res.send({response: product, type: 'Ok', message: 'Success'});
			});
		})
		.catch((error) =>
			res
				.status(500)
				.send({response: '', type: 'Internal Server Error', message: error})
		);
}

function getAllProducts(req, res) {
	Products.find()
		.populate('categories', {name: 1})
		.populate('brands', {name: 1})
		.exec()
		.then((data) => {
			if (!data.length)
				return res.send({
					products: [],
					message: 'Query parameters do not match.',
				});
			return res.send({response: data, type: 'Ok', message: 'Success'});
		})
		.catch((error) =>
			res
				.status(500)
				.send({response: '', type: 'Internal Server Error', message: error})
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
						`${process.env.BACKEND_URL}/products/?name=${
							req.query.name
						}&category=${req.query.category}&brand=${
							req.query.brand
						}&variants=${req.query.variants}&price=${req.query.price}&order=${
							req.query.order
						}&direction=${req.query.direction}&offset=${
							limit * index
						}&limit=${limit}`
				);
			const products =
				result.length - offset > limit
					? result.splice(offset, limit)
					: result.splice(offset);
			return res.send({products, pages});
		})
		.catch((error) =>
			res
				.status(500)
				.send({response: '', type: 'Internal Server Error', message: error})
		);
}

async function updateProduct(req, res) {
	const {body} = req;
	console.log(body);
	if (!body)
		return res.status(400).send({
			response: '',
			type: 'Bad request.',
			message: 'The fields are empty.',
		});
	const product = {};
	for (const key in body) {
		if (body[key]) product[key] = body[key];
	}
	try {
		const updatedProduct = await Products.findByIdAndUpdate(
			{_id: req.params.id},
			product
		);
		if (product.categories) {
			product.categories.length &&
				(await Promise.all(
					product.categories.map((id) =>
						Categories.findByIdAndUpdate(
							{_id: id},
							{$addToSet: {products: req.params.id}}
						)
					)
				));
			const categoriesWithProduct = await Categories.find({
				products: req.params.id,
			});
			const categoriesToUpdate = categoriesWithProduct
				.map((category) => category._doc._id)
				.filter((id) => !product.categories.includes(String(id)));

			categoriesToUpdate.length &&
				(await Promise.all(
					categoriesToUpdate.map((id) =>
						Categories.findByIdAndUpdate(
							{_id: id},
							{$pull: {products: req.params.id}}
						)
					)
				));
		}
		if (product.brands) {
			product.brands.length &&
				(await Promise.all(
					product.brands.map((id) =>
						Brands.findByIdAndUpdate(
							{_id: id},
							{$addToSet: {products: req.params.id}}
						)
					)
				));
			const brandsWithProduct = await Brands.find({
				products: req.params.id,
			});
			const brandsToUpdate = brandsWithProduct
				.map((brand) => brand._doc._id)
				.filter((id) => !product.brands.includes(String(id)));

			brandsToUpdate.length &&
				(await Promise.all(
					brandsToUpdate.map((id) =>
						Brands.findByIdAndUpdate(
							{_id: id},
							{$pull: {products: req.params.id}}
						)
					)
				));
		}
		return res.send({response: product, type: 'Ok', message: 'Success'});
	} catch (error) {
		res
			.status(500)
			.send({response: '', type: 'Internal Server Error', message: error});
	}
}

async function deleteProduct(req, res) {
	const idProduct = req.params.id;
	if (!idProduct)
		return res.status(400).send({
			response: '',
			type: 'Bad request.',
			error: 'The fields are empty.',
		});
	try {
		const deletedProduct = await Products.findByIdAndDelete(idProduct);

		const brandsWithProduct = await Brands.find({
			products: idProduct,
		});
		const brandsToDeleteProduct = brandsWithProduct.map(
			(brand) => brand._doc._id
		);
		brandsToDeleteProduct.length &&
			(await Promise.all(
				brandsToDeleteProduct.map((idBrand) =>
					Brands.findByIdAndUpdate(
						{_id: idBrand},
						{$pull: {products: idProduct}}
					)
				)
			));
		const categoriesWithProduct = await Categories.find({
			products: idProduct,
		});
		const categoriesToDeleteProduct = categoriesWithProduct.map(
			(category) => category._doc._id
		);
		categoriesToDeleteProduct.length &&
			(await Promise.all(
				categoriesToDeleteProduct.map((idCategory) =>
					Categories.findByIdAndUpdate(
						{_id: idCategory},
						{$pull: {products: idProduct}}
					)
				)
			));
		if (deletedProduct) return res.send(deletedProduct);
		return res.send({message: 'No results.'});
	} catch (error) {
		res
			.status(500)
			.send({response: '', type: 'Internal Server Error', message: error});
	}
}

module.exports = {
	createProduct,
	getProducts,
	getProductsDetail,
	updateProduct,
	deleteProduct,
	getAllProducts,
};
