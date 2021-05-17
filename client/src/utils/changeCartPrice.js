export const changeCartPrice = (cartProducts, rendering) => {
  return cartProducts
    .reduce(
      (
        acc,
        {
          product: {
            price: { currency, value },
          },
        }
      ) => {
        if (rendering) {
          if (currency === "USD") {
            return acc + value * 93;
          }
          return acc + value;
        } else {
          if (currency !== "USD") {
            return acc + value / 93;
          }
          return acc + value;
        }
      },
      0
    )
    .toFixed(2);
};
