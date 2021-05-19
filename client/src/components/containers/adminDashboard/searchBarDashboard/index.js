import React, {useState, useEffect} from 'react';

const SearchBar = ({Items, setFilter}) => {
	const handleOnChangue = (e) => {
		let arrayFilter =
			Items &&
			Items.filter((el) =>
				el.name.toLowerCase().includes(e.target.value.toLowerCase())
			);

		setFilter(arrayFilter);
	};

	return (
		<div>
			<input type='text' onChange={handleOnChangue} />
		</div>
	);
};

export default SearchBar;
