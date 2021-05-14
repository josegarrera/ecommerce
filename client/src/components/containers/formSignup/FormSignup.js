/* eslint-disable react/jsx-pascal-case */
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Signup_Style from './styled';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import {URLS} from '../../../utils/constants';

import {AiFillLock} from 'react-icons/ai';
import {FaEnvelope} from 'react-icons/fa';
import {IoCloseSharp} from 'react-icons/io5';
import Swal from 'sweetalert2';

const FormSignup = () => {
	let history = useHistory();
	const [input, setInput] = useState({
		email: '',
		password: '',
	});

	const [errors, setErrors] = useState({});

	useEffect(() => {
		setErrors({});
	}, [input]);

	const onSubmitHandler = async (e) => {
		e.preventDefault();
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
