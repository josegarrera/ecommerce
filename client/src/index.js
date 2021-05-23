import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import store from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import dotenv from 'dotenv';
dotenv.config();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
