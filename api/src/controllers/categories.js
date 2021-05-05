const {Categories, Products} = require("../models/index.js");

function createCategories (req, res) {
if(!req.body || !req.body.categories) return res.status(400).send({type: "Bad request.", error: "The fields are empty."});
const idProducts = req.body.products
const categories = req.body.categories
const specProducts = idProducts.map(item => Products.exists({_id: item}));
const validProducts = [];

Promise.all(specProducts)
.then(data => {
    const filterProducts = idProducts.filter((item, i) => data[i] === true && validProducts.push(item));
    const categoriesCreated = categories.map(item => 

  Categories.findOrCreate({name: item}));
    console.log("antes promise all", categoriesCreated)
    return Promise.all(categoriesCreated); 
})
.then(data => {
    data.map(item => item.doc.products = validProducts)
    return Promise.all(data.map(item => item.doc.save()))
})
.then(data => {
    res.send(data);
})

.catch(error => 
    res.status(500).send({type: "Internal Server Error", error: error})
) 
 
}

module.exports = {
    createCategories
}