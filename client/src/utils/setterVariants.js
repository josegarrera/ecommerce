export default function setterVariants(variants, variantsSelected) {
	let variantsFinal = {};
	for (const key in variants) {
		if (variantsSelected.includes(key)) {
			variantsFinal[key] = variants[key];
		}
	}
	return variantsFinal;
}
