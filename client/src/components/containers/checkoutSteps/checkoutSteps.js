/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import CheckoutSteps_Style from './styled';
import {RiCheckboxBlankCircleLine} from 'react-icons/ri';
import {RiCheckboxCircleFill} from 'react-icons/ri';

const CheckoutSteps = ({step1, step2, step3, step4}) => {
	return (
		<CheckoutSteps_Style>
			<div className='steps__row checkout__steps'>
				<div className={step1 ? 'checked' : 'unchecked'}>
					<div className='step'>
						{step1 ? (
							<i>
								<RiCheckboxCircleFill />
							</i>
						) : (
							<i>
								<RiCheckboxBlankCircleLine />
							</i>
						)}
						<span>Shopping</span>
					</div>
				</div>

				<div className={step2 ? 'checked' : 'unchecked'}>
					<div className='step'>
						{step2 ? (
							<i>
								<RiCheckboxCircleFill />
							</i>
						) : (
							<i>
								<RiCheckboxBlankCircleLine />
							</i>
						)}
						<span>Shipping</span>
					</div>
				</div>

				<div className={step4 ? 'checked' : 'unchecked'}>
					<div className='step'>
						{step2 ? (
							<i>
								<RiCheckboxCircleFill />
							</i>
						) : (
							<i>
								<RiCheckboxBlankCircleLine />
							</i>
						)}
						<span>Confirmation</span>
					</div>
				</div>
			</div>
		</CheckoutSteps_Style>
	);
};

export default CheckoutSteps;
