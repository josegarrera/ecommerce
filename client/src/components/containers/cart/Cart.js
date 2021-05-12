import React from "react";
import DIV_CART from "./styled";
const Cart = () => {
  return (
    <DIV_CART>
      <div className="title_cnt">
        <h1>Shopping Cart</h1>
        <h5>{`You Have {LocalSSState} items in your cart`} </h5>
      </div>
      <div className="products__summ__cnt">
        <div className="prd__link">
          <div className="product_cnt">
            <div className="prd__values">
              <div>Product</div>
              <div>Amount</div>
              <div>Price</div>
            </div>
            <div className="product_detail">
              <h3>Product.name</h3>
              <div>
                <button>+</button>
                state.value
                <button>-</button>
              </div>
              <p>{"${product.precio}"}</p>
            </div>
          </div>
          <div>
            <p className="p_back_home">{"<<"} Continue Shopping</p>
            <p className="h2__sbt">subtotal = $Subtotal</p>
          </div>
        </div>

        <div>
          <div className="summary">
            <div className="summary__title">
              <h2>Summary</h2>
              <div className="total__prd">
                <p>total products</p>
                <p>$Subtotal</p>
              </div>
              <div className="total__prd">
                <p>Shipping Cost </p>
                <p>$500</p>
              </div>
            </div>
          </div>
          <button className="btn_buy">Checkout</button>
        </div>
      </div>
    </DIV_CART>
  );
};

export default Cart;
