/* eslint-disable react/jsx-pascal-case */
import React, {useEffect, useState} from 'react';

import {
	getBrands,
	getCategories,
	getProducts,
	getProductsQuery,
} from '../../../redux/actions/index.js';
import {useDispatch, useSelector} from 'react-redux';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {BiDollar} from 'react-icons/bi';
import {CgBorderStyleSolid} from 'react-icons/cg';
import {RiCheckboxBlankCircleFill} from 'react-icons/ri';

import {IoIosCheckmarkCircle} from 'react-icons/io';

import Dropdown from '../dropdown';
import Filter_Style from './styled';

import axios from 'axios';

const Filter = ({order}) => {
	const dispatch = useDispatch();
	const allCategories = useSelector((state) => state.categories);
	const allBrands = useSelector((state) => state.brands);
	const categoryNames = allCategories.map((c) => c.name);
	const brandNames = allBrands.map((b) => b.name);
	const variantsItemsNames = ['color', 'stock'];

	const [filter, setFilter] = useState([{}]);
	const [input, setInput] = useState({
		name: '',
		category: '',
		brand: '',
		variants: '',
		price: '',
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
		var orderValue = 'asc';

		if (order.length) {
			orderValue = order[0].order;
		}

		const response = {
			...input,
			[keyName]: actualValue,
			direction: orderValue,
		};
		input && setInput(() => response);
	}, [filter, order]);

	useEffect(() => {
		const {name, category, brand, variants, price, order, direction} = input;

		dispatch(
			getProducts(name, category, brand, variants, price, order, direction)
		);
	}, [input]);

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

					<Dropdown
						filter
						title='VARIANTS'
						name='variants'
						items={variantsItemsNames}
						setVariants={(el) => setFilter(el)}
						variants={filter}
					></Dropdown>

					<div className='filter__section__row'>
						<div className='filter__section__title'>PRICE</div>
					</div>
					<div className='input__wrapper'>
						<input className='range__price' type='range'></input>
						<div className='row'>
							<input
								className='price__input'
								type='number'
								id='price'
								name='price'
							></input>
							{/* <i>
                <CgBorderStyleSolid />
              </i>
              <input
                className="price__input"
                type="number"
                id="price__max"
                name="price"
                value="holi"
                onChange={(e) => onChangeHandler(e)}
              ></input> */}
							<i>
								<BiDollar />
							</i>
						</div>
					</div>

					<div className='filter__section__row'>
						<div className='filter__section__title'>COLOR</div>
					</div>
					<div className='color__selector'>
						<ul>
							<li id='white' className='color__item'>
								<i>
									<RiCheckboxBlankCircleFill />
								</i>
							</li>
							<li id='black' className='color__item'>
								<IoIosCheckmarkCircle />
							</li>
							<li id='purple' className='color__item'>
								<RiCheckboxBlankCircleFill />
							</li>
							<li id='blue' className='color__item'>
								<RiCheckboxBlankCircleFill />
							</li>
							<li id='red' className='color__item'>
								<RiCheckboxBlankCircleFill />
							</li>
							<li id='yellow' className='color__item'>
								<RiCheckboxBlankCircleFill />
							</li>
							<li id='skyblue' className='color__item'>
								<RiCheckboxBlankCircleFill />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Filter_Style>
	);
};

export default Filter;
