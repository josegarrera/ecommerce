/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {IoCart, IoHeart} from 'react-icons/io5';
import SearchBar from '../../containers/searchBar/SearchBar';
import DivNavBar from './styled';
import {BsPersonCheckFill, BsPersonPlusFill} from 'react-icons/bs';
import {Badge} from '@material-ui/core';

import CartHoverView from '../../containers/cartHoverView/CartHoverView';
import FavoritesHoverView from '../../containers/favoritesHoverView/FavoritesHoverView';

const NavBar = () => {
	const cartProduct = useSelector((state) => state.cartProducts);
	const favsProduct = useSelector((state) => state.wishlist);
	let userId = window.localStorage.getItem('userId');
	const user = useSelector((state) => state.user);
	console.log('este es el userrr', user);
	const eraseToken = () => {
		window.localStorage.clear();
		window.location.reload();
	};

	return (
		<DivNavBar>
			<div className='topNav'>
				<div className='topLeft'>
					<Link to='/'>
						<h3 className='logo'>{'< Store! />'}</h3>
					</Link>
				</div>
				<div className='topCenter'>
					<SearchBar />
				</div>
				<div className='topRight'>
					<div className='iconDiv login'>
						{userId ? (
							<div>
								<BsPersonCheckFill className='icon iconLogin' />
								<div className='loginHoverCart'>
									{user.role === 'admin' ? (
										<Link to='/adminDashboard'>
											<div className='buttonLoginHover'>Dashboard</div>
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
			</div>
			<div className='bottomNav'>
				<Link className='bottomLinks' to='/home'>
					Home
				</Link>
				<Link className='bottomLinks' to='/catalogue'>
					Catalogue
				</Link>
				{user.role === 'admin' ? (
					<Link className='bottomLinks' to='/create'>
						Create
					</Link>
				) : null}

				<select className='select bottomLink'>
					<option>All categories</option>
				</select>

				<Link className='bottomLinks' to='/about'>
					About
				</Link>
				<Link className='bottomLinks' to='/contact'>
					Contact
				</Link>
			</div>
		</DivNavBar>
	);
};

export default NavBar;
