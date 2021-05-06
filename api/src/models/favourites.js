const mongoose = require('mongoose');
const Schema = require('Schema');

const FavouritesSchema = new Schema({
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
});

module.exports = mongoose.model('favourites', FavouritesSchema);
