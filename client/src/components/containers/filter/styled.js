import styled from "styled-components";

const Filter_Style = styled.div`
  .filter__options {
    width: 18rem;
    min-height: 40rem;
    border-radius: 1rem;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
      0 15px 40px rgba(166, 173, 201, 0.2);
  }

  .filter__title {
    padding: 1.3rem;
    font-weight: bold;
    color: #616161;
    font-size: 0.9rem;
  }

  .separator {
    border: 0.5px solid #eeeeee;
    width: 100%;
  }

  .filter__section {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 0.5rem;
    height: 100%;
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
`;

export default Filter_Style;
