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
		errors.priceValue = 'Required field (only numbers).';
		return errors;
	}

	if (!product.brands.length) {
		errors.brands = 'You must add at least one brand.';
		return errors;
	}
	if (!product.categories.length) {
		errors.categories = 'You must add at least one category.';
		return errors;
	}

	if (Object.values(product.variant).filter((el) => el).length > 2) {
		if (!product.variant.stock) {
			errors.variants = 'You must add the stock of the variant.';
			return errors;
		}

		if (!product.variant.imageUrl && !product.variant.imageFile.length) {
			errors.variants = 'You must add an image of the variant.';
			return errors;
		} else if (
			product.variant.imageUrl &&
			!/(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g.test(
				product.variant.imageUrl
			)
		) {
			errors.variants = 'Invalid URL.';
			return errors;
		} else if (product.variant.imageFile && product.variant.imageFile.length) {
			const filesFilter = product.variant.imageFile.map(
				(file) => !/image\/jpeg|png/.test(file.type) || file.size > 5242880
			);
			if (filesFilter.includes(true)) {
				errors.variants = 'Only .png and .jpeg images, smaller than 5.24 MB.';
				return errors;
			}
		}
	}
	if (!product.allVariants.length) {
		errors.variants = 'Add basic product features.';
		return errors;
	}

	return errors;
}
