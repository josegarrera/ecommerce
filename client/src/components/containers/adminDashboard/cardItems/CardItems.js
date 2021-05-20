import React, {useEffect, useState} from 'react';
import ProductDashboardStyle from './styled';
import axios from 'axios';
import {URLS} from '../../../../utils/constants';
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

const CardItems = ({prop, index, options, allProducts}) => {
	const [isEditAItem, setisEditAItem] = useState(false);

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

	const deleteById = async () => {
		let result = window.confirm('Are you sure you want to delete?');
		if (result) {
			const id = _id;
			if (options === 'Products') {
				await axios.delete(`${URLS.URL_PRODUCTS}/${id}`);
			}
			if (options === 'Categories') {
				await axios.delete(`${URLS.URL_CATEGORIES}/${id}`);
			}
			if (options === 'Users') {
				await axios.delete(`${URLS.URL_USERS}/${id}`);
			}
			if (options === 'Orders') {
				await axios.delete(`${URLS.URL_USER_ORDERS}/${id}`);
			}
			if (options === 'Brands') {
				await axios.delete(`${URLS.URL_BRANDS}/${id}`);
			}
			allProducts();
		}
	};

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
							{isEditAItem ? (
								<div>
									<input value={name} />
								</div>
							) : (
								<div className='name'>{name}</div>
							)}
						</div>
					)}
					{role && (
						<div className='renglon'>
							<div className='title'>Role: &nbsp;</div>
							{isEditAItem ? (
								<div>
									<input value={role} />
								</div>
							) : (
								<div className='role'>{role}</div>
							)}
						</div>
					)}
					{email && (
						<div className='renglon'>
							<div className='title'>
								{role.charAt(0).toUpperCase() + role.slice(1)} email: &nbsp;
							</div>
							{isEditAItem ? (
								<div>
									<input value={email} />
								</div>
							) : (
								<div className='email'>{email}</div>
							)}
						</div>
					)}
					{price && (
						<div className='renglon'>
							<div className='title'>Price: &nbsp;</div>
							{isEditAItem ? (
								<div>
									<input value={price.value} />
								</div>
							) : (
								<div className='price'>
									{price.currency} {price.value}
								</div>
							)}
						</div>
					)}
					{users && (
						<div className='renglon'>
							<div className='title'>User: &nbsp;</div>
							{isEditAItem ? (
								<div>
									<input value={users} />
								</div>
							) : (
								<div className='users'>{users}</div>
							)}
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
					<MdEdit onClick={() => setisEditAItem(!isEditAItem)} className='button' />
				</button>
				<button className='buttonDiv' onClick={deleteById}>
					<MdDelete className='button' />
				</button>
			</div>
		</ProductDashboardStyle>
	);
};

export default CardItems;