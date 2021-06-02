/* eslint-disable react/jsx-pascal-case */
import React, {useEffect, useState} from 'react';

import {
	getBrands,
	getCategories,
	getProducts,
} from '../../../redux/actions/index.js';
import {useDispatch, useSelector} from 'react-redux';
import {MdDoNotDisturbAlt} from 'react-icons/md';
import Dropdown from '../dropdown';
import Filter_Style from './styled';


const Filter = ({order}) => {
	const dispatch = useDispatch();
	const allCategories = useSelector((state) => state.categories);
	const allBrands = useSelector((state) => state.brands);
	const categoryNames = allCategories.map((c) => c.name);
	const brandNames = allBrands.map((b) => b.name);
	const maxPriceValue = 5000;
	const colors = {
		white: 'white',
		black: 'black',
		purple: 'purple',
		blue: 'blue',
		red: 'red',
		yellow: 'yellow',
		skyblue: 'skyblue',
		orange: 'orange',
		pink: 'pink',
		green: 'green',
		silver: 'silver',
		gold: 'gold',
		any: 'any',
	};

	const [filter, setFilter] = useState([{}]);
	const [input, setInput] = useState({
		name: '',
		category: '',
		brand: '',
		variants: {
			color: '',
			stock: false,
		},
		priceMin: 1,
		priceMax: 5000,
		order: '',
		direction: '',
	});

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
			orderValue = order[0].order.includes('Low') ? 'price' : 'name';
			direction =
				order[0].order === 'Low > High' || order[0].order === 'A > Z'
					? 'asc'
					: order[0].order === 'High > Low' || order[0].order === 'Z > A'
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
							value={input.priceMin}
							onChange={(e) => onChangePrice(e)}
						></input>
						<input
							className='range__price'
							type='range'
							name='priceMax'
							min='1'
							max={maxPriceValue}
							value={input.priceMax}
							onChange={(e) => onChangePrice(e)}
						></input>
						<label>
							From {input.priceMin} to {input.priceMax} USD
						</label>
						<div className='row'></div>
					</div>

					<div className='filter__section__row'>
						<div className='filter__section__title'>COLOR</div>
					</div>
					<div className='color__selector'>
						<ul>
							<li id={colors.white} className='color__item'>
								<button
									id={colors.white}
									className={
										input.variants.color === colors.white
											? 'color__btn__selected'
											: 'color__btn'
									}
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id={colors.black} className='color__item'>
								<button
									id={colors.black}
									className={
										input.variants.color === colors.black
											? 'color__btn__selected'
											: 'color__btn'
									}
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id={colors.purple} className='color__item'>
								<button
									id={colors.purple}
									className={
										input.variants.color === colors.purple
											? 'color__btn__selected'
											: 'color__btn'
									}
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id={colors.blue} className='color__item'>
								<button
									id={colors.blue}
									className={
										input.variants.color === colors.blue
											? 'color__btn__selected'
											: 'color__btn'
									}
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id='{colors.red}' className='color__item'>
								<button
									id={colors.red}
									className={
										input.variants.color === colors.red
											? 'color__btn__selected'
											: 'color__btn'
									}
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id={colors.yellow} className='color__item'>
								<button
									id={colors.yellow}
									className={
										input.variants.color === colors.yellow
											? 'color__btn__selected'
											: 'color__btn'
									}
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id={colors.skyblue} className='color__item'>
								<button
									id={colors.skyblue}
									className={
										input.variants.color === colors.skyblue
											? 'color__btn__selected'
											: 'color__btn'
									}
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id={colors.orange} className='color__item'>
								<button
									id={colors.orange}
									className={
										input.variants.color === colors.orange
											? 'color__btn__selected'
											: 'color__btn'
									}
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id={colors.pink} className='color__item'>
								<button
									id={colors.pink}
									className={
										input.variants.color === colors.pink
											? 'color__btn__selected'
											: 'color__btn'
									}
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id={colors.green} className='color__item'>
								<button
									id={colors.green}
									className={
										input.variants.color === colors.green
											? 'color__btn__selected'
											: 'color__btn'
									}
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id={colors.silver} className='color__item'>
								<button
									id={colors.silver}
									className={
										input.variants.color === colors.silver
											? 'color__btn__selected'
											: 'color__btn'
									}
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id={colors.gold} className='color__item'>
								<button
									id={colors.gold}
									className={
										input.variants.color === colors.gold
											? 'color__btn__selected'
											: 'color__btn'
									}
									onClick={(e) => handleClickColor(e)}
								></button>
							</li>
							<li id='any' className='color_item2'>
								<button
									id=''
									className='color_item_button'
									onClick={(e) => handleClickColor(e)}
								>
									<MdDoNotDisturbAlt className='color__btn2' />
								</button>
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
								<label> Products in stock.</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Filter_Style>
	);
};

export default Filter;
