/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import {postLocalStorage} from '../../../redux/actions';
import CardHoverProducts from '../cardHoverProduct/CardHoverProduct';

const FavoritesHoverView = () => {
	const dispatch = useDispatch();
	const favsProduct = useSelector((state) => state.wishlist);
	const user = useSelector((state) => state.userId);

	useEffect(() => {
		if (user) {
			dispatch(postLocalStorage({favsProduct, user}));
			window.localStorage.setItem('cart', JSON.stringify([]));
		} // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='cartHoverView'>
			<div className='row'>
				<div className='cartHeader'>
					<div>
						<div className='cartHoverTitle'>My Favorites</div>
						<div className='cartHoverItems'>
							{favsProduct.length} Items selected
						</div>
					</div>
				</div>
				<div className='productsContainer'>
					{favsProduct.length > 3 ? (
						<InfiniteScroll
							dataLength={favsProduct.length}
							loader={<h4>Loading...</h4>}
							height={450}
						>
							{favsProduct.length
								? favsProduct.map((e, i) => (
										<CardHoverProducts key={i} product={e} />
								  ))
								: null}
						</InfiniteScroll>
					) : favsProduct.length ? (
						favsProduct.map((e, i) => <CardHoverProducts key={i} product={e} />)
					) : null}
				</div>
			</div>

			{/* <div className='subtotal'>
				<div>
					<span>Subtotal ({favsProduct.length} items)</span>
				</div>
				<div>
					{rendering ? (
						<div className='divCurrency'>
							<p className='h2__sbt'>AR$ {count$}</p>
							<button
								onClick={() => setRendering(!rendering)}
								className='btn__sbt'
							>
								Pay in U$D
							</button>
						</div>
					) : (
						<div className='divCurrency'>
							<p className='h2__sbt'>U$D {count$}</p>
							<button
								onClick={() => setRendering(!rendering)}
								className='btn__sbt'
							>
								Pay in AR$
							</button>
						</div>
					)}
				</div>
			</div>

			<div className='delivery'>
				<div>
					<span>Delivery charge</span>
				</div>
				<div>
					<span>${delivery}</span>
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

			<div className='cartItemBtn'>Continue to checkout</div> */}
		</div>
	);
};

export default FavoritesHoverView;
