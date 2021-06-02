import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import strings from './strings';
import Reset_Style from '../styled';
import {IoCloseSharp} from 'react-icons/io5';
import {AiFillLock} from 'react-icons/ai';

const ResetSteps = ({handleSubmit, step, languaje, loading, buttonRef}) => {
	const [input, setInput] = useState('');
	const [error, setError] = useState([]);
	const s = strings['en'];

	const handleInputChange = (ev) => {
		let inp = ev.target.value;
		setInput(inp);
	};

	const formSubmit = (ev) => {
		ev.preventDefault();
		error.length === 0 && handleSubmit(input, step);
		setInput('');
	};

	const handleInputType = () => {
		switch (step) {
			case 1:
				return 'email';
			case 2:
				return 'number';
			case 3:
				return 'password';
			default:
				return '';
		}
	};

	return (
		<Reset_Style>
			<div className='resetContainer'>
				<div className='loginWrapper'>
					<div className='loginForm'>
						<Link to='/login'>
							<div className='close__icon'>
								<IoCloseSharp />
							</div>
						</Link>
						{/* <div className='rowTop'>
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
						</div> */}
						<form onSubmit={formSubmit} className='loginForm'>
							<div className='inputElement'>
								<span className='emailSpan'>{s.label[step]}</span>
								<i className='lockIcon'>
									<AiFillLock />
								</i>
								<input
									className='emailInput'
									type={handleInputType()}
									value={input}
									placeholder={`enter ${s.label[step]}`}
									onChange={(e) => handleInputChange(e)}
								/>
							</div>
							<p>{s.description[step]}</p>
							<button ref={buttonRef} type='submit' className='signUpBtnBottom'>
								{loading ? null : s.button[step]}
							</button>
						</form>
					</div>
				</div>
			</div>
		</Reset_Style>
	);
};

export default ResetSteps;
