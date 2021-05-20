import React, {useEffect, useState} from 'react';
import DIV_CART from './styled';
import {useSelector, useDispatch} from 'react-redux';
import CardCartProducts from '../cardCartProducts/CardCartProducts';
import {postLocalStorage} from '../../../redux/actions';
import {Link} from 'react-router-dom';
import SumarryCart from '../sumarryCart/SumarryCart';
import {changeCartPrice} from '../../../utils/changeCartPrice';

const Cart = () => {
	const cartProduct = useSelector((state) => state.cartProducts);
	const dispatch = useDispatch();
	const [rendering, setRendering] = useState(true);

	// useEffect(() => {
	// 	const user = window.localStorage.getItem('userId');
	// 	if (user) {
	// 		dispatch(postLocalStorage({products: cartProduct, userId: user}));
	// 		window.localStorage.setItem('cart', JSON.stringify([]));
	// 	}
	// }, []);

	let count$ = cartProduct && changeCartPrice(cartProduct, rendering);

	const casa = () => {
		console.log(JSON.parse(window.localStorage.getItem('cart')));
	};

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
							cartProduct.map((e) => (
								<CardCartProducts key={e._id} product={e} />
							))
						) : (
							<h1>No tienes Producto agregados al carrito</h1>
						)}
					</div>
					<div>
						<Link to='/catalogue'>
							<p className='p_back_home'>{'<<'} Continue Shopping</p>
						</Link>
						{rendering ? (
							<div>
								<p className='h2__sbt'>AR$ {count$}</p>
								<button
									onClick={() => setRendering(!rendering)}
									className='btn__sbt'
								>
									Change pay to U$D
								</button>
							</div>
						) : (
							<>
								<p className='h2__sbt'>U$D {count$}</p>
								<button
									onClick={() => setRendering(!rendering)}
									className='btn__sbt'
								>
									Change pay to AR$
								</button>
							</>
						)}
					</div>
				</div>
				<SumarryCart casa={casa} count={count$} />
			</div>
		</DIV_CART>
	);
};

export default Cart;
