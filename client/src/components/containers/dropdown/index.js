/* eslint-disable react/jsx-pascal-case */
import React, {useState} from 'react';
import DropdownStyle from './styled';
// import onClickOutside from "react-onclickoutside";

import {ImCheckboxUnchecked} from 'react-icons/im';
import {ImCheckboxChecked} from 'react-icons/im';
import {MdKeyboardArrowUp} from 'react-icons/md';
import {MdKeyboardArrowDown} from 'react-icons/md';

function Dropdown({
	order,
	filter,
	title,
	name,
	items = [],
	multiselect,
	setVariants,
	variants,
}) {
	const [open, setOpen] = useState(false);
	const toggle = () => setOpen(!open);

	//   Dropdown.handleClickOutside = () => setOpen(false);

	const handleOnClick = (item) => {
		if (
			!variants.some((current) =>
				current[name] ? current[name] === item : current === item
			)
		) {
			let obj = {};
			obj[name] = item;

			if (!multiselect) {
				// setSelection([item]);

				setVariants([obj]);
			} else if (multiselect) {
				// setSelection([...crock, item]);
				setVariants([...variants, obj[name]]);
			}
		} else {
			let selectionAfterRemoval = variants;
			selectionAfterRemoval = selectionAfterRemoval.filter((current) =>
				current[name] ? current[name] !== item : current !== item
			);
			if (multiselect) {
				setVariants([...selectionAfterRemoval]);
			} else {
				const obj = {};
				obj[name] = '';
				setVariants([obj]);
			}

			// setSelection([...selectionAfterRemoval]);
		}
	};

	const isItemSelected = (item) => {
		if (
			variants.find((current) =>
				current[name] ? current[name] === item : current === item
			)
		) {
			return true;
		}

		return false;
	};

	return (
		<DropdownStyle order={order ? 'true' : ''} filter={filter ? 'true' : ''}>
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
							<li
								key={index}
								className='dropdown__list__item'
								onClick={() => toggle(!open)}
							>
								<button type='button' onClick={() => handleOnClick(item)}>
									<span className='button__value'>{item}</span>
									<span
										className={
											'button__icon' && isItemSelected(item) ? 'selected' : ''
										}
									>
										{isItemSelected(item) ? (
											<i className='checked__icon'>
												<ImCheckboxChecked />
											</i>
										) : (
											<i className='unchecked__icon'>
												<ImCheckboxUnchecked />
											</i>
										)}
									</span>
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</DropdownStyle>
	);
}

// const onClickOutsideConfig = {
//   handleClickOutside: () => Dropdown.handleClickOutside,
// };

export default Dropdown;
