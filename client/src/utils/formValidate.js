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

	if (!product.images.length && !product.imagesUrl.length) {
		errors.images = 'You must add at least one image of the product.';
		return errors;
	}

	if (product.images.length) {
		const filesFilter = product.images.map(
			(file) => !/image\/jpeg|png/.test(file.type) || file.size > 5242880
		);
		if (filesFilter.includes(true)) {
			errors.files = 'Only .png and .jpeg images, smaller than 5.24 MB.';
			return errors;
		}
	}

	if (product.imageUrl) {
		if (
			!/(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g.test(
				product.imageUrl
			)
		) {
			errors.url = 'URL invalid.';
			return errors;
		}
	}
	if (!product.brands.length) {
		errors.brands = 'You must add at least one brand.';
		return errors;
	}

	if (Object.keys(product.variant).length) {
		if (!product.variant.stock) {
			errors.variantStock = 'You must add the stock of the variant.';
			return errors;
		}
		if (!product.variant.imageUrl && !product.variant.imageFile.name) {
			errors.variantImage = 'You must add an image of the variant.';
			return errors;
		} else if (
			product.variant.imageUrl &&
			!/(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g.test(
				product.variant.imageUrl
			)
		) {
			errors.variantImage = 'Invalid URL.';
			return errors;
		} else if (
			product.variant.imageFile.name &&
			(!/image\/jpeg|png/.test(product.variant.imageFile.type) ||
				product.variant.imageFile.size > 5242880)
		) {
			errors.variantImage = 'Only .png and .jpeg images, smaller than 5.24 MB.';
		}
	}

	return errors;
}
