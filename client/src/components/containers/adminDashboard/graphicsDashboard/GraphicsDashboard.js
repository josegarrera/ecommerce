import React from 'react';
import GraphicStyled from './styled';
import {FaUsers, FaAlignLeft, FaDolly, FaLaptopCode} from 'react-icons/fa';

const GraphicsDashboard = () => {
	return (
		<GraphicStyled>
			<div className='graphic'>
				<FaLaptopCode />
				Products
			</div>
			<div className='graphic'>
				<FaAlignLeft />
				Categories
			</div>
			<div className='graphic'>
				<FaUsers />
				Users
			</div>
			<div className='graphic'>
				<FaDolly />
				Orders
			</div>
		</GraphicStyled>
	);
};

export default GraphicsDashboard;
