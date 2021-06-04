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
			},
			variant: {
				type: Number,
			},
		},
	],
	state: {
		type: String,
		enum: {
			values: ['created', 'processing', 'dispatched', 'completed', 'canceled'],
		},
		default: 'created',
	},

	shipping: {},
	currency: {
		type: String,
		enum: {
			values: ['USD', 'ARG'],
			message: '{VALUE} is not supported',
		},
		default: 'USD',
	},
	paymentId: String, // Información del pago procesado
	paymentMethod: String,
	transactionStatus: String,
	paymentStatus: String,
	datePayment: String,
	transactionDetail: {},
});

OrdersSchema.plugin(findOrCreate);

module.exports = mongoose.model('orders', OrdersSchema);
