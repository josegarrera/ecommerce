const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrandsSchema = new Schema({
	name: String,
	products: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'products',
		},
	],
});

module.exports = mongoose.model('brands', BrandsSchema);
