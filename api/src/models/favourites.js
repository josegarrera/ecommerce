const mongoose = require('mongoose');
const Schema = require('Schema');

const FavouritesSchema = new Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'userId',
	},
	products: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'products',
		},
	],
});

module.exports = mongoose.model('favourites', FavouritesSchema);
