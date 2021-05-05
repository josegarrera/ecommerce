const {Products} = require("../models/index.js");

async function createProduct (req, res) {
    console.log(req.body)
if(!req.body || !req.body.name || !req.body.description) return res.status(400).send({type: "Bad request.", error: "The fields are empty."});
const product = new Products(req.body); 
await product.save(); 
res.send(product);
}

async function getProducts (req, res) {
    const filter = req.query.filter ? req.query.filter : "name";
    const filterValue = req.query.filtervalue ? req.query.filtervalue : "";


}

module.exports = {
    createProduct
}