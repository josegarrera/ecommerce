import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {IoCloseSharp} from 'react-icons/io5';
import {
	removeCartProduct,
	updateCardProduct,
	changeLot,
	changeLotLocal,
} from '../../../redux/actions/index.js';
import DivCard from './styled';

const CardCartProducts = (props) => {
	const dispatch = useDispatch();
	let {imageUrl, name, price, _id, variants} = props.product.product;
	let {lot, variant} = props.product;
	let userId = window.localStorage.getItem('userId');

	let data = {
		userId: userId,
		productId: _id,
		variant,
	};

	const handleSubmitDelete = (e) => {
		e.preventDefault();
		if (userId) {
			dispatch(removeCartProduct(data));
		}
		dispatch(updateCardProduct(props.product.product._id));
	};
	const handleChangeLot = (num) => {
		dispatch(changeLotLocal({...data, num}));
		if (userId) {
			dispatch(changeLot({...data, num}));
		}
	};

	return (
		<DivCard>
			<div className='productCont'>
				<Link className='cincuenta' to={`/products/id/${_id}`}>
					<div className='imageDiv'>
						{<img className='image' alt='IMG' src={imageUrl[0]}></img>}
					</div>
					<div className='nameDiv'>
						<span>{name} </span>
						<span className='variant'>
							{variants[variant].color &&
								variants[variant].color.charAt(0).toUpperCase() +
									variants[variant].color.slice(1)}
						</span>
					</div>
				</Link>

				<div className='amountDiv'>
					<button className='amount' onClick={(e) => handleChangeLot(-1)}>
						-
					</button>
					<div className='amount'>{lot}</div>
					<button className='amount' onClick={(e) => handleChangeLot(1)}>
						+
					</button>
				</div>
				<div className='priceDiv'>
					{price.currency} {lot * price.value}
				</div>
				<button className='closeDiv' onClick={(e) => handleSubmitDelete(e)}>
					<IoCloseSharp />
				</button>
			</div>
			<div className='divisor'></div>
		</DivCard>
	);
};

export default CardCartProducts;
