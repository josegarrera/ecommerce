export default function validate(product, allProducts) {
	let errors = {};

	if (!product.name) {
		errors.name = 'Campo requerido.';
	}
	if (!product.brands) {
		errors.brands = 'Campo requerido.';
	}
	if (!product.description) {
		errors.description = 'Campo requerido.';
	}
	if (!product.price) {
		errors.price = 'Campo requerido.';
	}

	if (product.price && !/[0-9]+$/.test(product.price)) {
		errors.price = 'Sólo números.';
	}

	if (product.name && !/^[A-Za-z0-9\s]+$/g.test(product.name)) {
		errors.name = 'Sólo palabras sin tilde.';
	}

	if (
		product.name &&
		allProducts.length &&
		allProducts.find(
			(element) =>
				element.name.toLowerCase().trim() === product.name.toLowerCase().trim()
		)
	) {
		errors.name = 'El producto ya existe.';
	}

	return errors;
}
