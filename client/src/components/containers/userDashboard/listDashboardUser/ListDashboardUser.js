import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {URLS} from '../../../../utils/constants';
import CardItems from '../cardItemsUser/CardItemsUser';
import Create from '../../create/Create';
//import SearchBarDashboard from '../searchBarDashboard';
import ListStyles from './styled';
/* import {clearObjectValues} from '../../../../utils/clearObjetcValues'; */
import {getCategories, getBrands, getProducts} from '../../../../redux/actions';
import InfiniteScroll from 'react-infinite-scroll-component';

/* var _ = require('lodash'); */

const ListDashboard = ({Options, setOptions}) => {
	const [Items, setItems] = useState([]);
	const [Filter, setFilter] = useState([]);
	const [create, setCreate] = useState(false);
	/* const [control, setControl] = useState(0); */
	const dispatch = useDispatch();
	const allCategories = useSelector((state) => state.categories);
	const allBrands = useSelector((state) => state.brands);
	const allProductsDataList = useSelector((state) => state.products.products);

	useEffect(() => {
		allProducts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [Options]);

	useEffect(() => {
		dispatch(getCategories());
		dispatch(getBrands());
		dispatch(getProducts('', '', '', '', '', '', '', Infinity));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setFilter(Items); // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [Items]);

	// useEffect(() => {
	// 	if (typeof Items[0] === 'object') {
	// 		let obj = clearObjectValues(_.cloneDeep(Items[0]));
	// 		console.log(obj);
	// 		if (create) {
	// 			setItems([obj].concat([...Items]));
	// 		} else {
	// 			setItems(Items.slice(1));
	// 		}
	// 	}
	// }, [create]);

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
				setItems(itemss.data.response.reverse());
			} catch (error) {
				console.log(error);
			}
		}
		if (Options === 'Users') {
			try {
				let itemss = await axios.get(`${URLS.URL_USERS}`);
				setItems(itemss.data.response.reverse());
			} catch (error) {
				console.log(error);
			}
		}
		if (Options === 'Orders') {
			try {
				let itemss = await axios.get(`${URLS.URL_USER_ORDERS}/all`);
				setItems(itemss.data.response.reverse());
			} catch (error) {
				console.log(error);
			}
		}
		if (Options === 'Brands') {
			try {
				let itemss = await axios.get(`${URLS.URL_BRANDS}`);
				setItems(itemss.data.response.reverse());
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<ListStyles>
			{Items &&
				{
					/* <SearchBarDashboard
					Items={Items}
					setFilter={setFilter}
					setCreate={setCreate}
					create={create}
					options={Options}
					setOptions={setOptions}
				/> */
				}}
			{Options === 'Products' ? (
				<>
					{/* {create ? <Create options={Options} /> : null} */}

					<InfiniteScroll
						className='listProduct'
						dataLength={Filter.length}
						loader={<h4>Loading...</h4>}
						height={700}
					>
						{Filter &&
							Filter.map((el, index) => (
								<CardItems
									prop={el}
									index={index}
									options={Options}
									allProducts={allProducts}
									allBrands={allBrands}
									allCategories={allCategories}
								/>
							))}
					</InfiniteScroll>
				</>
			) : null}
			{Options === 'Categories' ? (
				<>
					{create ? (
						<Create
							options={Options}
							setCreate={setCreate}
							create={create}
							Items={Items}
							allProducts={allProducts}
						/>
					) : null}
					<InfiniteScroll
						className='listProduct'
						dataLength={Filter.length}
						loader={<h4>Loading...</h4>}
						height={600}
					>
						{Filter &&
							Filter.map((el, index) => (
								<CardItems
									prop={el}
									index={index}
									options={Options}
									allProducts={allProducts}
									allProductsDataList={allProductsDataList}
								/>
							))}
					</InfiniteScroll>
				</>
			) : null}
			{Options === 'Users' ? (
				<>
					{create ? (
						<Create
							options={Options}
							setCreate={setCreate}
							create={create}
							Items={Items}
							allProducts={allProducts}
						/>
					) : null}
					<InfiniteScroll
						className='listProduct'
						dataLength={Filter.length}
						loader={<h4>Loading...</h4>}
						height={600}
					>
						{Filter &&
							Filter.map((el, index) => (
								<CardItems
									prop={el}
									index={index}
									options={Options}
									allProducts={allProducts}
								/>
							))}
					</InfiniteScroll>
				</>
			) : null}
			{Options === 'Orders' ? (
				<InfiniteScroll
					className='listProduct'
					dataLength={Filter.length}
					loader={<h4>Loading...</h4>}
					height={600}
				>
					{Filter &&
						Filter.map((el, index) => (
							<CardItems
								prop={el}
								index={index}
								options={Options}
								allProducts={allProducts}
							/>
						))}
				</InfiniteScroll>
			) : null}
			{Options === 'Brands' ? (
				<>
					{create ? (
						<Create
							options={Options}
							setCreate={setCreate}
							create={create}
							Items={Items}
							allProducts={allProducts}
						/>
					) : null}
					<InfiniteScroll
						className='listProduct'
						dataLength={Filter.length}
						loader={<h4>Loading...</h4>}
						height={600}
					>
						{Filter &&
							Filter.map((el, index) => (
								<CardItems
									prop={el}
									index={index}
									options={Options}
									allProducts={allProducts}
								/>
							))}
					</InfiniteScroll>
				</>
			) : null}
		</ListStyles>
	);
};

export default ListDashboard;