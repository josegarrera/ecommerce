import React from 'react';
import CardProduct from '../../presentationals/cardProduct/CardProduct';
import Products_List_Style from './styled';

const ProductList = ({products}) => {
	return (
		<Products_List_Style>
			<div className='cards__container'>
				{products &&
					products.map(({name, price, imageUrl, _id}) => (
						<CardProduct
							key={name}
							name={name}
							price={price}
							imageUrl={imageUrl}
							_id={_id}
						/>
					))}
			</div>
		</Products_List_Style>
	);
};

export default ProductList;
