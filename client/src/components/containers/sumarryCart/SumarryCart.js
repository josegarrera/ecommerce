import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { confirmCheckout } from "../../../redux/actions";

const FORM_ID = "payment-form";

const SumarryCart = ({ casa, count, placeOrder }) => {
  const preferenceId = useSelector((state) => state.paymentMethod);
  const shippingAddress = useSelector((state) => state.shippingAddress);

  const dispatch = useDispatch();
  const userId = localStorage.userId;
  console.log(userId);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    dispatch(confirmCheckout({ userId, shippingAddress }));
  };

  useEffect(() => {
    if (preferenceId) {
      // con el preferenceId en mano, inyectamos el script de mercadoPago
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.setAttribute("data-preference-id", preferenceId);
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
      return () => {
        //Elimina el script como nodo hijo del elemento form
        form.removeChild(script);
      };
    }
  }, [preferenceId]);

  return (
    <div>
      <div className="summary">
        <div className="summary__title">
          <h2>Summary</h2>
          <div className="total__prd">
            <p>total products</p>
            <p>${count}</p>
          </div>
          <div className="total__prd">
            <p>Shipping Cost </p>
            <p>$500</p>
          </div>
        </div>
      </div>

      {placeOrder ? (
        <form id={FORM_ID} onSubmit={handleOrderSubmit}>
          <button type="submit" className="btn_buy">
            Place Order
          </button>
          <button type="submit"></button>
        </form>
      ) : (
        <Link to="/shipping">
          <button onClick={casa} className="btn_buy">
            Checkout
          </button>
        </Link>
      )}
    </div>
  );
};

export default SumarryCart;

// const FORM_ID = 'payment-form';

// export default function Product() {

//   useEffect(() => {
//     if (preferenceId) {
//       // con el preferenceId en mano, inyectamos el script de mercadoPago
//       const script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.src =
//         'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
//       script.setAttribute('data-preference-id', preferenceId);
//       const form = document.getElementById(FORM_ID);
//       form.appendChild(script);
//       return () =>{
//         //Elimina el script como nodo hijo del elemento form
//         form.removeChild(script);
//       }
//     }
//   }, [preferenceId]);

//   return (
//     <form id={FORM_ID} onSubmit={onSubmit} >
//       <button type='submit'></button>
//     </form>

//   );
// }
