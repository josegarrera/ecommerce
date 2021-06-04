import axios from 'axios';
import {ActionTypes, URLS} from '../../utils/constants';

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
			const {data} = await axios.get(
				`${URLS.URL_PRODUCTS}?name=${name}&category=${category}&brand=${brand}&variants=${variants}&price=${price}&order=${order}&direction=${direction}&limit=${limit}`
			);

			let newData = data.products.map((e) => {
				return {lot: 0, product: {...e}};
			});

			let newArrData = {pages: data.pages, products: newData};

			dispatch({
				type: ActionTypes.GET_PRODUCTS,
				payload: newArrData,
			});
		} catch (error) {
			dispatch({
				type: ActionTypes.GET_PRODUCTS,
				payload: {
					error: 'Not found',
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
			const {data} = await axios.get(
				`${URLS.URL_PRODUCTS}?name=${name}&category=${category}&brand=${brand}&variants=${variants}&price=${price}&order=${order}&direction=${direction}&limit=${limit}`
			);

			let newData = data.products.map((e) => {
				return {lot: 0, product: {...e}};
			});

			let newArrData = {pages: data.pages, products: newData};

			dispatch({
				type: ActionTypes.GET_PRODUCTS_SEARCH,
				payload: newArrData,
			});
		} catch (error) {
			dispatch({
				type: ActionTypes.GET_PRODUCTS_SEARCH,
				payload: {
					error: 'Not found',
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
		const {data} = await axios.get(page);

		let newData = data.products.map((e) => {
			return {lot: 0, product: {...e}};
		});

		let newArrData = {pages: data.pages, products: newData};

		dispatch({
			type: ActionTypes.GET_PRODUCTS_QUERY,
			payload: newArrData,
		});
	};
};

export const getProductDetail = (id) => {
	//trae los detalles de 1 solo producto
	return async (dispatch) => {
		const {data} = await axios.get(`${URLS.URL_PRODUCTS}/${id}`);
		return dispatch({
			type: ActionTypes.PRODUCT_DETAIL,
			payload: data.response, // TIENE QUE SER UN {}
		});
	};
};
export const cleanProductDetail = () => {
	//trae los detalles de 1 solo producto
	return async (dispatch) => {
		return dispatch({
			type: ActionTypes.CLEAN_PRODUCT_DETAIL,
			payload: {}, // TIENE QUE SER UN {}
		});
	};
};

export const addNewProduct = (body) => {
	//agrega un producto
	return async function (dispatch) {
		try {
			const response = await fetch(URLS.URL_PRODUCTS, {
				method: 'POST',
				body: body,
				headers: {
					Accept: 'application/json',
				},
			});
			const json = await response.json();
			dispatch({
				type: ActionTypes.PRODUCT_CREATED,
				payload: json.response, // TIENE QUE SER UN {}
			});
		} catch (err) {
			return dispatch({
				type: ActionTypes.EMPTY_PRODUCT_CREATED,
				payload: {
					error: err,
					message: 'Internal server error',
				},
			});
		}
	};
};

/* return async (dispatch) => {
		try {
			const {data} = await axios({
				method: 'post',
				url: URLS.URL_PRODUCTS,
				data: body,
				headers: {
					'Content-Type': 'multipart / form-data',
				},
			});
			return dispatch({
				type: ActionTypes.PRODUCT_CREATED,
				payload: data.response, // TIENE QUE SER UN {}
			});
		} catch (err) {
			return dispatch({
				type: ActionTypes.EMPTY_PRODUCT_CREATED,
				payload: {
					error: err,
					message: 'Internal server error',
				},
			});
		}
	};
}; */

export const emptyProductCreated = () => {
	// vacía el producto creado
	return {
		type: ActionTypes.EMPTY_PRODUCT_CREATED,
	};
};

export const getAllProducts = (
	name,
	category,
	brand,
	variants,
	price,
	order,
	direction,
	limit = Infinity
) => {
	return async (dispatch) => {
		try {
			const {data} = await axios.get(
				`${URLS.URL_PRODUCTS}?name=${name}&category=${category}&brand=${brand}&variants=${variants}&price=${price}&order=${order}&direction=${direction}&limit=${limit}`
			);
			let newData = data.products.map((e) => {
				return {lot: 0, product: {...e}};
			});

			dispatch({
				type: ActionTypes.GET_ALL_PRODUCTS,
				payload: newData,
			});
		} catch (error) {
			dispatch({
				type: ActionTypes.GET_PRODUCTS,
				payload: {
					error: 'Not found',
				},
			});
		}
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
		const {data} = await axios.get(
			`${URLS.URL_USER_ORDERS}?userId=${userId}&cart=${cart}`
		);
		console.log(data.response);
		return dispatch({
			type: ActionTypes.CLEAN_CART_PRODUCTS,
			payload: [], // TIENE QUE SER UN []
		});
	};
};

export const getOrderDetail = (id) => {
	//trae el detalle de 1 orden (id de la orden)
	return async (dispatch) => {
		const {data} = await axios.get(`${URLS.URL_USER_ORDERS}/${id}`);
		return dispatch({
			type: ActionTypes.ORDER_DETAIL,
			payload: data.response, // TIENE QUE SER UN {}
		});
	};
};

export const addNewOrder = (body) => {
	//agrega un producto
	return async () => {
		try {
			await axios({
				method: 'post',
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
		const {data} = await axios.get(`${URLS.URL_CATEGORIES}`);
		return dispatch({
			type: ActionTypes.GET_CATEGORIES,
			payload: data.response, // TIENE QUE SER UN [ "", "", ""]
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

export const addCartProduct = (body) => {
	// trae el cart de un usuario del servidor.
	return async (dispatch) => {
		const {data} = await axios.get(`${URLS.URL_PRODUCTS}/${body.id}`);
		let newArrData = {
			lot: body.lot,
			variant: body.variant,
			product: {...data.response},
		};
		return dispatch({
			type: ActionTypes.ADD_PRODUCT_CART,
			payload: newArrData, // TIENE QUE SER UN {}
		});
	};
};

export const postLocalStorage = (body) => {
	// el body va a ser un objeto con un userId y un [{},{},{},{},{},{}] que sera los productos agregados desde el rol de "guest"
	return async (dispatch) => {
		const {data} = await axios.post(URLS.URL_USER_ORDERS, body);
		return dispatch({
			type: ActionTypes.ADD_DB_PRODUCT_CART,
			payload: data.response.items, // TIENE QUE SER UN []
		});
	};
};

export const updateCardProduct = (id) => {
	return (dispatch) => {
		return dispatch({
			type: ActionTypes.REMOVE_CART_PRODUCT_LS,
			payload: id, // TIENE QUE SER UN ""
		});
	};
};

export const removeCartProduct = (body) => {
	// remueve un producto del carrito de un usuario y me devuelve el carrito actualizado
	return async (dispatch) => {
		const {data} = await axios.delete(URLS.URL_USER_ORDERS, {data: body});
		return dispatch({
			type: ActionTypes.REMOVE_PRODUCT_CART,
			payload: data.response.items, // TIENE QUE SER UN {}
		});
	};
};

export const changeLot = (body) => {
	return async (dispatch) => {
		const {data} = await axios.put(URLS.URL_USER_ORDERS, body);
		return dispatch({
			type: ActionTypes.CHANGE_LOT,
			payload: data.response.items,
		});
	};
};

export const changeLotLocal = (payload) => {
	return {
		type: ActionTypes.CHANGE_LOT_LOCAL,
		payload,
	};
};

////////////////////////////////////////  BRANDS ACTIONS  ////////////////////////////////////////

export const getBrands = () => {
	// trae todas las marcas del servidor.
	return async (dispatch) => {
		const {data} = await axios.get(`${URLS.URL_BRANDS}`);
		return dispatch({
			type: ActionTypes.GET_BRANDS,
			payload: data.response, // TIENE QUE SER UN [ "", "", ""]
		});
	};
};

export const addBrand = (body) => {
	//agrega ua marca
	return async (dispatch) => {
		try {
			await axios({
				method: 'post',
				url: URLS.URL_BRANDS,
				data: body,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export const updateBrand = (update) => {
	// actualiza una marca buscandole por su id
	let {_id, name} = update;
	return async (dispatch) => {
		try {
			const {data} = await axios.put(`${URLS.URL_BRANDS}/${_id}`, {name});
			return dispatch({
				type: ActionTypes.UPDATE_BRAND,
				payload: data.response, // TIENE QUE SER UN {}
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export const loginUser = (user) => {
	return {
		type: ActionTypes.LOGIN_USER,
		payload: user,
	};
};

////////////////////////////////////////  WISH LIST  ////////////////////////////////////////

export const getWishListOfDB = (id) => {
	// AGREGA UN PRODUCTO A FAVORITOS
	return async (dispatch) => {
		const {
			data: {response},
		} = await axios.get(`${URLS.URL_FAVORITES}?userId=${id}`);
		return dispatch({
			type: ActionTypes.SET_WISH_LIST,
			payload: response, // TIENE QUE SER UN {}
		});
	};
};

export const addFavProduct = (id) => {
	// AGREGA UN PRODUCTO A FAVORITOS
	return async (dispatch) => {
		return dispatch({
			type: ActionTypes.ADD_FAV_PRODUCT,
			payload: id, // TIENE QUE SER UN {}
		});
	};
};

export const addFavProductToDB = (body) => {
	// AGREGA UN PRODUCTO A FAVORITOS a la base de datos
	return async (dispatch) => {
		const {
			data: {response},
		} = await axios.post(URLS.URL_FAVORITES, body);
		return dispatch({
			type: ActionTypes.ADD_FAV_PRODUCT_DB,
			payload: response, // TIENE QUE SER UN {}
		});
	};
};

export const removeFavProduct = (id) => {
	// AGREGA UN PRODUCTO A FAVORITOS
	return async (dispatch) => {
		return dispatch({
			type: ActionTypes.REMOVE_FAV_PRODUCT,
			payload: id, // TIENE QUE SER UN ID
		});
	};
};
export const removeFavProductToDB = (body) => {
	// REMUEVE UN PRODUCTO DE FAVORITOS DE LA BASE DE DATOS
	return async (dispatch) => {
		const {
			data: {response},
		} = await axios.delete(URLS.URL_FAVORITES, {data: body});
		return dispatch({
			type: ActionTypes.REMOVE_FAV_PRODUCT_DB,
			payload: response, // TIENE QUE SER UN ID
		});
	};
};

////////////////////////////////////////  CHECKOUT ACTIONS  ////////////////////////////////////////

export const confirmCheckout = (body) => {
	// el body sólo consiste en el id del user {id: "id"}
	//inicia una orden de pago
	return async (dispatch) => {
		try {
			const {data} = await axios({
				method: 'post',
				url: URLS.URL_CHECKOUT,
				data: body,
			});
			return dispatch({
				type: ActionTypes.CONFIRM_CHECKOUT,
				payload: data.response, //
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export const saveShippingInfo = (body) => {
	// AGREGA INFO DE LA COMPRA
	return {
		type: ActionTypes.SET_SHIPPING_INFO,
		payload: body,
	};
};

export const emptyPaymentMethod = () => {
	return {
		type: ActionTypes.EMPTY_PAYMENT_METHOD,
		payload: null,
	};
};

////////////////////////////////////////  CURRENCIES  ///////////////////////////////////////

export const setPayIn = () => {
	// AGREGA INFO DE LA COMPRA
	return {
		type: ActionTypes.SET_PAY_IN,
	};
};

////////////////////////////////////////  REVIEW  ///////////////////////////////////////
