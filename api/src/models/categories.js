const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const CategoriesSchema = new Schema({
	name: {
		type: String,
		unique: true,
	},
	products: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'products',
		},
	],
	periferic: {
		type: Boolean,
	}, // if we need to filter periferics, we use this to chekc it
	variants: [],
	specs: [],
});
CategoriesSchema.plugin(findOrCreate);

module.exports = mongoose.model('categories', CategoriesSchema);
