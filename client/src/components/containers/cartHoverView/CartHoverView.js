/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {postLocalStorage} from '../../../redux/actions';
import {IoCloseSharp} from 'react-icons/io5';
import CardHoverProducts from '../cardHoverProduct/CardHoverProduct';
import CartHoverStyled from './styled';

const CartHoverView = () => {
	const dispatch = useDispatch();
	const cartProduct = useSelector((state) => state.cartProducts);
	const user = useSelector((state) => state.userId);
	let delivery = 100;

	useEffect(() => {
		if (user) {
			dispatch(postLocalStorage({cartProduct, user}));
			window.localStorage.setItem('cart', JSON.stringify([]));
		}
	}, []);

	let count$ =
		cartProduct &&
		cartProduct
			.reduce((accumulator, currentValue) => {
				if (currentValue.product.price.currency === 'USD') {
					return accumulator + currentValue.product.price.value * 93;
				}
				return accumulator + currentValue.product.price.value;
			}, 0)
			.toFixed(2);

	let total = parseFloat(count$) + delivery;
	return (
		<div className='cartHoverView'>
			<div className='row'>
				<div className='cartHeader'>
					<div>
						<div className='cartHoverTitle'>My Cart</div>
						<div className='cartHoverItems'>
							{cartProduct.length} Items selected
						</div>
					</div>

					<div className='closeBtnHeader'>
						<IoCloseSharp></IoCloseSharp>
					</div>
				</div>
				<div className='productsContainer'>
					{cartProduct.length ? (
						cartProduct.map((e) => (
							<CardHoverProducts key={e._id} product={e} />
						))
					) : (
						<h1>No tienes Producto agregados al carrito</h1>
					)}
				</div>
			</div>

			<div className='subtotal'>
				<div>
					<span>subtotal ({cartProduct.length} items)</span>
				</div>
				<div>
					<span>{count$}</span>
				</div>
			</div>

			<div className='delivery'>
				<div>
					<span>delivery charge</span>
				</div>
				<div>
					<span>${delivery}</span>
				</div>
			</div>

			<div className='separator'></div>

			<div className='cartBottom'>
				<div className='totalSpan'>
					<span>total</span>
				</div>
				<div className='totalPrice'>
					<span>{total}</span>
				</div>
			</div>

			<div className='cartItemBtn'>Continue to checkout</div>
		</div>
	);
};

export default CartHoverView;
