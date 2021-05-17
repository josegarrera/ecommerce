/* eslint-disable react/jsx-pascal-case */
import React, {useEffect, useState} from 'react';

import {
	getBrands,
	getCategories,
	getProducts,
} from '../../../redux/actions/index.js';
import {useDispatch, useSelector} from 'react-redux';
import Dropdown from '../dropdown';
import Filter_Style from './styled';

const Filter = ({order}) => {
	const dispatch = useDispatch();
	const allCategories = useSelector((state) => state.categories);
	const allBrands = useSelector((state) => state.brands);
	const categoryNames = allCategories.map((c) => c.name);
	const brandNames = allBrands.map((b) => b.name);
	const maxPriceValue = 5000;

	const [filter, setFilter] = useState([{}]);
	const [input, setInput] = useState({
		name: '',
		category: '',
		brand: '',
		variants: {
			color: '',
			stock: false,
		},
		priceMin: '',
		priceMax: '',
		order: '',
		direction: '',
	});

	// (name, category, variants, price, order, direction, limit)

	useEffect(() => {
		dispatch(getCategories());
		dispatch(getBrands());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		// filter, filterValue, order, direction, limit
		var keyName = filter.length && Object.keys(filter[0]);
		var actualValue = filter.length && filter[0][keyName];
		var orderValue = '';
		var direction = '';
		if (order.length) {
			orderValue = order[0].order.includes('price') ? 'price' : 'name';
			direction =
				order[0].order === 'price: Low to High' || order[0].order === 'A-Z'
					? 'asc'
					: order[0].order === 'price: High to Low' || order[0].order === 'Z-A'
					? 'desc'
					: '';
		}

		const response = {
			...input,
			[keyName]: actualValue,
			order: orderValue,
			direction: direction,
		};
		input && setInput(() => response);
	}, [filter, order]);

	useEffect(() => {
		const {name, category, brand, order, direction} = input;
		const variants =
			input.variants.color && input.variants.stock
				? `color-${input.variants.color}-stock`
				: input.variants.color
				? `color-${input.variants.color}`
				: !input.variants.color && input.variants.stock
				? '--stock'
				: '';
		const price =
			input.priceMin && input.priceMax
				? `${input.priceMin}-${input.priceMax}-USD`
				: input.priceMin
				? `${input.priceMin}-${maxPriceValue}-USD`
				: input.priceMax
				? `0-${input.priceMax}-USD`
				: '';
		dispatch(
			getProducts(name, category, brand, variants, price, order, direction)
		);
	}, [input]);

	const onChangePrice = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const handleClickColor = (e) => {
		setInput({
			...input,
			variants: {
				...input.variants,
				color: e.target.id,
			},
		});
	};

	const handleChangeStock = (e) => {
		setInput({
			...input,
			variants: {
				...input.variants,
				stock: e.target.checked,
			},
		});
	};

	return (
		<Filter_Style>
			<div className='filter__options'>
				<div className='filter__title'>SEARCH FILTER</div>
				<div className='separator'></div>

				<div className='filter__section'>
					<Dropdown
						filter
						title='CATEGORIES'
						name='category'
						items={categoryNames}
						setVariants={(el) => setFilter(el)}
						variants={filter}
					></Dropdown>

					<Dropdown
						filter
						title='BRANDS'
						name='brand'
						items={brandNames}
						setVariants={(el) => setFilter(el)}
						variants={filter}
					></Dropdown>

					<div className='filter__section__row'>
						<div className='filter__section__title'>PRICE</div>
					</div>
					<div className='input__wrapper'>
						<input
							className='range__price'
							type='range'
							name='priceMin'
							min='1'
							max={maxPriceValue}
							onChange={(e) => onChangePrice(e)}
						></input>
						<label>Since {input.priceMin} USD</label>
						<input
							className='range__price'
							type='range'
							name='priceMax'
							min='1'
							max={maxPriceValue}
							onChange={(e) => onChangePrice(e)}
						></input>
						<label>Until {input.priceMax} USD</label>
						<div className='row'></div>
					</div>

					<div className='filter__section__row'>
						<div className='filter__section__title'>COLOR</div>
					</div>
					<div className='color__selector'>
						<ul>
							<li id='white' className='color__item'>
								<button
									id='white'
									className='color__btn'
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id='black' className='color__item'>
								<button
									id='black'
									className='color__btn'
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id='purple' className='color__item'>
								<button
									id='purple'
									className='color__btn'
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id='blue' className='color__item'>
								<button
									id='blue'
									className='color__btn'
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id='red' className='color__item'>
								<button
									id='red'
									className='color__btn'
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id='yellow' className='color__item'>
								<button
									id='yellow'
									className='color__btn'
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id='skyblue' className='color__item'>
								<button
									id='skyblue'
									className='color__btn'
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id='orange' className='color__item'>
								<button
									id='orange'
									className='color__btn'
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id='pink' className='color__item'>
								<button
									id='pink'
									className='color__btn'
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id='green' className='color__item'>
								<button
									id='green'
									className='color__btn'
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li
								id='silver'
								className='color__item'
								onClick={(e) => handleClickColor(e)}
							>
								<button
									id='silver'
									className='color__btn'
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id='gold' className='color__item'>
								<button
									id='gold'
									className='color__btn'
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id='any' className='color__item'>
								<button
									id=''
									className='color__btn any'
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
						</ul>
					</div>
					<div className='filter__section__row'>
						<div className='input__wrapper'>
							<div className='filter__section__title'>STOCK</div>
							<div>
								<input
									type='checkbox'
									onChange={(e) => handleChangeStock(e)}
								></input>
								<label> Only products in stock.</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Filter_Style>
	);
};

export default Filter;
