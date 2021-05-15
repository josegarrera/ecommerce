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
			_id: false,
			product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'products',
			},
			lot: {
				type: Number,
				default: 1,
			},
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
	subTotal: Number,
	shipping: Number,
	total: Number,
	currency: {
		type: String,
		enum: {
			values: ['USD', 'ARG'],
			message: '{VALUE} is not supported',
		},
		default: 'USD',
	},
});
// state == 1 => active
// state == 0 => inactive

OrdersSchema.plugin(findOrCreate);

module.exports = mongoose.model('orders', OrdersSchema);
