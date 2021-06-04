import React, {useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import CreateStyle from './styled';
import userValidate from '../../../utils/userValidate';
import brandValidate from '../../../utils/brandValidate';
import categoryValidate from '../../../utils/categoryValidate';
import axios from 'axios';
import {URLS} from '../../../utils/constants';

const Create = ({options, setCreate, create, Items, allProducts}) => {
	const [inputCategory, setInputCategory] = useState({
		name: '',
		periferic: false,
		specs: [],
		variants: ['color', 'stock', 'imageUrl', 'imageFile'],
		products: [],
	});

	const [variant, setVariant] = useState('');

	const [inputUser, setInputUser] = useState({
		email: '',
		password: '',
		role: '',
	});

	const [inputBrand, setInputBrand] = useState({
		name: '',
	});

	const [errorCategory, setErrorCategory] = useState({});
	const [errorUser, setErrorUser] = useState({});
	const [errorBrand, setErrorBrand] = useState({});

	const handleClick = () => {
		setCreate(!create);
	};

	const handleOnChangeCategory = (e) => {
		setInputCategory({
			...inputCategory,
			[e.target.name]: e.target.value,
		});
		setErrorCategory(
			categoryValidate(
				{
					...inputCategory,
					[e.target.name]: e.target.value,
				},
				Items
			)
		);
		if (inputCategory.periferic === 'true')
			return setInputCategory({
				...inputCategory,
				periferic: true,
			});
		if (inputCategory.periferic === 'false')
			return setInputCategory({
				...inputCategory,
				periferic: false,
			});
	};

	const handleOnChangeVariant = (e) => {
		setVariant(e.target.value);
	};

	const handleOnClickVariant = (e) => {
		if (inputCategory.variants.includes(variant))
			return window.alert('This variant already exists');
		setInputCategory({
			...inputCategory,
			variants: [...inputCategory.variants, variant],
		});
		setVariant('');
	};

	const handleOnClickDeleteVariant = (e) => {
		const value = e.target.value;
		if (value === 'stock' || value === 'imageUrl' || value === 'imageFile')
			return window.alert("Can't remove this variant");
		const index = inputCategory.variants.indexOf(value);
		setInputCategory({
			...inputCategory,
			variants: inputCategory.variants
				.slice(0, index)
				.concat(inputCategory.variants.slice(index + 1)),
		});
	};

	const handleOnChangeUser = (e) => {
		setInputUser({
			...inputUser,
			[e.target.name]: e.target.value,
		});
		setErrorUser(
			userValidate(
				{
					...inputUser,
					[e.target.name]: e.target.value,
				},
				Items
			)
		);
	};

	const handleOnChangeBrand = (e) => {
		setInputBrand({
			...inputBrand,
			[e.target.name]: e.target.value,
		});
		setErrorBrand(
			brandValidate(
				{
					...inputBrand,
					[e.target.name]: e.target.value,
				},
				Items
			)
		);
	};

	const handleCategorySave = async (e) => {
		try {
			const resp = await axios.post(URLS.URL_CATEGORIES, inputCategory);
			if (resp.data.message === 'Success') {
				window.alert('New category successfully created');
			}
		} catch (error) {
			window.alert(error);
		}
		setInputCategory({
			name: '',
			periferic: false,
			specs: [],
			variants: ['color', 'stock', 'imageUrl', 'imageFile'],
			products: [],
		});
		allProducts();
	};

	const handleUserSave = async (e) => {
		try {
			const resp = await axios.post(URLS.URL_SIGNUP, inputUser);
			if (resp.data.message === 'Signup successfull!') {
				const id = resp.data.user._id;
				await axios.put(`${URLS.URL_USERS}/${id}`, inputUser);
				window.alert('New user successfully created');
			}
		} catch (error) {
			window.alert(error);
		}
		setInputUser({
			email: '',
			password: '',
			role: '',
		});
		allProducts();
	};

	const handleBrandSave = async (e) => {
		try {
			const resp = await axios.post(URLS.URL_BRANDS, inputBrand);
			if (resp.data.message === 'Signup successfull!') {
				window.alert('New brand successfully created');
			}
		} catch (error) {
			window.alert(error);
		}
		setInputUser({
			name: '',
		});
		allProducts();
	};

	return (
		<CreateStyle>
			{options === 'Categories' ? (
				<div className='container'>
					<div className='createTitle'>Create categorie:</div>
					<div className='close-container'>
						<AiOutlineClose className='close' onClick={handleClick} />
					</div>
					<div className='column'>
						<div className='row'>
							<div className='title'> • Name: &nbsp;</div>
							<input
								name='name'
								value={inputCategory.name}
								className='title2'
								onChange={handleOnChangeCategory}
							></input>
							{errorCategory.name && (
								<p className='danger'>{errorCategory.name}</p>
							)}
						</div>
						<div className='row'>
							<div onChange={handleOnChangeCategory} className='title'>
								• Is it a peripheral?: &nbsp;
								<input
									className='radio-button'
									type='radio'
									value={true}
									name='periferic'
								/>{' '}
								<div className='option'> Yes</div>
								<input
									className='radio-button'
									type='radio'
									value={false}
									name='periferic'
								/>{' '}
								<div className='option'> No</div>
							</div>
							{errorCategory.periferic && (
								<p className='danger'>{errorCategory.periferic}</p>
							)}
						</div>
						<div className='row'>
							<div className='title'>• Variants: &nbsp;</div>
							<input
								name='variant'
								value={variant}
								className='title2'
								onChange={handleOnChangeVariant}
							></input>
							<button onClick={handleOnClickVariant}>Add variant</button>
							{errorCategory.variants && (
								<p className='danger'>{errorCategory.variants}</p>
							)}
						</div>
						{inputCategory.variants &&
							inputCategory.variants.map((variant) => (
								<div className='variants-container'>
									<span className='variants'>{variant}</span>
									<button
										value={variant}
										onClick={handleOnClickDeleteVariant}
										className='close-button'
									>
										x
									</button>
								</div>
							))}
					</div>
					<div className='column'>
						<div className='button-container'>
							<button
								onClick={handleCategorySave}
								className='button'
								disabled={Object.keys(errorCategory).length > 0}
							>
								Save
							</button>
						</div>
					</div>
				</div>
			) : null}
			{options === 'Users' ? (
				<div className='container'>
					<div className='createTitle'>Create user:</div>
					<div className='close-container'>
						<AiOutlineClose className='close' onClick={handleClick} />
					</div>
					<div className='column'>
						<div className='row'>
							<div className='title'>• Email: &nbsp;</div>
							<input
								name='email'
								value={inputUser.email}
								className='title2'
								onChange={handleOnChangeUser}
							></input>
							{errorUser.email && <p className='danger'>{errorUser.email}</p>}
						</div>
						<div className='row'>
							<div className='title'>• Password: &nbsp;</div>
							<input
								name='password'
								type='password'
								value={inputUser.password}
								className='title2'
								onChange={handleOnChangeUser}
							></input>
							{errorUser.password && (
								<p className='danger'>{errorUser.password}</p>
							)}
						</div>
						<div className='row'>
							<div onChange={handleOnChangeUser} className='title'>
								• Role: &nbsp;
								<input
									className='radio-button'
									type='radio'
									value='client'
									name='role'
								/>{' '}
								<div className='option'> Client</div>
								<input
									className='radio-button'
									type='radio'
									value='admin'
									name='role'
								/>{' '}
								<div className='option'> Admin</div>
							</div>
							{errorUser.role && <p className='danger'>{errorUser.role}</p>}
						</div>
					</div>
					<div className='column'>
						<div className='button-container'>
							<button
								onClick={handleUserSave}
								className='button'
								disabled={Object.keys(errorUser).length > 0}
							>
								Save
							</button>
						</div>
					</div>
				</div>
			) : null}
			{options === 'Brands' ? (
				<div className='container'>
					<div className='createTitle'>Create brand:</div>
					<div className='close-container'>
						<AiOutlineClose className='close' onClick={handleClick} />
					</div>
					<div className='column'>
						<div className='row'>
							<div className='title'>• Name: &nbsp;</div>
							<input
								name='name'
								value={inputBrand.name}
								className='title2'
								onChange={handleOnChangeBrand}
							></input>
							{errorBrand.name && <p className='danger'>{errorBrand.name}</p>}
						</div>
					</div>
					<div className='column'>
						<div className='button-container'>
							<button
								onClick={handleBrandSave}
								className='button'
								disabled={Object.keys(errorBrand).length > 0}
							>
								Save
							</button>
						</div>
					</div>
				</div>
			) : null}
		</CreateStyle>
	);
};

export default Create;
