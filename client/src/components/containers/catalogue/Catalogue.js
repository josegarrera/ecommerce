/* eslint-disable react/jsx-pascal-case */

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
	getProducts,
	cleanCatalogue,
	getAllProducts,
	postLocalStorage,
	getWishListOfDB,
} from '../../../redux/actions/index.js';
import Filter from '../filter/Filter';
import ProductList from '../productsList/ProductList';
import Pagination from '../pagination/Pagination';
import CatalogueStyle from './styled';
import Dropdown from '../dropdown/index.js';

const Catalogue = () => {
	const dispatch = useDispatch();
	const {products, pages} = useSelector((state) => state.products);
	/* const allProducts = useSelector((state) => state.allProducts); */
	const [orderItems, setOrderItems] = useState([]);
	const cartProduct = useSelector((state) => state.cartProducts);

	const options = ['Low > High', 'High > Low', 'A > Z', 'Z > A'];

	// Este allProducts me trae {products: Array(12), pages: Array(2)}

	useEffect(() => {
		dispatch(getProducts());
		dispatch(getAllProducts());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const user = window.localStorage.getItem('userId');
		if (user) {
			dispatch(postLocalStorage({products: cartProduct, userId: user}));
			window.localStorage.setItem('cart', JSON.stringify([]));
			dispatch(getWishListOfDB(user));
		} // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		return () => dispatch(cleanCatalogue());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<CatalogueStyle>
			<Filter order={orderItems} />
			<div className='productsPagination'>
				<div className='sort__elements'>
					<Dropdown
						order
						title='order by'
						name='order'
						items={options}
						setVariants={(el) => setOrderItems(el)}
						variants={orderItems}
					></Dropdown>
				</div>
				<ProductList products={products} />
				<Pagination pages={pages} />
			</div>
		</CatalogueStyle>
	);
};

export default Catalogue;
