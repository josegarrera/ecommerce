const Products = require('../models/products.js');
const Categories = require('../models/categories.js');
const Brands = require('../models/brands.js');
const Currencies = require('../models/currencies.js');
const Orders = require('../models/orders.js');
const Users = require('../models/users.js');
const Favourites = require('../models/favourites.js');
const NewsLetter = require('./newsLetter');

module.exports = {
	Products,
	Categories,
	Brands,
	Currencies,
	Orders,
	Users,
	Favourites,
	NewsLetter,
};
