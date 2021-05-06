const mongoose = require('mongoose');
const Schema = mongoose.schema;

const ReviewsSchema = new Schema({
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'products',
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	review: String,
});

module.exports = mongoose.model('reviews', ReviewsSchema);
