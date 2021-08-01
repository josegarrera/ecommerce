import React from 'react';
/* import {Link, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {IoCloseSharp} from 'react-icons/io5';
import {removeCartProduct} from '../../../redux/actions/index.js';
import {FaPlus} from 'react-icons/fa';
import {FaMinus} from 'react-icons/fa'; */

const CardHoverView = (props) => {
	//const dispatch = useDispatch();
	let {imageUrl, name, price} = props.product.product;
	/* 	let {lot} = props.product;
	let userId = window.localStorage.getItem('userId'); */

	/* let data = {
		userId: userId,
		productId: _id,
	}; */

	/* const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(removeCartProduct(data));
	}; */

	return (
		<div>
			<div className='cartItem'>
				{/* <div className='closeBtn'>
					<IoCloseSharp></IoCloseSharp>
				</div> */}

				<div className='cartItemImg'>
					<img className='itemImg' src={imageUrl[0]} alt='cart item'></img>
				</div>

				<div className='cartItemInfo'>
					<span className='cardItemTitle'>{name}</span>
					<span className='cardItemPrice'>
						{price.currency} &nbsp;
						{price.value}
					</span>
				</div>

				{/* <div className='cartItemQty'>
					<div className='incrementQty'>
						<FaPlus />
					</div>
					<div className='actualQty'>2</div>
					<div className='decrementQty'>
						<FaMinus />
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default CardHoverView;
