export default function validate(category, Items) {
	let errors = {};

	if (!category.name) {
		errors.name = 'Required field';
	}
	if (!category.periferic) {
		errors.periferic = 'Required field';
	}
	if (category.name && Items && Items.find((el) => el.name === category.name)) {
		errors.name = 'Category already exists in the database.';
	}

	return errors;
}
