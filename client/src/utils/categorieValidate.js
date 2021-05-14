export default function validate(categorie) {
	let errors = {};

	if (!categorie.categories) {
		errors.categories = 'Required field';
	}
	if (!categorie.variants) {
		errors.variants = 'Required field';
	}
	if (categorie.variants.length < 1) {
		errors.variants = 'You need to add some variant';
	}
	if (categorie.categories && !/^[A-Za-z0-9\s]+$/g.test(categorie.categories)) {
		errors.categories = 'Only words without accents.';
	}

	return errors;
}
