export default function validate(user, Items) {
	let errors = {};

	if (!user.email) {
		errors.email = 'Required field';
	}
	if (!user.role) {
		errors.role = 'Required field';
	}
	if (
		user.email &&
		!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(
			user.email
		)
	) {
		errors.email = 'Not a valid email';
	}
	if (user.email && Items && Items.find((el) => el.email === user.email)) {
		errors.email = 'Email already registered.';
	}
	if (!user.password) {
		errors.password = 'Password required';
	}

	return errors;
}
