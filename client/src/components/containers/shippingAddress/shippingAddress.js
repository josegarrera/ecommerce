/* eslint-disable react/jsx-pascal-case */
import React, {useState} from 'react';
import ShippingAddress_Style from './styled';
import CheckoutSteps from '../checkoutSteps/checkoutSteps';
import {Link, useHistory} from 'react-router-dom';
import {saveShippingInfo} from '../../../redux/actions';
import {useDispatch} from 'react-redux';

function Index() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [shippingInfo, setShippingInfo] = useState({
		firstName: '',
		lastName: '',
		zip_code: '',
		street_name: '',
		street_number: '',
		id: '',
	});

	const onSubmitHandler = (e) => {
		e.preventDefault();

		dispatch(saveShippingInfo(shippingInfo));
		history.push('/confirmation');
	};

	const onChangeHandler = (e) => {
		setShippingInfo({
			...shippingInfo,
			[e.target.name]: e.target.value,
		});
	};

	// shippingInfo && console.log(shippingInfo);

	return (
		<ShippingAddress_Style>
			<div>
				<CheckoutSteps step1 step2></CheckoutSteps>

				<div className='row__top'>
					<h1 className='form__title'>Shipping Address</h1>
				</div>

				<form type='submit' className='product__form'>
					<div className='form__wrapper'>
						<div className='form__column'>
							<div className='form__element'>
								<label className='form__label'>First Name</label>
								<input
									className='form__input'
									type='text'
									id='firstName'
									value={shippingInfo.firstName}
									name='firstName'
									onChange={(e) => onChangeHandler(e)}
								></input>
							</div>

							<div className='form__element'>
								<label className='form__label'>Last Name</label>
								<input
									className='form__input'
									type='text'
									id='lastName'
									value={shippingInfo.lastName}
									name='lastName'
									onChange={(e) => onChangeHandler(e)}
								></input>
							</div>

							<div className='form__element'>
								<label className='form__label'>Zip Code</label>
								<input
									className='form__input'
									type='number'
									id='zipCode'
									value={shippingInfo.zip_code}
									name='zip_code'
									onChange={(e) => onChangeHandler(e)}
								></input>
							</div>

							<div className='form__element'>
								<label className='form__label'>Street Name</label>
								<input
									className='form__input'
									id='street_name'
									type='text'
									value={shippingInfo.street_name}
									name='street_name'
									onChange={(e) => onChangeHandler(e)}
								></input>
							</div>

							<div className='form__element'>
								<label className='form__label'>Street Number</label>
								<input
									className='form__input'
									id='street_number'
									type='number'
									value={shippingInfo.street_number}
									name='street_number'
									onChange={(e) => onChangeHandler(e)}
								></input>
							</div>

							<div className='form__element'>
								<label className='form__label'>ID</label>
								<input
									className='form__input'
									id='id'
									type='number'
									value={shippingInfo.id}
									name='id'
									onChange={(e) => onChangeHandler(e)}
								></input>
							</div>

							<div className='row__bot'>
								<Link to='/cart'>
									<button className='form__button'>Back</button>
								</Link>
								<Link to='/confirmation'>
									<button
										onClick={(e) => onSubmitHandler(e)}
										className='form__button'
									>
										Continue
									</button>
								</Link>
							</div>
						</div>
					</div>
				</form>
			</div>
		</ShippingAddress_Style>
	);
}

export default Index;
