import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {URLS} from '../../../../utils/constants';
import ProductDashboard from '../productDashboard';
import SearchBarDashboard from '../searchBarDashboard';

import InfiniteScroll from 'react-infinite-scroll-component';

const List = ({Options}) => {
	const [Items, setItems] = useState([]);
	const [Filter, setFilter] = useState([]);

	useEffect(() => {
		allProducts();
	}, [Options]);

	useEffect(() => {
		setFilter(Items);
	}, [Items]);

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
				let itemss = await axios.get(`${URLS.URL_CATEGORIES}`);
				setItems(itemss.data.reverse());
			} catch (error) {
				console.log(error);
			}
		}
		if (Options === 'Users') {
			try {
				let itemss = await axios.get(`${URLS.URL_USERS}`);
				setItems(itemss.data.reverse());
			} catch (error) {
				console.log(error);
			}
		}
		if (Options === 'Orders') {
			try {
				let itemss = await axios.get(`${URLS.URL_USER_ORDERS}`);
				setItems(itemss.data.reverse());
			} catch (error) {
				console.log(error);
			}
		}
		if (Options === 'Brands') {
			try {
				let itemss = await axios.get(`${URLS.URL_BRANDS}`);
				setItems(itemss.data.reverse());
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div>
			{Items && <SearchBarDashboard Items={Items} setFilter={setFilter} />}
			{Options === 'Products' ? (
				<div>
					<InfiniteScroll
						dataLength={Items.length}
						loader={<h4>Loading...</h4>}
						height={700}
					>
						{Filter &&
							Filter.map((el, index) => (
								<ProductDashboard prop={el} index={index} />
							))}
					</InfiniteScroll>
				</div>
			) : null}
			{Options === 'Categories' ? (
				<InfiniteScroll
					dataLength={Items.length}
					loader={<h4>Loading...</h4>}
					height={700}
				>
					{Filter &&
						Filter.map((el, index) => (
							<ProductDashboard prop={el} index={index} />
						))}
				</InfiniteScroll>
			) : null}
			{Options === 'Users' ? (
				<InfiniteScroll
					dataLength={Items.length}
					loader={<h4>Loading...</h4>}
					height={700}
				>
					{Filter &&
						Filter.map((el, index) => (
							<ProductDashboard prop={el} index={index} />
						))}
				</InfiniteScroll>
			) : null}
			{Options === 'Orders' ? (
				<InfiniteScroll
					dataLength={Items.length}
					loader={<h4>Loading...</h4>}
					height={700}
				>
					{Filter &&
						Filter.map((el, index) => (
							<ProductDashboard prop={el} index={index} />
						))}
				</InfiniteScroll>
			) : null}
			{Options === 'Brands' ? (
				<InfiniteScroll
					dataLength={Items.length}
					loader={<h4>Loading...</h4>}
					height={700}
				>
					{Filter &&
						Filter.map((el, index) => (
							<ProductDashboard prop={el} index={index} />
						))}
				</InfiniteScroll>
			) : null}
		</div>
	);
};

export default List;
