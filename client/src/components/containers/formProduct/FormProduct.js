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
	getAllProducts,
} from '../../../redux/actions';

// import { getCategories } from "../../../redux/actions/index.js";

export function validate(product, allProducts) {
	let errors = {};

	if (!product.name) {
		errors.name = 'Campo requerido.';
	}
	if (!product.brands) {
		errors.brands = 'Campo requerido.';
	}
	if (!product.description) {
		errors.description = 'Campo requerido.';
	}
	if (!product.price) {
		errors.price = 'Campo requerido.';
	}

	if (product.price && !/[0-9]+$/.test(product.price)) {
		errors.price = 'Sólo números.';
	}

	if (product.name && !/^[A-Za-z\s]+$/g.test(product.name)) {
		errors.name = 'Sólo palabras sin tilde.';
	}

	if (
		product.name &&
		allProducts.length &&
		allProducts.find(
			(element) =>
				element.name.toLowerCase().trim() === product.name.toLowerCase().trim()
		)
	) {
		errors.name = 'El producto ya existe.';
	}
	if (product.imageUrl && !/.jpeg|.png/.test(product.imageUrl)) {
		errors.url = 'Coloca una URL válida';
	}

	/*  if (
   product.imageUrl &&
   (!/image\/jpeg|png/.test(product.imageUrl[0]) || product.imageUrl > 5242880)
 ) {
   errors.file = "Sólo imágenes .png y .jpeg, menores a 5.24 MB.";
 }
 */
	return errors;
}

const FormProduct = () => {
	const allCategories = useSelector((state) => state.categories);
	const categories = allCategories.map((c) => c.name);
	const allProducts = useSelector((state) => state.products);
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
		price: 0,
		imageUrl: [],
		categories: [],
		brands: '',
		variants: [],
	});
	const variants = categorySelected.length
		? allCategories.filter(
				(item) => item.name === categorySelected[0].categories
		  )[0].variants
		: [];
	const currencies = ['U$S', 'ARS$'];

	useEffect(() => {
		dispatch(getAllProducts());
		dispatch(getCategories());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const ChangeInput = (e) => {
		setProduct({
			...product,
			[e.target.name]: e.target.value,
			categories: [...categorySelected],
			variants: [...variantSelected],
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

		console.log(errors);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const price = {};
		price.currency = currency[0].currency;
		price.value = product.price;

		const obj = {
			...product,
			variants: {...variantSelected[0]},
			categories: categorySelected,
			imageUrl: [...tags],
			price,
		};

		dispatch(addNewProduct(obj));
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
										min={1}
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
							<div className='form__element'>
								<label className='form__label'>variants</label>
								<Dropdown
									title='select variants'
									name='variants'
									items={variants}
									setVariants={(el) => setVariants(el)}
									variants={variantSelected}
								></Dropdown>
							</div>
							<div className='form__element'>
								<label className='form__label'>Image URL:</label>
								<TagsInput tags={tags} setTags={setTags}></TagsInput>
							</div>
						</div>
					</div>

					<button className='form__button' onClick={(e) => handleSubmit(e)}>
						Save
					</button>
				</form>
			</div>
		</FormProductStyle>
	);
};

export default FormProduct;
