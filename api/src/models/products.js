const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
	name: String,
	description: String,
	colors: [],
	size: [],
	price: {currency: String, value: Number},
	categories: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'categories',
		},
	],
});

module.exports = mongoose.model('products', ProductsSchema);
