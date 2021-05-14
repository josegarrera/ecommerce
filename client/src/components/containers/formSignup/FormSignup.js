/* eslint-disable react/jsx-pascal-case */
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Signup_Style from './styled';
import {Link} from 'react-router-dom';

import {AiFillLock} from 'react-icons/ai';
import {FaEnvelope} from 'react-icons/fa';
import {createUser} from '../../../redux/actions';

const FormSignup = () => {
	const dispatch = useDispatch();

	const [input, setInput] = useState({
		email: '',
		password: '',
	});

	const onSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(createUser(input));
		setInput({
			email: '',
			password: '',
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
