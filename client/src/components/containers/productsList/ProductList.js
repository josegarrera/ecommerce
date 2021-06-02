import React from 'react';
import CardProduct from '../../presentationals/cardProduct/CardProduct';
import PRODUCTS_LIST_STYLE from './styled';

const ProductList = ({products, loadSearch}) => {
	const loader = Array.from({length: 12}, (v, i) => i);

	return (
		<PRODUCTS_LIST_STYLE>
			<div className='cards__container'>
				{products ? (
					products.map(({product: {name, price, imageUrl, _id, combo}}) => (
						<CardProduct
							key={_id}
							name={name}
							price={price}
							imageUrl={imageUrl}
							_id={_id}
							combo={combo}
							loading={false}
						/>
					))
				) : loadSearch === true ? (
					<img
						className='notFound'
						src='https://res.cloudinary.com/dlexbrcrv/image/upload/v1622048281/Proyects/notFound_bs1vct.svg'
					alt ='loading'/>
				) : (
					loader.map((e, i) => <CardProduct key={i} loading={true} />)
				)}
			</div>
		</PRODUCTS_LIST_STYLE>
	);
};

export default ProductList;
