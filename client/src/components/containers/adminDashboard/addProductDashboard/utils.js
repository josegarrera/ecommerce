import validate from '../../../../utils/formValidate.js';
import setterInputs from '../../../../utils/setterInput.js';

export const changeInput = (
	e,
	product,
	setProduct,
	setStatus,
	setErrors,
	allProducts
) => {
	setProduct({
		...product,
		[e.target.name]: e.target.value,
	});
	setStatus({
		init: true,
		completed: false,
	});
	setErrors(
		validate(
			{
				...product,
				[e.target.name]: e.target.value,
			},
			allProducts
		)
	);
};

const removeRepeats = (array) => {
	const filtered = array.filter((valor, indice) => {
		return array.indexOf(valor) === indice;
	});
	return filtered;
};

export const itemsToOptions = (array, title, setDatalist) => {
	if (title === 'Products' && array.length) {
		setDatalist(
			array.map((el) => {
				return {key: el.product._id, label: el.product.name};
			})
		);
	}
	if ((title === 'Brands' || title === 'Categories') && array.length) {
		setDatalist(
			array.map((el) => {
				return {key: el._id, label: el.name};
			})
		);
	}
};

export const handleSearch = (e, items, title, setDatalist) => {
	let itemsFilter;
	if (title === 'Products') {
		itemsFilter = items.filter((el) =>
			el.product.name.toLowerCase().includes(e.toLowerCase())
		);
	}
	if (title === 'Brands' || title === 'Categories') {
		itemsFilter = items.filter((el) =>
			el.name.toLowerCase().includes(e.toLowerCase())
		);
	}

	return itemsToOptions(itemsFilter, title, setDatalist);
};

export const handleDataList = (e, setItemSelected) => {
	setItemSelected(e);
};

export const addItemListSelected = (
	e,
	product,
	setProduct,
	itemSelected,
	allCategories,
	setErrors,
	allProducts
) => {
	if (e.target.name === 'imagesUrl' && itemSelected) {
		setProduct({
			...product,
			imageUrlInput: '',
			[e.target.name]: removeRepeats(
				product[e.target.name].concat(itemSelected)
			),
		});
	}
	if (e.target.name === 'combo' && itemSelected) {
		setProduct({
			...product,
			[e.target.name]: removeRepeats(
				product[e.target.name].concat(itemSelected)
			),
		});
	}
	if (e.target.name === 'brands' && itemSelected.key) {
		setProduct({
			...product,
			[e.target.name]: removeRepeats(
				product[e.target.name].concat(itemSelected)
			),
		});
	}
	if (e.target.name === 'categories' && itemSelected.key) {
		const categoryItems = allCategories.find(
			(category) => category._id === itemSelected.key
		);
		setProduct((prevState) => {
			return {
				...prevState,
				[e.target.name]: removeRepeats(
					prevState[e.target.name].concat(itemSelected)
				),
				variantItems: removeRepeats(
					prevState.variantItems.concat(categoryItems.variants)
				),
				specsItems: removeRepeats(
					prevState.specsItems.concat(categoryItems.specs)
				),
			};
		});
	}
	setErrors(
		validate(
			{
				...product,
				[e.target.name]: removeRepeats(
					product[e.target.name].concat(itemSelected)
				),
			},
			allProducts
		)
	);
};

export const handleInputFile = (
	e,
	product,
	allProducts,
	setProduct,
	setErrors
) => {
	if (e.target.files.length) {
		const files = e.target.files;
		let images = [];
		for (let i = 0; i < files.length; i++) {
			const fileItems = {
				name: files[i].name,
				size: files[i].size,
				type: files[i].type,
			};
			images.push(fileItems);
		}
		setProduct({
			...product,
			images,
			files: e.target.files,
			filesValues: e.target.value,
		});
		setErrors(
			validate(
				{
					...product,
					images,
				},
				allProducts
			)
		);
	} else {
		setProduct({
			...product,
			images: [],
			files: [],
			filesValues: '',
		});
		setErrors(
			validate(
				{
					...product,
					images: [],
				},
				allProducts
			)
		);
	}
};

export const changeInputVariant = (
	e,
	product,
	setProduct,
	setErrors,
	allProducts
) => {
	if (e.target.name === 'imageFile') {
		if (e.target.files.length) {
			const files = e.target.files;
			let filesData = [];
			for (let i = 0; i < files.length; i++) {
				const fileItems = {
					name: files[i].name,
					size: files[i].size,
					type: files[i].type,
				};
				filesData.push(fileItems);
			}

			setProduct({
				...product,
				variant: {
					...product.variant,
					[e.target.name]: filesData,
					file: files,
					fileInput: e.target.value,
				},
			});
			setErrors(
				validate(
					{
						...product,
						variant: {...product.variant, [e.target.name]: filesData},
					},
					allProducts
				)
			);
		} else {
			setProduct({
				...product,
				variant: {
					...product.variant,
					[e.target.name]: [],
					file: [],
					fileInput: '',
				},
			});
			setErrors(
				validate(
					{
						...product,
						variant: {...product.variant, [e.target.name]: []},
					},
					allProducts
				)
			);
		}
	} else {
		setProduct({
			...product,
			variant: {...product.variant, [e.target.name]: e.target.value},
		});
		setErrors(
			validate(
				{
					...product,
					variant: {...product.variant, [e.target.name]: e.target.value},
				},
				allProducts
			)
		);
	}
};

export const handleClickVariants = (
	variantIdGenerator,
	setVariantIdGenerator,
	product,
	setProduct
) => {
	setVariantIdGenerator(variantIdGenerator + 1);
	let variantFinal = {};
	variantFinal.id = variantIdGenerator;
	for (const key in product.variant) {
		if (key !== 'file' && key !== 'fileInput') {
			if (key === 'imageFile') {
				variantFinal.imageFile =
					product.variant.imageFile.length + ' files selected' ||
					'No selected files';
			} else variantFinal[key] = product.variant[key];
		}
	}

	const files = [...product.variant.file];
	setProduct({
		...product,
		allVariants: [...product.allVariants, variantFinal],
		allVariantsFiles: [
			...product.allVariantsFiles,
			{id: variantIdGenerator, file: files},
		],
		variant: setterInputs({
			...product.variant,
			file: [],
			fileInput: '',
			imageFile: [],
		}),
	});
};

export const handleVariantDelete = (e, setProduct) => {
	setProduct((prevState) => {
		return {
			...prevState,
			allVariants: prevState.allVariants.filter(
				(item) => item.id !== Number(e.target.id)
			),
		};
	});
};

export const changeInputSpecs = (e, setProduct) => {
	setProduct((prevState) => {
		return {
			...prevState,
			specs: {...prevState.specs, [e.target.name]: e.target.value},
		};
	});
};

export const handleDeleteLabels = (e, setProduct) => {
	if (e.target.name === 'imagesUrl') {
		setProduct((prevState) => {
			return {
				...prevState,
				[e.target.name]: prevState[e.target.name].filter(
					(item) => item !== e.target.id
				),
			};
		});
	} else if (e.target.name === 'categories') {
		setProduct((prevState) => {
			return {
				...prevState,
				[e.target.name]: prevState[e.target.name].filter(
					(item) => item.key !== e.target.id
				),
				variantItems: [],
				variant: {},
			};
		});
	} else {
		setProduct((prevState) => {
			return {
				...prevState,
				[e.target.name]: prevState[e.target.name].filter(
					(item) => item.key !== e.target.id
				),
			};
		});
	}
};

export const handleSubmit = (
	e,
	product,
	setProduct,
	dispatch,
	addNewProduct,
	setErrors,
	setStatus
) => {
	e.preventDefault();
	const obj = {
		name: product.name,
		description: product.description,
		price: {
			value: product.priceValue,
			currency: product.currency,
		},
		brands: product.brands.map((item) => item.key),
		categories: product.categories.map((item) => item.key),
		combo: product.combo.map((item) => item.key),
		variants: product.allVariants,
		specs: product.specs,
	};

	let formData = new FormData();
	product.allVariantsFiles.forEach((variant) => {
		for (let i = 0; i < variant.file.length; i++) {
			formData.append('images', variant.file[i]);
		}
	});
	formData.append('info', JSON.stringify(obj));
	dispatch(addNewProduct(formData));
	setProduct({
		...setterInputs({
			...product,
			allVariantsFiles: [],
		}),
		currency: 'USD',
	});
	setErrors({});
	setStatus({
		init: false,
		completed: true,
	});
};
