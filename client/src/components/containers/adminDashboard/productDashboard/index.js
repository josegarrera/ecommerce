import React from 'react';
import ProductDashboardStyle from './styled';

import {MdDelete, MdEdit} from 'react-icons/md';

const ProductDashboard = ({prop1, prop2, prop3, prop4, brands, categories}) => {
	return (
		<ProductDashboardStyle>
			<div className='productAllInfo'>
				<div className='imageDiv'>
					<img className='image' src={prop3} alt='imagen de producto' />
				</div>
				<div className='productInfo'>
					<div className='renglon'>
						<div className='title'>{'Product: '}</div>
						<div className='name'>{prop1}</div>
					</div>
					<div className='renglon'>
						<div className='title'>Price:</div>
						<div className='price'>
							{prop2.currency} {prop2.value}
						</div>
					</div>
					<div className='renglon'>
						<div className='title'>Id:</div>
						<div className='_id'> {prop4}</div>
					</div>

					{/* 	<div className='variants'>Variants: {variants}</div> */}
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
