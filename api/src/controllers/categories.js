const {Categories, Products} = require('../models/index.js');

function getAllCategories(req, res) {
	Categories.find({})
		.populate('products', {name: true})
		.exec()
		.then((data) => res.send(data))
		.catch((error) =>
			res.status(500).send({type: 'Internal Server Error', error: error})
		);
}

function createCategories(req, res) {
	if (!req.body || !req.body.categories.length || !req.body.variants.length)
		return res
			.status(400)
			.send({type: 'Bad request.', error: 'The fields are empty.'});
	const {products, categories, variants} = req.body;
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
			res.send(data);
		})

		.catch((error) =>
			res.status(500).send({type: 'Internal Server Error', error: error})
		);
}

module.exports = {
	createCategories,
	getAllCategories,
};
