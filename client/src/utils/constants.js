export const ActionTypes = {
	GET_PRODUCTS: 'GET_PRODUCTS',
	GET_ALL_PRODUCTS: 'GET_ALL_PRODUCTS',
	GET_PRODUCTS_SEARCH: 'GET_PRODUCTS_SEARCH',
	PRODUCT_DETAIL: 'PRODUCT_DETAIL',
	CLEAN_PRODUCT_DETAIL: 'CLEAN_PRODUCT_DETAIL',
	PRODUCT_CREATED: 'PRODUCT_CREATED',
	GET_PRODUCTS_QUERY: 'GET_PRODUCTS_QUERY',
	UPDATE_PRODUCT: 'UPDATE_PRODUCT',
	EMPTY_PRODUCT_CREATED: 'EMPTY_PRODUCT_CREATED',
	CLEAN_CATALOGUE: 'CLEAN_CATALOGUE',

	GET_ORDERS: 'GET_ORDERS',
	ORDER_DETAIL: 'ORDER_DETAIL',

	GET_CATEGORIES: 'GET_CATEGORIES',

	GET_BRANDS: 'GET_BRANDS',
	UPDATE_BRAND: 'UPDATE_BRAND',

	ADD_DB_PRODUCT_CART: 'ADD_DB_PRODUCT_CART',
	ADD_PRODUCT_CART: 'ADD_PRODUCT_CART',
	REMOVE_PRODUCT_CART: 'REMOVE_PRODUCT_CART',
	REMOVE_CART_PRODUCT_LS: 'REMOVE_CART_PRODUCT_LS',

	CREATE_USER: 'CREATE_USER',
	LOGIN_USER: 'LOGIN_USER',
	CLEAN_SIGNUP: 'CLEAN_SIGNUP',

	ADD_FAV_PRODUCT: 'ADD_FAV_PRODUCT',
	ADD_FAV_PRODUCT_DB: 'ADD_FAV_PRODUCT_DB',
	REMOVE_FAV_PRODUCT: 'REMOVE_FAV_PRODUCT',
	REMOVE_FAV_PRODUCT_DB: 'REMOVE_FAV_PRODUCT_DB',
	SET_WISH_LIST: 'SET_WISH_LIST',

	CONFIRM_CHECKOUT: 'CONFIRM_CHECKOUT',

	SET_SHIPPING_INFO: 'SET_SHIPPING_INFO',

	SET_PAY_IN: 'SET_PAY_IN',
};

export const URLS = {
	URL_CHECKOUT: `${process.env.REACT_APP_BACKEND_URL}/checkout`,
	URL_PRODUCTS: `${process.env.REACT_APP_BACKEND_URL}/products`,
	URL_ALL_PRODUCTS: `${process.env.REACT_APP_BACKEND_URL}/allproducts`,
	URL_USER_ORDERS: `${process.env.REACT_APP_BACKEND_URL}/orders`,
	URL_CATEGORIES: `${process.env.REACT_APP_BACKEND_URL}/categories`,
	URL_FAVORITES: `${process.env.REACT_APP_BACKEND_URL}/favourites`,
	URL_BRANDS: `${process.env.REACT_APP_BACKEND_URL}/brands`,
	URL_SIGNUP: `${process.env.REACT_APP_BACKEND_URL}/signup`,
	URL_LOGIN: `${process.env.REACT_APP_BACKEND_URL}/login`,
	URL_USERS: `${process.env.REACT_APP_BACKEND_URL}/users`,
	URL_AUTH: `${process.env.REACT_APP_BACKEND_URL}/auth`,
};
