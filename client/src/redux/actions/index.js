import axios from "axios";
import { ActionTypes, URLS } from "../../utils/constants";

////////////////////////////////////////  PRODUCTS ACTIONS  ////////////////////////////////////////

export const getProducts = (
  name,
  category,
  brand,
  variants,
  price,
  order,
  direction,
  limit = 12
) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${URLS.URL_PRODUCTS}?name=${name}&category=${category}&brand=${brand}&variants=${variants}&price=${price}&order=${order}&direction=${direction}&limit=${limit}`
      );

      let newData = data.products.map((e) => {
        return { lot: 0, product: { ...e } };
      });

      let newArrData = { pages: data.pages, products: newData };

      dispatch({
        type: ActionTypes.GET_PRODUCTS,
        payload: newArrData,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_PRODUCTS,
        payload: {
          error: "Not found",
        },
      });
    }
  };
};

export const getProductsSearch = (
  name,
  category,
  brand,
  variants,
  price,
  order,
  direction,
  limit = 12
) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${URLS.URL_PRODUCTS}?name=${name}&category=${category}&brand=${brand}&variants=${variants}&price=${price}&order=${order}&direction=${direction}&limit=${limit}`
      );

      let newData = data.products.map((e) => {
        return { lot: 0, product: { ...e } };
      });

      let newArrData = { pages: data.pages, products: newData };

      dispatch({
        type: ActionTypes.GET_PRODUCTS_SEARCH,
        payload: newArrData,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_PRODUCTS_SEARCH,
        payload: {
          error: "Not found",
        },
      });
    }
  };
};

export const cleanCatalogue = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.GET_PRODUCTS,
      payload: [],
    });
  };
};

export const getProductsQuery = (page) => {
  return async (dispatch) => {
    const { data } = await axios.get(page);

    let newData = data.products.map((e) => {
      return { lot: 0, product: { ...e } };
    });

    let newArrData = { pages: data.pages, products: newData };

    dispatch({
      type: ActionTypes.GET_PRODUCTS_QUERY,
      payload: newArrData,
    });
  };
};

export const getProductDetail = ({ id }) => {
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
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "post",
        url: URLS.URL_PRODUCTS,
        data: body,
      });
      return dispatch({
        type: ActionTypes.PRODUCT_CREATED,
        payload: data, // TIENE QUE SER UN {}
      });
    } catch (err) {
      return dispatch({
        type: ActionTypes.EMPTY_PRODUCT_CREATED,
        payload: {
          error: err,
          message: "Internal server error",
        },
      });
    }
  };
};

export const emptyProductCreated = () => {
  // vacía el producto creado
  return {
    type: ActionTypes.EMPTY_PRODUCT_CREATED,
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

export const getOpenUserOrders = (userId, cart) => {
  // trae todos las ordenes que tiene el vendedor.
  return async (dispatch) => {
    const { data } = await axios.get(
      `${URLS.URL_USER_ORDERS}?userId=${userId}&cart=${cart}`
    );
    return dispatch({
      type: ActionTypes.ADD_DB_PRODUCT_CART,
      payload: data.items, // TIENE QUE SER UN []
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

////////////////////////////////////////  CART ACTIONS  ////////////////////////////////////////

/* export const addDBCartProduct = (id) => {
  // trae el cart de un usuario del servidor.
  return async (dispatch) => {
    const { data } = await axios.get(`${URLS.URL_CART}?id=${id}`);
    return dispatch({
      type: ActionTypes.ADD_DB_PRODUCT_CART,
      payload: data, // TIENE QUE SER UN [{},{},{}]
    });
  };
}; */

export const addCartProduct = (id) => {
  // trae el cart de un usuario del servidor.
  return async (dispatch) => {
    const { data } = await axios.get(`${URLS.URL_PRODUCTS}/${id}`);
    let newArrData = { lot: 1, product: { ...data } };
    return dispatch({
      type: ActionTypes.ADD_PRODUCT_CART,
      payload: newArrData, // TIENE QUE SER UN {}
    });
  };
};

export const postLocalStorage = (body) => {
  // el body va a ser un objeto con un userId y un [{},{},{},{},{},{}] que sera los productos agregados desde el rol de "guest"
  return async (dispatch) => {
    const { data } = await axios.post(URLS.URL_USER_ORDERS, body);
    return dispatch({
      type: ActionTypes.ADD_DB_PRODUCT_CART,
      payload: data, // TIENE QUE SER UN {}
    });
  };
};

export const removeCartProduct = (data) => {
  console.log("hasta aca llegue", data);
  // remueve un producto del carrito de un usuario y me devuelve el carrito actualizado
  return async (dispatch) => {
    const res = await axios.delete(`${URLS.URL_USER_ORDERS}`, { data });
    console.log("esta es la respuesra", res);
    return dispatch({
      type: ActionTypes.REMOVE_PRODUCT_CART,
      payload: res.data, // TIENE QUE SER UN {}
    });
  };
};

////////////////////////////////////////  BRANDS ACTIONS  ////////////////////////////////////////

export const getBrands = () => {
  // trae todas las marcas del servidor.
  return async (dispatch) => {
    const { data } = await axios.get(`${URLS.URL_BRANDS}`);
    return dispatch({
      type: ActionTypes.GET_BRANDS,
      payload: data, // TIENE QUE SER UN [ "", "", ""]
    });
  };
};

export const addBrand = (body) => {
  //agrega ua marca
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "post",
        url: URLS.URL_BRANDS,
        data: body,
      });
      console.log("Se creo la marca", data.name);
    } catch (err) {
      console.log("No se creo la marca");
    }
  };
};

export const updateBrand = (update) => {
  // actualiza una marca buscandole por su id
  let { _id, name } = update;
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${URLS.URL_BRANDS}/${_id}`, { name });
      console.log("Se actualizo la marca", data);
      return dispatch({
        type: ActionTypes.UPDATE_BRAND,
        payload: data, // TIENE QUE SER UN {}
      });
    } catch (err) {
      console.log("No se actualizo la brand");
    }
  };
};

export const loginUser = (user) => {
  return {
    type: ActionTypes.LOGIN_USER,
    payload: user,
  };
};
