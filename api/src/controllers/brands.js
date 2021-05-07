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

module.exports = {
	createBrands,
	getAllBrands,
};
