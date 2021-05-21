export const changeCartPrice = (cartProducts, rendering) => {
	return cartProducts
		.reduce(
			(
				acc,
				{
					lot,
					product: {
						price: {currency, value},
					},
				}
			) => {
				if (rendering) {
					if (currency === 'USD') {
						return acc + value * lot * 93;
					}
					return acc + value * lot;
				} else {
					if (currency !== 'USD') {
						return acc + (value * lot) / 93;
					}
					return acc + value * lot;
				}
			},
			0
		)
		.toFixed(2);
};
