const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UsersSchema = new Schema({
	email: {
		type: String,
		required: [true, 'User email required'],
		validate: {
			validator: function (v) {
				return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
			},
			message: (props) => `${props.value} is not a valid email!`,
		},
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	firstName: String,
	lastName: String,
	imageUrl: String,
	role: {
		type: String,
		enum: {
			values: ['admin', 'client'],
			message: '{VALUE} is not supported',
		},
		default: 'client',
	},
	address: [
		{
			zip_code: Number,
			street_name: String,
			street_number: Number,
		},
	],
	identification: String,
	orders: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'orders',
		},
	],
	resetToken: String,
});

// hook to execute before save any new user
UsersSchema.pre('save', async function (next) {
	const hash = await bcrypt.hash(this.password, 10);
	this.password = hash;
	next();
});

// method to compare password from input with password from DB
UsersSchema.methods.isValidPassword = async function (password) {
	const user = this;
	const compare = await bcrypt.compare(password, user.password);
	return compare;
};

module.exports = mongoose.model('users', UsersSchema);
