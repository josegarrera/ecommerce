/* eslint-disable react/jsx-pascal-case */
import React, {useState} from 'react';
import {Dropdown_Style} from './styled';
// import onClickOutside from "react-onclickoutside";

import {ImCheckboxUnchecked} from 'react-icons/im';
import {ImCheckboxChecked} from 'react-icons/im';
import {MdKeyboardArrowUp} from 'react-icons/md';
import {MdKeyboardArrowDown} from 'react-icons/md';

function Dropdown({
	title,
	name,
	items = [],
	multiselect,
	options,
	setProduct,
	product,
}) {
	const [open, setOpen] = useState(false);
	const toggle = () => setOpen(!open);

	const handleOnClick = (item) => {
		if (
			!options.some((current) =>
				current[name] ? current[name] === item : current === item
			)
		) {
			let obj = {};
			obj[name] = item;
			if (!multiselect) {
				setProduct({
					...product,

					currency: [obj[name]],
				});
			} else if (multiselect) {
				if (name === 'brands') {
					setProduct({
						...product,
						brands: [...options, obj[name]],
					});
				}
				if (name === 'categories') {
					setProduct({
						...product,
						categoriesSelected: [...options, obj[name]],
						variant: {},
						allVariants: [],
						variantItemSelected: [],
					});
				}
				if (name === 'variants') {
					setProduct({
						...product,
						variantItemSelected: [...options, obj[name]],
					});
				}
			}
		} else {
			let selectionAfterRemoval = options;
			selectionAfterRemoval = selectionAfterRemoval.filter((current) =>
				current[name] ? current[name] !== item : current !== item
			);
			if (name === 'brands') {
				setProduct({
					...product,
					brands: [...selectionAfterRemoval],
				});
			}
			if (name === 'categories') {
				if (selectionAfterRemoval.length) {
					setProduct({
						...product,
						categoriesSelected: [...selectionAfterRemoval],
					});
				} else {
					setProduct({
						...product,
						categoriesSelected: [...selectionAfterRemoval],
						variant: {},
						allVariants: [],
					});
				}
			}
			if (name === 'variants') {
				setProduct({
					...product,
					variantItemSelected: [...selectionAfterRemoval],
				});
			}
		}
	};

	const isItemSelected = (item) => {
		if (
			options.find((current) =>
				current[name] ? current[name] === item : current === item
			)
		) {
			return true;
		}

		return false;
	};

	return (
		<Dropdown_Style>
			<div className='dropdown__wrapper'>
				<div
					tabIndex={0}
					className='dropdown__header'
					role='button'
					onKeyPress={() => toggle(!open)}
					onClick={() => toggle(!open)}
				>
					<div className='dropdown__header__title'>
						<p>{title}</p>
					</div>
					<div className='dropdown__header__action'>
						<p className='dropdown__header__icon'>
							{open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
						</p>
					</div>
				</div>

				{open && (
					<ul className='dropdown__list'>
						{items.map((item, index) => (
							<li key={index} className='dropdown__list__item'>
								<button type='button' onClick={() => handleOnClick(item)}>
									<span className='button__value'>{item}</span>
									<span
										className={
											'button__icon' && isItemSelected(item) ? 'selected' : ''
										}
									>
										{isItemSelected(item) ? (
											<ImCheckboxChecked />
										) : (
											<ImCheckboxUnchecked />
										)}
									</span>
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</Dropdown_Style>
	);
}

// const onClickOutsideConfig = {
//   handleClickOutside: () => Dropdown.handleClickOutside,
// };

export default Dropdown;
