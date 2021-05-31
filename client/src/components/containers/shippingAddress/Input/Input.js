import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import InputStyle from "./styled";
import React from "react";

function Input({ name, title, type, onChangeHandler, validate, input, error }) {
  return (
    <InputStyle>
      <div className="input-element">
        <span className="label">{title}</span>
        <input
          type={type}
          name={name}
          value={input[name].value}
          className={`${
            input[name].validated === "true"
              ? "success-message"
              : input[name].validated === "false"
              ? "error-message"
              : `input`
          } `}
          onChange={(e) => {
            onChangeHandler(e);
          }}
          onKeyUp={validate}
          onBlur={validate}
          validated={input[name].validated}
        ></input>
        {input[name].validated === "true" ? (
          <i className="validate-icon success">
            <FaCheck />
          </i>
        ) : input[name].validated === "false" ? (
          <i className="validate-icon error ">
            <ImCross />
          </i>
        ) : null}
        {input[name].validated === "false" ? (
          <div>
            <p className="error-notification">{error}</p>
          </div>
        ) : null}
      </div>
    </InputStyle>
  );
}

export default Input;
