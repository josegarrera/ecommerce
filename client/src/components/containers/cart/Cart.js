import React, {useEffect, useState} from 'react';
import DIV_CART, {CheckBoxWrapper, CheckBox, CheckBoxLabel} from './styled';
import {postLocalStorage, setPayIn} from '../../../redux/actions/index';
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
		}
	}, []);

	const handleCheck = () => {
		dispatch(setPayIn());
	};
	let count$ = cartProduct && changeCartPrice(cartProduct, payIn);

	return (
		<DIV_CART>
			<div className='title_cnt'>
				<h1>Shopping Cart</h1>
			</div>

			<div className='pay__in'>Pay In :</div>
			<div className={payIn === 'USD' ? 'USD' : 'USD_IN'}>USD</div>
			<div className={payIn === 'ARS' ? 'ARS' : 'ARS_IN'}>ARS</div>
			<CheckBoxWrapper>
				<CheckBox
					id='checkbox'
					type='checkbox'
					onClick={handleCheck}
					defaultChecked={payIn === 'USD' ? true : false}
				/>
				<CheckBoxLabel htmlFor='checkbox' />
			</CheckBoxWrapper>
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
							<h1>No tienes Producto agregados al carrito</h1>
						)}
					</div>
					<div>
						<Link to='/catalogue'>
							<p className='p_back_home'>{'<<'} Continue Shopping</p>
						</Link>
						{payIn === 'ARS' ? (
							<>
								<p className='h2__sbt'>U$D {count$}</p>
							</>
						) : (
							<>
								<p className='h2__sbt'>AR$ {count$}</p>
							</>
						)}
					</div>
				</div>

				<SumarryCart count={count$} />
			</div>
		</DIV_CART>
	);
};

export default Cart;
