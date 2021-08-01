export const removeLabelsRepeats = (array) => {
	const filtered = array.filter((valor, index) => {
		return array.map((obj) => obj.label).indexOf(valor.label) === index;
	});
	return filtered;
};

export const filterItems = (e, items) => {
	let arrayFilter =
		items &&
		items.filter(
			(el) =>
				(el.email && el.email.toLowerCase().includes(e.toLowerCase())) ||
				(el.role && el.role.toLowerCase().includes(e.toLowerCase())) ||
				(el.users && el.users.includes(e)) ||
				(el.name && el.name.toLowerCase().includes(e.toLowerCase())) ||
				(el._id && el._id.includes(e)) ||
				(el.price && el.price.value.toString().includes(e)) ||
				(el.state && el.state.toLowerCase().includes(e))
		);
	return arrayFilter;
};

export const handleOnChangue = (
	e,
	options,
	Items,
	setItemSelected,
	setDataListSearch,
	setFilter
) => {
	setItemSelected(e);
	const arrayFilter = filterItems(e, Items);

	if (
		(options === 'Brands' ||
			options === 'Categories' ||
			options === 'Products') &&
		arrayFilter.length
	) {
		setDataListSearch(
			removeLabelsRepeats(
				arrayFilter.map((el) => {
					return {key: el._id, label: el.name};
				})
			)
		);
	}
	if (options === 'Users' && arrayFilter.length) {
		setDataListSearch(
			removeLabelsRepeats(
				arrayFilter.map((el) => {
					return {key: el._id, label: el.email};
				})
			)
		);
	}
	if (options === 'Orders' && arrayFilter.length) {
		setDataListSearch(
			removeLabelsRepeats(
				arrayFilter.map((el) => {
					return {key: el._id, label: el.state};
				})
			)
		);
	}

	setFilter(arrayFilter);
};

export const handleSelectDataList = (e, Items, setFilter, setItemSelected) => {
	const arrayFilter = filterItems(e.label, Items);
	setFilter(arrayFilter);
	setItemSelected(e.label);
};

export const handleClick = (options, setOptions, setShowModal, setCreate) => {
	if (options === 'Products') {
		setOptions('createProduct');
		setShowModal((prev) => !prev);
	}

	if (
		options === 'Users' ||
		options === 'Categories' ||
		options === 'Orders' ||
		options === 'Brands'
	)
		setCreate((prev) => !prev);
};
