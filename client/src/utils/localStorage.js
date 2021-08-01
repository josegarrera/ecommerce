export function getCartLocalStorage() {
  const data = window.localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
}

export function setCartLocalStorage(product) {
  window.localStorage.setItem("cart", JSON.stringify(product));
}

export function getWishListLocalStorage() {
  const data = window.localStorage.getItem("wishlist");
  return data ? JSON.parse(data) : [];
}

export function setWishListLocalStorage(wishlist) {
  window.localStorage.setItem("wishlist", JSON.stringify(wishlist));
}
