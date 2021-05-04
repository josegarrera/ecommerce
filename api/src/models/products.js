const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
	name: String,
	description: String
});

module.exports = mongoose.model("products", ProductsSchema);