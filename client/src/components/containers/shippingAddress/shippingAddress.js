/* eslint-disable react/jsx-pascal-case */
import React from "react";
import ShippingAddress_Style from "./styled";
import CheckoutSteps from "../checkoutSteps/checkoutSteps";

function index() {
  return (
    <ShippingAddress_Style>
      <div>
        <CheckoutSteps step1 step2></CheckoutSteps>

        <div className="row">
          <h1 className="form__title">Shipping Address</h1>
        </div>

        <form className="product__form">
          <div className="form__wrapper">
            <div className="form__column">
              <div className="form__element">
                <label className="form__label">Full Name</label>
                <input
                  className="form__input"
                  type="text"
                  id="name"
                  name="name"
                ></input>
              </div>

              <div className="form__element">
                <label className="form__label">Address</label>
                <input
                  id="form__input__price"
                  className="form__input"
                  type="number"
                  name="priceValue"
                ></input>
              </div>

              <div className="form__element">
                <label className="form__label">City</label>
                <input
                  id="form__input__price"
                  className="form__input"
                  type="number"
                  name="priceValue"
                ></input>
              </div>

              <div className="form__element">
                <label className="form__label">Postal Code</label>
                <input
                  id="form__input__price"
                  className="form__input"
                  type="number"
                  name="priceValue"
                ></input>
              </div>

              <div className="form__element">
                <label className="form__label">Country</label>
                <input
                  id="form__input__price"
                  className="form__input"
                  type="number"
                  name="priceValue"
                ></input>
              </div>

              <div className="bottom__row">
                <button className="form__button">Continue</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </ShippingAddress_Style>
  );
}

export default index;
