var API = require('currency-conversion');
const {CURRENCIES_API_KEY} = process.env;

var currenciesApi = new API({
	access_key: [CURRENCIES_API_KEY],
	secure: [true | false],
});

module.exports = currenciesApi;
