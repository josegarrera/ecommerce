import { ActionTypes } from "../../utils/constants";

const initialState = {
  products: [],
  fakeProducts: [],
  productDetail: {},
};

const r = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: payload,
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

    default:
      return state;
  }
};

export default r;
