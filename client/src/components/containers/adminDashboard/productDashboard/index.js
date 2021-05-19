import React from 'react';
import ProductDashboardStyle from './styled';

import {MdDelete, MdEdit} from 'react-icons/md';

const ProductDashboard = ({prop, index}) => {
	const {
		name,
		price,
		imageUrl,
		description,
		categories,
		brands,
		variants,
		_id,
		products,
		specs,
		role,
		email,
		users,
	} = prop;

	return (
		<ProductDashboardStyle>
			<div className='productAllInfo'>
				{imageUrl ? (
					<div className='imageDiv'>
						<img className='image' src={imageUrl[0]} alt='imagen de producto' />
					</div>
				) : (
					<div className='imageDiv'>
						<div className='index'>{index}</div>
					</div>
				)}
				<div className='productInfo'>
					{name && (
						<div className='renglon'>
							<div className='title'>Name: &nbsp;</div>
							<div className='name'>{name}</div>
						</div>
					)}
					{price && (
						<div className='renglon'>
							<div className='title'>Price: &nbsp;</div>
							<div className='price'>
								{price.currency} {price.value}
							</div>
						</div>
					)}
					{_id && (
						<div className='renglon'>
							<div className='title'>Id: &nbsp;</div>
							<div className='_id'> {_id}</div>
						</div>
					)}
					{products && (
						<div className='renglon'>
							<div className='title'>Products: &nbsp;</div>
							<div className='products'>
								{' '}
								{products.map((product) => (
									<div>{product.name}</div>
								))}
							</div>
						</div>
					)}
					{/* {variants && (
						<div className='renglon'>
							<div className='title'>Variants: </div>
							<div className='variants'>
								{' '}
								{variants.map((variant) => (
									<div>{variant}</div>
								))}
							</div>
						</div>
					)} */}
					{role && (
						<div className='renglon'>
							<div className='title'>Role: &nbsp;</div>
							<div className='role'>{role}</div>
						</div>
					)}
					{email && (
						<div className='renglon'>
							<div className='title'>Email: &nbsp;</div>
							<div className='email'>{email}</div>
						</div>
					)}
					{users && (
						<div className='renglon'>
							<div className='title'>User: &nbsp;</div>
							<div className='users'>{users}</div>
						</div>
					)}
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
