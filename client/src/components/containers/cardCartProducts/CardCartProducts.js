import React from 'react';
import {Link} from 'react-router-dom';
import {IoCloseSharp} from 'react-icons/io5';
import {removeCartProduct} from '../../../redux/actions/index.js';
import DivCard from './styled';

const CardCartProducts = (props) => {
	let {imageUrl, name, price, _id} = props.product.product;
	let {lot} = props.product;
	let userId = 123456789; // Lo obtengo de algun lado

	let data = {
		userId: userId,
		productId: _id,
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		removeCartProduct(data);
		console.log('esto se va a elimiar', data);
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
