import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {StyledContainer} from './styles';
import {IoIosArrowForward} from 'react-icons/io';
import {BsPersonPlusFill, BsPersonCheckFill} from 'react-icons/bs';
import Cart from '../../cart/Cart';
import Favourites from '../../favourites/Favourites';
import Profile from '../userProfile/Profile';
import UserOrder from '../userOrders';

const HomeUserDashboard = () => {
	const [Options, setOptions] = useState('My profile');
	let userId = window.localStorage.getItem('userId');
	let firstName = window.localStorage.getItem('firstName');
	let lastName = window.localStorage.getItem('lastName');
	let profileImage = window.localStorage.getItem('profileImage');

	const handleOnClick = (e) => {
		setOptions(e.target.name);
	};
	const arrayButtons = [
		{name: 'My profile'},
		{name: 'My orders'},
		{name: 'My favourites'},
		{name: 'My cart'},
	];

	return (
		<StyledContainer>
			<div className='sidebar'>
				<div className='bottomSidebar'>
					<div className='userDiv'>
						<button className='iconDiv'>
							{userId ? (
								profileImage !== 'undefined' ? (
									<img className='image' src={profileImage} alt='no' />
								) : (
									<BsPersonCheckFill className='icon' />
								)
							) : (
								<Link to='/login'>
									<BsPersonPlusFill className='icon' />
								</Link>
							)}
						</button>
						<div>
							{userId ? (
								<div className='login'>
									{firstName !== 'undefined' && lastName !== 'undefined' ? (
										<div className='userName'>
											{firstName} {lastName}
										</div>
									) : (
										<div className='userName'>No Name</div>
									)}
									<div className='myProfile'>Dato extra</div>
								</div>
							) : null}
						</div>
					</div>
				</div>
				<div>
					<div className='options'>
						{arrayButtons.map((el, i) => (
							<button
								key={i + el + 'btn'}
								className='option'
								name={el.name}
								onClick={handleOnClick}
							>
								{Options === el.name ? (
									<IoIosArrowForward key={i + el + 'icon'} className='arrow' />
								) : null}
								&nbsp;
								{el.name}
							</button>
						))}
					</div>
				</div>
			</div>
			<div className='content'>
				{Options === 'My cart' ? (
					<Cart />
				) : Options === 'My favourites' ? (
					<Favourites />
				) : Options === 'My profile' ? (
					<Profile />
				) : Options === 'My orders' ? (
					<UserOrder />
				) : null}
			</div>
		</StyledContainer>
	);
};

export default HomeUserDashboard;
