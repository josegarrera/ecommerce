require('dotenv').config();
const express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors');
const boom = require('@hapi/boom');
const routes = require('./routes/index.js');
const {FRONTEND_URL} = process.env;
require('./middlewares/auth');

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan('dev'));
server.use(
	cors({
		origin: FRONTEND_URL,
		credentials: true,
		methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
		allowedHeaders: [
			'Origin',
			'X-Requested-With',
			'Content-Type',
			'Accept',
			'authorization',
		],
	})
);

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
