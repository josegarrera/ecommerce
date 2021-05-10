import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../../redux/actions/index';
import ProductList from '../productsList/ProductList';

export default function Search({name}) {
	const dispatch = useDispatch();
	let filter = 'name';
	let filterValue = name;

	const {products} = useSelector((store) => store.products);

	useEffect(() => {
		dispatch(getProducts(filter, filterValue));
	}, [name]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			{products ? (
				<ProductList products={products} />
			) : (
				<h1>No encontradoooo!</h1>
			)}
		</div>
	);
}
