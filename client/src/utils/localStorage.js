export function getCartLocalStorage() {
  const data = window.localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
}

export function setCartLocalStorage(product) {
  window.localStorage.setItem("cart", JSON.stringify(product));
}
