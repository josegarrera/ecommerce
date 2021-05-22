/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import PaymentInformation_Style from "./styled";
import CheckoutSteps from "../checkoutSteps/checkoutSteps";
import { Link } from "react-router-dom";
import { FaCcPaypal } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";

function Index() {
  const [payment, setPayment] = useState({
    paymentMethod: "",
  });

  const onClickHandler = (e) => {
    setPayment({ paymentMethod: e });
  };

  console.log(payment.paymentMethod);

  return (
    <PaymentInformation_Style>
      <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>

        <form className="product__form">
          <div className="form__wrapper">
            <div className="form__column">
              <div className="row__top">
                <h1 className="form__title">Payment</h1>
              </div>

              <div className="row__payment">
                <div
                  className={
                    payment
                      ? payment.paymentMethod === "stripe"
                        ? "active"
                        : "payment__option"
                      : ""
                  }
                  name="stripe"
                  onClick={() => onClickHandler("stripe")}
                >
                  <div className="payment__option__left">
                    <i>
                      <FaCcPaypal />
                    </i>
                    <span className="payment__method">Stripe</span>
                  </div>
                  <div className="payment__option__right">
                    <i className="payment__selected">
                      <ImCheckboxChecked />
                    </i>
                  </div>
                </div>
                <div
                  className={
                    payment
                      ? payment.paymentMethod === "mercadopago"
                        ? "active"
                        : "payment__option"
                      : ""
                  }
                  name="stripe"
                  onClick={() => onClickHandler("mercadopago")}
                >
                  <div className="payment__option__left">
                    <i>
                      <FaCcPaypal />
                    </i>
                    <span className="payment__method">MercadoPago</span>
                  </div>
                  <div className="payment__option__right">
                    <i className="payment__selected">
                      <ImCheckboxChecked />
                    </i>
                  </div>
                </div>
              </div>

              <div className="form__element">
                <label className="form__label">Card Holder Name</label>
                <input
                  className="form__input"
                  type="text"
                  id="name"
                  name="name"
                ></input>
              </div>

              <div className="form__element">
                <label className="form__label">Card Number</label>
                <input
                  id="form__input__price"
                  className="form__input"
                  type="number"
                  name="priceValue"
                ></input>
              </div>

              <div className="form__element">
                <label className="form__label">Expire Date</label>
                <input
                  id="form__input__price"
                  className="form__input"
                  type="number"
                  name="priceValue"
                ></input>
              </div>

              <div className="form__element">
                <label className="form__label">CVV</label>
                <input
                  id="form__input__price"
                  className="form__input"
                  type="number"
                  name="priceValue"
                ></input>
              </div>

              <div className="row__bot">
                <Link to="/shipping">
                  <button className="form__button">Back</button>
                </Link>
                <Link to="/confirmation">
                  <button className="form__button">Continue</button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </PaymentInformation_Style>
  );
}

export default Index;
