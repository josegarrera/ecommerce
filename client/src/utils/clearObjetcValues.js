export const clearObjectValues = (objToClear) => {
	Object.keys(objToClear).forEach((param) => {
		if (
			objToClear[param] &&
			objToClear[param].toString() === '[object Object]'
		) {
			clearObjectValues(objToClear[param]);
		} else {
			objToClear[param] = undefined;
		}
	});
	return objToClear;
};
