import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {URLS} from '../../../../utils/constants';
import ProductDashboard from '../productDashboard';

const List = ({Options}) => {
	const [Items, setItems] = useState([]);

	useEffect(() => {
		allProducts();
	}, [Options]);

	const allProducts = async () => {
		if (Options === 'Products') {
			try {
				console.log('entre');
				let itemss = await axios.get(
					`${URLS.URL_PRODUCTS}?name=${undefined}&category=${undefined}&brand=${undefined}&variants=${undefined}&price=${undefined}&order=${undefined}&direction=${undefined}&limit=${Infinity}`
				);
				setItems(itemss.data.products);
			} catch (error) {
				console.log(error);
			}
		}
	};

	console.log('items', Items);

	return (
		<div>
			{Items &&
				Items.map((el) => (
					<ProductDashboard
						name={el.name}
						price={el.price.value}
						imageUrl={el.imageUrl[0]}
						_id={el._id}
					/>
				))}
		</div>
	);
};

export default List;
