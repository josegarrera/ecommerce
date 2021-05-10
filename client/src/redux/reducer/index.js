import {ActionTypes} from '../../utils/constants';

const initialState = {
	products: {},
	productDetail: {},
	productCreated: {},
	orders: [],
	orderDetail: {},
	categories: [],
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

		default:
			return state;
	}
};

export default r;
