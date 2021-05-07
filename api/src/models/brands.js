const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var findOrCreate = require('mongoose-findorcreate');

const BrandsSchema = new Schema({
	name: String,
	products: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'products',
		},
	],
});
BrandsSchema.plugin(findOrCreate);

module.exports = mongoose.model('brands', BrandsSchema);
