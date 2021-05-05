const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
	name: String,
	description: String,
	categories:[ { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "categories"
    }]
});

module.exports = mongoose.model("products", ProductsSchema);