import React, {useState} from 'react';
import ProductDashboardStyle from './styled';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import {
	MdDelete,
	MdEdit,
	MdKeyboardArrowDown,
	MdKeyboardArrowUp,
} from 'react-icons/md';

const ProductDashboard = ({prop, index, options}) => {
	const [AccStatus, setAccStatus] = useState(false);
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
							<div className='title'>
								{options.slice(0, options.length - 1)} name: &nbsp;
							</div>
							<div className='name'>{name}</div>
						</div>
					)}
					{role && (
						<div className='renglon'>
							<div className='title'>Role: &nbsp;</div>
							<div className='role'>{role}</div>
						</div>
					)}
					{email && (
						<div className='renglon'>
							<div className='title'>
								{role.charAt(0).toUpperCase() + role.slice(1)} email: &nbsp;
							</div>
							<div className='email'>{email}</div>
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
					{users && (
						<div className='renglon'>
							<div className='title'>User: &nbsp;</div>
							<div className='users'>{users}</div>
						</div>
					)}
					{_id && (
						<div className='renglon'>
							<div className='title'>Id: &nbsp;</div>
							<div className='_id'> {_id}</div>
						</div>
					)}
					{products &&
						(products.length === 0 ? (
							<div className='renglon'>
								<div className='title'>No Products.</div>
							</div>
						) : products.length === 1 ? (
							<div className='renglon'>
								<div className='title'>1 Product: &nbsp;</div>
								<div className='products'>
									{' '}
									{products.map((product) => (
										<div>{product.name}</div>
									))}
								</div>
							</div>
						) : (
							<Accordion allowZeroExpanded>
								{
									<AccordionItem onClick={() => setAccStatus(!AccStatus)}>
										<AccordionItemButton className='title2'>
											{products.length} Products
											{AccStatus === false ? (
												<MdKeyboardArrowDown
													className='open'
													onClick={() => setAccStatus(!AccStatus)}
												/>
											) : (
												<MdKeyboardArrowUp
													className='open'
													onClick={() => setAccStatus(!AccStatus)}
												/>
											)}
										</AccordionItemButton>
										<div className='accordionItems'>
											{products.map((product) => (
												<AccordionItemPanel>{product.name}</AccordionItemPanel>
											))}
										</div>
									</AccordionItem>
								}
							</Accordion>
						))}
					{categories &&
						(categories.length === 0 ? (
							<div className='renglon'>
								<div className='title'>No categories.</div>
							</div>
						) : categories.length === 1 ? (
							<div className='renglon'>
								<div className='title'>1 Categorie: &nbsp;</div>
								<div className='products'>
									{' '}
									{categories.map((el) => (
										<div>{el.name}</div>
									))}
								</div>
							</div>
						) : (
							<Accordion allowZeroExpanded>
								{
									<AccordionItem onClick={() => setAccStatus(!AccStatus)}>
										<AccordionItemButton className='title2'>
											{categories.length} Categories
											{AccStatus === false ? (
												<MdKeyboardArrowDown
													className='open'
													onClick={() => setAccStatus(!AccStatus)}
												/>
											) : (
												<MdKeyboardArrowUp
													className='open'
													onClick={() => setAccStatus(!AccStatus)}
												/>
											)}
										</AccordionItemButton>
										<div className='accordionItems'>
											{categories.map((el) => (
												<AccordionItemPanel>{el.name}</AccordionItemPanel>
											))}
										</div>
									</AccordionItem>
								}
							</Accordion>
						))}
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
