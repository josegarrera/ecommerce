import React, {useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import CreateStyle from './styled';
import userValidate from '../../../utils/userValidate';
import axios from 'axios';
import {URLS} from '../../../utils/constants';

const Create = ({options, setCreate, create, Items, allProducts}) => {
	const [inputUser, setInputUser] = useState({
		email: '',
		password: '',
		role: '',
	});

	const [errorUser, setErrorUser] = useState({});

	const handleClick = () => {
		setCreate(!create);
	};

	const handleOnChange = (e) => {
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

	const handleUserSave = (e) => {
		axios
			.post(URLS.URL_SIGNUP, inputUser)
			.then((resp) => resp.data)
			.then((data) => {
				if (data.message === 'Signup successfull!') {
					window.alert('New user successfully created');
				}
			})
			.catch((err) => window.alert(err));
		setInputUser({
			email: '',
			password: '',
			role: '',
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
								onChange={handleOnChange}
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
								onChange={handleOnChange}
							></input>
							{errorUser.password && (
								<p className='danger'>{errorUser.password}</p>
							)}
						</div>
						<div className='row'>
							<div onChange={handleOnChange} className='title'>
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
					<AiOutlineClose className='close' onClick={handleClick} />
					<div className='column'>
						<div className='row'>
							<div className='title'>Name: &nbsp;</div>
							<input className='title2'></input>
						</div>
					</div>
					<div className='column'>
						<button className='button'>Save</button>
					</div>
				</div>
			) : null}
		</CreateStyle>
	);
};

export default Create;
