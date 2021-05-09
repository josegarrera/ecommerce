const {server} = require('./src/server.js');
const mongoose = require('mongoose');
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;
const bucket = require('./src/storage.js');
mongoose.connect(
	`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	},
	(err) => {
		if (err) return console.log(err);
		server.listen('3001', () =>
			console.log('Listen in port 3001 and DB conected.')
		);
		console.log('Conexión exitosa a ' + bucket.name);
	}
);

module.exports = mongoose;
