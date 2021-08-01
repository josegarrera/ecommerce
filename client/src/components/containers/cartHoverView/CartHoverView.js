/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import {postLocalStorage} from '../../../redux/actions';
import CardHoverProducts from '../cardHoverProduct/CardHoverProduct';
import {changeCartPrice} from '../../../utils/changeCartPrice';

const CartHoverView = () => {
	const dispatch = useDispatch();
	const cartProduct = useSelector((state) => state.cartProducts);
	const user = useSelector((state) => state.userId);
	let delivery = 100;

	useEffect(() => {
		if (user) {
			dispatch(postLocalStorage({cartProduct, user}));
			window.localStorage.setItem('cart', JSON.stringify([]));
		} // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const rendering = true;

	let count$ = cartProduct && changeCartPrice(cartProduct, rendering);

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
				</div>
				<div className='productsContainer'>
					{cartProduct.length > 3 ? (
						<InfiniteScroll
							dataLength={cartProduct.length}
							loader={<h4>Loading...</h4>}
							height={450}
						>
							{cartProduct.length
								? cartProduct.map((e, i) => (
										<CardHoverProducts key={i} product={e} />
								  ))
								: null}
						</InfiniteScroll>
					) : cartProduct.length ? (
						cartProduct.map((e, i) => <CardHoverProducts key={i} product={e} />)
					) : null}
				</div>
			</div>

			{cartProduct.length > 0 ? (
				<div>
					<div className='subtotal'>
						<div>
							<span>Subtotal ({cartProduct.length} items)</span>
						</div>
						<div>
							<b>${count$}</b>
						</div>
					</div>
					<div className='delivery'>
						<div>
							<span>Delivery charge</span>
						</div>
						<div>
							<b>${delivery}</b>
						</div>
					</div>

					<div className='separator'></div>

					<div className='cartBottom'>
						<div className='totalSpan'>
							<span>Total</span>
						</div>
						<div className='totalPrice'>
							<span>{rendering ? <>AR$ {total}</> : <>U$D {total}</>}</span>
						</div>
					</div>
					<Link to='/cart'>
						<div className='cartItemBtn'>Continue to checkout</div>
					</Link>
				</div>
			) : null}
		</div>
	);
};

export default CartHoverView;
