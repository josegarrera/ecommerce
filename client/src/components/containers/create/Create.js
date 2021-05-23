import React, {useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import CreateStyle from './styled';
import userValidate from '../../../utils/userValidate';
import brandValidate from '../../../utils/brandValidate';
import axios from 'axios';
import {URLS} from '../../../utils/constants';

const Create = ({options, setCreate, create, Items, allProducts}) => {
	const [inputUser, setInputUser] = useState({
		email: '',
		password: '',
		role: '',
	});

	const [inputBrand, setInputBrand] = useState({
		name: '',
	});

	const [errorUser, setErrorUser] = useState({});
	const [errorBrand, setErrorBrand] = useState({});

	const handleClick = () => {
		setCreate(!create);
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

	const handleUserSave = async (e) => {
		try {
			const resp = await axios.post(URLS.URL_SIGNUP, inputUser);
			if (resp.data.message === 'Signup successfull!') {
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
			{options === 'Users' ? (
				<div className='container'>
					<div className='close-container'>
						<AiOutlineClose className='close' onClick={handleClick} />
					</div>
					<div className='column'>
						<div className='row'>
							<div className='title'>Email: &nbsp;</div>
							<input
								name='email'
								value={inputUser.email}
								className='title2'
								onChange={handleOnChangeUser}
							></input>
							{errorUser.email && <p className='danger'>{errorUser.email}</p>}
						</div>
						<div className='row'>
							<div className='title'>Password: &nbsp;</div>
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
								Role: &nbsp;
								<input
									className='radio-button'
									type='radio'
									value='client'
									name='role'
								/>{' '}
								Client
								<input
									className='radio-button'
									type='radio'
									value='admin'
									name='role'
								/>{' '}
								Admin
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
					<div className='close-container'>
						<AiOutlineClose className='close' onClick={handleClick} />
					</div>
					<div className='column'>
						<div className='row'>
							<div className='title'>Brand Name: &nbsp;</div>
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
