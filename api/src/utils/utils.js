function filterProducts(data, category, brand, variantSelected, price, quotes) {
	const filterCategory = (products) => {
		const filtered = category
			? products.filter(
					(product) =>
						product.categories.length &&
						product.categories.find((item) =>
							item.name.toLowerCase().includes(category)
						)
			  )
			: products;

		return filtered;
	};

	const filterBrand = (products) => {
		const filtered = brand
			? products.filter(
					(product) =>
						product.brands.length &&
						product.brands.find((item) =>
							item.name.toLowerCase().includes(brand)
						)
			  )
			: products;

		return filtered;
	};

	const filterVariants = (products) => {
		const filtered = variantSelected.length
			? products.filter(
					(product) =>
						product.variants.filter((variant) =>
							variant[variantSelected[2]]
								? variant.stock &&
								  String(variant[variantSelected[0]])
										.toLowerCase()
										.includes(variantSelected[1])
								: String(variant[variantSelected[0]])
										.toLowerCase()
										.includes(variantSelected[1])
						).length
			  )
			: products;

		return filtered;
	};
	const filterPrice = (products) => {
		const {USDARS} = quotes;
		const filtered = price.length
			? products.filter(
					(product) =>
						(price[2] === 'USD' &&
							product.price.currency === price[2] &&
							product.price.value >= price[0] &&
							product.price.value <= price[1]) ||
						(price[2] === 'USD' &&
							product.price.currency === 'ARS' &&
							product.price.value / USDARS >= price[0] &&
							product.price.value / USDARS <= price[1]) ||
						(price[2] === 'ARS' &&
							product.price.currency === 'ARS' &&
							product.price.value >= price[0] &&
							product.price.value <= price[1]) ||
						(price[2] === 'ARS' &&
							product.price.currency === 'USD' &&
							product.price.value * USDARS >= price[0] &&
							product.price.value * USDARS <= price[1])
			  )
			: products;

		return filtered;
	};

	const result = filterPrice(filterVariants(filterBrand(filterCategory(data))));
	return result;
}

module.exports = {
	filterProducts,
};
