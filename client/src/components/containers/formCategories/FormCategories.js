import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleContainer} from './styled';
import {getCategories, getProducts} from '../../../redux/actions';
import DataListInput from 'react-datalist-input';
import axios from 'axios';
import {URLS} from '../../../utils/constants';
import Swal from 'sweetalert2';
import validate from '../../../utils/categorieValidate';

const FormCategorie = () => {
	const dispatch = useDispatch();
	const allCategories = useSelector((state) => state.categories);
	const categories = allCategories.map((c) => c.name);
	const allProducts = useSelector((state) => state.products.products);
	const [Inputs, setInputs] = useState({
		edit: false,
		id: '',
		categories: [],
		variants: [],
		products: [],
		periferic: false,
	});
	const [Datalist, setDatalist] = useState([{key: '', label: ''}]);
	const [Variants, setVariants] = useState([]);
	const [ProductsAdd, setProductsAdd] = useState();
	const [Errors, setErrors] = useState({});

	useEffect(() => {
		dispatch(getCategories());
		dispatch(getProducts('', '', '', '', '', '', '', Infinity));
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const newMatch = (currentInput, item) =>
		item.label && item.label.toLowerCase().includes(currentInput.toLowerCase());

	const handleSelectEdit = (e) => {
		if (e.target.value === 'none')
			setInputs({
				edit: false,
				id: '',
				categories: [],
				variants: [],
				products: [],
				periferic: false,
			});
		else {
			const categorie = allCategories.filter(
				(el) => el.name === e.target.value
			);
			setInputs({
				edit: true,
				id: categorie[0]._id,
				categories: [categorie[0].name],
				variants: categorie[0].variants,
				products: categorie[0].products,
			});
		}
	};

	const handleSearch = (e) => {
		let productsFilter = allProducts.filter((el) =>
			el.product.name.toLowerCase().includes(e.toLowerCase())
		);
		if (Inputs.edit === true) {
			let total =
				productsFilter.length &&
				productsFilter.filter((ele) => {
					let existProductInCategory = ele.product.categories.find(
						(el) => el.name === Inputs.categories[0]
					);
					if (existProductInCategory) return false;
					return true;
				});
			return productsToOptions(total);
		}
		return productsToOptions(productsFilter);
	};

	const productsToOptions = (array) => {
		setDatalist(
			array &&
				array.map((el) => {
					return {key: el.product._id, label: el.product.name};
				})
		);
	};

	const handleOnChange = (e) => {
		e.target.name === 'categories'
			? setInputs({...Inputs, [e.target.name]: [e.target.value]})
			: setInputs({...Inputs, [e.target.name]: e.target.value});
		setErrors(
			validate({
				...Inputs,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleVariantsInput = (e) => {
		setErrors(
			validate({
				...Inputs,
				[e.target.name]: e.target.value,
			})
		);
		setVariants(e.target.value);
	};

	const addVariants = (e) => {
		e.preventDefault();
		setInputs({...Inputs, variants: Inputs.variants.concat(Variants)});
		setVariants('');
	};
	const handleDataList = (e) => {
		setProductsAdd(e.key);
	};

	const addProducts = (e) => {
		e.preventDefault();
		setInputs({...Inputs, products: Inputs.products.concat(ProductsAdd)});
	};

	const handleDelete = async (e) => {
		e.preventDefault();
		try {
			if (Inputs.edit === true) {
				let response = await axios.delete(URLS.URL_CATEGORIES, {data: Inputs});
				dispatch(getCategories());
				setInputs({
					edit: false,
					id: '',
					categories: [],
					variants: [],
					products: [],
					periferic: false,
				});
				if (response.data.message === 'Success') {
					Swal.fire({
						title: 'Success!',
						text: 'Categorie succesfully Delete',
						icon: 'warning',
						confirmButtonText: 'Ok',
					});
				}
			}
		} catch (err) {
			Swal.fire({
				title: 'Error',
				text: err.response.data.message,
				icon: 'error',
				confirmButtonText: 'Ok',
			});
		}
	};
	const handleOnSumbit = async (e) => {
		e.preventDefault();
		try {
			if (Inputs.edit === true) {
				let response = await axios.put(URLS.URL_CATEGORIES, Inputs);
				if (response.data.message === 'Success') {
					Swal.fire({
						title: 'Success!',
						text: 'Categorie succesfully Modified',
						icon: 'success',
						confirmButtonText: 'Ok',
					});
				}
			} else {
				let response = await axios.post(URLS.URL_CATEGORIES, Inputs);
				if (response.data.message === 'Success') {
					Swal.fire({
						title: 'Success!',
						text: 'Categorie succesfully Created',
						icon: 'success',
						confirmButtonText: 'Ok',
					});
				}
			}
			dispatch(getCategories());
		} catch (err) {
			Swal.fire({
				title: 'Error',
				text: err.response.data.message,
				icon: 'error',
				confirmButtonText: 'Ok',
			});
		}
	};

	return (
		<StyleContainer>
			<div className='form__container'>
				<h1 className='form__title'>Add or Edit a Categorie</h1>
				<p className='form__p'>
					<li>
						If you want to edit an existing category, you must find and select
						it
					</li>
					<li>
						If you want to add a new category, fill in the fields below and save
						the new category
					</li>
				</p>
				<form>
					<div className='form__element'>
						<label className='form__label'>
							Find an existing category and edit it:
						</label>
						<select
							className='form__input'
							onChange={(e) => handleSelectEdit(e)}
						>
							<option value='none'>New Category</option>
							{categories &&
								categories.map((element, i) => (
									<option key={i} value={element}>
										{element}
									</option>
								))}
						</select>
					</div>
				</form>
				<form>
					<div className='row'>
						<div className='form__element'>
							<label className='form__label'>Name:</label>
							<input
								name='categories'
								onChange={handleOnChange}
								className='form__input'
								value={Inputs.categories}
							></input>
							{Errors.categories && (
								<p className='danger'>{Errors.categories}</p>
							)}
						</div>
						<div className='form__radio'>
							<label className='form__label '>
								This category is a Periferic?
							</label>
							<div>
								<input
									onClick={handleOnChange}
									type='radio'
									id='yes'
									name='periferic'
									value='true'
								/>
								<label className='form__label' for='periferic'>
									Yes
								</label>
								<br></br>
								<input
									onClick={handleOnChange}
									type='radio'
									id='no'
									name='periferic'
									value='false'
								/>
								<label className='form__label' for='periferic'>
									No
								</label>
								<br></br>
							</div>
						</div>
					</div>
					<div className='form__element '>
						<label className='form__label'>Add variants to the category:</label>
						<div className='row'>
							<input
								onChange={handleVariantsInput}
								className='tag__input'
								name='variants'
								value={Variants}
							></input>
							<button onClick={(e) => addVariants(e)} className='submit__tag'>
								Add
							</button>
						</div>
						{Errors.variants && <p className='danger'>{Errors.variants}</p>}
						<label className='form__label'>
							{Inputs.variants.length > 0 ? (
								<label>
									Current variants in this category:&nbsp;
									{Inputs.variants && Inputs.variants.join(', ')}
								</label>
							) : null}
							<br></br>
							<br></br>
						</label>
					</div>
					<div className='form__element'>
						<label className='form__label'>Add products to category:</label>
						<div className='row'>
							<DataListInput
								inputClassName='tag__input'
								placeholder='Write a product'
								items={Datalist}
								match={newMatch}
								requiredInputLength={2}
								onInput={handleSearch}
								onSelect={(e) => handleDataList(e)}
							/>
							<button onClick={(e) => addProducts(e)} className='submit__tag'>
								Add
							</button>
						</div>
						<label className='form__label'>
							{Inputs.products.length > 0 ? (
								<label>
									This category has&nbsp;
									{Inputs.products && Inputs.products.length}
									&nbsp;products assigned
								</label>
							) : null}
							<br></br>
							<br></br>
						</label>
					</div>
					<div className='row'>
						<button onClick={(e) => handleDelete(e)} className='form__button'>
							Delete
						</button>
						<button
							onClick={(e) => handleOnSumbit(e)}
							className='form__button_green'
						>
							Save
						</button>
					</div>
				</form>
			</div>
		</StyleContainer>
	);
};

export default FormCategorie;

/* 

Chequear si la categoria existe.... 

EDITA UNA CATEGORIA 
SELECT CATEGORIAS

NUEVA CATEGORIA
INPUTS

SEARCH DONDE BUSCAS Y AGREGAS LOS PRODUCTOS


*/
