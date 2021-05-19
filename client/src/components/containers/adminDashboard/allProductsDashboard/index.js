import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {URLS} from '../../../../utils/constants';
import ProductDashboard from '../productDashboard';
import SearchBarDashboard from '../searchBarDashboard/SearchBarDashboard';

import InfiniteScroll from 'react-infinite-scroll-component';

const List = ({Options}) => {
	const [Items, setItems] = useState([]);
	const [Categories, setCategories] = useState([]);
	const [Brands, setBrands] = useState([]);
	const [Users, setUsers] = useState([]);
	const [Orders, setOrders] = useState([]);

	useEffect(() => {
		allProducts();
	}, [Options]);

	const allProducts = async () => {
		if (Options === 'Products') {
			try {
				let itemss = await axios.get(
					`${URLS.URL_PRODUCTS}?name=${undefined}&category=${undefined}&brand=${undefined}&variants=${undefined}&price=${undefined}&order=${undefined}&direction=${undefined}&limit=${Infinity}`
				);
				setItems(itemss.data.products.reverse());
			} catch (error) {
				console.log(error);
			}
		}
		if (Options === 'Categories') {
			try {
				let cats = await axios.get(`${URLS.URL_CATEGORIES}`);
				setCategories(cats.data.reverse());
			} catch (error) {
				console.log(error);
			}
		}
		if (Options === 'Users') {
			try {
				let userss = await axios.get(`${URLS.URL_USERS}`);
				setUsers(userss.data.reverse());
			} catch (error) {
				console.log(error);
			}
		}
		if (Options === 'Orders') {
			try {
				let orderss = await axios.get(`${URLS.URL_USER_ORDERS}`);
				setOrders(orderss.data.reverse());
			} catch (error) {
				console.log(error);
			}
		}
		if (Options === 'Brands') {
			try {
				let brandss = await axios.get(`${URLS.URL_BRANDS}`);
				setBrands(brandss.data.reverse());
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div>
			{/* <SearchBarDashboard /> */}
			{Options === 'Products' ? (
				<InfiniteScroll
					dataLength={Items.length}
					loader={<h4>Loading...</h4>}
					height={700}
				>
					{Items &&
						Items.map((el, index) => (
							<ProductDashboard prop={el} index={index} options={Options} />
						))}
				</InfiniteScroll>
			) : null}
			{Options === 'Categories' ? (
				<InfiniteScroll
					dataLength={Categories.length}
					loader={<h4>Loading...</h4>}
					height={700}
				>
					{Categories &&
						Categories.map((el, index) => (
							<ProductDashboard prop={el} index={index} options={Options} />
						))}
				</InfiniteScroll>
			) : null}
			{Options === 'Users' ? (
				<InfiniteScroll
					dataLength={Users.length}
					loader={<h4>Loading...</h4>}
					height={700}
				>
					{Users &&
						Users.map((el, index) => (
							<ProductDashboard prop={el} index={index} options={Options} />
						))}
				</InfiniteScroll>
			) : null}
			{Options === 'Orders' ? (
				<InfiniteScroll
					dataLength={Orders.length}
					loader={<h4>Loading...</h4>}
					height={700}
				>
					{Orders &&
						Orders.map((el, index) => (
							<ProductDashboard prop={el} index={index} options={Options} />
						))}
				</InfiniteScroll>
			) : null}
			{Options === 'Brands' ? (
				<InfiniteScroll
					dataLength={Brands.length}
					loader={<h4>Loading...</h4>}
					height={700}
				>
					{Brands &&
						Brands.map((el, index) => (
							<ProductDashboard prop={el} index={index} options={Options} />
						))}
				</InfiniteScroll>
			) : null}
		</div>
	);
};

export default List;
