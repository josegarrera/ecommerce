import React from 'react';
import {ProfileStyled} from './styled';

const Profile = () => {
	let token = window.localStorage.getItem('token');
	let address = window.localStorage.getItem('address');
	console.log('adrreess', address);
	let email = window.localStorage.getItem('email');
	let firstName = window.localStorage.getItem('firstName');
	let identification = window.localStorage.getItem('identification');
	let lastName = window.localStorage.getItem('lastName');
	let profileImage = window.localStorage.getItem('profileImage');
	let userId = window.localStorage.getItem('userId');

	return (
		<ProfileStyled>
			<h1 className='title__prof'>Profile</h1>
			<div className='data'>
				<div className='imgDiv'>
					<img className='img' src={profileImage} />
				</div>
				<div className='userData'>
					<div className='renglon'>
						<div className='title'>Name:</div>
						<div>
							&nbsp;
							{firstName}
							&nbsp;
							{lastName}
						</div>
					</div>
					<div className='renglon'>
						<div className='title'>Email:</div>
						<div>
							&nbsp;
							{email}
						</div>
					</div>
					<div className='renglon'>
						<div className='title'>Id:</div>
						<div>
							&nbsp;
							{identification}
						</div>
					</div>
					<div className='renglon'>
						<div className='title'>Address:</div>
						{address}
						{/* {address.map((el) => (
                        <div>&nbsp; el</div>
					))} */}
					</div>
				</div>
			</div>
		</ProfileStyled>
	);
};

export default Profile;
