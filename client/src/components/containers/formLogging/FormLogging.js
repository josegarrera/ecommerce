/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import Login_Style from "./styled";

import { AiFillLock } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";

const FormLogging = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Holi");
  };

  const onChangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Login_Style>
      <div className="loginContainer">
        <div className="loginWrapper">
          <div className="loginContent">
            <div className="rowTop">
              <button className="signInBtnTop">
                <div>Sign in</div>
              </button>
              <button className="signUpBtn">
                <div>Sign up</div>
              </button>
            </div>
            <form className="loginForm">
              <div className="inputElement">
                <span className="emailSpan">Email Address</span>
                <i className="lockIcon">
                  <AiFillLock />
                </i>
                <input
                  className="usernameInput"
                  type="text"
                  name="username"
                  value={input.username}
                  placeholder="Enter email"
                  onChange={(e) => onChangeHandler(e)}
                ></input>
              </div>

              <div className="inputElement">
                <span className="passwordSpan">Password</span>
                <i className="lockIcon">
                  <FaEnvelope />
                </i>
                <input
                  className="passwordInput"
                  type="password"
                  name="password"
                  value={input.password}
                  placeholder="Enter password"
                  onChange={(e) => onChangeHandler(e)}
                ></input>
              </div>

              <span className="forgotSpan"> forgot password?</span>
            </form>

            <button
              type="submit"
              className="signInBtnBottom"
              onSubmit={(e) => onSubmitHandler(e)}
            >
              <div>SIGN IN</div>
            </button>

            <div className="rowBottom">
              <p className="signUpBottom"> don't have an account? </p>
              <span className="signUpSpan"> Sign up </span>
            </div>
          </div>
          <div className="loginPicture"></div>
        </div>
      </div>
    </Login_Style>
  );
};

export default FormLogging;
