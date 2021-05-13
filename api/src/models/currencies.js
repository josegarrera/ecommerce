const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const findOrCreate = require('mongoose-findorcreate');

const CurrencySchema = new Schema({
	quotes: {},
	date: Number,
	month: Number,
});

CurrencySchema.plugin(findOrCreate);

module.exports = mongoose.model('currencies', CurrencySchema);
