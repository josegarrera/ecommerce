import {ActionTypes} from '../../utils/constants';

const initialState = {
	products: {},
	productDetail: {},
	productCreated: {},
	orders: [],
	orderDetail: {},
	categories: [],
	brands: [],
};

const r = (state = initialState, {type, payload}) => {
	switch (type) {
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

		default:
			return state;
	}
};

export default r;
