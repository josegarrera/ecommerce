/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import ShippingAddress_Style from "./styled";
import CheckoutSteps from "../checkoutSteps/checkoutSteps";
import { Link, useHistory } from "react-router-dom";
import { saveShippingInfo } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import Input from "./Input/Input";

function Index() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [shippingInfo, setShippingInfo] = useState({
    firstName: { value: "", validated: "" },
    lastName: { value: "", validated: "" },
    zip_code: { value: "", validated: "" },
    street_name: { value: "", validated: "" },
    street_number: { value: "", validated: "" },
    id: { value: "", validated: "" },
  });

  const expressions = {
    firstName: /^[a-zA-ZÀ-ÿ\s]{6,15}$/, // Letras y espacios, pueden llevar acentos.
    lastName: /^[a-zA-ZÀ-ÿ\s]{6,15}$/, // Letras y espacios, pueden llevar acentos.
    types: /^[a-zA-ZÀ-ÿ\s]{6,15}$/, // Letras y espacios, pueden llevar acentos.
    zip_code: /^.{1,5}$/, // 4 a 12 digitos.
    street_name: /^.{1,5}$/, // 4 a 12 digitos.
    street_number: /^.{1,5}$/, // 4 a 12 digitos.
    id: /^.{1,5}$/, // 4 a 12 digitos.
  };

  const onChangeHandler = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: {
        ...shippingInfo[e.target.name],
        value: e.target.value,
      },
    });
  };

  const validate = (e) => {
    if (expressions[e.target.name].test(shippingInfo[e.target.name].value)) {
      console.log("input correcto");
      setShippingInfo({
        ...shippingInfo,
        [e.target.name]: { ...shippingInfo[e.target.name], validated: "true" },
      });
    } else {
      console.log("input incorrecto");
      setShippingInfo({
        ...shippingInfo,
        [e.target.name]: { ...shippingInfo[e.target.name], validated: "false" },
      });
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(saveShippingInfo(shippingInfo));
    history.push("/confirmation");
  };

  // shippingInfo && console.log(shippingInfo);

  return (
    <ShippingAddress_Style>
      <div>
        <CheckoutSteps step1 step2></CheckoutSteps>

        <div className="row__top">
          <h1 className="form__title">Shipping Address</h1>
        </div>

        <form type="submit" className="product__form">
          <div className="form__wrapper">
            <div className="form__column">
              <div className="form__element">
                <Input
                  name="firstName"
                  title="First name"
                  type="text"
                  input={shippingInfo}
                  onChangeHandler={onChangeHandler}
                  validate={validate}
                  error="Must be between 6 to 15 characters"
                ></Input>
              </div>

              <div className="form__element">
                <Input
                  name="lastName"
                  title="Last name"
                  type="text"
                  input={shippingInfo}
                  onChangeHandler={onChangeHandler}
                  validate={validate}
                  error="Must be between 6 to 15 characters"
                ></Input>
              </div>

              <div className="form__element">
                <Input
                  name="zip_code"
                  title="Zip Code"
                  type="number"
                  input={shippingInfo}
                  onChangeHandler={onChangeHandler}
                  validate={validate}
                  error="Must be between 6 to 15 characters"
                ></Input>
              </div>

              <div className="form__element">
                <Input
                  name="street_name"
                  title="Street Name"
                  type="number"
                  input={shippingInfo}
                  onChangeHandler={onChangeHandler}
                  validate={validate}
                  error="Must be between 6 to 15 characters"
                ></Input>
              </div>

              <div className="form__element">
                <Input
                  name="street_number"
                  title="Street Number"
                  type="number"
                  input={shippingInfo}
                  onChangeHandler={onChangeHandler}
                  validate={validate}
                  error="Must be between 6 to 15 characters"
                ></Input>
              </div>

              <div className="form__element">
                <Input
                  name="id"
                  title="ID"
                  type="number"
                  input={shippingInfo}
                  onChangeHandler={onChangeHandler}
                  validate={validate}
                  error="Must be between 6 to 15 characters"
                ></Input>
              </div>

              <div className="row__bot">
                <Link to="/cart">
                  <button className="form__button">Back</button>
                </Link>
                <Link to="/confirmation">
                  <button
                    onClick={(e) => onSubmitHandler(e)}
                    className="form__button"
                  >
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </ShippingAddress_Style>
  );
}

export default Index;
