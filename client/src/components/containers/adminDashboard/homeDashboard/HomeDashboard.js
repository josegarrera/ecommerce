import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {StyledContainer} from './styles';
import ListDashboard from '../listDashboard/ListDashboard';
import GraphicsDashboard from '../graphicsDashboard/GraphicsDashboard';
import {IoIosArrowForward} from 'react-icons/io';
import {BsPersonPlusFill, BsPersonCheckFill} from 'react-icons/bs';

const HomeDashboard = () => {
	const [Options, setOptions] = useState('Home');
	let userId = window.localStorage.getItem('userId');
	let firstName = window.localStorage.getItem('firstName');
	let lastName = window.localStorage.getItem('lastName');
	let profileImage = window.localStorage.getItem('profileImage');

	const eraseToken = () => {
		window.localStorage.clear();
		window.location.reload();
	};

	const handleOnClick = (e) => {
		setOptions(e.target.name);
	};
	const arrayButtons = [
		{name: 'Products'},
		{name: 'Categories'},
		{name: 'Brands'},
		{name: 'Users'},
		{name: 'Orders'},
	];

	return (
		<StyledContainer>
			<div className='sidebar'>
				<div>
					<div key='home-div-1' className='dashboard'>
						{'Admin Dashboard'}
					</div>
					<button
						key='home-btn-0'
						className='brand'
						name={'Home'}
						onClick={handleOnClick}
					>
						{'<Store! />'}
					</button>
					<div key='home-div-2' className='options'>
						{arrayButtons.map((el) => (
							<button
								key={'home-btn-' + el.name}
								className='option'
								name={el.name}
								onClick={handleOnClick}
							>
								{Options === el.name ? (
									<IoIosArrowForward className='arrow' />
								) : null}
								&nbsp;
								{el.name}
							</button>
						))}
					</div>
				</div>
				<div className='bottomSidebar'>
					<div key='home-div-3' className='userDiv'>
						<button key='home-btn-2' className='iconDiv'>
							{userId ? (
								profileImage !== 'undefined' ? (
									<img className='image' src={profileImage} alt='profile' />
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
								<div key='home-div-4' className='login'>
									{firstName !== 'undefined' && lastName !== 'undefined' ? (
										<div key='home-div-5' className='userName'>
											{firstName} {lastName}
										</div>
									) : (
										<div className='userName'>No Name</div>
									)}
									<div
										key='home-div-6'
										className='signOut'
										onClick={eraseToken}
									>
										Sign out.
									</div>
								</div>
							) : null}
						</div>
					</div>
					<div key='home-div-7' className='backStore'>
						<div className='separator'></div>
						<Link to='/home'>Back to Store!</Link>
					</div>
				</div>
			</div>
			<div key='home-div-8' className='content'>
				{Options === 'Home' ? (
					<GraphicsDashboard setOptions={setOptions} />
				) : Options === 'createProduct' ? (
					<>
						<ListDashboard Options={'Products'} setOptions={setOptions} />
					</>
				) : (
					<ListDashboard Options={Options} setOptions={setOptions} />
				)}
			</div>
		</StyledContainer>
	);
};

export default HomeDashboard;
