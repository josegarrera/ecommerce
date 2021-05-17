import React, { useEffect, useState } from "react";
import DIV_CART from "./styled";
import { useSelector, useDispatch } from "react-redux";
import CardCartProducts from "../cardCartProducts/CardCartProducts";
import { postLocalStorage } from "../../../redux/actions";
import { Link } from "react-router-dom";
import SumarryCart from "../sumarryCart/SumarryCart";

const Cart = () => {
  /* 
  Action que envie a get "/orders" con user._id  ,cart(true)  . Solo tiene que traer las ordenes abiertas. (arreglo con productos agregados en otra session)
  
  
  traer el estado login del useSelector ( si solo necesitamos el id del usuario traer login.user._id)
  
  useEffect ==> 
  getOpenUserOrders(userId)

  boton amount tiene que aumentar la cantidad del producto. 
  hace un put  a /ordens?userId.items[?].lot
  como trabajar produtos de base de datos y productos normales(getProducts)

  


  postOrders(cartProducts);
  
  */

  const cartProduct = useSelector((state) => state.cartProducts);
  const user = useSelector((state) => state.userId);
  const dispatch = useDispatch();
  const [rendering, setRendering] = useState(true);

  useEffect(() => {
    if (user) {
      dispatch(postLocalStorage({ cartProduct, user }));
      window.localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  let count$ =
    cartProduct &&
    cartProduct
      .reduce((accumulator, currentValue) => {
        if (rendering) {
          if (currentValue.product.price.currency === "USD") {
            return accumulator + currentValue.product.price.value * 93;
          }
          return accumulator + currentValue.product.price.value;
        } else {
          if (currentValue.product.price.currency !== "USD") {
            return accumulator + currentValue.product.price.value / 93;
          }
          return accumulator + currentValue.product.price.value;
        }
      }, 0)
      .toFixed(2);

  console.log(count$);

  const casa = () => {
    console.log(JSON.parse(window.localStorage.getItem("cart")));
  };

  return (
    <DIV_CART>
      <div className="title_cnt">
        <h1>Shopping Cart</h1>
      </div>

      <div className="products__summ__cnt">
        <div className="prd__link">
          <div className="product_cnt">
            <div className="prd__values">
              <div>Product</div>
              <div>Amount</div>
              <div>Price</div>
            </div>
            {cartProduct.length ? (
              cartProduct.map((e) => (
                <CardCartProducts key={e._id} product={e} />
              ))
            ) : (
              <h1>No tienes Producto agregados al carrito</h1>
            )}
          </div>
          <div>
            <Link to="/catalogue">
              <p className="p_back_home">{"<<"} Continue Shopping</p>
            </Link>

            {rendering ? (
              <div>
                <p className="h2__sbt">Subtotal en $ = AR$ {count$}</p>
                <button
                  onClick={() => setRendering(!rendering)}
                  className="btn__sbt"
                >
                  Pay In U$D
                </button>
              </div>
            ) : (
              <>
                <p className="h2__sbt">Subtotal en U$D = U$D {count$}</p>
                <button
                  onClick={() => setRendering(!rendering)}
                  className="btn__sbt"
                >
                  Pay In $
                </button>
              </>
            )}
          </div>
        </div>
        <SumarryCart casa={casa} count={count$} />
      </div>
    </DIV_CART>
  );
};

export default Cart;
