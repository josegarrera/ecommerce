import React from 'react';
import {Link} from 'react-router-dom';
import DropdownStyle from './styled';
import {RiCloseFill} from 'react-icons/ri';

<RiCloseFill className='icon' />;

function ResponsiveSideBar({handleClick}) {
	let userId = window.localStorage.getItem('userId');

	const eraseToken = () => {
		window.localStorage.clear();
		window.location.reload();
	};

	return (
		<>
			<DropdownStyle>
				<ul className='dropdown-menu'>
					<i className='close-icon' onClick={handleClick}>
						<RiCloseFill />
					</i>

					<div className='dropdown-menu'>
						<Link className='dropdown-link' to='/home' onClick={handleClick}>
							Home
						</Link>
						<Link
							className='dropdown-link'
							to='/catalogue'
							onClick={handleClick}
						>
							Catalogue
						</Link>
						<Link className='dropdown-link' to='/about' onClick={handleClick}>
							About us
						</Link>
						<Link className='dropdown-link' to='/contact' onClick={handleClick}>
							Contact
						</Link>

						{userId ? (
							<Link onClick={handleClick}>
								<div className='dropdown-button' onClick={eraseToken}>
									<div className='sign-in'> Sign Out </div>
								</div>
							</Link>
						) : (
							<div>
								<Link to='/login' onClick={handleClick}>
									<div className='dropdown-button'>
										<div className='sign-in'> Sign in </div>
									</div>
								</Link>
								<div className='sign-up'>
									Don't have an account?
									<Link
										className='signup-link'
										to='/signup'
										onClick={handleClick}
									>
										Sign up
									</Link>
								</div>
							</div>
						)}
					</div>
				</ul>
			</DropdownStyle>
		</>
	);
}

export default ResponsiveSideBar;
