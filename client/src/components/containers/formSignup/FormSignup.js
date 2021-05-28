/* eslint-disable react/jsx-pascal-case */
import React, {useState, useEffect} from 'react';
import GoogleLogin from 'react-google-login';
import Signup_Style from './styled';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import {URLS} from '../../../utils/constants';
import {FcGoogle} from 'react-icons/fc';
import {AiFillLock} from 'react-icons/ai';
import {FaEnvelope} from 'react-icons/fa';
import {IoCloseSharp} from 'react-icons/io5';
import Swal from 'sweetalert2';

const FormSignup = () => {
	let history = useHistory();
	const [input, setInput] = useState({
		email: '',
		passwordStore: '',
		passwordGoogle: '',
	});

	const [errors, setErrors] = useState({});

	useEffect(() => {
		setErrors({});
	}, [input]);

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		axios
			.post(URLS.URL_SIGNUP, input) // {email: "perro@gmail.com", password: "1234"}
			.then(function (response) {
				let data = response.data;
				if (data.user === true) {
					setErrors({
						message: data.message,
					});
				} else {
					setInput({
						email: '',
						passwordStore: '',
						passwordGoogle: '',
					});
					Swal.fire({
						title: 'Success!',
						text: 'Succesfully registered',
						icon: 'success',
						confirmButtonText: 'Ok',
					}).then(() => {
						history.push('/login');
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

	const responseGoogle = (response) => {
		setInput({
			email: response.profileObj.email,
			passwordStore: '',
			passwordGoogle: response.profileObj.googleId,
		});
		axios
			.post(URLS.URL_SIGNUP, input)
			.then(function (response) {
				let data = response.data;
				if (data.user === true) {
					setErrors({
						message: data.message,
					});
				} else {
					setInput({
						email: '',
						password: '',
					});
					Swal.fire({
						title: 'Success!',
						text: 'Succesfully registered',
						icon: 'success',
						confirmButtonText: 'Ok',
					}).then(() => {
						history.push('/login');
					});
				}
			})
			.catch(function (error) {
				console.log(error);
			});

		console.log(response);
	};

	return (
		<Signup_Style>
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
							<div>{errors ? errors.message : null}</div>
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
							<button type='submit' className='signUpBtnBottom'>
								<div>SIGN UP</div>
							</button>
						</form>
						<div className='separador'></div>
						<div className='googleDiv'>
							<GoogleLogin
								clientId='5491811175-59r3kvkuqolj3301kabjf1om68a2jcke.apps.googleusercontent.com'
								render={(renderProps) => (
									<button
										className='googleButton'
										onClick={renderProps.onClick}
										disabled={renderProps.disabled}
									>
										<FcGoogle className='googleLogo' />
										&nbsp; &nbsp; Sign up with Google.
									</button>
								)}
								buttonText='Login'
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy={'single_host_origin'}
							/>
						</div>
						<div className='rowBottom'>
							<p className='signUpBottom'> Already registered? </p>
							<Link to='/login'>
								<span className='signUpSpan'> Sign in </span>
							</Link>
						</div>
					</div>
					<div className='loginPicture'></div>
				</div>
			</div>
		</Signup_Style>
	);
};

export default FormSignup;
