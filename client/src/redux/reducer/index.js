import { ActionTypes } from "../../utils/constants";

const initialState = {
  products: [],
  fakeProducts: [],
  productDetail: {},
  orders: [],
  orderDetail: {},
  categories: [],
};

const r = (state = initialState, { type, payload }) => {
  switch (type) {
    ///////////////  PRODUCTS  ///////////////
    case ActionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        fakeProducts: payload,
      };
    case "UPDATE_PRODUCT":
      console.log("LLEGUE ACA");
      return {
        ...state,
        fakeProducts: payload,
      };
    case ActionTypes.PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: payload,
      };
    case ActionTypes.GET_PRODUCT_BY_QUERY:
      return {
        ...state,
        fakeProducts: payload,
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
