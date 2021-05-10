import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FormProductStyle from './styled';
import {IoCloseSharp} from 'react-icons/io5';
import Checkbox from '../checkbox';
import Dropdown from '../dropdown';
import TagsInput from '../tagsInput';
import {
	addNewProduct,
	getCategories,
	getProducts,
} from '../../../redux/actions';
import validate from '../../../utils/formValidate.js';
import setter from '../../../utils/setterInput.js';

const FormProduct = () => {
	const allCategories = useSelector((state) => state.categories);
	const categories = allCategories.map((c) => c.name);
	const allProducts = useSelector((state) => state.products.products);
	const [variantSelected, setVariants] = useState([]);
	const [tags, setTags] = useState([]);
	const [categorySelected, setCategories] = useState([]);
	const [currency, setCurrency] = useState([]);
	const [errors, setErrors] = useState({});
	const dispatch = useDispatch();
	const [product, setProduct] = useState({
		_id: 0,
		name: '',
		description: '',
		price: '',
		brands: '',
		variants: {},
	});
	const variants = categorySelected.length
		? allCategories.filter(
				(item) => item.name === categorySelected[0].categories
		  )[0].variants
		: [];
	const currencies = ['U$S', 'ARS$'];
	useEffect(() => {
		dispatch(getProducts(undefined, undefined, undefined, undefined, 100));
		dispatch(getCategories());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const ChangeInput = (e) => {
		setProduct({
			...product,
			[e.target.name]: e.target.value,
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
			variants: {...product.variants, [e.target.name]: e.target.value},
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const price = {};
		price.currency = currency[0].currency;
		price.value = product.price;

		const obj = {
			...product,
			variants: product.variants,
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
	};

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
										setVariants={(el) => setCurrency(el)}
										variants={currency}
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
						</div>

						<div className='form__column'>
							<div className='form__element'>
								<label className='form__label'>categories</label>
								<Dropdown
									title='select category'
									name='categories'
									items={categories}
									setVariants={(el) => setCategories(el)}
									variants={categorySelected}
								></Dropdown>
							</div>

							<label className='form__label'>variants</label>
							<Dropdown
								title='select variants'
								name='variants'
								items={variants}
								multiselect
								setVariants={(el) => setVariants(el)}
								variants={variantSelected}
								variantsProduct={product.variants}
								setProduct={(el) => setProduct(el)}
								products={product}
							></Dropdown>
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
												value={product.variants[variant]}
												onChange={(e) => changeInputVariant(e)}
											></input>
										</div>
									))
								) : (
									<div> </div>
								)}
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
			</div>
		</FormProductStyle>
	);
};

export default FormProduct;
