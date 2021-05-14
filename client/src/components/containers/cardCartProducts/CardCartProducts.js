import React from 'react';
import {IoCloseSharp} from 'react-icons/io5';
import DivCard from './styled';

const CardCartProducts = (props) => {
	let {imageUrl, name, price} = props.product.product;
	let {lot} = props.product;
	console.log('estas son las props', props.product);
	return (
		<DivCard>
			<div className='productCont'>
				<div className='cincuenta'>
					<div className='imageDiv'>
						{<img className='image' src={imageUrl[0]}></img>}
					</div>

					<div className='nameDiv'>{name}</div>
				</div>

				<div className='amountDiv'>
					<button className='amount'>+</button>
					<div className='amount'>{lot}</div>
					<button className='amount'>-</button>
				</div>
				<div className='priceDiv'>
					{price.currency} {price.value}
				</div>
				<button className='closeDiv'>
					<IoCloseSharp />
				</button>
			</div>
			<div className='divisor'></div>
		</DivCard>
	);
};

export default CardCartProducts;
