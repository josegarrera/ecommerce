const server = require('./src/server.js');
const mongoose = require('mongoose');
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;
const axios = require('axios');
const PORT = process.env.PORT || '3001';

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
		console.log('Conexión exitosa a DB ' + data.connections[0].name);
		server.listen(PORT, () => console.log('Listen in port 3001.'));
		return axios.get(`${process.env.BACKEND_URL}/currencies/today`);
	})
	.catch((err) => console.log(err.message));

module.exports = mongoose;
