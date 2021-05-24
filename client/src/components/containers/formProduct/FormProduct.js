/* eslint-disable react/jsx-pascal-case */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FormProductStyle from './styled';
import FormBrands from '../formBrands/FormBrands';
import {IoCloseSharp} from 'react-icons/io5';
import Dropdown from '../dropdown/specific.js';
import TagsInput from '../tagsInput';
import {
	addNewProduct,
	getCategories,
	getProducts,
	emptyProductCreated,
	getBrands,
} from '../../../redux/actions';
import validate from '../../../utils/formValidate.js';
import setter from '../../../utils/setterInput.js';
import Swal from 'sweetalert2';

const FormProduct = () => {
	const allCategories = useSelector((state) => state.categories);
	const allProducts = useSelector((state) => state.products.products);
	const allBrands = useSelector((state) => state.brands);
	const productCreated = useSelector((state) => state.productCreated);
	const dispatch = useDispatch();
	const [tagsUrl, setTagsUrl] = useState([]);
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState({
		init: false,
		completed: false,
	});
	const [variantIdGenerator, setVariantIdGenerator] = useState(1);
	const [product, setProduct] = useState({
		name: '',
		description: '',
		priceValue: '',
		currency: [],
		brands: [],
		categoriesSelected: [],
		variantItemSelected: [],
		variant: {},
		specs: {},
		allVariants: [],
	});
	const categoriesNames = allCategories.map((c) => c.name);
	const brandsNames = allBrands.map((b) => b.name);
	let variants = [];
	let specs = [];
	if (product.categoriesSelected.length) {
		allCategories.forEach((item) => {
			if (product.categoriesSelected.includes(item.name)) {
				variants = [...variants.concat(item.variants)].filter(
					(valor, indice) => {
						return (
							[...variants.concat(item.variants)].indexOf(valor) === indice
						);
					}
				);
				specs = [...specs.concat(item.specs)].filter((valor, indice) => {
					return [...specs.concat(item.specs)].indexOf(valor) === indice;
				});
			}
		});
	}

	const currencies = ['USD', 'ARS'];

	useEffect(() => {
		dispatch(getProducts('', '', '', '', '', '', '', Infinity));
		dispatch(getCategories());
		dispatch(getBrands());
		return () => {
			dispatch(emptyProductCreated());
		};
	}, [dispatch]); // eslint-disable-next-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (productCreated.hasOwnProperty('name') && status.completed) {
			Swal.fire({
				title: 'Success!',
				text: 'Product succesfully created',
				icon: 'success',
				confirmButtonText: 'Ok',
			});
		} else if (!productCreated.hasOwnProperty('name') && status.completed) {
			Swal.fire({
				title: 'Error',
				text: productCreated.message,
				icon: 'error',
				confirmButtonText: 'Ok',
			});
		}
		if (!status.init && status.completed) {
			dispatch(emptyProductCreated());
		}
		setStatus({
			...status,
			completed: false,
		}); // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [productCreated]);

	const changeInput = (e) => {
		setProduct({
			...product,
			[e.target.name]: e.target.value,
		});
		setStatus({
			init: true,
			completed: false,
		});
		setErrors(
			validate(
				{
					...product,
					[e.target.name]: e.target.value,
				},
				allProducts
			)
		);
	};

	const changeInputVariant = (e) => {
		setProduct({
			...product,
			variant: {...product.variant, [e.target.name]: e.target.value},
		});
		setStatus({
			init: true,
			completed: false,
		});
		setErrors(
			validate(
				{
					...product,
					variant: {...product.variant, [e.target.name]: e.target.value},
				},
				allProducts
			)
		);
	};
	const changeInputSpecs = (e) => {
		setProduct({
			...product,
			specs: {...product.specs, [e.target.name]: e.target.value},
		});
		setStatus({
			init: true,
			completed: false,
		});
	};
	const handleClickVariants = () => {
		setVariantIdGenerator(variantIdGenerator + 1);
		setProduct({
			...product,
			allVariants: [
				...product.allVariants,
				{...product.variant, id: variantIdGenerator},
			],
			variant: setter({...product.variant}),
		});
		setStatus({
			init: true,
			completed: false,
		});
	};

	const handleVariantDelete = (e) => {
		setProduct({
			...product,
			allVariants: product.allVariants.filter(
				(item) => item.id !== Number(e.target.id)
			),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const obj = {
			...product,
			price: {
				value: product.priceValue,
				currency: product.currency[0],
			},
			variants: product.allVariants,
			brands: product.brands,
			categories: product.categoriesSelected,
			imageUrl: [...tagsUrl],
			specs: product.specs,
		};
		dispatch(addNewProduct(obj));
		setProduct(setter(product));
		setTagsUrl(setter(tagsUrl));
		setErrors({});
		setStatus({
			init: false,
			completed: true,
		});
	};

	const [visibilidad, setVisibilidad] = useState(false);

	return (
		<FormProductStyle>
			<div className='form__container'>
				<div className='row'>
					<h1 className='form__title'>Add Product</h1>
					<div className='close__icon'>
						<IoCloseSharp />
					</div>
				</div>

				<form className='product__form'>
					<div className='form__wrapper'>
						<div className='form__column'>
							<div className='form__element'>
								<label className='form__label'>name</label>
								<input
									className='form__input'
									type='text'
									id='name'
									name='name'
									value={product.name}
									onChange={(e) => changeInput(e)}
								></input>
								{errors.name && <p className='danger'>{errors.name}</p>}
							</div>
							<div className='form__element'>
								<label className='form__label'>brands</label>
								<Dropdown
									title='select brands'
									name='brands'
									multiselect
									items={brandsNames}
									options={product.brands}
									setProduct={(el) => setProduct(el)}
									product={product}
								></Dropdown>
								{status.init && !errors.name && !product.brands.length ? (
									<p className='danger'>
										{'You must select at least one brand.'}
									</p>
								) : (
									<></>
								)}
							</div>
							<div className='form__element'>
								<label className='form__label'>description</label>
								<textarea
									className='form__input'
									type='text'
									name='description'
									value={product.description}
									onChange={(e) => changeInput(e)}
								></textarea>
								{errors.description && product.brands.length ? (
									<p className='danger'>{errors.description}</p>
								) : (
									<></>
								)}
							</div>

							<div className='row'>
								<div className='form__element'>
									<Dropdown
										title='currency'
										name='currency'
										items={currencies}
										options={product.currency}
										setProduct={(el) => setProduct(el)}
										product={product}
									></Dropdown>
									{status.init &&
									!errors.description &&
									!product.currency.length ? (
										<p className='danger'>Required field</p>
									) : (
										<></>
									)}
								</div>
								<div className='form__element ml mr'>
									<label className='form__label'>price</label>
									<input
										id='form__input__price'
										className='form__input'
										type='number'
										name='priceValue'
										value={product.priceValue}
										onChange={(e) => changeInput(e)}
									></input>
									{errors.priceValue && (
										<p className='danger'>{errors.priceValue}</p>
									)}
								</div>
							</div>
							<div className='form__element'>
								<label className='form__label'>Image URL:</label>
								<TagsInput
									tags={tagsUrl}
									setTags={setTagsUrl}
									setErrors={setErrors}
								></TagsInput>
								{errors.url && <p className='danger'>{errors.url}</p>}
								{status.init && !errors.priceValue && !tagsUrl.length ? (
									<p className='danger'>Required field</p>
								) : (
									<></>
								)}
							</div>
						</div>

						<div className='form__column'>
							<div className='form__element'>
								<label className='form__label'>categories</label>
								<Dropdown
									title={'select categories'}
									name='categories'
									items={categoriesNames}
									multiselect
									options={product.categoriesSelected}
									setProduct={(el) => setProduct(el)}
									product={product}
								></Dropdown>
							</div>

							<label className='form__label'>variants</label>
							<Dropdown
								title='select variants'
								name='variants'
								items={variants}
								multiselect
								options={product.variantItemSelected}
								variantsProduct={product.variant}
								setProduct={(el) => setProduct(el)}
								product={product}
								allProducts={allProducts}
								setErrors={(el) => setErrors(el)}
							></Dropdown>
							<div>
								<div className='form__element'>
									{product.variantItemSelected.length ? (
										product.variantItemSelected.map((variant, index) => (
											<div key={variant + index + 'container'}>
												<label className='form__label'>{variant}</label>
												<input
													key={variant + index}
													className='variant form__input form__input__variant'
													type={variant === 'stock' ? 'number' : 'text'}
													name={variant}
													value={product.variant[variant]}
													onChange={(e) => changeInputVariant(e)}
												></input>
											</div>
										))
									) : (
										<div> </div>
									)}
									{errors.variantImageUrl && (
										<p className='danger'>{errors.variantImageUrl}</p>
									)}
									{errors.variant && <p className='danger'>{errors.variant}</p>}
									{product.variantItemSelected.length >
										Object.keys(product.variant).length && (
										<p className='danger'>
											{'You must complete all the fields you select.'}
										</p>
									)}
									{errors.variantStock && (
										<p className='danger'>{errors.variantStock}</p>
									)}
									{product.variantItemSelected.length ? (
										<button
											type='button'
											id='add_variant_btn'
											className='form__button'
											onClick={handleClickVariants}
											disabled={
												Object.keys(errors).length ||
												product.variantItemSelected.length >
													Object.values(product.variant).filter(
														(value) => value
													).length
													? 'disabled'
													: ''
											}
										>
											Add Variant
										</button>
									) : (
										<div> </div>
									)}
									<div className='form__element'>
										{product.allVariants.length ? (
											product.allVariants.map((item, i) => (
												<div id='form__variant__card' className='form__element'>
													<button
														id={item.id}
														key={item.id + 'btn'}
														className='form__button form__button__delete'
														type='button'
														onClick={(e) => handleVariantDelete(e)}
													>
														{' '}
														X{' '}
													</button>
													{Object.keys(item).map((key) => (
														<div>
															<label
																key={item.id + '-label'}
																className='form__label'
															>
																{key}:{' '}
															</label>
															<span
																key={item.id + '-span'}
																name={key}
																className='form__span'
															>
																{product.allVariants[i][key]}
															</span>
														</div>
													))}
												</div>
											))
										) : (
											<div> </div>
										)}
									</div>
									{specs.length ? (
										specs.map((item, i) => (
											<div>
												<label className='form__label'>{item}</label>
												<input
													key={item + i}
													className='specs form__input form__input__variant'
													type='text'
													name={item}
													value={product.specs[item]}
													onChange={(e) => changeInputSpecs(e)}
												></input>
											</div>
										))
									) : (
										<div> </div>
									)}
								</div>
							</div>
						</div>
					</div>

					<button
						className='form__button'
						onClick={(e) => handleSubmit(e)}
						disabled={
							errors.name ||
							errors.brands ||
							errors.description ||
							errors.price ||
							errors.url ||
							!product.name ||
							!tagsUrl.length
								? 'disabled'
								: ''
						}
					>
						Save
					</button>
				</form>
				<button
					className='form__button'
					onClick={() => setVisibilidad(!visibilidad)}
				>
					Add Brand
				</button>
			</div>
			{visibilidad ? <FormBrands /> : null}
		</FormProductStyle>
	);
};

export default FormProduct;
