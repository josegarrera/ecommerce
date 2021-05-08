import axios from "axios";
import { ActionTypes, URLS } from "../../utils/constants";

////////////////////////////////////////  PRODUCTS ACTIONS  ////////////////////////////////////////

export const getAllProducts = () => {
  // trae todos los productos del servidor.
  return async (dispatch) => {
    const {
      data: { products },
    } = await axios.get(`${URLS.URL_PRODUCTS}`);
    return dispatch({
      type: ActionTypes.GET_PRODUCTS,
      payload: products, // TIENE QUE SER UN []
    });
  };
};

export const getProductDetail = (id) => {
  //trae los detalles de 1 solo producto
  return async (dispatch) => {
    const { data } = await axios.get(`${URLS.URL_PRODUCTS}/${id}`);
    return dispatch({
      type: ActionTypes.PRODUCT_DETAIL,
      payload: data, // TIENE QUE SER UN {}
    });
  };
};

export const addNewProduct = (body) => {
  //agrega un producto
  return async () => {
    try {
      await axios({
        method: "post",
        url: URLS.URL_PRODUCTS,
        data: body,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProductByQuery = (name) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${URLS.URL_PRODUCTS}?name=${name}`);
    dispatch({
      type: ActionTypes.GET_PRODUCT_BY_QUERY,
      payload: data,
    });
  };
};

/*----------------------------------------------------------------PENDING---------------------------------------------------------------

DUDAS , PREGUNTAR AUTENTIFICACION, DISPATCHA DE PUT/DELETE

export const removeProduct = (id) => {
  //agrega un producto
  return async () => {
    try {
      await axios.delete(URLS.URL_PRODUCTS, {
        headers: {
          Authorization: authorizationToken,
        },
        data: {
          id,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateProduct = (id, body) => {
  //trae los detalles de 1 solo producto
  return async (dispatch) => {
    const { data } = await axios.put(`${URLS.URL_PRODUCTS}/${id}`, body); 
    return dispatch({
      type: ActionTypes.UPDATE_PRODUCT,
      payload: data, // TIENE QUE SER UN {}
    });
  };
};

--------------------------------------------------------------------------------------------------------------------------------------*/

////////////////////////////////////////  ORDERS ACTIONS  ////////////////////////////////////////

export const getAllOrders = () => {
  // trae todos las ordenes que tiene el vendedor.
  return async (dispatch) => {
    const { data } = await axios.get(`${URLS.URL_ORDERS}`);
    return dispatch({
      type: ActionTypes.GET_ORDERS,
      payload: data, // TIENE QUE SER UN []
    });
  };
};

export const getOrderDetail = (id) => {
  //trae el detalle de 1 orden (id de la orden)
  return async (dispatch) => {
    const { data } = await axios.get(`${URLS.URL_ORDERS}/${id}`);
    return dispatch({
      type: ActionTypes.ORDER_DETAIL,
      payload: data, // TIENE QUE SER UN {}
    });
  };
};

export const addNewOrder = (body) => {
  //agrega un producto
  return async () => {
    try {
      await axios({
        method: "post",
        url: URLS.URL_PRODUCTS,
        data: body,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

////////////////////////////////////////  USERS ACTIONS  ////////////////////////////////////////

////////////////////////////////////////  CATEGORIES ACTIONS  ////////////////////////////////////////

export const getCategories = () => {
  // trae todas las categorias del servidor.
  return async (dispatch) => {
    const { data } = await axios.get(`${URLS.URL_CATEGORIES}`);
    return dispatch({
      type: ActionTypes.GET_CATEGORIES,
      payload: data, // TIENE QUE SER UN [ "", "", ""]
    });
  };
};
