import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../../redux/actions/index';
import ProductList from '../productsList/ProductList';

export default function Search({name}) {
	const dispatch = useDispatch();

	const {products} = useSelector((store) => store.products);
	console.log(products);
	useEffect(() => {
		dispatch(getProducts(name));
	}, [name]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			{products && products.length > 0 ? (
				<ProductList products={products} />
			) : (
				<h1>Not Found</h1>
			)}
		</div>
	);
}
