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
				res.send({response: currency, type: 'Ok', message: 'Success'});
				return currency.save();
			} else {
				res.send({
					response: 'The currency is up to date',
					type: 'Ok',
					message: 'Success',
				});
			}
		})
		.catch((err) =>
			res
				.status(500)
				.send({response: '', type: 'Internal server error.', message: err})
		);
}

function getCurrencies(req, res) {
	Currencies.find()
		.sort({month: -1, date: -1})
		.limit(1)
		.exec()
		.then((data) => res.send({response: data, type: 'Ok', message: 'Success'}))
		.catch((err) =>
			res
				.status(500)
				.send({response: '', type: 'Internal server error.', message: err})
		);
}

module.exports = {
	getCurrencyToday,
	getCurrencies,
};
