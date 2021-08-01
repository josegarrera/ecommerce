const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavouritesSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	products: [
		{
			_id: false,
			product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'products',
			},
		},
	],
});

module.exports = mongoose.model('favourites', FavouritesSchema);
