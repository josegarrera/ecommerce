const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PriceSchema = new Schema({
	currency: String,
	price: Number,
	date: String,
});

module.exports = mongoose.model('prices', PriceSchema);
