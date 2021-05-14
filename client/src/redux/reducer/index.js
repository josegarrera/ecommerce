import {ActionTypes} from '../../utils/constants';
import {
	getCartLocalStorage,
	setCartLocalStorage,
} from '../../utils/localStorage';

const initialState = {
	products: {},
	productDetail: {},
	productCreated: {},
	orders: [],
	orderDetail: {},
	categories: [],
	brands: [],
	updateBrand: {},
	cartProducts: getCartLocalStorage(),
};

const r = (state = initialState, {type, payload}) => {
	switch (type) {
		///////////////  CART PRODUCTS  ///////////////

		case ActionTypes.ADD_DB_PRODUCT_CART:
			let results = payload.filter(({_id: id}) => {
				let existProduct = state.cartProducts.find(({_id}) => _id === id);
				if (existProduct) return false;
				return true;
			});
			const cart_db_product = state.cartProducts.concat(results);
			setCartLocalStorage(cart_db_product);
			return {
				...state,
				cartProducts: cart_db_product,
			};

		case ActionTypes.ADD_PRODUCT_CART:
			const cart_product = state.cartProducts.concat(payload);
			setCartLocalStorage(cart_product);
			return {
				...state,
				cartProducts: cart_product,
			};

		case ActionTypes.REMOVE_PRODUCT_CART:
			const remove_product = state.cartProducts.filter(
				({_id}) => _id !== payload
			);

			setCartLocalStorage(remove_product);
			return {
				...state,
				cartProducts: remove_product,
			};

		///////////////  PRODUCTS  ///////////////

		case ActionTypes.GET_PRODUCTS:
			return {
				...state,
				products: payload,
			};
		case ActionTypes.GET_PRODUCTS_QUERY:
			return {
				...state,
				products: payload,
			};
		case ActionTypes.UPDATE_PRODUCT:
			return {
				...state,
				products: payload,
			};
		case ActionTypes.PRODUCT_DETAIL:
			return {
				...state,
				productDetail: payload,
			};
		case ActionTypes.PRODUCT_CREATED:
			return {
				...state,
				productCreated: payload,
			};
		case ActionTypes.EMPTY_PRODUCT_CREATED:
			return {
				...state,
				productCreated: {},
			};

		///////////////  ORDERS  ///////////////
		case ActionTypes.GET_ORDERS:
			return {
				...state,
				orders: payload,
			};
		case ActionTypes.ORDER_DETAIL:
			return {
				...state,
				orderDetail: payload,
			};

		///////////////  CATEGORIES  ///////////////
		case ActionTypes.GET_CATEGORIES:
			return {
				...state,
				categories: payload,
			};
		///////////////  BRANDS  ///////////////
		case ActionTypes.GET_BRANDS:
			return {
				...state,
				brands: payload,
			};
		case ActionTypes.UPDATE_BRAND:
			return {
				...state,
				updateBrand: payload,
			};

		default:
			return state;
	}
};

export default r;
