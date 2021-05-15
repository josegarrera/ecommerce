export default function validate(tags, input) {
	let errors = {};
	if (!tags.length && input) {
		if (
			!/(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g.test(
				input
			)
		)
			errors.url = 'URL invalid.';
	}
	if (
		tags.filter(
			(url) =>
				!/(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g.test(
					url
				) === true
		).length
	) {
		errors.url = 'URL invalid.';
	}

	return errors;
}
