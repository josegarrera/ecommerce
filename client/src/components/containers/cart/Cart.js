import React, {useEffect} from 'react';
import DIV_CART from './styled';
import {postLocalStorage} from '../../../redux/actions/index';
import {useDispatch, useSelector} from 'react-redux';
import CardCartProducts from '../cardCartProducts/CardCartProducts';
import {Link} from 'react-router-dom';
import SumarryCart from '../sumarryCart/SumarryCart';
import {changeCartPrice} from '../../../utils/changeCartPrice';

const Cart = () => {
	const dispatch = useDispatch();
	const cartProduct = useSelector((state) => state.cartProducts);
	const payIn = useSelector((state) => state.payIn);
	useEffect(() => {
		const user = window.localStorage.getItem('userId');
		if (user) {
			dispatch(postLocalStorage({products: cartProduct, userId: user}));
			window.localStorage.setItem('cart', JSON.stringify([]));
		} // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let count$ = cartProduct && changeCartPrice(cartProduct, 'ARS');

	return (
		<DIV_CART>
			<div className='title_cnt'>
				<h1>Shopping Cart</h1>
			</div>
			<div className='products__summ__cnt'>
				<div className='prd__link'>
					<div className='product_cnt'>
						<div className='prd__values'>
							<div>Product</div>
							<div>Amount</div>
							<div>Price</div>
						</div>
						{cartProduct.length ? (
							cartProduct.map((e, i) => (
								<CardCartProducts key={i} product={e} />
							))
						) : (
							<h1 className='dont__prd'>
								You don't have products in your cart
							</h1>
						)}
					</div>
					<div>
						<Link to='/catalogue'>
							<p className='p_back_home'>{'<<'} Continue Shopping</p>
						</Link>
						{count$ && <p className='h2__sbt'>U$D {count$}</p>}
					</div>
				</div>
				<SumarryCart count={count$} payIn={payIn} />
			</div>
		</DIV_CART>
	);
};

export default Cart;
