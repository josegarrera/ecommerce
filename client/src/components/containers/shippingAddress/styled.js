import styled from "styled-components";

const ShippingAddress_Style = styled.div`
  margin: 80px auto;
  width: 1200px;
  height: fit-content;
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
  }

  .form__column {
    margin: 1rem;
  }

  .close__icon {
    font-size: 2rem;
    color: #bdbdbd;
    cursor: pointer;
  }

  .close__icon:hover {
    color: #757575;
  }

  .row {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .form__title {
    font-size: 1.3rem;
    color: #616161;
  }

  .form__input {
    padding: 1rem;
    color: #757575;
    border-radius: 0.6rem;
    font-size: 1rem;
    font-weight: 600;
    background-color: #ffffff;
    border: 1.5px solid #e0e0e0;
  }
  .form__input__variant {
    padding: 0.5rem;
    color: #757575;
  }

  .form__input:focus {
    border-color: #a1a3a6;
  }
  #form__input__price {
    height: 50px;
    padding: 0.5rem;
  }
  .form__label {
    font-size: 0.9rem;
    color: #9e9e9e;
    font-weight: 600;
    margin-top: 0.5rem;
  }

  .form__element {
    display: flex;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    flex-direction: column;
  }

  .form__button {
    display: flex;
    margin-top: 0.5rem;
    align-self: flex-end;
    padding: 1rem;
    color: #ffffff;
    background-color: #ee362e;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    width: max-content;
    height: 2.5rem;
    align-items: center;
  }

  .form__button:hover {
    background-color: #e54835;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  .checkbox__container {
    display: flex;
    padding: 1rem;
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
  #form__variant__card {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ee362e;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
  #add_variant_btn {
    align-self: center;
  }
  .form__span {
    color: #757575;
    font-weight: 600;
  }

    
`;

export default ShippingAddress_Style;
