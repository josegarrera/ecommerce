import React from 'react';
import {ProfileStyled} from './styled';

const Profile = () => {
	let address = JSON.parse(window.localStorage.getItem('address'));
	let email = window.localStorage.getItem('email');
	let firstName = window.localStorage.getItem('firstName');
	let identification = window.localStorage.getItem('identification');
	let lastName = window.localStorage.getItem('lastName');
	let profileImage = window.localStorage.getItem('profileImage');
	return (
		<ProfileStyled>
			<h1 className='title__prof'>Profile</h1>
			<div className='data'>
				<div className='imgDiv'>
					<img className='img' src={profileImage && profileImage} alt='profile' />
				</div>
				<div className='userData'>
					<div className='renglon'>
						<div className='title'>Name:</div>
						<div>
							&nbsp;
							{firstName && firstName}
							&nbsp;
							{lastName && lastName}
						</div>
					</div>
					<div className='renglon'>
						<div className='title'>Email:</div>
						<div>
							&nbsp;
							{email && email}
						</div>
					</div>
					<div className='renglon'>
						<div className='title'>Id:</div>
						<div>
							&nbsp;
							{identification && identification}
						</div>
					</div>
					<div className='renglon'>
						<div className='title'>Address:</div>
						{address &&
							address.map((el) => (
								<div>
									&nbsp;{el.street_name}&nbsp;{el.street_number} {'( '}
									{el.zip_code}
									{' )'}
								</div>
							))}
					</div>
				</div>
			</div>
		</ProfileStyled>
	);
};

export default Profile;
