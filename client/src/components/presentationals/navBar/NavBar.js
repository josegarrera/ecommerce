/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {IoCart, IoHeart, IoPersonSharp} from 'react-icons/io5';
import SearchBar from '../../containers/searchBar/SearchBar';
import DivNavBar from './styled';
import {BsPersonCheckFill, BsPersonPlusFill} from 'react-icons/bs';

import CartHoverView from '../../containers/cartHoverView/CartHoverView';

const NavBar = () => {
	let userId = window.localStorage.getItem('userId');
	const user = useSelector((state) => state.user);
	const eraseToken = () => {
		const cart = window.localStorage.getItem('cart');
		window.localStorage.clear();
		if (cart) window.localStorage.setItem('cart', cart);
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
									<Link to='/catalogue'>
										<div className='login' onClick={eraseToken}>
											Signout
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
					<div className='iconDiv'>
						<IoHeart className='icon' />
					</div>
					<div className='iconDiv cart'>
						<Link to='/cart'>
							<IoCart className='icon' />
						</Link>

						<CartHoverView className='cartHoverView' />
					</div>
				</div>
			</div>
			<div className='bottomNav'>
				<Link className='bottomLinks' to='/catalogue'>
					catalogue
				</Link>
				{user.role === 'admin' ? (
					<Link className='bottomLinks' to='/create'>
						create
					</Link>
				) : null}
				<Link className='bottomLinks' to='/home'>
					home
				</Link>

				<select className='select bottomLink'>
					<option selected value='0'>
						all categories
					</option>
				</select>

				<Link className='bottomLinks' to='/about'>
					about
				</Link>
				<Link className='bottomLinks' to='/contact'>
					contact
				</Link>
				<Link className='bottomLinks' to='/search'>
					search
				</Link>
			</div>
		</DivNavBar>
	);
};

export default NavBar;
