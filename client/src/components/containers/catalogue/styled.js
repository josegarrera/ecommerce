import styled from "styled-components";

const Catalogue_Style = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .catalogue {
    display: flex;
    padding: 100px 10%;
    background-color: #f4f4f4;
  }

  .cards__container {
    display: flex;
    padding: 0 2rem;
    flex-wrap: wrap;
    width: 100%;
  }

  .filter__options {
    height: 900px;
    width: inherit;
    border-radius: 1rem;
    background-color: #ffffff;
  }

  .filter__title {
    padding: 1.5rem;
    font-weight: bold;
    color: #a1a3a6;
    width: 360px;
  }

  .separator {
    border: 1px solid #fafafa;
    width: 100%;
  }

  .filter__section {
    padding: 1.5rem;
  }

  .filter__section__title {
    font-weight: 600;
    color: #a1a3a6;
  }

  .filter__section__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .filter__section__icon {
    font-size: 1.5rem;
    color: #a1a3a6;
  }

  .filter__option__items {
    text-decoration: none;
    list-style: none;
  }

  .filter__option__item {
    color: #a3a3a3;
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  input[type="checkbox"] {
    appearance: none;
    border: 1px solid #ebeaeb;
    width: 1rem;
    height: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    background-color: #ffffff;
    border-radius: 0.2rem;
    cursor: pointer;
  }

  input[type="checkbox"]:after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
  }
`;

export default Catalogue_Style;
