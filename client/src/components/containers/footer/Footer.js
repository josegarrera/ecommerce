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
	const [suscribe, setsuscribe] = useState(true);
	const onChangeHandler = (e) => {
		setEmail(e.target.value);
	};
	const onChangeSuscribe = (e) => {
		setsuscribe(!suscribe);
	};
	const onSubmitHandler = async (e) => {
		try {
			e.preventDefault();
			let res;

			if (!email) {
				Swal.fire({
					title: 'something goes wrong',
					text: 'check if your email is correct',
					icon: 'error',
					confirmButtonText: 'Ok',
				});
			}
			if (e.target.value === 'suscribe') {
				res = await axios.put(`${URLS.URL_NEWS_LETTER}/suscribe`, {email});
			} else {
				res = await axios.put(`${URLS.URL_NEWS_LETTER}/unSuscribe`, {email});
			}
			if (res.data.error) {
				await Swal.fire({
					title: res.data.message,
					text: '',
					icon: 'error',
					confirmButtonText: 'Ok',
				});
			} else {
				await Swal.fire({
					title: res.data.message,
					text: '',
					icon: 'success',
					confirmButtonText: 'Ok',
				});
			}
			setEmail('');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<FooterStyle>
			<div className='footer___col grid_datos'>
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

			<div className='footer___col grid_pages'>
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

			<div className='footer___col grid_my_account'>
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

			<div className='footer___col grid_newsletter'>
				<ul>
					<span className='title'>NEWSLETTER</span>
					<li className='newsletter__input'>
						<input type='text' value={email} onChange={onChangeHandler} />
						<button
							id='newsletter'
							className='newsletter__button'
							value={suscribe ? 'suscribe' : 'unsuscribe'}
							onClick={onSubmitHandler}
						>
							{suscribe ? 'suscribe' : 'unsuscribe'}
						</button>
					</li>
					<li>
						<p>
							{suscribe ? 'Already suscribed?, ' : null}
							<span onClick={onChangeSuscribe}>
								{suscribe ? 'unsuscribe' : 'suscribe'}
							</span>
						</p>
					</li>
				</ul>
			</div>
			<button>
				<a href='#GO_TOP'>
					<i>
						<IoIosArrowUp></IoIosArrowUp>
					</i>
				</a>
			</button>
		</FooterStyle>
	);
}

export default Footer;
