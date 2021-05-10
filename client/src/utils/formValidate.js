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

	if (product.name && !/^[A-Za-z\s]+$/g.test(product.name)) {
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

	/* 
	 if (
   product.imageUrl &&
   (!/image\/jpeg|png/.test(product.imageUrl[0]) || product.imageUrl > 5242880)
 ) {
   errors.file = "Sólo imágenes .png y .jpeg, menores a 5.24 MB.";
 }
 */
	return errors;
}
