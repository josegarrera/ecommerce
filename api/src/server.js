require('dotenv').config();
const express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index.js');
const {FRONTEND_URL} = process.env;
require('./middlewares/auth');

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan('dev'));
server.use(express.json());
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
			'Authorization',
		],
	})
);

server.use('/', routes);

module.exports = server;
