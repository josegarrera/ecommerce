import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBrands, addBrand, updateBrand} from '../../../redux/actions';
import FormBrandStyle from './styled';

const FormBrands = () => {
	const dispatch = useDispatch();
	const brands = useSelector((state) => state.brands);

	const [brand, setBrand] = useState({
		name: '',
	});
	const [updBrand, setUpdBrand] = useState({
		_id: 0,
		name: '',
	});

	useEffect(() => {
		dispatch(getBrands());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	/* useEffect(() => {
		if (updatedBrand.hasOwnProperty('name')) {
			Swal.fire({
				title: 'Success!',
				text: 'Product succesfully created',
				icon: 'success',
				confirmButtonText: 'Ok',
			});
		} else if (!updatedBrand.hasOwnProperty('name')) {
			Swal.fire({
				title: 'Error',
				text: updatedBrand.error,
				icon: 'error',
				confirmButtonText: 'Ok',
			});
		}
	}, [updatedBrand]); */

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
		dispatch(getBrands());
	};

	const ChangeInput2 = (e) => {
		setUpdBrand({
			...updBrand,
			[e.target.name]: e.target.value,
		});
	};
	const handleSelect = (e) => {
		setUpdBrand({
			...updBrand,
			_id: e.target.value,
		});
	};
	const handleBrand = (e) => {
		e.preventDefault();
		dispatch(updateBrand(updBrand));
		dispatch(getBrands());
	};

	return (
		<FormBrandStyle>
			<h1 className='form__title'>Brands</h1>

			<div className='form__element'>
				<label className='form__label'>Add Brand</label>
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

			<div className='form__element'>
				<label className='form__label'>Update Brand</label>
				<select onChange={(e) => handleSelect(e)}>
					<option default>Select one brand</option>
					{brands.map((B) => (
						<option value={B._id} name='_id'>
							{B.name}
						</option>
					))}
				</select>
				<input
					className='form__input'
					type='text'
					name='name'
					value={updBrand.name}
					onChange={(e) => ChangeInput2(e)}
				></input>
			</div>
			<div className='form_button'>
				<button className='button' onClick={(e) => handleBrand(e)}>
					Update
				</button>
			</div>
		</FormBrandStyle>
	);
};

export default FormBrands;
