import React, {useState} from 'react';
import {StyledContainer} from './styles';
import ListDashboard from '../listDashboard/ListDashboard';
import GraphicsDashboard from '../graphicsDashboard/GraphicsDashboard';
import {IoIosArrowForward} from 'react-icons/io';

const HomeDashboard = () => {
	const [Options, setOptions] = useState('Home');

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
			</div>

			<div className='content'>
				{Options === 'Home' ? (
					<GraphicsDashboard />
				) : (
					<ListDashboard Options={Options} />
				)}
			</div>
		</StyledContainer>
	);
};

export default HomeDashboard;
