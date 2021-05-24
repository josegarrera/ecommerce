import React from 'react';
import HomeStyle from './styled';

const Home = () => {
	return (
		<HomeStyle>
			<div className='carrousel'>Carrousel</div>
			<div className='offers'>
				<div className='offer'>Offers</div>
				<div className='offer'>Offers</div>
				<div className='offer'>Offers</div>
				<div className='offer'>Offers</div>
			</div>
			<div className='carrousel'>Carrousel</div>
			<div className='offers'>
				<div className='offer'>Offers</div>
				<div className='offer'>Offers</div>
				<div className='offer'>Offers</div>
				<div className='offer'>Offers</div>
			</div>
		</HomeStyle>
	);
};

export default Home;
