import React from "react";
import CheckoutSteps_Style from "./styled";

function index({ step1, step2, step3, step4 }) {
  return (
    <CheckoutSteps_Style>
      <div className="row checkout__steps">
        <div className={step1 ? "active" : ""}>Shopping</div>
        <div className={step2 ? "active" : ""}>Shipping</div>
        <div className={step3 ? "active" : ""}>Payment</div>
        <div className={step4 ? "active" : ""}>Place Order</div>
      </div>
    </CheckoutSteps_Style>
  );
}

export default index;
