import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ProductDashboardStyle from './styled.js';
import DataListInput from 'react-datalist-input';
import {
	addNewProduct,
	getCategories,
	getProducts,
	emptyProductCreated,
	getBrands,
} from '../../../../redux/actions';
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';
import {
	changeInput,
	handleSearch,
	handleDataList,
	addItemListSelected,
	changeInputVariant,
	handleClickVariants,
	handleVariantDelete,
	changeInputSpecs,
	handleSubmit,
	handleDeleteLabels,
} from './utils.js';
import Swal from 'sweetalert2';

import {RiCloseFill} from 'react-icons/ri';

const FormProductDashboard = ({showModal, setShowModal}) => {
	const allCategories = useSelector((state) => state.categories);
	const allProducts = useSelector((state) => state.products.products);
	const allBrands = useSelector((state) => state.brands);
	const productCreated = useSelector((state) => state.productCreated);
	const dispatch = useDispatch();

	const closeModal = () => {
		setShowModal((prev) => !prev);
	};

	const [product, setProduct] = useState({
		name: '',
		description: '',
		priceValue: '',
		currency: 'USD',
		brands: [],
		categories: [],
		variantItems: [],
		variant: {
			imageFile: [],
			fileInput: '',
			file: [],
		},
		allVariants: [],
		allVariantsFiles: [],
		specsItems: [],
		specs: {},
		combo: [],
	});
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState({
		init: false,
		completed: false,
	});
	const [datalistBrands, setDatalistBrands] = useState([{}]);
	const [datalistCategories, setDatalistCategories] = useState([{}]);
	const [datalistProducts, setDatalistProducts] = useState([{}]);
	const newMatch = (currentInput, item) =>
		item.label && item.label.toLowerCase().includes(currentInput.toLowerCase());
	const [brandSelected, setBrandSelected] = useState({});
	const [categorySelected, setCategorySelected] = useState({});
	const [variantIdGenerator, setVariantIdGenerator] = useState(1);
	const [AccStatus, setAccStatus] = useState(false);
	const [AccStatusSpecs, setAccStatusSpecs] = useState(false);

	useEffect(() => {
		dispatch(getProducts('', '', '', '', '', '', '', Infinity));
		dispatch(getCategories());
		dispatch(getBrands());
		return () => {
			dispatch(emptyProductCreated());
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	useEffect(() => {
		if (productCreated.hasOwnProperty('name') && status.completed) {
			Swal.fire({
				title: 'Success!',
				text: 'Product succesfully created',
				icon: 'success',
				confirmButtonText: 'Ok',
			});
		}
		if (!productCreated.hasOwnProperty('name') && status.completed) {
			Swal.fire({
				title: 'Error',
				text: productCreated.message,
				icon: 'error',
				confirmButtonText: 'Ok',
			});
		}
		if (!status.init && status.completed) {
			dispatch(emptyProductCreated());
			setStatus({
				...status,
				completed: false,
			});
		}
	}, [productCreated]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			{showModal ? (
				<ProductDashboardStyle>
					<div className='form__container'>
						<form
							encType='multipart/form-data'
							onSubmit={(e) =>
								handleSubmit(
									e,
									product,
									setProduct,
									dispatch,
									addNewProduct,
									setErrors,
									setStatus
								)
							}
						>
							<div className='productAllInfo'>
								<div className='top-row'>
									<h3 className='top-title'>Create New Product</h3>
									<i className='close-icon' onClick={closeModal}>
										<RiCloseFill />
									</i>
								</div>

								<div className='productInfo'>
									<div className='left'>
										<div className='renglon2'>
											<span className='title'>Name &nbsp;</span>
											<input
												type='text'
												className='form_input'
												name='name'
												value={product.name}
												onChange={(e) =>
													changeInput(
														e,
														product,
														setProduct,
														setStatus,
														setErrors,
														allProducts
													)
												}
											></input>
										</div>
										{errors.name && <p className='danger'>{errors.name}</p>}
										<div className='renglon2'>
											<div className='title'>Description &nbsp;</div>
											<textarea
												type='text'
												className='form_input'
												name='description'
												value={product.description}
												onChange={(e) =>
													changeInput(
														e,
														product,
														setProduct,
														setStatus,
														setErrors,
														allProducts
													)
												}
											></textarea>
										</div>
										{errors.description && (
											<p className='danger'>{errors.description}</p>
										)}
										<div className='renglon2'>
											<div className='title'>Price &nbsp;</div>
											<div className='input-container'>
												<input
													id='form__input__price'
													className='form_input'
													type='number'
													min='1'
													name='priceValue'
													value={product.priceValue}
													onChange={(e) =>
														changeInput(
															e,
															product,
															setProduct,
															setStatus,
															setErrors,
															allProducts
														)
													}
												></input>
												<select
													className='select-style'
													onChange={(e) =>
														changeInput(
															e,
															product,
															setProduct,
															setStatus,
															setErrors,
															allProducts
														)
													}
													name='currency'
												>
													<option className='option-style' value='ARS'>
														ARS
													</option>
													<option className='option-style' value='USD' selected>
														USD
													</option>
												</select>
											</div>
										</div>
										{errors.priceValue && (
											<p className='danger'>{errors.priceValue}</p>
										)}

										<div className='renglon2'>
											<div className='title'>Brands &nbsp;</div>

											<div className='input-container'>
												<DataListInput
													inputClassName='datalist-input-form form_input'
													placeholder='Search...'
													items={datalistBrands}
													match={newMatch}
													requiredInputLength={2}
													onInput={(e) =>
														handleSearch(
															e,
															allBrands,
															'Brands',
															setDatalistBrands
														)
													}
													onSelect={(e) => handleDataList(e, setBrandSelected)}
												/>

												<button
													type='button'
													className='btnFormProduct'
													name='brands'
													onClick={(e) =>
														addItemListSelected(
															e,
															product,
															setProduct,
															brandSelected,
															undefined,
															setErrors,
															allProducts
														)
													}
												>
													Add
												</button>
											</div>
										</div>
										<div>
											{errors.brands ? (
												<p className='danger'>{errors.brands}</p>
											) : product.brands.length ? (
												product.brands.map((brand) => (
													<span>
														{' '}
														<label> {brand.label} </label>{' '}
														<button
															id={brand.key}
															name='brands'
															type='button'
															className='btnFormProduct '
															onClick={(e) => handleDeleteLabels(e, setProduct)}
														>
															{' '}
															X{' '}
														</button>{' '}
													</span>
												))
											) : (
												<></>
											)}
										</div>
										<div className='renglon2'>
											<div className='title'>Categories &nbsp;</div>

											<div className='input-container'>
												<DataListInput
													inputClassName='datalist-input-form form_input'
													placeholder='Search...'
													items={datalistCategories}
													match={newMatch}
													requiredInputLength={2}
													onInput={(e) =>
														handleSearch(
															e,
															allCategories,
															'Categories',
															setDatalistCategories
														)
													}
													onSelect={(e) =>
														handleDataList(e, setCategorySelected)
													}
												/>
												<button
													type='button'
													className='btnFormProduct'
													name='categories'
													onClick={(e) =>
														addItemListSelected(
															e,
															product,
															setProduct,
															categorySelected,
															allCategories,
															setErrors,
															allProducts
														)
													}
												>
													Add
												</button>
											</div>
										</div>
										<div>
											{errors.categories ? (
												<p className='danger'>{errors.categories}</p>
											) : (
												product.categories &&
												product.categories.map((category) => (
													<span>
														{' '}
														<label> {category.label} </label>{' '}
														<button
															id={category.key}
															name='categories'
															type='button'
															className='btnFormProduct'
															onClick={(e) => handleDeleteLabels(e, setProduct)}
														>
															{' '}
															X{' '}
														</button>{' '}
													</span>
												))
											)}
										</div>
									</div>

									<div className='right'>
										<div className='renglon2'>
											<div className='title'>Variants &nbsp;</div>

											<Accordion allowZeroExpanded>
												<AccordionItem onClick={() => setAccStatus(!AccStatus)}>
													<AccordionItemButton className='title2'>
														Display options
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
														{product.variantItems &&
															product.variantItems.map((variant, index) => (
																<AccordionItemPanel>
																	<div key={variant + index + 'container'}>
																		<label>{variant}: </label>
																		<input
																			key={variant + index}
																			className='inputText'
																			type={
																				variant === 'stock'
																					? 'number'
																					: variant === 'imageFile'
																					? 'file'
																					: 'text'
																			}
																			multiple
																			name={variant}
																			value={
																				variant === 'imageFile'
																					? product.variant.fileInput
																					: product.variant[variant]
																			}
																			onChange={(e) =>
																				changeInputVariant(
																					e,
																					product,
																					setProduct,
																					setErrors,
																					allProducts
																				)
																			}
																		></input>
																	</div>
																</AccordionItemPanel>
															))}
													</div>

													<div>
														{product.variantItems.length ? (
															<button
																type='button'
																name='addVariant'
																className='btnFormProduct'
																onClick={() =>
																	handleClickVariants(
																		variantIdGenerator,
																		setVariantIdGenerator,
																		product,
																		setProduct
																	)
																}
																disabled={
																	Object.keys(errors).length ||
																	!product.variant.stock
																		? 'disabled'
																		: ''
																}
															>
																Add Variant
															</button>
														) : (
															<></>
														)}
													</div>

													{errors.variants && (
														<p className='danger'>{errors.variants}</p>
													)}
												</AccordionItem>
											</Accordion>
										</div>
										<div className='renglon2'>
											{product.allVariants.length ? (
												product.allVariants.map((item, i) => (
													<div>
														<button
															id={item.id}
															key={item.id + 'btn'}
															className='btnFormProduct'
															type='button'
															onClick={(e) =>
																handleVariantDelete(e, setProduct)
															}
														>
															{' '}
															X{' '}
														</button>
														{Object.keys(item).map(
															(key) =>
																key !== 'id' && (
																	<div>
																		<label key={item.id + '-label'}>
																			{key}:{' '}
																		</label>
																		<span key={item.id + '-span'} name={key}>
																			{product.allVariants[i][key]}
																		</span>
																	</div>
																)
														)}
													</div>
												))
											) : (
												<div> </div>
											)}
										</div>

										<div className='renglon2'>
											<div className='title'>Specs &nbsp;</div>
											<Accordion allowZeroExpanded>
												{
													<AccordionItem
														onClick={() => setAccStatusSpecs(!AccStatusSpecs)}
													>
														<AccordionItemButton className='title2'>
															Display options
															{AccStatusSpecs === false ? (
																<MdKeyboardArrowDown
																	className='open'
																	onClick={() =>
																		setAccStatusSpecs(!AccStatusSpecs)
																	}
																/>
															) : (
																<MdKeyboardArrowUp
																	className='open'
																	onClick={() =>
																		setAccStatusSpecs(!AccStatusSpecs)
																	}
																/>
															)}
														</AccordionItemButton>
														<div className='accordionItems'>
															<AccordionItemPanel>
																<div>
																	{product.specsItems.length ? (
																		product.specsItems.map((item, i) => (
																			<div>
																				<label>{item}</label>
																				<input
																					key={item + i}
																					className='form_input'
																					type='text'
																					name={item}
																					value={product.specs[item]}
																					onChange={(e) =>
																						changeInputSpecs(e, setProduct)
																					}
																				></input>
																			</div>
																		))
																	) : (
																		<div> </div>
																	)}
																</div>
															</AccordionItemPanel>
														</div>
													</AccordionItem>
												}
											</Accordion>
										</div>
										<div className='renglon2'>
											<div className='title'>Combo &nbsp;</div>
											<div className='input-container'>
												<DataListInput
													inputClassName='datalist-input-form form_input'
													placeholder='Search...'
													items={datalistProducts}
													match={newMatch}
													requiredInputLength={2}
													onInput={(e) =>
														handleSearch(
															e,
															allProducts,
															'Products',
															setDatalistProducts
														)
													}
													onSelect={(e) =>
														handleDataList(e, setCategorySelected)
													}
												/>
												<button
													type='button'
													className='btnFormProduct'
													name='combo'
													onClick={(e) =>
														addItemListSelected(
															e,
															product,
															setProduct,
															categorySelected,
															allCategories,
															setErrors,
															allProducts
														)
													}
												>
													Add
												</button>
											</div>
										</div>
										<div>
											{errors.combo ? (
												<p className='danger'>{errors.combo}</p>
											) : (
												product.combo &&
												product.combo.map((combo) => (
													<span>
														{' '}
														<label> {combo.label} </label>{' '}
														<button
															id={combo.key}
															name='combo'
															type='button'
															className='btnFormProduct'
															onClick={(e) => handleDeleteLabels(e, setProduct)}
														>
															{' '}
															X{' '}
														</button>{' '}
													</span>
												))
											)}
										</div>
									</div>
								</div>

								<div className='bottom-row'>
									<div
										className='btnFormCreateProductSecondary'
										onClick={closeModal}
									>
										Cancel
									</div>
									<input
										className='btnFormCreateProduct'
										type='submit'
										text='Create'
										disabled={
											Object.keys(errors).length || !status.init
												? 'disabled'
												: ''
										}
									/>
								</div>
							</div>
						</form>
					</div>
				</ProductDashboardStyle>
			) : null}
		</>
	);
};

export default FormProductDashboard;
