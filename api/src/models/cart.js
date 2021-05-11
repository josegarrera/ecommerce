const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const CartSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	products: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'products',
			lot: Number,
		},
	],
});

Cartchema.plugin(findOrCreate);

module.exports = mongoose.model('carts', Cartchema);
