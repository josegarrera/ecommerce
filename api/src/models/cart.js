const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const Cartchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	products: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'products',
		},
	],
	state: {
		type: Number,
		default: 1,
	},
});
// state == 1 => active
// state == 0 => inactive

Cartchema.plugin(findOrCreate);

module.exports = mongoose.model('carts', Cartchema);
