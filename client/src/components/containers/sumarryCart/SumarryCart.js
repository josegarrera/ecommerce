import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {confirmCheckout} from '../../../redux/actions';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import axios from 'axios';

const FORM_ID = 'payment-form';

const SumarryCart = ({
	payIn,
	count,
	placeOrder,
	paymentMethod,
	cartProduct,
}) => {
	const preferenceId = useSelector((state) => state.paymentMethod);
	const shippingInfo = useSelector((state) => state.shippingInfo);
	const dispatch = useDispatch();
	const userId = localStorage.userId;
	const stripe = useStripe();
	const elements = useElements();

	const handleOrderSubmit = async (e) => {
		e.preventDefault();
		let idStripe;
		if (paymentMethod === 'stripe') {
			const cardElement = elements.getElement(CardElement);
			const {error, paymentMethod} = await stripe.createPaymentMethod({
				type: 'card',
				card: cardElement,
			});
			if (paymentMethod) idStripe = paymentMethod.id;
		}
		userId &&
			dispatch(
				confirmCheckout({userId, shippingInfo, paymentMethod, idStripe})
			);
	};

	useEffect(() => {
		if (
			preferenceId &&
			preferenceId !== 'completed' &&
			preferenceId !== 'canceled'
		) {
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
				form && form.removeChild(script);
			};
		}
	}, [preferenceId]);

	return (
		<div>
			<div className='summary'>
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
			</div>

			{placeOrder ? (
				<form id={FORM_ID} onSubmit={handleOrderSubmit}>
					{paymentMethod === 'stripe' && cartProduct.length ? (
						<div>
							<CardElement
								options={{
									id: 'card_stripe',
									style: {
										base: {
											fontSize: '1.5rem',
											color: '#616161',
											'::placeholder': {
												color: '#757575',
											},
										},
										invalid: {
											color: '#ee362e',
										},
									},
								}}
							/>
						</div>
					) : (
						<></>
					)}
					<button type='submit' className='btn_buy'>
						Place Order
					</button>
				</form>
			) : (
				<Link to='/shipping'>
					<button className='btn_buy'>Checkout</button>
				</Link>
			)}
		</div>
	);
};

export default SumarryCart;
