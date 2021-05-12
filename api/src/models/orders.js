const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const OrdersSchema = new Schema({
	users: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	items: [
		{
			product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'products',
			},
			lot: Number,
			variant: {
				type: Map,
				of: String,
			},
		},
	],
	state: {
		type: Number,
		default: 1,
	},
});
// state == 1 => active
// state == 0 => inactive

OrdersSchema.plugin(findOrCreate);

module.exports = mongoose.model('orders', OrdersSchema);
