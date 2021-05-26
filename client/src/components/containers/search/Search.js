import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts, cleanCatalogue} from '../../../redux/actions/index';
import ProductList from '../productsList/ProductList';
import Search_Style from './styled';

export default function Search({name}) {
	const dispatch = useDispatch();

	const {products} = useSelector((store) => store.products);

	useEffect(() => {
		return () => dispatch(cleanCatalogue());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		dispatch(getProducts(name));
	}, [name]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Search_Style>
			{products && products.length > 0 ? (
				<ProductList products={products} />
			) : (
				<ProductList loadSearch={true} />
			)}
		</Search_Style>
	);
}
