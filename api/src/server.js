require('dotenv').config();
const express = require('express');
const server = express();
const morgan = require('morgan');
const boom = require('@hapi/boom');
const routes = require('./routes/index.js');

require('./middlewares/auth');

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan('dev'));
server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

server.use('/', routes);

/* function notFoundHandler(req, res) {
  const {
    output: { statusCode, payload }
  } = boom.notFound();
  res.status(statusCode).json(payload);
}

// Catch 404
server.use(notFoundHandler);
// Errors middleware
server.use(logErrors);
server.use(wrapErrors);
server.use(errorHandler); */

module.exports = {
	server,
};
