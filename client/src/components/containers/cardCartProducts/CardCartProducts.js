import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {IoCloseSharp} from 'react-icons/io5';
import {removeCartProduct} from '../../../redux/actions/index.js';
import DivCard from './styled';

const CardCartProducts = (props) => {
	const dispatch = useDispatch();
	let {imageUrl, name, price, _id} = props.product.product;
	let {lot} = props.product;
	let userId = window.localStorage.getItem('userId');

	let data = {
		userId: userId,
		productId: _id,
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(removeCartProduct(data));
	};

	return (
		<DivCard>
			<div className='productCont'>
				<Link className='cincuenta' to={`/products/id/${_id}`}>
					<div className='imageDiv'>
						{<img className='image' src={imageUrl[0]}></img>}
					</div>

					<div className='nameDiv'>{name}</div>
				</Link>

				<div className='amountDiv'>
					<button className='amount'>+</button>
					<div className='amount'>{lot}</div>
					<button className='amount'>-</button>
				</div>
				<div className='priceDiv'>
					{price.currency} {price.value}
				</div>
				<button className='closeDiv' onClick={(e) => handleSubmit(e)}>
					<IoCloseSharp />
				</button>
			</div>
			<div className='divisor'></div>
		</DivCard>
	);
};

export default CardCartProducts;
