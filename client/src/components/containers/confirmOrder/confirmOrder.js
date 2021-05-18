/* eslint-disable react/jsx-pascal-case */
import React from "react";
import PaymentInformation_Style from "./styled";
import CheckoutSteps from "../checkoutSteps/checkoutSteps";
import { Link } from "react-router-dom";

function index() {
  return (
    <PaymentInformation_Style>
      <div>
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>

        <div className="row__top">
          <h1 className="form__title">Confirm</h1>
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

              <div className="row__bot">
                <Link to="/payment">
                  <button className="form__button">Back</button>
                </Link>
                <Link to="/">
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

export default index;
