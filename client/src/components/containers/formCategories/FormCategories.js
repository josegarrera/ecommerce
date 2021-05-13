import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleContainer} from './styled';
import {getCategories, getProducts} from '../../../redux/actions';
import DataListInput from 'react-datalist-input';
import axios from 'axios';
import {URLS} from '../../../utils/constants';

const FormCategorie = () => {
	const dispatch = useDispatch();
	const allCategories = useSelector((state) => state.categories);
	const categories = allCategories.map((c) => c.name);
	const allProducts = useSelector((state) => state.products.products);
	const [Inputs, setInputs] = useState({
		edit: false,
		id: '',
		name: '',
		variants: [],
		products: [],
		periferic: false,
	});
	const [Datalist, setDatalist] = useState([{}]);
	const [Variants, setVariants] = useState([]);
	const [ProductsAdd, setProductsAdd] = useState();

	useEffect(() => {
		dispatch(getCategories());
		dispatch(getProducts(undefined, undefined, undefined, undefined, 100));
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
			el.name.toLowerCase().includes(e.toLowerCase())
		);
		if (Inputs.edit === true) {
			let total =
				productsFilter &&
				productsFilter.filter((ele) => {
					let existProductInCategory = ele.categories.find(
						(el) => el.name === Inputs.name
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
					return {key: el._id, label: el.name};
				})
		);
	};

	const handleOnChange = (e) => {
		e.target.name === 'categories'
			? setInputs({...Inputs, [e.target.name]: [e.target.value]})
			: setInputs({...Inputs, [e.target.name]: e.target.value});
	};

	const handleVariantsInput = (e) => {
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
		setProductsAdd('');
	};

	const handleOnSumbit = async (e) => {
		e.preventDefault();
		try {
			console.log(Inputs);
			await axios.post(URLS.URL_CATEGORIES, Inputs);
			dispatch(getCategories());
		} catch (err) {
			console.log(err);
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
									value='yes'
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
									value='no'
								/>
								<label className='form__label' for='periferic'>
									No
								</label>
								<br></br>
							</div>
						</div>
					</div>
					<div className='form__element '>
						<label className='form__label'>
							Add variants to the category:
							{Inputs.variants.length > 0 ? (
								<label>
									<br></br>Current variants in this category:&nbsp;
									{Inputs.variants && Inputs.variants.join(', ')}
								</label>
							) : null}
						</label>
						<div className='row'>
							<input
								onChange={handleVariantsInput}
								className='tag__input '
								name='variants'
								value={Variants}
							></input>
							<button onClick={(e) => addVariants(e)} className='submit__tag'>
								Add
							</button>
						</div>
					</div>
					<div className='form__element'>
						<label className='form__label'>
							Add products to category:
							{Inputs.products.length > 0 ? (
								<label>
									<br></br>This category has&nbsp;
									{Inputs.products && Inputs.products.length}
									&nbsp;products assigned
								</label>
							) : null}
						</label>
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
					</div>

					<button onClick={(e) => handleOnSumbit(e)} className='form__button'>
						Save
					</button>
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
