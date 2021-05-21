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
		{name: 'Users'},
		{name: 'Orders'},
		{name: 'Brands'},
	];

	return (
		<StyledContainer>
			<div className='sidebar'>
				<div>
					<div className='dashboard'>{'Admin Dashboard'}</div>
					<button className='brand' name={'Home'} onClick={handleOnClick}>
						{'<Store! />'}
					</button>
					<div className='options'>
						{arrayButtons.map((el) => (
							<button className='option' name={el.name} onClick={handleOnClick}>
								{Options === el.name ? (
									<IoIosArrowForward className='arrow' />
								) : null}
								&nbsp;
								{el.name}
							</button>
						))}
					</div>
					<div className='separator'></div>
					<Link to='/home'>Back to Store!</Link>
				</div>
				<div className='bottomSidebar'>
					<button className='iconDiv'>
						{userId ? (
							<BsPersonCheckFill className='icon' />
						) : (
							<Link to='/login'>
								<BsPersonPlusFill className='icon' />
							</Link>
						)}
					</button>
					<div>
						{userId ? (
							<div className='login'>
								<div className='userName'>Paveglio Bruno.</div>
								<div className='signOut' onClick={eraseToken}>
									Sign out.
								</div>
							</div>
						) : null}
					</div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className='content'>
				{Options === 'Home' ? (
					<GraphicsDashboard setOptions={setOptions} />
				) : (
					<ListDashboard Options={Options} />
				)}
			</div>
		</StyledContainer>
	);
};

export default HomeDashboard;
