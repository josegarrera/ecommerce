import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBrands, addBrand} from '../../../redux/actions';
import FormBrandStyle from './styled';

const FormBrands = () => {
	const dispatch = useDispatch();
	const brands = useSelector((state) => state.brands);

	const [brand, setBrand] = useState({
		name: '',
	});

	useEffect(() => {
		dispatch(getBrands());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const ChangeInput = (e) => {
		setBrand({
			...brand,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addBrand(brand));
		setBrand({name: ''});
	};

	return (
		<FormBrandStyle>
			<h1 className='form__title'>Add Brands</h1>

			<div className='form__element'>
				<label className='form__label'>Brand</label>
				<input
					className='form__input'
					type='text'
					id='name'
					name='name'
					value={brand.name}
					onChange={(e) => ChangeInput(e)}
				></input>
			</div>

			<div className='form_button'>
				<button className='button' onClick={(e) => handleSubmit(e)}>
					Add brand
				</button>
			</div>
		</FormBrandStyle>
	);
};

export default FormBrands;
