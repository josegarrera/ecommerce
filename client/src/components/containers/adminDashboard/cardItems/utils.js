export const handleInputFile = (e, setState) => {
	if (e.target.files.length) {
		const files = e.target.files;
		let filesData = [];
		for (let i = 0; i < files.length; i++) {
			const fileItems = {
				name: files[i].name,
				size: files[i].size,
				type: files[i].type,
			};
			filesData.push(fileItems);
		}
		setState((prevState) => {
			return {
				...prevState,
				filesData,
				files: e.target.files,
				fileValue: e.target.value,
			};
		});
	} else {
		setState((prevState) => {
			return {
				...prevState,
				filesData: [],
				files: [],
				fileValue: '',
			};
		});
	}
};

export const handleDeleteImage = (e, setState) => {
	setState((prevState) => {
		return {
			...prevState,
			imageUrl: prevState.imageUrl.filter((item) => item !== e.target.id),
		};
	});
};

export const handleInputVariants = (e, state, setState) => {
	if (e.target.name === 'imageFile') {
		if (e.target.files[0]) {
			const file = {
				name: e.target.files[0].name,
				size: e.target.files[0].size,
				type: e.target.files[0].type,
			};
			const index = Number(e.target.id[0]);

			let newArr = [...state];
			newArr[index][e.target.name] = {
				fileData: file,
				file: e.target.files[0],
				fileValue: e.target.value,
			};
			setState((prevState) => {
				return {
					...prevState,
					variants: newArr,
				};
			});
		} else {
			const index = Number(e.target.id[0]);
			let newArr = [...state];
			newArr[index][e.target.name] = {
				fileData: {},
				file: {},
				fileValue: '',
			};

			setState((prevState) => {
				return {
					...prevState,
					variants: newArr,
				};
			});
		}
	} else if (e.target.id.includes('/')) {
		console.log(e.target.id);
		const index = Number(e.target.id[0]);
		console.log(e.target.id.slice(1), 'sacando el index');
		let newArr = [...state];
		newArr[index].imageUrl = newArr[index].imageUrl.filter(
			(item) => item !== e.target.id.slice(1)
		);
		setState((prevState) => {
			return {
				...prevState,
				variants: newArr,
			};
		});
	} else {
		const index = Number(e.target.id[e.target.id.length - 1]);
		let newArr = [...state];
		newArr[index][e.target.name] = e.target.value;
		setState((prevState) => {
			return {
				...prevState,
				variants: newArr,
			};
		});
	}
};
