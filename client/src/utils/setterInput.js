export default function setter(input) {
	if (typeof input === 'string') return (input = '');
	if (typeof input === 'number') return (input = 0);
	if (typeof input === 'boolean') return (input = !input);
	if (Array.isArray(input)) return (input = []);
	for (let key in input) {
		if (typeof input[key] === 'boolean') {
			input[key] = !input[key];
		} else if (Array.isArray(input[key])) {
			input[key] = [];
		} else if (typeof input[key] === 'object') {
			setter(input[key]);
		} else {
			input[key] = '';
		}
	}

	return input;
}
