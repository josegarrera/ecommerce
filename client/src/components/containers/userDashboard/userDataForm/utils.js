import setterInputs from '../../../../utils/setterInput.js';
import axios from 'axios';
import {URLS} from '../../../../utils/constants.js';

export const handleInput = (e, input, setInput, setStatus, setErrors) => {
	if (e.target.name === 'shipping') {
		setInput({
			...input,
			shipping: {
				...input.shipping,
				[e.target.id]: e.target.value,
			},
		});
	} else if (e.target.name === 'file') {
		if (e.target.files.length) {
			const file = e.target.files[0];
			let fileData = {
				name: file.name,
				size: file.size,
				type: file.type,
			};
			setInput({
				...input,
				fileData,
				file,
				fileValue: e.target.value,
			});
		} else {
			setInput({
				...input,
				fileData: {},
				file: [],
				fileValue: '',
			});
		}
	} else {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	}
	setStatus({
		init: true,
		completed: false,
	});
	/* setErrors(
		validate(
			{
				...input,
				[e.target.name]: e.target.value,
			}
		)
	); */
};

export const handleAddress = (
	input,
	setInput,
	idgenerator,
	setIdGenerator,
	setStatus
) => {
	setIdGenerator(idgenerator++);
	setInput({
		...input,
		address: [...input.address, {...input.shipping, id: idgenerator}],
		shipping: setterInputs({...input.address}),
	});
	setStatus({
		init: true,
		completed: false,
	});
};

export const handleAddressDelete = (e, setInput) => {
	setInput((prevState) => {
		return {
			...prevState,
			address: prevState.address.filter(
				(item) => item.id !== Number(e.target.id)
			),
		};
	});
};

export const handleSubmitUserForm = async (
	e,
	userId,
	input,
	setInput,
	setErrors,
	setStatus,
	history
) => {
	e.preventDefault();
	const obj = {...input};
	let formData = new FormData();

	input.file && formData.append('images', input.file);
	formData.append('info', JSON.stringify(obj));
	try {
		const data = await axios.put(
			`${URLS.URL_USERS}/profile/${userId}`,
			formData
		);
		window.localStorage.setItem('firstName', data.data.response.firstName);
		window.localStorage.setItem(
			'identification',
			data.data.response.identification
		);
		window.localStorage.setItem('lastName', data.data.response.lastName);
		window.localStorage.setItem('profileImage', data.data.response.imageUrl);
		window.localStorage.setItem(
			'address',
			JSON.stringify(data.data.response.address)
		);

		history.push('/userDashboard');
	} catch (error) {
		console.log(error.response.data.message);
	}
	/* setInput(
		setterInputs({
			...input,
			fileValue: '',
			fileData: {},
			file: [],
		})
	); */
	setErrors({});
	setStatus({
		init: false,
		completed: true,
	});
};
