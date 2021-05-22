/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import PaymentInformation_Style from "./styled";
import CheckoutSteps from "../checkoutSteps/checkoutSteps";
import SumaryCart from "../sumarryCart/SumarryCart";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { FaCcStripe } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";
import { FiBox } from "react-icons/fi";

function Index() {
  const [payment, setPayment] = useState({ paymentMethod: "" });

  const onClickHandler = (e) => {
    setPayment({ paymentMethod: e });
  };

  console.log(payment);

  return (
    <PaymentInformation_Style>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>

      <div className="confirmation">
        <div className="main">
          <div className="left__col">
            <div className="section">
              <div className="row__top">
                <h1 className="form__title">Shipping Address</h1>
                <button>Edit</button>
              </div>

              <div className="shipping__content">
                <div>
                  <i className="location__icon ">
                    <HiOutlineLocationMarker />
                  </i>
                </div>
                <div className="shipping__info">
                  <span className="shipping__name"></span>Leo Messi
                  <span className="shipping__number">+62 8123-4567-8910</span>
                  <span className="shipping__Address">
                    871 Kenangan Street (between Jones & Leavenworth St), San
                    Francisco
                  </span>
                </div>
              </div>
            </div>

            <div className="section">
              <div className="row__top">
                <h1 className="form__title">Payment</h1>
                <button>Edit</button>
              </div>

              <div className="payment__content">
                <i className="payment__icon ">
                  <MdPayment />
                </i>

                <div className="payments__options">
                  {/* Option 1 */}
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
                        <FaCcStripe />
                      </i>
                      <span className="payment__method">Stripe</span>
                    </div>
                    <div className="payment__option__right">
                      <i className="payment__selected">
                        <ImCheckboxChecked />
                      </i>
                    </div>
                  </div>

                  {/* Option 2 */}
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
                        <FaCcStripe />
                      </i>
                      <span className="payment__method ">Mercadopago</span>
                    </div>
                    <div className="payment__option__right">
                      <i className="payment__selected">
                        <ImCheckboxChecked />
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}

            <div className="section">
              <div className="row__top">
                <h1 className="form__title">Order Items</h1>
                <button>Edit</button>
              </div>

              <div className="payment__content">
                <i className="payment__icon ">
                  <FiBox />
                </i>

                <div className="order__items">
                  <div className="product">
                    <div className="product__left">
                      <div className="product__img">
                        <img></img>
                      </div>
                      <div className="product__info">
                        <span className="product__name">
                          <h2>Galaxy S21</h2>
                        </span>
                        <span className="product__model">Samsung</span>
                        <span className="product__price">$500</span>
                      </div>
                    </div>
                    <div className="product__right">x 1</div>
                  </div>
                  <div className="product">
                    <div className="product__left">
                      <div className="product__img">
                        <img></img>
                      </div>
                      <div className="product__info">
                        <span className="product__name">
                          <h2>Galaxy S21</h2>
                        </span>
                        <span className="product__model">Samsung</span>
                        <span className="product__price">$500</span>
                      </div>
                    </div>
                    <div className="product__right">x 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right__col">
            <SumaryCart placeOrder={true}></SumaryCart>
          </div>
        </div>

        <div className="row__bot">
          <Link to="/shipping">
            <button className="form__button">Back</button>
          </Link>
        </div>
      </div>
    </PaymentInformation_Style>
  );
}

export default Index;
