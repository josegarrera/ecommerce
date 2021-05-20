import styled from "styled-components";

const PaymentInformation_Style = styled.div`
  margin: 80px auto;
  width: 1200px;
  min-height: 650px;
  padding: 50px;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  font: inherit;

  .form__wrapper {
    display: flex;
    flex-direction: column;
  }

  .form__column {
    margin: 1rem;
  }

  .row__top {
    display: flex;
    width: 100%;
    justify-content: flex-start;
  }

  .row {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  .row__bot {
    display: flex;
    justify-content: space-between;
  }

  .form__title {
    margin-top: 2.5rem;
    font-size: 1.3rem;
    color: #616161;
  }

  /* Payment Method */

  .row__payment {
    display: flex;
    margin-top: 1rem;
    justify-content: space-around;

    .payment__option {
      display: flex;
      margin: 1rem 0;
      padding: 1rem;
      width: 45%;
      font-weight: 500;
      justify-content: space-between;
      align-items: center;
      background-color: #fafafa;
      color: #9e9e9e;
      border-radius: 0.5rem;
      border: 1px solid #bdbdbd;

      .payment__method {
        margin-left: 1rem;
      }

      .payment__option__left {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .active {
      display: flex;
      margin: 1rem 0;
      padding: 1rem;
      width: 45%;
      justify-content: space-between;
      align-items: center;
      background-color: #c8e6c9;
      color: #43a047;
      font-weight: 500;
      border-radius: 0.5rem;
      border: 1px solid #4caf50;

      .payment__method {
        margin-left: 1rem;
      }
    }
  }

  .form__input {
    padding: 0.5rem;
    color: #757575;
    border-radius: 0.6rem;
    font-size: 1rem;
    font-weight: 600;
    background-color: #ffffff;
    border: 1.5px solid #e0e0e0;
  }

  .form__input:focus {
    border-color: #a1a3a6;
  }

  .form__label {
    font-size: 0.9rem;
    color: #9e9e9e;
    font-weight: 600;
    margin-top: 0.5rem;
  }

  .form__element {
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
    flex-direction: column;
  }

  .form__button {
    display: flex;
    margin-top: 0.5rem;
    -ms-flex-item-align: end;
    padding: 1rem;
    color: #ffffff;
    background-color: #ee362e;
    border: none;
    border-radius: 0.5rem;
    font-weight: 600;
  }

  .form__button:hover {
    background: #ffffff;
    border: 1px solid #ee362c;
    color: #ee362c;
  }

  .row .form__element {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  .form__button__delete {
    display: inline;
    margin: 0px;
    height: 2rem;
    width: 2rem;
    padding: 0.2rem;
  }

  .form__span {
    color: #757575;
    font-weight: 600;
  }
`;

export default PaymentInformation_Style;
