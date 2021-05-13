const {Currencies} = require('../models/index.js');
const {BASE_URL_CURRENCY_API, CURRENCIES_API_KEY} = process.env;
const axios = require('axios');
const today = new Date();

function getCurrencyToday(req, res) {
	Currencies.find()
		.sort({month: -1, date: -1})
		.limit(1)
		.exec()
		.then((data) => {
			if (!data.length || data[0].date < today.getDate())
				return axios.get(
					`${BASE_URL_CURRENCY_API}?access_key=${CURRENCIES_API_KEY}&format=1`
				);
			return data;
		})
		.then((response) => {
			if (response.data) {
				const currency = new Currencies({
					quotes: response.data.quotes,
					date: today.getDate(),
					month: today.getMonth(),
				});
				res.send(currency);
				return currency.save();
			} else {
				res.send('The currency is up to date');
			}
		})
		.catch((err) =>
			res.status(500).send({type: 'Internal server error.', error: err})
		);
}

module.exports = {
	getCurrencyToday,
};
