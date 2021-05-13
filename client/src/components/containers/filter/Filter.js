import React, {useEffect, useState} from 'react';

import {getCategories, getProducts} from '../../../redux/actions/index.js';
import {useDispatch, useSelector} from 'react-redux';
import {MdKeyboardArrowDown} from 'react-icons/md';
import Dropdown from '../dropdown';
import Filter_Style from './styled';

const Filter = () => {
	const dispatch = useDispatch();
	const allCategories = useSelector((state) => state.categories);
	const categoryNames = allCategories.map((c) => c.name);

	const [categoriesSelected, selectCategories] = useState([]);

	const [input, setInput] = useState({
		filter: '',
		filterValue: '',
		order: '',
		direction: '',
		limit: '',
	});

	useEffect(() => {
		dispatch(getCategories());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		// filter, filterValue, order, direction, limit
		console.log(categoriesSelected);
	}, [categoriesSelected]);

	return (
		<Filter_Style>
			<div className='filter__options'>
				<div className='filter__title'>SEARCH FILTER</div>
				<div className='separator'></div>

				<div className='filter__section'>
					<Dropdown
						title='Categories'
						name='currency'
						items={categoryNames}
						multiselect
						setVariants={(el) => selectCategories(el)}
						variants={categoriesSelected}
					></Dropdown>

					<div className='filter__section__row'>
						<div className='filter__section__title'>BRANDS</div>
						<div className='filter__section__icon'>
							<MdKeyboardArrowDown />
						</div>
					</div>

					<div className='filter__section__row'>
						<div className='filter__section__title'>VARIANTS</div>
						<div className='filter__section__icon'>
							<MdKeyboardArrowDown />
						</div>
					</div>

					<div className='filter__section__row'>
						<div className='filter__section__title'>PRICE</div>
					</div>
					<input type='range'></input>

					<div className='filter__section__row'>
						<div className='filter__section__title'>DIRECTION</div>
						<div className='filter__section__icon'>
							<MdKeyboardArrowDown />
						</div>
					</div>
					<div className='filter__section__row'>
						<div className='filter__section__title'>LIMIT</div>
						<div className='filter__section__icon'>
							<MdKeyboardArrowDown />
						</div>
					</div>
				</div>
			</div>
		</Filter_Style>
	);
};

export default Filter;
