import React, {useState, useEffect} from 'react';
import SearchStyles from './styled';

let props = ['email', 'role', 'name', '_id', 'price.value', 'user'];

const SearchBar = ({Items, setFilter, setCreate, create}) => {
	const handleOnChangue = (e) => {
		let arrayFilter =
			Items &&
			Items.filter(
				(el) =>
					(el.email &&
						el.email.toLowerCase().includes(e.target.value.toLowerCase())) ||
					(el.role &&
						el.role.toLowerCase().includes(e.target.value.toLowerCase())) ||
					(el.users && el.users.includes(e.target.value)) ||
					(el.name &&
						el.name.toLowerCase().includes(e.target.value.toLowerCase())) ||
					(el._id && el._id.includes(e.target.value)) ||
					(el.price && el.price.value.toString().includes(e.target.value))
			);

		setFilter(arrayFilter);
	};

	const handleClick = (e) => {
		setCreate(!create);
	};

	/* 
				Items.filter(
					(el) =>
						(el.email &&
							el.email.toLowerCase().includes(e.target.value.toLowerCase())) ||
						(el.role &&
							el.role.toLowerCase().includes(e.target.value.toLowerCase())) ||
						(el.name &&
							el.name.toLowerCase().includes(e.target.value.toLowerCase())) ||
						(el.price && el.price.value.toString().includes(e.target.value))
				); */

	return (
		<SearchStyles>
			<input
				className='searchInput'
				type='text'
				placeHolder='   Search by name, price, id, categorie, role, email, etc'
				onChange={handleOnChangue}
			/>
			<button className='form__button' onClick={handleClick}>
				Create
			</button>
		</SearchStyles>
	);
};

export default SearchBar;
