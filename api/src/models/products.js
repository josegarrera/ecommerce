const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
	name: String,
	description: String,
	price: {currency: String, value: Number},
	imageUrl: [],
	categories: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'categories',
		},
	],
	variants: {}, // the different variants of the products. A flexible object that let you assign whatever variant the product has
	stock: {}, // the same for the stock
});

module.exports = mongoose.model('products', ProductsSchema);
