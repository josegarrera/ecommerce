/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */
import React, {useState} from 'react';

import {useSelector} from 'react-redux';
import PaymentInformation_Style from './styled';
import CheckoutSteps from '../checkoutSteps/checkoutSteps';
import SumaryCart from '../sumarryCart/SumarryCart';
import {Link} from 'react-router-dom';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {MdPayment} from 'react-icons/md';
import {FaCcStripe} from 'react-icons/fa';
import {ImCheckboxChecked} from 'react-icons/im';
import {FiBox} from 'react-icons/fi';

function Index() {
	const cartProduct = useSelector((state) => state.cartProducts);
	const shippingInfo = useSelector((state) => state.shippingInfo);
	const [payment, setPayment] = useState({paymentMethod: ''});
	const amount =
		cartProduct &&
		cartProduct.reduce((a, b) => {
			return (a += b.product.price.value * b.lot);
		}, 0);

	const onClickHandler = (e) => {
		setPayment({paymentMethod: e});
	};

	return (
		<PaymentInformation_Style>
			<CheckoutSteps step1 step2 step3 step4></CheckoutSteps>

			<div className='confirmation'>
				<div className='main'>
					<div className='left__col'>
						<div className='section'>
							<div className='row__top'>
								<h1 className='form__title'>Shipping Address</h1>
							</div>

							<div className='shipping__content'>
								<div>
									<i className='location__icon '>
										<HiOutlineLocationMarker />
									</i>
								</div>
								{shippingInfo && (
									<div className='shipping__info'>
										<span className='shipping__name'></span>
										{shippingInfo.firstName} {shippingInfo.lastName}
										<span className='shipping__number'>
											{shippingInfo.zip_code}
										</span>
										<span className='shipping__Address'>
											{shippingInfo.street_number} {shippingInfo.street_name}
										</span>
									</div>
								)}
							</div>
						</div>

						<div className='section'>
							<div className='row__top'>
								<h1 className='form__title'>Payment</h1>
							</div>

							<div className='payment__content'>
								<i className='payment__icon '>
									<MdPayment />
								</i>

								<div className='payment__options'>
									{/* Option 1 */}
									<div
										className={
											payment
												? payment.paymentMethod === 'stripe'
													? 'active'
													: 'payment__option'
												: ''
										}
										name='stripe'
										onClick={() => onClickHandler('stripe')}
									>
										<div className='payment__option__left'>
											<i>
												<FaCcStripe />
											</i>
											<span className='payment__method'>Stripe</span>
										</div>
										<div className='payment__option__right'>
											<i className='payment__selected'>
												<ImCheckboxChecked />
											</i>
										</div>
									</div>

									{/* Option 2 */}
									<div
										className={
											payment
												? payment.paymentMethod === 'mercadopago'
													? 'active'
													: 'payment__option'
												: ''
										}
										name='stripe'
										onClick={() => onClickHandler('mercadopago')}
									>
										<div className='payment__option__left'>
											<i>
												<FaCcStripe />
											</i>
											<span className='payment__method '>Mercadopago</span>
										</div>
										<div className='payment__option__right'>
											<i className='payment__selected'>
												<ImCheckboxChecked />
											</i>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Order Items */}

						<div className='section'>
							<div className='row__top'>
								<h1 className='form__title'>Order Items</h1>
							</div>

							<div className='payment__content'>
								<i className='payment__icon '>
									<FiBox />
								</i>

								<div className='order__items'>
									{cartProduct &&
										cartProduct.map((el, i) => (
											<div className='product' key={i + el + 'div1'}>
												<div className='product__left' key={i + el + 'div2'}>
													<div className='product__img' key={i + el + 'div3'}>
														<img
															className='img'
															src={el.product.imageUrl[0]}
															alt='product'
															key={i + el + 'img'}
														></img>
													</div>
												</div>
												<div className='product__info' key={i + el + 'div4'}>
													<span
														className='product__name'
														key={i + el + 'span1'}
													>
														<h2>{el.product.name}</h2>
													</span>
													<span
														className='product__model'
														key={i + el + 'span2'}
													>
														{el.product.brands}
													</span>
													<span
														className='product__price'
														key={i + el + 'span3'}
													>
														{el.product.price.currency}
														&nbsp;
														{el.product.price.value}
													</span>
												</div>

												<div className='product__right' key={i + el + 'div5'}>
													x {el.lot}
												</div>
											</div>
										))}
								</div>
							</div>
						</div>
					</div>

					<div className='right__col'>
						<SumaryCart
							placeOrder={true}
							paymentMethod={payment.paymentMethod}
							count={amount}
						></SumaryCart>
					</div>
				</div>

				<div className='row__bot'>
					<Link to='/shipping'>
						<button className='form__button'>Back</button>
					</Link>
				</div>
			</div>
		</PaymentInformation_Style>
	);
}

export default Index;
