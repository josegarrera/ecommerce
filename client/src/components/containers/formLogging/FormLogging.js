/* eslint-disable react/jsx-pascal-case */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Login_Style from './styled';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import {URLS} from '../../../utils/constants';

import {AiFillLock} from 'react-icons/ai';
import {FaEnvelope} from 'react-icons/fa';
import {IoCloseSharp} from 'react-icons/io5';
import Swal from 'sweetalert2';

const FormLogging = () => {
	let history = useHistory();
	const [input, setInput] = useState({
		email: '',
		password: '',
	});

	useEffect(() => {
		setErrors({});
	}, [input]);

	const [errors, setErrors] = useState({});

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		axios
			.post(URLS.URL_LOGIN, input)
			.then(function (response) {
				let data = response.data;
				if (data.notLogin) {
					const message = data.notLogin;
					if (message && message.includes('User')) {
						setErrors({
							email: message,
						});
					} else {
						setErrors({
							password: message,
						});
					}
				} else {
					setInput({
						email: '',
						password: '',
					});
					Swal.fire({
						title: 'Success!',
						text: 'Succesfully login',
						icon: 'success',
						confirmButtonText: 'Ok',
					}).then(() => {
						history.push('/');
					});
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const onChangeHandler = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Login_Style>
			<div className='loginContainer'>
				<div className='loginWrapper'>
					<div className='loginContent'>
						<Link to='/'>
							<div className='close__icon'>
								<IoCloseSharp />
							</div>
						</Link>
						<div className='rowTop'>
							<Link to='/login'>
								<button className='signInBtnTop'>
									<div>Sign in</div>
								</button>
							</Link>
							<Link to='/signup'>
								<button className='signUpBtn'>
									<div>Sign up</div>
								</button>
							</Link>
						</div>
						<form onSubmit={(e) => onSubmitHandler(e)} className='loginForm'>
							<div className='inputElement'>
								<span className='emailSpan'>Email Address</span>
								<i className='lockIcon'>
									<AiFillLock />
								</i>
								<input
									className='emailInput'
									type='text'
									name='email'
									value={input.email}
									placeholder='Enter email'
									onChange={(e) => onChangeHandler(e)}
								></input>
							</div>
							<div>{errors.email ? errors.email : null}</div>

							<div className='inputElement'>
								<span className='passwordSpan'>Password</span>
								<i className='lockIcon'>
									<FaEnvelope />
								</i>
								<input
									className='passwordInput'
									type='password'
									name='password'
									value={input.password}
									placeholder='Enter password'
									onChange={(e) => onChangeHandler(e)}
								></input>
							</div>
							<div>{errors.password ? errors.password : null}</div>
							<span className='forgotSpan'> forgot password?</span>
							<button type='submit' className='signInBtnBottom'>
								<div>SIGN IN</div>
							</button>
						</form>

						<div className='rowBottom'>
							<p className='signUpBottom'> don't have an account? </p>
							<Link to='/signup'>
								<span className='signUpSpan'> Sign up </span>
							</Link>
						</div>
					</div>
					<div className='loginPicture'></div>
				</div>
			</div>
		</Login_Style>
	);
};

export default FormLogging;
