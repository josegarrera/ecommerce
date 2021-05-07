const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
	name: {
		type: String,
		unique: true,
	},
	description: String,
	price: {currency: String, value: Number},
	imageUrl: [],
	categories: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'categories',
		},
	],
	marca: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'brand',
		},
	],
	variants: {}, // the different variants of the products. A flexible object that let you assign whatever variant the product has
});

module.exports = mongoose.model('products', ProductsSchema);
