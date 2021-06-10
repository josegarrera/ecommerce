import React from 'react';
import ContactStyle from './styled';

import {FaPhone} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {MdExplore} from 'react-icons/md';

function Contact() {
	return (
		<ContactStyle>
			<div>
				<div className='container row center-xs'>
					<div className='box_1'>
						<h1 className='main__title'>Contact</h1>
						<p className='main__subtitle'>
							we will respond to you as soon as possible
						</p>
					</div>

					<div className='contact__cards'>
						<div className='contact__card'>
							<ul>
								<li>
									<FaPhone />
								</li>
								<li>
									<h3>Phone</h3>
								</li>
								<li>
									<p>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry.
									</p>
								</li>
								<li>+1-2345-2345</li>
							</ul>
						</div>
						<div className='contact__card'>
							<ul>
								<li>
									<MdEmail />
								</li>
								<li>
									<h3>Email</h3>
								</li>
								<li>
									<p>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry.{' '}
									</p>
								</li>
								<li>support@henrystore.com</li>
							</ul>
						</div>
						<div className='contact__card'>
							<ul>
								<li>
									<MdExplore />
								</li>
								<li>
									<h3>Contact</h3>
								</li>
								<li>
									<p>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry.{' '}
									</p>
								</li>
								<li>Ver en Google</li>
							</ul>
						</div>
					</div>

					<div className='box_2'>
						<h1 className='main__title'>Leave us your information</h1>
					</div>

					<div className='post__comment__box'>
						<div className='input__group row reverse'>
							<input className='comment__input' placeholder='Name*' />
							<input className='comment__input' placeholder='Lastname*' />
							<input className='comment__input' placeholder='Concept**' />
						</div>

						<textarea
							className='comment__text__area'
							placeholder='Message*'
						></textarea>

						<div className='comment__button'>
							<button className='submit__button'>Submit</button>
						</div>
					</div>
				</div>
			</div>
		</ContactStyle>
	);
}

export default Contact;
