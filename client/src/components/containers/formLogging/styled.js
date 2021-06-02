import styled from "styled-components";

const Login_Style = styled.div`
  .loginContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(88, 88, 90, 0.3);
    top: 0;
    left: 0;
    z-index: 10;
    color: red;
  }

  .rowTop {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .rowBottom {
    display: flex;
    margin-top: 2.5rem;
    justify-content: flex-start;
    align-items: center;
  }

  .close__icon {
    font-size: 2rem;
    color: #bdbdbd;
    cursor: pointer;
    text-align: right;
  }

  .close__icon:hover {
    color: #757575;
  }

  .loginWrapper {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 1rem;

    .signInBtnTop {
      margin: 1rem;
      padding: 0.8rem;
      width: 11rem;
      background-color: #ee362e;
      border: none;
      color: #ffffff;
      border-radius: 2rem;
      font-size: 1rem;
      cursor: pointer;
    }

    .signUpBtn {
      padding: 1rem;
      width: 100%;
      width: 11rem;
      background-color: #ffffff;
      border: none;
      border-radius: 2rem;
      font-size: 1rem;
      color: #ee362e;
      cursor: pointer;
    }

    .loginForm {
      display: flex;
      flex-direction: column;
    }

    .passwordInput,
    .emailInput {
      margin-top: 0.5rem;
      padding: 1rem 0 1rem 4rem;
      border: 1px solid #ee362e;
      border-radius: 3rem;
      font-size: 1.1rem;
    }

    .lockIcon {
      position: absolute;
      top: 3.3rem;
      left: 1.7rem;
    }

    .passwordSpan,
    .emailSpan,
    .forgotSpan {
      color: #616161;
    }

    .forgotSpan {
      margin-top: 1rem;
    }

    .signUpBottom {
      color: #616161;
    }

    .signUpSpan {
      color: #29b6f6;
      cursor: pointer;
      margin-left: 0.5rem;
    }

    .inputElement {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    .signInBtnBottom {
      margin-top: 3rem;
      cursor: pointer;
      padding: 0.8rem;
      width: 100%;
      background-color: #ee362e;
      border: none;
      color: #ffffff;
      border-radius: 2rem;
      font-size: 1rem;
      font-weight: 600;
    }
    .separadorDiv {
      display: flex;
      justify-content: center;
      .separador {
        border-top: 1px solid #bdbdbd;
        margin-top: 5%;
        width: 70%;
      }
    }

    .googleDiv {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #bdbdbd;
      border-radius: 2rem;
      color: #bdbdbd;
      width: 100%;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      margin-top: 5%;

      .googleButton {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.8rem;
        height: 100%;
        width: 100%;

        .googleLogo {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default Login_Style;
