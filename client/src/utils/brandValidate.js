export default function validate(brand, Items) {
	let errors = {};

	if (!brand.name) {
		errors.name = 'Required field';
	}
	if (brand.name && Items && Items.find((el) => el.name === brand.name)) {
		errors.name = 'Brand already registered on database.';
	}

	return errors;
}
