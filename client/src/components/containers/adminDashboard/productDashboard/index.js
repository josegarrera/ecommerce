import React from 'react';
import ProductDashboardStyle from './styled';

import {MdDelete, MdEdit} from 'react-icons/md';

const ProductDashboard = ({name, brands, categories, imageUrl, price, _id}) => {
	return (
		<ProductDashboardStyle>
			<div className='productAllInfo'>
				<div className='imageDiv'>
					<img className='image' rc={imageUrl[0]} alt='imagen de producto' />
				</div>
				<div className='productInfo'>
					<div className='name'>Product: {name}</div>
					<div className='price'>Price: {price}</div>
				{/* 	<div className='variants'>Variants: {variants}</div> */}
					<div className='_id'>ID: {_id}</div>
				</div>
			</div>
			<div className='buttons'>
				<button className='buttonDiv'>
					<MdEdit className='button' />
				</button>
				<button className='buttonDiv'>
					<MdDelete className='button' />
				</button>
			</div>
		</ProductDashboardStyle>
	);
};

export default ProductDashboard;
