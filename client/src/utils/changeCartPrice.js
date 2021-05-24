export const changeCartPrice = (cartProducts, payIn) => {
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
				if (payIn === 'USD') {
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
