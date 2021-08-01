/* eslint-disable react/jsx-pascal-case */
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import GoogleLogin from 'react-google-login';
import {FcGoogle} from 'react-icons/fc';
import Login_Style from './styled';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import {URLS} from '../../../utils/constants';
import {AiFillLock} from 'react-icons/ai';
import {FaEnvelope} from 'react-icons/fa';
import {IoCloseSharp} from 'react-icons/io5';
import Swal from 'sweetalert2';
import {loginUser} from '../../../redux/actions';

const FormLogging = () => {
	const dispatch = useDispatch();
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

					window.localStorage.setItem('token', data.token);
					window.localStorage.setItem(
						'address',
						JSON.stringify(data.user.address)
					);
					window.localStorage.setItem('email', data.user.email);
					window.localStorage.setItem('firstName', data.user.firstName);
					window.localStorage.setItem(
						'identification',
						data.user.identification
					);
					window.localStorage.setItem('lastName', data.user.lastName);
					window.localStorage.setItem('profileImage', data.user.profileImage);
					window.localStorage.setItem('userId', data.user._id);
					window.localStorage.setItem('role', data.user.role);
					dispatch(loginUser({role: data.user.role}));

					if (data.user.role === 'admin') {
						history.push('/admindashboard');
					} else {
						Swal.fire({
							title: 'Success!',
							text: 'Succesfully login',
							icon: 'success',
							confirmButtonText: 'Ok',
						}).then(() => history.push('/catalogue'));
					}
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

	const responseGoogle = async (response) => {
		let inputGoogle = {
			firstName: response.profileObj.givenName,
			lastName: response.profileObj.familyName,
			profileImage: response.profileObj.imageUrl,
			email: response.profileObj.email,
			password: response.profileObj.googleId,
		};

		let users = await axios.get(URLS.URL_USERS);

		if (users.data.response.find((el) => el.email === inputGoogle.email)) {
			try {
				let userLogIn = await axios.post(URLS.URL_LOGIN, inputGoogle);

				window.localStorage.setItem('token', userLogIn.data.token);
				window.localStorage.setItem(
					'address',
					JSON.stringify(userLogIn.data.user.address)
				);
				window.localStorage.setItem('email', userLogIn.data.user.email);
				window.localStorage.setItem('firstName', userLogIn.data.user.firstName);
				window.localStorage.setItem(
					'identification',
					userLogIn.data.user.identification
				);
				window.localStorage.setItem('lastName', userLogIn.data.user.lastName);
				window.localStorage.setItem(
					'profileImage',
					userLogIn.data.user.imageUrl
				);
				window.localStorage.setItem('userId', userLogIn.data.user._id);
				window.localStorage.setItem('role', userLogIn.data.user.role);

				dispatch(loginUser({role: userLogIn.data.user.role}));
				if (userLogIn.data.user.role === 'admin') {
					history.push('/admindashboard');
				} else {
					history.push('/catalogue');
				}
			} catch (error) {
				console.log(error.response);
				return error.response;
			}
		} else {
			try {
				await axios.post(URLS.URL_SIGNUP, inputGoogle);
				let userLogIn = await axios.post(URLS.URL_LOGIN, inputGoogle);

				window.localStorage.setItem('token', userLogIn.data.token);
				window.localStorage.setItem(
					'address',
					JSON.stringify(userLogIn.data.user.address)
				);
				window.localStorage.setItem('email', userLogIn.data.user.email);
				window.localStorage.setItem('firstName', userLogIn.data.user.firstName);
				window.localStorage.setItem(
					'identification',
					userLogIn.data.user.identification
				);
				window.localStorage.setItem('lastName', userLogIn.data.user.lastName);
				window.localStorage.setItem(
					'profileImage',
					userLogIn.data.user.imageUrl
				);
				window.localStorage.setItem('userId', userLogIn.data.user._id);
				window.localStorage.setItem('role', userLogIn.data.user.role);

				dispatch(loginUser({role: userLogIn.data.user.role}));

				if (userLogIn.data.user.role === 'admin') {
					history.push('/admindashboard');
				} else {
					history.push('/catalogue');
				}
			} catch (error) {
				console.log(error.response);
				return error.response;
			}
		}
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
							<Link to='/resetPassword'>
								<span className='forgotSpan'> Forgot password?</span>
							</Link>
							<button type='submit' className='signInBtnBottom'>
								<div>SIGN IN</div>
							</button>
						</form>
						<div className='separadorDiv'>
							<div className='separador'></div>
						</div>
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
							<p className='signUpBottom'> Don't have an account? </p>
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
