const {Categories, Products} = require('../models/index.js');

function getAllCategories(req, res) {
	Categories.find({})
		.populate('products', {name: true})
		.exec()
		.then((data) => res.send({response: data, type: 'Ok', message: 'Success'}))
		.catch((error) =>
			res
				.status(500)
				.send({response: '', type: 'Internal Server Error', message: error})
		);
}

async function deleteACategory(req, res) {
	const {id} = req.params;
	if (!id) {
		res.status(400).send({
			response: '',
			type: 'Bad request.',
			message: 'The fields are empty.',
		});
	} else {
		try {
			const products = await Products.find({categories: id});
			const categoryRemoved = await Categories.deleteOne({_id: id});
			products.length &&
				(await Promise.all(
					products.map((el) =>
						Products.findOneAndUpdate({_id: el._id}, {$pull: {categories: id}})
					)
				));
			return res.send({
				response: categoryRemoved,
				type: 'Ok',
				message: 'Success',
			});
		} catch (error) {
			res.status(500).send({type: 'Internal Server Error', error: error});
		}
	}
}

async function updateACategory(req, res) {
	const id = req.params.id;
	const {body} = req;

	if (!body || !id)
		return res.status(400).send({
			response: '',
			type: 'Bad request.',
			message: 'The fields are empty.',
		});
	try {
		const categoryUpdated = await Categories.findByIdAndUpdate({_id: id}, body);

		if (body.products) {
			body.products.length &&
				(await Promise.all(
					body.products.map((idProd) =>
						Products.findOneAndUpdate(
							{_id: idProd},
							{$addToSet: {categories: id}}
						)
					)
				));
		}

		const productsWithCategory = await Products.find({
			categories: id,
		});
		
		const productsToRemoveCategory = productsWithCategory
			.map((prod) => prod._doc._id)
			.filter((id) => !body.products.includes(String(id)));

		productsToRemoveCategory.length &&
			(await Promise.all(
				productsToRemoveCategory.map((idProd) =>
					Products.findByIdAndUpdate({_id: idProd}, {$pull: {categories: id}})
				)
			));

		return res.send({
			response: categoryUpdated,
			type: 'Ok',
			message: 'Success',
		});
	} catch (error) {
		res
			.status(500)
			.send({response: '', type: 'Internal Server Error', message: error});
	}
}

function createCategories(req, res) {
	if (!req.body || !req.body.variants.length)
		return res.status(400).send({
			response: '',
			type: 'Bad request.',
			message: 'The fields are empty.',
		});
	if (req.body.name) {
		const {name, periferic, variants, products} = req.body;
		Categories.findOrCreate({
			name,
			periferic,
			variants,
			products,
		})
			.then((data) => {
				res.send({response: data.doc, type: 'Ok', message: 'Success'});
			})
			.catch((error) =>
				res
					.status(500)
					.send({response: '', type: 'Internal Server Error', message: error})
			);
	} else {
		const {products, categories, variants, specs} = req.body;
		const specProducts = products.map((item) => Products.findById(item));
		let idValidProducts;
		let validProducts;
		Promise.all(specProducts)
			.then((data) => {
				idValidProducts = data.map((id) => id._id);
				validProducts = data;
				const categoriesCreated = categories.map((item) =>
					Categories.findOrCreate({name: item})
				);
				return Promise.all(categoriesCreated);
			})
			.then((data) => {
				let idCategories = data.map((item) => item.doc._id);
				data.forEach((categorie) => {
					categorie.doc.variants = variants;
					categorie.doc.products = categorie.doc.products
						.concat(idValidProducts)
						.filter(
							(item, index) =>
								categorie.doc.products.concat(idValidProducts).indexOf(item) ===
								index
						);
					categorie.doc.specs = specs;
				});
				validProducts.forEach((product) => {
					product.categories = product.categories
						.concat(idCategories)
						.filter(
							(item, index) =>
								product.categories.concat(idCategories).indexOf(item) === index
						);
				});
				return Promise.all(
					data
						.map((item) => item.doc.save())
						.concat(validProducts.map((item) => item.save()))
				);
			})
			.then((data) => {
				const result = data.filter((item) => !item.price);
				res.send({response: result, type: 'Ok', message: 'Success'});
			})

			.catch((error) =>
				res
					.status(500)
					.send({response: '', type: 'Internal Server Error', message: error})
			);
	}
}

module.exports = {
	createCategories,
	getAllCategories,
	updateACategory,
	deleteACategory,
};
