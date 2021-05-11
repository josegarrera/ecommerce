import React from 'react';
import DivCrdProd from './styled';
import {Link} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';

const CardProduct = ({name, imageUrl, price, _id}) => {
	const handleAddCart = () => {
		//add to cart
	};
	const handleAddFav = () => {
		//add to fav
	};

	return (
		<DivCrdProd>
			<div className='cnt__image'>
				<Link to={`/products/id/${_id}`}>
					<img
						className='img__card'
						src={imageUrl[0]}
						alt='imagen de producto'
					/>
				</Link>
			</div>
			<div className='cnt_info'>
				<Link to={`/products/id/${_id}`}>
					<h5>{name}</h5>
				</Link>
				<h6>{price.currency + price.value}</h6>
				<button className='btn__fav' onClick={handleAddFav}>
					<AiOutlineHeart />
				</button>
				<button className='btn__cart' onClick={handleAddCart}>
					<FaShoppingCart />
				</button>
			</div>
		</DivCrdProd>
	);
};

export default CardProduct;
