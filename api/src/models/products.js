const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const findOrCreate = require('mongoose-findorcreate');

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
	brands: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'brands',
		},
	],
	variants: {}, // the different variants of the products. A flexible object that let you assign whatever variant the product has
});

ProductsSchema.plugin(findOrCreate);


module.exports = mongoose.model('products', ProductsSchema);
