const {compareSync} = require('bcrypt');
const {Brands} = require('../models/index.js');

function getAllBrands(req, res) {
	Brands.find({}, 'name')
		.exec()
		.then((data) => res.send(data))
		.catch((error) =>
			res.status(500).send({type: 'Internal Server Error', error: error})
		);
}

async function createBrands(req, res) {
	if (!req.body) {
		return res
			.status(400)
			.send({type: 'Bad request.', error: 'The fields are empty.'});
	}
	const brand = new Brands(req.body);
	await brand.save((err, data) => {
		if (err)
			return res
				.status(500)
				.send({type: 'Internal server error.', error: err.message});
		res.send(brand);
	});
}

async function updateBrand(req, res) {
	const {body} = req;
	if (!body.name)
		return res
			.status(400)
			.send({type: 'Bad request.', error: 'The brand is empty.'});
	try {
		const updatedBrand = await Brands.findByIdAndUpdate(req.params.id, {
			name: req.body.name,
		});
		return res.send({message: 'Brand updated', updatedBrand});
	} catch (error) {
		res.status(500).send({type: 'Internal Server Error', error: error});
	}
}

function deleteBrand(req, res) {
	const {id} = req.params;
	Brands.findByIdAndRemove(id, function (err, doc) {
		if (err) {
			return res.status(400).send(err);
		} else {
			res.send(doc);
		}
	});
}

module.exports = {
	createBrands,
	getAllBrands,
	updateBrand,
	deleteBrand,
};
