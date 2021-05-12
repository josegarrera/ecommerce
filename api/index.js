const {server} = require('./src/server.js');
const mongoose = require('mongoose');
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;
const bucket = require('./src/storage.js');
const axios = require('axios');

mongoose
	.connect(
		`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		}
	)
	.then((data) => {
		server.listen('3001', () => console.log('Listen in port 3001.'));
		console.log('Conexión exitosa a DB ' + data.connections[0].name);
		console.log('Conexión exitosa a Storage ' + bucket.name);
		return axios.get('http://localhost:3001/currencies');
	})
	.catch((err) => console.log(err.message));

module.exports = mongoose;
