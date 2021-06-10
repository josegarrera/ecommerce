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

			const index = Number(e.target.id[0]);

			let newArr = [...state];
			newArr[index][e.target.name] = {
				filesData,
				files,
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
				filesData: [],
				files: [],
				fileValue: '',
			};

			setState((prevState) => {
				return {
					...prevState,
					variants: newArr,
				};
			});
		}
	} else if (e.target.name.includes('/')) {
		const index = Number(e.target.name[0]);

		let newArr = [...state];
		newArr[index].imageUrl = newArr[index].imageUrl.filter(
			(item) => item !== e.target.name.slice(1)
		);
		console.log(newArr);
		setState((prevState) => {
			return {
				...prevState,
				variants: newArr,
			};
		});
	} else if (!e.target.name) {
		return;
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
