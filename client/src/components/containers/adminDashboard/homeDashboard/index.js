import React, {useState} from 'react';
import {StyledContainer} from './styles';
import List from '../allProductsDashboard/index';
const HomeDashboard = () => {
	const [Options, setOptions] = useState('');

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
					{arrayButtons.map((el) => (
						<button name={el.name} onClick={handleOnClick}>
							{el.name}
						</button>
					))}
				</div>
			</div>

			<div className='content'>
				<List Options={Options} />
			</div>
		</StyledContainer>
	);
};

export default HomeDashboard;
