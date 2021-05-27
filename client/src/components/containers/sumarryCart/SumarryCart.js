import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {confirmCheckout} from '../../../redux/actions';

import {store} from 'react-notifications-component';

const FORM_ID = 'payment-form';

const SumarryCart = ({payIn, count, placeOrder}) => {
	const preferenceId = useSelector((state) => state.paymentMethod);
	const shippingInfo = useSelector((state) => state.shippingInfo);
	const cartProduct = useSelector((state) => state.cartProducts);
	const dispatch = useDispatch();
	const userId = localStorage.userId;
	const handleOrderSubmit = (e) => {
		e.preventDefault();
		userId && dispatch(confirmCheckout({userId, shippingInfo}));
	};

	useEffect(() => {
		if (preferenceId) {
			// con el preferenceId en mano, inyectamos el script de mercadoPago
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.src =
				'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
			script.setAttribute('data-preference-id', preferenceId);
			const form = document.getElementById(FORM_ID);
			form && form.appendChild(script);
			return () => {
				//Elimina el script como nodo hijo del elemento form
				form.removeChild(script);
			};
		}
	}, [preferenceId]);

	const handleError = () => {
		store.addNotification({
			title: 'Add products',
			message: 'You have to add products',
			type: 'danger',
			insert: 'top',
			container: 'top-center',
			animationIn: ['animate__animated', 'animate__fadeIn'],
			animationOut: ['animate__animated', 'animate__fadeOut'],
			dismiss: {
				duration: 3000,
				onScreen: true,
				pauseOnHover: true,
			},
		});
	};

	const handleErrorLogin = () => {
		store.addNotification({
			title: 'You are not Login',
			message: 'You have to be logged yo buy something.',
			type: 'danger',
			insert: 'top',
			container: 'top-center',
			animationIn: ['animate__animated', 'animate__fadeIn'],
			animationOut: ['animate__animated', 'animate__fadeOut'],
			dismiss: {
				duration: 3000,
				onScreen: true,
				pauseOnHover: true,
			},
		});
	};

	return (
		<div>
			<div className='summary'>
				{cartProduct.length ? (
					<div className='summary__title'>
						<h2>Summary</h2>
						<div className='total__prd'>
							<p>total products</p>
							<p>${count}</p>
						</div>
						<div className='total__prd'>
							<p>Shipping Cost </p>
							<p>${payIn === 'USD' ? 500 : (500 / 93).toFixed(2)}</p>
						</div>
					</div>
				) : (
					<div className='summary__title'>
						<h2>Summary</h2>
						<br />
						<br />
						<br />
						<h3 style={{textAlign: 'center'}}>
							You don't have products in your cart
						</h3>
					</div>
				)}
			</div>

			{placeOrder ? (
				<form id={FORM_ID} onSubmit={handleOrderSubmit}>
					<button type='submit' className='btn_buy'>
						Place Order
					</button>
					<button type='submit'></button>
				</form>
			) : cartProduct.lenght < 1 || !cartProduct.length ? (
				<button className='btn_buy' onClick={handleError}>
					Checkout
				</button>
			) : userId ? (
				<Link to='/shipping'>
					<button className='btn_buy'>Checkout</button>
				</Link>
			) : (
				<Link to='/login' onClick={handleErrorLogin}>
					<button className='btn_buy'>Checkout</button>
				</Link>
			)}
		</div>
	);
};

export default SumarryCart;
