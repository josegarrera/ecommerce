import { ActionTypes } from "../../utils/constants";
import {
  getCartLocalStorage,
  setCartLocalStorage,
} from "../../utils/localStorage";
import Swal from "sweetalert2";

const initialState = {
  products: {},
  productSearch:{},
  productDetail: {},
  productCreated: {},
  orders: [],
  orderDetail: {},
  categories: [],
  brands: [],
  updateBrand: {},
  cartProducts: getCartLocalStorage(),
  signup: {},
  login: {},
};

const r = (state = initialState, { type, payload }) => {
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
        Swal.fire({
          title: "Already exist",
          text: "The item is already in the cart",
          icon: "warning",
          confirmButtonText: "Ok",
        });
        return { ...state };
      }
      setCartLocalStorage(state.cartProducts.concat(payload));
      return {
        ...state,
        cartProducts: state.cartProducts.concat(payload),
      };


		case ActionTypes.REMOVE_PRODUCT_CART:
			/* const remove_product = state.cartProducts.filter(
				({_id}) => _id !== payload
			); */

			setCartLocalStorage(payload);
			return {
				...state,
				cartProducts: payload,
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
		case ActionTypes.CREATE_USER:
			return {
				...state,
				signup: payload,
			};
		case ActionTypes.LOGIN_USER:
			return {
				...state,
				login: payload,
			};

		default:
			return state;
	}
};

export default r;
