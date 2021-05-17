export default function validate(product, allProducts) {
	let errors = {};

	if (!product.name) {
		errors.name = 'Required field.';
		return errors;
	} else if (product.name && !/^[A-Za-z0-9\s]+$/g.test(product.name)) {
		errors.name = 'Only words without accent.';
		return errors;
	} else if (
		product.name &&
		allProducts.length &&
		allProducts.find(
			(element) =>
				element.product.name.toLowerCase().trim() ===
				product.name.toLowerCase().trim()
		)
	) {
		errors.name = 'That product already exists.';
		return errors;
	}

	if (!product.description) {
		errors.description = 'Required field.';
		return errors;
	}
	if (!product.priceValue) {
		errors.priceValue = 'Required field.';
		return errors;
	}

	if (product.priceValue && !/[0-9]+$/.test(product.priceValue)) {
		errors.priceValue = 'Only numbers.';
		return errors;
	}
	if (Object.keys(product.variant).length) {
		if (
			product.variant.imageUrl &&
			!/(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g.test(
				product.variant.imageUrl
			)
		) {
			errors.variantImageUrl = 'Invalid URL.';
		} else if (
			!product.variant.imageUrl &&
			Object.values(product.variant).filter((value) => value).length
		) {
			errors.variantImageUrl = 'You must add an image of the variant.';
			return errors;
		}
		if (
			!product.variant.stock &&
			Object.values(product.variant).filter((value) => value).length
		) {
			errors.variantStock = 'You must add the stock of the variant.';
			return errors;
		}
		if (
			Object.keys(product.variant).length >
			Object.values(product.variant).filter((value) => value).length
		) {
			errors.variant = 'You must complete all the fields you select.';
		}
	}

	return errors;
}
