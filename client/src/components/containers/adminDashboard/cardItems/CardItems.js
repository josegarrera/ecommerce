import React, {useEffect, useState} from 'react';
import ProductDashboardStyle from './styled';
import axios from 'axios';
import {URLS} from '../../../../utils/constants';

import DataList from '../../dataList';

import {
	Accordion,
	AccordionItem,
	/* AccordionItemHeading, */
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import {
	MdDelete,
	MdCancel,
	MdEdit,
	MdKeyboardArrowDown,
	MdKeyboardArrowUp,
} from 'react-icons/md';

import {IoMdCheckmarkCircleOutline} from 'react-icons/io';

import {TiDeleteOutline} from 'react-icons/ti';

const CardItems = ({
	prop,
	index,
	options,
	allProducts,
	allBrands,
	allCategories,
}) => {
	const [isEditAItem, setisEditAItem] = useState(false);
	const [SeeMore, setSeeMore] = useState(false);
	const [EditAItem, setEditAItem] = useState({});
	const [AccStatus, setAccStatus] = useState(false);

	const {
		name,
		price,
		imageUrl,
		description,
		categories,
		brands,
		/* variants, */
		_id,
		products,
		/* specs, */
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
	useEffect(() => {
		return () => setEditAItem({});
	}, []);

	useEffect(() => {
		setEditAItem({...prop});
	}, [prop]);

	const handleInput = (e) => {
		e.target.name === 'price'
			? setEditAItem({
					...EditAItem,
					price: {...EditAItem.price, value: e.target.value},
			  })
			: setEditAItem({...EditAItem, [e.target.name]: e.target.value});
		//		value={EditAItem.brands[0].name}
	};

	const handleEditButton = () => {
		isEditAItem && setEditAItem({...prop});
		SeeMore === false ? setSeeMore(true) : setSeeMore(true);
		setisEditAItem(!isEditAItem);
	};

	const handleDeleteOnEdit = ({target: {id}}) => {
		let filter =
			EditAItem.categories &&
			EditAItem.categories.filter((el) => el.name !== id);
		setEditAItem({...EditAItem, categories: filter});
	};

	const handleDeleteBrandsOnEdit = ({target: {id}}) => {
		console.log(id);
		let filter =
			EditAItem.brands && EditAItem.brands.filter((el) => el.name !== id);
		setEditAItem({...EditAItem, brands: filter});
	};

	const handleCategoriesDataList = (e) => {
		let newCategorie = {name: e.label, _id: e.key};
		setEditAItem({
			...EditAItem,
			categories: EditAItem.categories.concat(newCategorie),
		});
	};

	const handleBrandsDataList = (e) => {
		let newBrand = {name: e.label, _id: e.key};
		setEditAItem({
			...EditAItem,
			brands: EditAItem.brands.concat(newBrand),
		});
	};

	const handleUpdateButton = async () => {
		if (options === 'Products') {
			let sendEditItem = {...EditAItem};
			sendEditItem.categories = EditAItem.categories.map((el) => el._id);
			sendEditItem.brands = EditAItem.brands.map((el) => el._id);
			try {
				await axios.put(`${URLS.URL_PRODUCTS}/${EditAItem._id}`, sendEditItem);
				allProducts();
			} catch (error) {
				console.log(error.response.data.message);
			}
		}
		setisEditAItem(!isEditAItem);
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
					{_id && (
						<div className='renglon'>
							<div className='title'>Id: &nbsp;</div>
							<div className='_id'> {_id}</div>
						</div>
					)}
					{name && (
						<div className='renglon'>
							<div className='title'>
								{options.slice(0, options.length - 1)} name: &nbsp;
							</div>
							{isEditAItem && EditAItem ? (
								<div>
									<input
										name='name'
										onChange={handleInput}
										value={EditAItem && EditAItem.name}
									/>
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
							{isEditAItem && EditAItem ? (
								<div>
									<input
										type='number'
										name='price'
										onChange={handleInput}
										value={EditAItem.price.value}
									/>
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

					{description ? (
						SeeMore ? (
							<div>
								{isEditAItem && (
									<DataList
										items={allBrands}
										handleDataList={handleBrandsDataList}
										placeholder='Add a Brand'
									/>
								)}
								{brands &&
									EditAItem.brands &&
									(EditAItem.brands.length === 0 ? (
										<div className='renglon'>
											<div className='title'>No brands.</div>
										</div>
									) : brands &&
									  EditAItem.brands &&
									  EditAItem.brands.length === 1 ? (
										<div className='renglon'>
											<div className='title'>Brand: &nbsp;</div>
											<div className='products'>
												{EditAItem.brands &&
													EditAItem.brands.map((el) =>
														isEditAItem ? (
															<div className='div_delete_categorie'>
																{el.name}
																<button className='buttonDiv'>
																	<TiDeleteOutline
																		id={el.name}
																		onClick={handleDeleteBrandsOnEdit}
																		className='button'
																	/>
																</button>
															</div>
														) : (
															<div>{el.name}</div>
														)
													)}
											</div>
										</div>
									) : (
										<Accordion allowZeroExpanded>
											{
												<AccordionItem onClick={() => setAccStatus(!AccStatus)}>
													<AccordionItemButton className='title2'>
														{brands &&
															EditAItem.brands &&
															EditAItem.brands.length}
														Brands
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
														{brands &&
															EditAItem.brands &&
															EditAItem.brands.map((el) => (
																<AccordionItemPanel>
																	<div className='div_delete_categorie'>
																		{el.name}
																		<button className='buttonDiv'>
																			<TiDeleteOutline
																				id={el.name}
																				onClick={handleDeleteBrandsOnEdit}
																				className='button'
																			/>
																		</button>
																	</div>
																</AccordionItemPanel>
															))}
													</div>
												</AccordionItem>
											}
										</Accordion>
									))}
								{isEditAItem && (
									<DataList
										items={allCategories}
										handleDataList={handleCategoriesDataList}
										placeholder='Add a Categorie'
									/>
								)}
								{categories &&
								EditAItem.categories &&
								EditAItem.categories.length === 0 ? (
									<div className='renglon'>
										<div className='title'>No categories.</div>
									</div>
								) : categories &&
								  EditAItem.categories &&
								  EditAItem.categories.length === 1 ? (
									<div className='renglon'>
										<div className='title'>Categorie: &nbsp;</div>
										<div className='products'>
											{EditAItem.categories.map((el) =>
												isEditAItem ? (
													<div className='div_delete_categorie'>
														{el.name}
														<button className='buttonDiv'>
															<TiDeleteOutline
																id={el.name}
																onClick={handleDeleteOnEdit}
																className='button'
															/>
														</button>
													</div>
												) : (
													<div>{el.name}</div>
												)
											)}
										</div>
									</div>
								) : (
									<Accordion allowZeroExpanded>
										{
											<AccordionItem onClick={() => setAccStatus(!AccStatus)}>
												<AccordionItemButton className='title2'>
													{categories &&
														EditAItem.categories &&
														EditAItem.categories.length}{' '}
													Categories
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
													{categories &&
														EditAItem.categories &&
														EditAItem.categories.map((el) =>
															isEditAItem ? (
																<AccordionItemPanel>
																	<div className='div_delete_categorie'>
																		{el.name}
																		<button className='buttonDiv'>
																			<TiDeleteOutline
																				id={el.name}
																				onClick={handleDeleteOnEdit}
																				className='button'
																			/>
																		</button>
																	</div>
																</AccordionItemPanel>
															) : (
																<AccordionItemPanel>
																	{el.name}
																</AccordionItemPanel>
															)
														)}
												</div>
											</AccordionItem>
										}
									</Accordion>
								)}

								{description && (
									<div className='renglon2'>
										<div className='title'>Description: &nbsp;</div>
										{isEditAItem && EditAItem ? (
											<div>
												<textarea
													rows='4'
													cols='80'
													name='description'
													onChange={handleInput}
													value={EditAItem.description}
												/>
											</div>
										) : (
											<div className='description'> {description}</div>
										)}
									</div>
								)}

								<div className='renglon'>
									<div onClick={() => setSeeMore(!SeeMore)} className='seeMore'>
										Close!
									</div>
								</div>
							</div>
						) : (
							<div className='seeMore' onClick={() => setSeeMore(!SeeMore)}>
								See more!
							</div>
						)
					) : null}
				</div>
			</div>
			<div className='buttons'>
				{isEditAItem && (
					<button onClick={handleUpdateButton} className='buttonDiv'>
						<IoMdCheckmarkCircleOutline className='button button_check' />
					</button>
				)}
				<button onClick={handleEditButton} className='buttonDiv'>
					{isEditAItem ? (
						<MdCancel className='button' />
					) : (
						<MdEdit className='button' />
					)}
				</button>
				<button className='buttonDiv' onClick={deleteById}>
					<MdDelete className='button' />
				</button>
			</div>
		</ProductDashboardStyle>
	);
};

export default CardItems;
