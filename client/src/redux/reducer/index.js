import {ActionTypes} from '../../utils/constants';
import {
	getCartLocalStorage,
	setCartLocalStorage,
} from '../../utils/localStorage';
import {store} from 'react-notifications-component';

const initialState = {
	products: {},
	productSearch: {},
	productDetail: {},
	productCreated: {},
	orders: [],
	orderDetail: {},
	categories: [],
	brands: [],
	updateBrand: {},
	cartProducts: getCartLocalStorage(),
	user: {},
};

const r = (state = initialState, {type, payload}) => {
	switch (type) {
		///////////////  CART PRODUCTS  ///////////////

		case ActionTypes.ADD_DB_PRODUCT_CART:
			return {
				...state,
				cartProducts: payload,
			};

		case ActionTypes.ADD_PRODUCT_CART:
			const findOne = state.cartProducts.find(
				(e) => e.product._id === payload.product._id
			);
			if (findOne) {
				store.addNotification({
					title: 'Already exist!',
					message: 'The item is already in the cart.',
					type: 'warning',
					insert: 'top',
					container: 'bottom-right',
					animationIn: ['animate__animated', 'animate__fadeIn'],
					animationOut: ['animate__animated', 'animate__fadeOut'],
					dismiss: {
						duration: 3000,
						onScreen: true,
					},
				});
				return {...state};
			} else {
				store.addNotification({
					title: 'Added item!',
					message: 'The item was added to the cart.',
					type: 'success',
					insert: 'top',
					container: 'bottom-right',
					animationIn: ['animate__animated', 'animate__fadeIn'],
					animationOut: ['animate__animated', 'animate__fadeOut'],
					dismiss: {
						duration: 3000,
						onScreen: true,
					},
				});
				setCartLocalStorage(state.cartProducts.concat(payload));
				return {
					...state,
					cartProducts: state.cartProducts.concat(payload),
				};
			}

		case ActionTypes.REMOVE_PRODUCT_CART:
			/* const remove_product = state.cartProducts.filter(
				({_id}) => _id !== payload
			); */

			setCartLocalStorage(payload);
			return {
				...state,
				cartProducts: payload,
			};

		case ActionTypes.REMOVE_CART_PRODUCT_LS:
			const delateProduct = state.cartProducts.filter(
				(e) => e.product._id !== payload
			);

			if (state.cartProducts.length > 1) {
				setCartLocalStorage(delateProduct);
			} else setCartLocalStorage(delateProduct);
			return {
				...state,
				cartProducts: delateProduct,
			};

		///////////////  PRODUCTS  ///////////////

		case ActionTypes.GET_PRODUCTS:
			return {
				...state,
				products: payload,
			};
		case ActionTypes.GET_PRODUCTS_SEARCH:
			return {
				...state,
				productSearch: payload,
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

		///////////////  USERS  ///////////////
		case ActionTypes.LOGIN_USER:
			return {
				...state,
				user: payload,
			};

		default:
			return state;
	}
};

export default r;
