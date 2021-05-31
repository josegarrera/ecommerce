import React, {useState} from 'react';
import FooterStyle from './styled.js';
import {IoLocationSharp} from 'react-icons/io5';
import {FaEnvelope} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa';
import {IoIosArrowUp} from 'react-icons/io';
import Swal from 'sweetalert2';
import axios from 'axios';
import {URLS} from '../../../utils/constants';

function Footer() {
	const [email, setEmail] = useState('');

	const onChangeHandler = (e) => {
		setEmail(e.target.value);
	};
	const onSubmitHandler = async (e) => {
		try {
			e.preventDefault();
			if (!email) {
				Swal.fire({
					title: 'something goes wrong',
					text: 'check if your email is correct',
					icon: 'error',
					confirmButtonText: 'Ok',
				});
			}
			let res = await axios.put(`${URLS.URL_NEWS_LETTER}/suscribe`, {email});
			if (res.data.error) {
				await Swal.fire({
					title: res.data.message,
					text: '',
					icon: 'error',
					confirmButtonText: 'Ok',
				});
			} else {
				await Swal.fire({
					title: 'OK',
					text: res.data.message,
					icon: 'success',
					confirmButtonText: 'Ok',
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<FooterStyle>
			<div className='footer'>
				<div className='footer___col'>
					<ul>
						<span className='title'>GIVE US A CALL</span>
						<li>
							<i>
								<IoLocationSharp />
							</i>
							<p className='col__1__items'>Buenos Aires, Argentina</p>
						</li>
						<li>
							<i>
								<FaEnvelope />
							</i>
							<p className='col__1__items'>support@henrystore.com</p>
						</li>
						<li>
							<i>
								<FaPhone />
							</i>
							<p className='col__1__items'>+54 011 9898</p>
						</li>
					</ul>
				</div>

				<div className='footer___col'>
					<ul>
						<span className='title'>PAGES</span>
						<li className='pages__items'>
							<p>Brands</p>
						</li>
						<li className='pages__items'>
							<p>Contact</p>
						</li>
						<li className='pages__items'>
							<p>About Us</p>
						</li>
					</ul>
				</div>

				<div className='footer___col'>
					<ul>
						<span className='title'>MY ACCOUNT</span>
						<li>
							<p>Buenos Aires, Argentina</p>
						</li>
						<li>
							<p>support@henrystore.com</p>
						</li>
						<li>
							<p>+54 011 9898</p>
						</li>
					</ul>
				</div>

				<div className='footer___col'>
					<ul>
						<span className='title'>NEWSLETTER</span>
						<li className='newsletter__input'>
							<input type='text' onChange={onChangeHandler} />
							<button
								id='newsletter'
								className='newsletter__button'
								onClick={onSubmitHandler}
							>
								Suscribe
							</button>
						</li>
					</ul>
				</div>

				<button>
					<i>
						<IoIosArrowUp></IoIosArrowUp>
					</i>
				</button>
			</div>
		</FooterStyle>
	);
}

export default Footer;
