import React, {useEffect, useState} from 'react';
import ProductDashboardStyle from './styled';
import {TiDeleteOutline} from 'react-icons/ti';
import {IoMdCheckmarkCircleOutline} from 'react-icons/io';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';
import {URLS} from '../../../../utils/constants';
import {store} from 'react-notifications-component';
import DataList from '../../dataList';
import {MdDelete, MdCancel, MdEdit} from 'react-icons/md';
import {FcAddImage} from 'react-icons/fc';
import AccordionDashboard from '../accordionDashboard/AccordionDashboard';
import {
	handleInputFile,
	handleDeleteImage,
	handleInputVariants,
} from './utils.js';

const CardItems = ({
	prop,
	index,
	options,
	allProducts,
	allBrands,
	allCategories,
	allProductsDataList,
}) => {
	//const dispatch = useDispatch();
	//let orderDetail = useSelector((store) => store.orderDetail);
	const [isEditAItem, setisEditAItem] = useState(false);
	const [SeeMore, setSeeMore] = useState(false);
	const [EditAItem, setEditAItem] = useState({...prop});
	const [OrderDetail, setOrderDetail] = useState({});

	const {
		name,
		price,
		description,
		categories,
		brands,
		variants,
		_id,
		products,
		combo,
		role,
		email,
		users,
		specs,
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleInput = (e) => {
		e.target.name === 'price'
			? setEditAItem({
					...EditAItem,
					price: {...EditAItem.price, value: e.target.value},
			  })
			: e.target.name === 'specs'
			? setEditAItem({
					...EditAItem,
					specs: {...EditAItem.specs, [e.target.id]: e.target.value},
			  })
			: setEditAItem({...EditAItem, [e.target.name]: e.target.value});
	};

	const handleEditButton = (e) => {
		if (e.target.id && options === 'Products') {
			const originalProduct = allProductsDataList.filter(
				(item) => item.product._id === e.target.id
			);
			if (isEditAItem && originalProduct.length) {
				setEditAItem(originalProduct[0].product);
				setSeeMore(!SeeMore);
				setisEditAItem(!isEditAItem);
				return;
			}
		}
		isEditAItem && setEditAItem({...prop});
		!isEditAItem && setSeeMore(true);
		setisEditAItem(!isEditAItem);
	};

	const handleDeleteOnEdit = ({target: {id}}) => {
		let filter =
			EditAItem.categories &&
			EditAItem.categories.filter((el) => el.name !== id);
		setEditAItem({...EditAItem, categories: filter});
	};

	const handleDeleteProductsOnEdit = ({target: {id}}) => {
		let filter =
			EditAItem.products && EditAItem.products.filter((el) => el.name !== id);
		setEditAItem({...EditAItem, products: filter});
	};
	const handleProductsDataList = (e) => {
		let newProduct = {name: e.label, _id: e.key};
		setEditAItem({
			...EditAItem,
			products: EditAItem.products.concat(newProduct),
		});
	};

	const handleDeleteBrandsOnEdit = ({target: {id}}) => {
		let filter =
			EditAItem.brands && EditAItem.brands.filter((el) => el.name !== id);
		setEditAItem({...EditAItem, brands: filter});
	};

	const handleDeleteVariantsOnEdit = ({target: {id}}) => {
		let filter =
			EditAItem.variants && EditAItem.variants.filter((el) => el.id !== id);
		setEditAItem({...EditAItem, variants: filter});
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

	const modifiedNotification = () => {
		store.addNotification({
			title: 'Modified item',
			message: 'The item was modified.',
			type: 'success',
			insert: 'top',
			container: 'bottom-right',
			animationIn: ['animate__animated', 'animate__fadeIn'],
			animationOut: ['animate__animated', 'animate__fadeOut'],
			dismiss: {
				duration: 3000,
				onScreen: true,
			},
		});
	};

	const handleUpdateButton = async () => {
		if (options === 'Products') {
			let sendEditItem = {...EditAItem};
			sendEditItem.categories = EditAItem.categories.map((el) => el._id);
			sendEditItem.brands = EditAItem.brands.map((el) => el._id);
			const variantsFiles = EditAItem.variants
				.map((variant) => variant.imageFile && variant.imageFile.file)
				.filter((item) => item);
			const files = EditAItem.files ? EditAItem.files : [];
			let formData = new FormData();
			for (let i = 0; i < files.length; i++) {
				formData.append('images', EditAItem.files[i]);
			}
			for (let i = 0; i < variantsFiles.length; i++) {
				formData.append('images', variantsFiles[i]);
			}
			formData.append('info', JSON.stringify(sendEditItem));
			try {
				await axios.put(`${URLS.URL_PRODUCTS}/${EditAItem._id}`, formData);
				let arrVariants = [...EditAItem.variants];
				arrVariants.map((item) => {
					return {
						...item,
						fileData: {},
						file: {},
						fileValue: '',
					};
				});
				setEditAItem({
					...EditAItem,
					variants: arrVariants,
					filesData: [],
					files: [],
					fileValue: '',
				});
				allProducts();
				modifiedNotification();
			} catch (error) {
				console.log(error);
			}
		} else if (options === 'Categories') {
			let sendEditItem = {...EditAItem};
			sendEditItem.products = EditAItem.products.map((el) => el._id);
			try {
				await axios.put(
					`${URLS.URL_CATEGORIES}/${EditAItem._id}`,
					sendEditItem
				);
				allProducts();
				modifiedNotification();
			} catch (error) {
				console.log(error.response.data.message);
			}
		} else if (options === 'Users') {
			let sendEditItem = {...EditAItem};
			try {
				await axios.put(`${URLS.URL_USERS}/${EditAItem._id}`, sendEditItem);
				allProducts();
				modifiedNotification();
			} catch (error) {
				console.log(error.response.data.message);
			}
		} else if (options === 'Brands') {
			let sendEditItem = {...EditAItem};
			sendEditItem.products = EditAItem.products.map((el) => el._id);
			try {
				await axios.put(`${URLS.URL_BRANDS}/${EditAItem._id}`, sendEditItem);
				allProducts();
				modifiedNotification();
			} catch (error) {
				console.log(error.response.data.message);
			}
		} else if (options === 'Orders') {
			let orderDetail = await axios.get(`${URLS.URL_USER_ORDERS}/${_id}`);
			let user = orderDetail.data.response.users.email;
			let sendEditItem = {user, data: {...EditAItem}};
			try {
				await axios.put(`${URLS.URL_USER_ORDERS}/${_id}`, sendEditItem);
				allProducts();
				modifiedNotification();
				setSeeMore(!SeeMore);
			} catch (error) {
				console.log(error.response.data.message);
			}
		}

		setisEditAItem(!isEditAItem);
	};

	const handleOrders = async (_id) => {
		let orderDetail = await axios.get(`${URLS.URL_USER_ORDERS}/${_id}`);
		setOrderDetail(orderDetail.data.response);
		setSeeMore(!SeeMore);
	};

	return (
		<ProductDashboardStyle>
			<div className='productAllInfo'>
				{EditAItem && EditAItem.imageUrl ? (
					<div className='imageDiv'>
						<Carousel className='imageSlider' showStatus>
							{EditAItem.imageUrl &&
								EditAItem.imageUrl.map((el) => (
									<div key={el + 'div'} className='sliderDiv'>
										<img
											key={el + 'img'}
											className='sliderImg'
											src={el}
											alt='imagen de producto'
										/>

										{isEditAItem && EditAItem ? (
											<button className='buttonDiv'>
												<TiDeleteOutline
													key={el + 'btn'}
													id={el}
													onClick={(e) => handleDeleteImage(e, setEditAItem)}
													className='buttonDeleteImg'
												/>
											</button>
										) : (
											<></>
										)}
									</div>
								))}
						</Carousel>
						{isEditAItem && EditAItem ? (
							<div className='imageDiv'>
								<label for='file-upload' className='labelFile'>
									<input
										id='file-upload'
										className='inputFile'
										name='imageUrl'
										type='file'
										accept='image/*'
										multiple
										onChange={(e) => handleInputFile(e, setEditAItem)}
										value={EditAItem && EditAItem.fileValue}
									/>{' '}
									<FcAddImage />
								</label>
								<label>
									{EditAItem && EditAItem.filesData
										? EditAItem.filesData.length
										: 0}{' '}
									Files
								</label>
							</div>
						) : (
							<></>
						)}
					</div>
				) : (
					<div className='imageDiv'>
						<div className='index'>{index}</div>
					</div>
				)}

				<div className='productInfo'>
					{options === 'Orders' && !SeeMore ? (
						<div className='renglon'>
							<label className={EditAItem.state}>
								{EditAItem && EditAItem.state && EditAItem.state.toUpperCase()}
							</label>
						</div>
					) : (
						<></>
					)}

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
									<select name='role' onClick={handleInput}>
										<option name='Admin'>admin</option>
										<option name='Client'>client</option>
									</select>
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
									<input
										name='email'
										onChange={handleInput}
										value={EditAItem && EditAItem.email}
									/>
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
									<select name='price.currency' onClick={handleInput}>
										<option>USD</option>
										<option>ARS</option>
									</select>
									<input
										type='number'
										name='price'
										onChange={handleInput}
										value={EditAItem.price && EditAItem.price.value}
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
							<div className='users'>{users}</div>
						</div>
					)}
					{products && isEditAItem ? (
						<DataList
							items={allProductsDataList}
							type='products'
							handleDataList={handleProductsDataList}
							placeholder='Add a Product'
						/>
					) : (
						<></>
					)}
					{products &&
						EditAItem &&
						(EditAItem.products && EditAItem.products.length === 0 ? (
							<div className='renglon'>
								<div className='title'>No Products.</div>
							</div>
						) : (
							<AccordionDashboard
								items={EditAItem.products}
								isEditAItem={isEditAItem}
								handler={handleDeleteProductsOnEdit}
								Option={'products'}
							/>
						))}

					{options === 'Products' ? (
						SeeMore ? (
							<div>
								{isEditAItem && (
									<DataList
										items={allBrands}
										handleDataList={handleBrandsDataList}
										placeholder='Add a Brand'
									/>
								)}
								{EditAItem && EditAItem.combo && (
									<AccordionDashboard
										items={EditAItem.combo}
										isEditAItem={false}
										handler={handleDeleteBrandsOnEdit}
										Option={'combo'}
									/>
								)}
								{brands &&
									EditAItem.brands &&
									(EditAItem.brands.length === 0 ? (
										<div className='renglon'>
											<div className='title'>No brands.</div>
										</div>
									) : (
										<AccordionDashboard
											items={EditAItem.brands}
											isEditAItem={isEditAItem}
											handler={handleDeleteBrandsOnEdit}
											Option={'brands'}
										/>
									))}
								{variants &&
									EditAItem.variants &&
									(EditAItem.variants.length === 0 ? (
										<div className='renglon'>
											<div className='title'>No Variants.</div>
										</div>
									) : (
										<AccordionDashboard
											items={EditAItem.variants}
											isEditAItem={isEditAItem}
											handler={handleDeleteVariantsOnEdit}
											Option={'variants'}
											handleInput={handleInputVariants}
											EditAItem={EditAItem.variants}
											setEditAItem={setEditAItem}
											prop={prop}
										/>
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
								) : (
									<AccordionDashboard
										items={EditAItem.categories}
										isEditAItem={isEditAItem}
										handler={handleDeleteOnEdit}
										Option={'categories'}
									/>
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
								{/* !specs ? (
									<div className='renglon'>
										<div className='title'>No specs.</div>
									</div>
								) : (
									<AccordionDashboard
										items={Object.entries(specs)}
										EditAItem={EditAItem.specs}
										setEditAItem={setEditAItem}
										isEditAItem={isEditAItem}
										handler={handleDeleteOnEdit}
										handleInput={handleInput}
										Option={'specs'}
									/>
								) */}

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

					{options === 'Orders' ? (
						SeeMore ? (
							<div>
								{OrderDetail.users ? (
									<div className='renglon'>
										<div className='title'>Email: &nbsp;</div>
										<div>{OrderDetail.users.email} </div>
									</div>
								) : null}

								<div className='renglon'>
									<div className='title'>State: &nbsp;</div>
									{!isEditAItem && OrderDetail ? (
										<div className={OrderDetail.state}>
											{' '}
											{OrderDetail.state &&
												OrderDetail.state.charAt(0).toUpperCase() +
													OrderDetail.state.slice(1)}
											{'.'}
										</div>
									) : (
										<div>
											<select
												className='select-style'
												onClick={handleInput}
												name='state'
											>
												<option className='option-style' value='dispatched'>
													Dispatched
												</option>
												<option className='option-style' value='completed'>
													Completed
												</option>
												<option className='option-style' value='canceled'>
													Canceled
												</option>
											</select>
										</div>
									)}
								</div>
								<AccordionDashboard
									paymentDetail={OrderDetail.transactionDetail}
									paymentMethod={OrderDetail.paymentMethod}
									paymentCurrency={OrderDetail.currency}
								/>
								<div className='seeMore' onClick={() => setSeeMore(!SeeMore)}>
									Close!
								</div>
							</div>
						) : (
							<div className='seeMore' onClick={() => handleOrders(_id)}>
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

				<label
					for={_id}
					key={_id + 'labelBtnInput'}
					className='labelVariantsFile buttonDiv'
				>
					<input
						type='button'
						key={_id + 'inputBtnInput'}
						className='inputFileVariants'
						id={_id}
						onClick={(e) => handleEditButton(e)}
					/>
					{isEditAItem ? (
						<MdCancel className='button' />
					) : (
						<MdEdit className='button' />
					)}
				</label>

				<button className='buttonDiv' onClick={deleteById}>
					<MdDelete className='button' />
				</button>
			</div>
		</ProductDashboardStyle>
	);
};

export default CardItems;
