import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FormProductStyle from './styled';
import Checkbox from '../checkbox';
import FormBrands from '../formBrands/FormBrands';
import {IoCloseSharp} from 'react-icons/io5';
import Dropdown from '../dropdown/specific.js';
import TagsInput from '../tagsInput';
import {
	addNewProduct,
	getCategories,
	getProducts,
	emptyProductCreated,
} from '../../../redux/actions';
import validate from '../../../utils/formValidate.js';
import setter from '../../../utils/setterInput.js';
import Swal from 'sweetalert2';

const FormProduct = () => {
	const allCategories = useSelector((state) => state.categories);
	const allProducts = useSelector((state) => state.products.products);
	const productCreated = useSelector((state) => state.productCreated);
	const dispatch = useDispatch();
	const [variantSelected, setVariants] = useState([]);
	const [tags, setTags] = useState([]);
	const [categorySelected, setCategories] = useState([]);
	const [currency, setCurrency] = useState([]);
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState({
		init: false,
		completed: false,
	});
	const [product, setProduct] = useState({
		name: '',
		description: '',
		price: '',
		brands: '',
		variant: {},
		specs: {},
		allVariants: [],
	});
	const categories = allCategories.map((c) => c.name);
	const [variantIdGenerator, setVariantIdGenerator] = useState(1);
	const variants = categorySelected.length
		? allCategories.filter(
				(item) => item.name === categorySelected[0].categories
		  )[0].variants
		: [];
	const currencies = ['USD', 'ARS'];

	useEffect(() => {
		dispatch(getProducts('', '', '', '', '', '', '', Infinity));
		dispatch(getCategories());
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
		} else if (!productCreated.hasOwnProperty('name') && status.completed) {
			Swal.fire({
				title: 'Error',
				text: productCreated.error,
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
		});
	}, [productCreated]);

	const ChangeInput = (e) => {
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

	const changeInputVariant = (e) => {
		setProduct({
			...product,
			variant: {...product.variant, [e.target.name]: e.target.value},
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
		const price = {};
		price.currency = currency[0].currency;
		price.value = product.price;

		const obj = {
			...product,
			variants: product.allVariants,
			categories: categorySelected[0] ? [categorySelected[0].categories] : [],
			imageUrl: [...tags],
			price,
		};
		dispatch(addNewProduct(obj));
		setProduct(setter(product));
		setCategories(setter(categorySelected));
		setVariants(setter(variantSelected));
		setTags(setter(tags));
		setCurrency(setter(currency));
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
									onChange={(e) => ChangeInput(e)}
								></input>
								{errors.name && <p className='danger'>{errors.name}</p>}
							</div>
							<div className='form__element'>
								<label className='form__label'>brand</label>
								<input
									className='form__input'
									type='text'
									id='brands'
									name='brands'
									value={product.brands}
									onChange={(e) => ChangeInput(e)}
								></input>
								{errors.brands && <p className='danger'>{errors.brands}</p>}
							</div>
							<div className='form__element'>
								<label className='form__label'>description</label>
								<textarea
									className='form__input'
									type='text'
									name='description'
									value={product.description}
									onChange={(e) => ChangeInput(e)}
								></textarea>
								{errors.description && (
									<p className='danger'>{errors.description}</p>
								)}
							</div>

							<div className='row'>
								<div className='form__element'>
									<label className='form__label'>currency</label>
									<Dropdown
										title='currency'
										name='currency'
										items={currencies}
										setOptions={(el) => setCurrency(el)}
										options={currency}
									></Dropdown>
								</div>
								<div className='form__element ml mr'>
									<label className='form__label'>price</label>
									<input
										className='form__input'
										type='number'
										name='price'
										value={product.price}
										onChange={(e) => ChangeInput(e)}
									></input>
									{errors.price && <p className='danger'>{errors.price}</p>}
								</div>
							</div>
							<div className='form__element'>
								<label className='form__label'>Image URL:</label>
								<TagsInput
									tags={tags}
									setTags={setTags}
									setErrors={setErrors}
								></TagsInput>
								{errors.url && <p className='danger'>{errors.url}</p>}
							</div>
						</div>

						<div className='form__column'>
							<div className='form__element'>
								<label className='form__label'>categories</label>
								<Dropdown
									title='select category'
									name='categories'
									items={categories}
									setOptions={(el) => setCategories(el)}
									options={categorySelected}
									setVariants={(el) => setVariants(el)}
									variantsProduct={product.variant}
									setProduct={(el) => setProduct(el)}
									products={product}
								></Dropdown>
							</div>

							<label className='form__label'>variants</label>
							<Dropdown
								title='select variants'
								name='variants'
								items={variants}
								multiselect
								setOptions={(el) => setVariants(el)}
								options={variantSelected}
								variantsProduct={product.variant}
								setProduct={(el) => setProduct(el)}
								products={product}
							></Dropdown>
							<div>
								<div className='form__element'>
									{variantSelected.length ? (
										variantSelected.map((variant, index) => (
											<div key={variant + index + 'container'}>
												<label className='form__label'>{variant}</label>
												<input
													key={variant + index}
													className='form__input form__input__variant'
													type='text'
													name={variant}
													value={product.variant[variant]}
													onChange={(e) => changeInputVariant(e)}
												></input>
											</div>
										))
									) : (
										<div> </div>
									)}
									{variantSelected.length ? (
										<button
											type='button'
											id='add_variant_btn'
											className='form__button'
											onClick={handleClickVariants}
											disabled={
												Object.keys(product.variant).length ? '' : 'disabled'
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
							errors.brands ||
							errors.price ||
							errors.url ||
							!product.name
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
					Agregar marca
				</button>
			</div>
			{visibilidad ? <FormBrands /> : null}
		</FormProductStyle>
	);
};

export default FormProduct;
