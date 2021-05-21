const {compareSync} = require('bcrypt');
const brands = require('../models/brands.js');
const {Brands, Products} = require('../models/index.js');

function getAllBrands(req, res) {
	Brands.find({}, 'name')
		.exec()
		.then((data) => res.send(data))
		.catch((error) =>
			res.status(500).send({type: 'Internal Server Error', error: error})
		);
}

async function createBrands(req, res) {
	if (!req.body || !req.body.name) {
		return res
			.status(400)
			.send({type: 'Bad request.', error: 'The fields are empty.'});
	}
	try {
		const productsFound = await Promise.all(
			req.body.products.map((id) => Products.findOne({_id: id}))
		);
		const brandedProducts = productsFound.forEach((product) => {
			product.brands = product.brands.concat(req.body.products);
		});
		await Promise.all(productsFound.map((prod) => prod.save()));
		const brand = new Brands(req.body);
		await brand.save((err, data) => {
			if (err)
				return res
					.status(500)
					.send({type: 'Internal server error.', error: err.message});
			res.send(brand);
		});
	} catch (err) {
		return res
			.status(500)
			.send({type: 'Internal server error.', error: err.message});
	}
}

async function updateBrand(req, res) {
	const {name, products} = req.body;
	if (!name || !products)
		return res
			.status(400)
			.send({type: 'Bad request.', error: 'The brand is empty.'});
	try {
		const updatedBrand = await Brands.findByIdAndUpdate(req.params.id, {
			name: name,
			products: products,
		});

		products.length &&
			(await Promise.all(
				products.map((id) =>
					Products.findByIdAndUpdate(
						{_id: id},
						{$addToSet: {brands: req.params.id}}
					)
				)
			));
		const productsWithBrand = await Products.find({
			brands: req.params.id,
		});
		const productsToDeleteBrand = productsWithBrand
			.map((prod) => prod._doc._id)
			.filter((id) => !products.includes(String(id)));

		productsToDeleteBrand.length &&
			(await Promise.all(
				productsToDeleteBrand.map((id) =>
					Products.findByIdAndUpdate(
						{_id: id},
						{$pull: {brands: req.params.id}}
					)
				)
			));

		return res.send({message: 'Brand updated', updatedBrand});
	} catch (error) {
		res.status(500).send({type: 'Internal Server Error', error: error});
	}
}

async function deleteBrand(req, res) {
	const {id} = req.params;
	try {
		const productsWithBrand = await Products.find({
			brands: id,
		});
		const productsToDeleteBrand = productsWithBrand.map(
			(prod) => prod._doc._id
		);
		productsToDeleteBrand.length &&
			(await Promise.all(
				productsToDeleteBrand.map((idProd) =>
					Products.findByIdAndUpdate({_id: idProd}, {$pull: {brands: id}})
				)
			));
		const brandRemoved = await Brands.findByIdAndRemove(id);
		return res.send(brandRemoved);
	} catch (error) {
		res.status(500).send({type: 'Internal Server Error', error: error});
	}
}

module.exports = {
	createBrands,
	getAllBrands,
	updateBrand,
	deleteBrand,
};
