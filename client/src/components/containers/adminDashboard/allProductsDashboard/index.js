import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {URLS} from '../../../../utils/constants';
import ProductDashboard from '../productDashboard';

import InfiniteScroll from 'react-infinite-scroll-component';

const List = ({Options}) => {
	const [Items, setItems] = useState([]);
	const [Categories, setCategories] = useState([]);

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
				setCategories(cats.data);
				console.log('catsss', cats.data);
			} catch (error) {
				console.log(error);
			}
		}
		if (Options === 'Users') {
			try {
			} catch (error) {
				console.log(error);
			}
		}
		if (Options === 'Orders') {
			try {
			} catch (error) {
				console.log(error);
			}
		}
		if (Options === 'Brands') {
			try {
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div>
			{Options === 'Products' ? (
				<InfiniteScroll
					dataLength={Items.length}
					loader={<h4>Loading...</h4>}
					height={700}
				>
					{Items &&
						Items.map((el) => (
							<ProductDashboard
								prop1={el.name}
								prop2={el.price}
								prop3={el.imageUrl[0]}
								prop4={el._id}
							/>
						))}
				</InfiniteScroll>
			) : null}
			{/* {Options === 'Categories' ? (
				<InfiniteScroll
					dataLength={Categories.length}
					loader={<h4>Loading...</h4>}
					height={700}
				>
					{Categories && Categories.map((el) => <div>{el}</div>)}
				</InfiniteScroll>
			) : null} */}
			{Options === 'Users' ? <div></div> : null}
			{Options === 'Orders' ? <div></div> : null}
			{Options === 'Brands' ? <div></div> : null}
		</div>
	);
};

export default List;
