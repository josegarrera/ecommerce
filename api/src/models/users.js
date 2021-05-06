const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
	firstName: String,
	lastName: String,
	email: {
		type: String,
		required: [true, 'User email required'],
		validate: {
			validator: function (v) {
				return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
			},
			message: (props) => `${props.value} is not a valid email!`,
		},
	},
	type: {
		type: String,
		required: true,
		enum: {
			values: ['Admin', 'Seller', 'Buyer'],
			message: '{VALUE} is not supported',
		},
	},
});

module.exports = mongoose.model('users', UsersSchema);
