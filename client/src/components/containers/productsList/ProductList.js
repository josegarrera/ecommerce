import React from 'react';
import CardProduct from '../../presentationals/cardProduct/CardProduct';
import PRODUCTS_LIST_STYLE from './styled';

const ProductList = ({products, loadSearch}) => {
	const loader = Array.from({length: 12}, (v, i) => i);

	return (
		<PRODUCTS_LIST_STYLE>
			<div className='cards__container'>
				{products ? (
					products.map(({product: {name, price, imageUrl, _id}}) => (
						<CardProduct
							key={_id}
							name={name}
							price={price}
							imageUrl={imageUrl}
							_id={_id}
							loading={false}
						/>
					))
				) : loadSearch === true ? (
					<CardProduct loading={true} />
				) : (
					loader.map((e, i) => <CardProduct key={i} loading={true} />)
				)}
			</div>
		</PRODUCTS_LIST_STYLE>
	);
};

export default ProductList;
