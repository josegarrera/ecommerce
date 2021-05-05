const {Products} = require("../models/index.js");

async function createProduct (req, res) {
if(!req.body || !req.body.name || !req.body.description) return res.status(400).send({type: "Bad request.", error: "The fields are empty."});
const product = new Products(req.body); 
await product.save((err, data) => {
    if(err) return res.status(500).send({type: "Internal server error.", error: err.message});
    res.send(product);
}); 
}

function getProducts (req, res) {
    const filter = req.query.filter ? req.query.filter : "name";
    const filterValue = req.query.filtervalue ? req.query.filtervalue : "";
    Products.find().populate("categories")
    .then(data => res.send(data))
    .catch(error => 
        res.status(500).send({type: "Internal Server Error", error: error})
    )
}

module.exports = {
    createProduct,
    getProducts
}