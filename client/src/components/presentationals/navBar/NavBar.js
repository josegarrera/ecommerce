/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {IoCart, IoHeart} from 'react-icons/io5';
import SearchBar from '../../containers/searchBar/SearchBar';
import DivNavBar from './styled';
import {BsPersonCheckFill, BsPersonPlusFill} from 'react-icons/bs';
import {Badge} from '@material-ui/core';
import {GiHamburgerMenu} from 'react-icons/gi';

import CartHoverView from '../../containers/cartHoverView/CartHoverView';
import FavoritesHoverView from '../../containers/favoritesHoverView/FavoritesHoverView';
import Dropdown from './responsiveSideBar/index.js';

const NavBar = () => {
	const cartProduct = useSelector((state) => state.cartProducts);
	const favsProduct = useSelector((state) => state.wishlist);
	const [click, setClick] = useState(false);
	let userId = window.localStorage.getItem('userId');
	let profileImage = window.localStorage.getItem('profileImage');
	let role = window.localStorage.getItem('role');

	const handleClick = () => {
		setClick(!click);
	};

	const eraseToken = () => {
		window.localStorage.clear();
		window.location.reload();
	};

	return (
		<DivNavBar id='GO_TOP'>
			<div className='topNav'>
				<div className='topLeft'>
					<Link to='/'>
						<h3 className='logo'>{'< Store! />'}</h3>
					</Link>
					<Link to='/'>
						<h3 id='responsiveLogo' className='logo'>
							{'< S! />'}
						</h3>
					</Link>
				</div>
				<div className='topCenter'>
					<SearchBar />
				</div>

				<div className='topRight'>
					<div className='iconDiv login'>
						{userId ? (
							<div className='imageDiv'>
								{profileImage !== 'undefined' ? (
									<img className='image' src={profileImage} alt='no' />
								) : (
									<BsPersonCheckFill className='icon iconLogin' />
								)}
								<div className='loginHoverCart'>
									{role === 'admin' ? (
										<>
											<Link to='/adminDashboard'>
												<div className='buttonLoginHover'>Admin dashboard</div>
											</Link>
											<Link to='/userDashboard'>
												<div className='buttonLoginHover'>My profile</div>
											</Link>
										</>
									) : null}
									{role === 'client' ? (
										<Link to='/userDashboard'>
											<div className='buttonLoginHover'>My profile</div>
										</Link>
									) : null}

									<Link to='/catalogue'>
										<div className='login' onClick={eraseToken}>
											Sign Out
										</div>
									</Link>
								</div>
							</div>
						) : (
							<div>
								<BsPersonPlusFill className='icon' />
								<div className='loginHoverCart'>
									<Link to='/login'>
										<div className='login'> Sign in </div>
									</Link>
									<div className='signUp'>
										Don't have an account?{' '}
										<Link className='signText' to='/signup'>
											{' '}
											Sign up
										</Link>
									</div>
								</div>
							</div>
						)}
					</div>
					{userId ? (
						<Badge badgeContent={favsProduct.length} color='secondary'>
							<div className='iconDiv cart'>
								<Link to='/favorites'>
									<IoHeart className='icon' />
								</Link>
								<FavoritesHoverView className='cartHoverView' />
							</div>
						</Badge>
					) : null}
					<Badge badgeContent={cartProduct.length} color='secondary'>
						<div className='iconDiv cart'>
							<Link to='/cart'>
								<IoCart className='icon' />
							</Link>
							<CartHoverView className='cartHoverView' />
						</div>
					</Badge>
				</div>

				<div id='topRightResponsive' className='topRight'>
					<div className='iconDiv login'>
						{userId ? (
							<div className='imageDiv'>
								{profileImage !== 'undefined' ? (
									<img className='image' src={profileImage} alt='no' />
								) : (
									<BsPersonCheckFill className='icon iconLogin' />
								)}
								<div className='loginHoverCart'>
									{role === 'admin' ? (
										<>
											<Link to='/adminDashboard'>
												<div className='buttonLoginHover'>Admin dashboard</div>
											</Link>
											<Link to='/userDashboard'>
												<div className='buttonLoginHover'>My profile</div>
											</Link>
										</>
									) : null}
									{role === 'client' ? (
										<Link to='/userDashboard'>
											<div className='buttonLoginHover'>My profile</div>
										</Link>
									) : null}

									<Link to='/catalogue'>
										<div className='login' onClick={eraseToken}>
											Sign Out
										</div>
									</Link>
								</div>
							</div>
						) : (
							<div>
								<BsPersonPlusFill className='icon' />
								<div className='loginHoverCart'>
									<Link to='/login'>
										<div className='login'> Sign in </div>
									</Link>
									<div className='signUp'>
										Don't have an account?{' '}
										<Link className='signText' to='/signup'>
											{' '}
											Sign up
										</Link>
									</div>
								</div>
							</div>
						)}
					</div>

					{userId ? (
						<Badge badgeContent={favsProduct.length} color='secondary'>
							<div className='iconDiv cart'>
								<Link to='/favorites'>
									<IoHeart className='icon' />
								</Link>
								<FavoritesHoverView className='cartHoverView' />
							</div>
						</Badge>
					) : null}
					<Badge badgeContent={cartProduct.length} color='secondary'>
						<div className='iconDiv cart'>
							<Link to='/cart'>
								<IoCart className='icon' />
							</Link>
							<CartHoverView className='cartHoverView' />
						</div>
					</Badge>
					<Badge color='secondary' onClick={handleClick}>
						<div className='iconDiv responsive-menu'>
							<div>
								<GiHamburgerMenu className='icon' />
							</div>
						</div>
					</Badge>
					{click && <Dropdown handleClick={handleClick} />}
				</div>
			</div>

			<div className='bottomNav'>
				<SearchBar responsive />

				<div className='bottomNavLinks'>
					<Link className='bottomLink' to='/home'>
						Home
					</Link>
					<Link className='bottomLink' to='/catalogue'>
						Catalogue
					</Link>
					<Link className='bottomLink' to='/about'>
						About us
					</Link>
					<Link className='bottomLink' to='/contact'>
						Contact
					</Link>
				</div>
			</div>
		</DivNavBar>
	);
};

export default NavBar;
