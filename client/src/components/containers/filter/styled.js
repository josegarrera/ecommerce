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
    color: #616161;
    font-size: 0.8rem;
    font-weight: 500;
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

  .range__price {
    margin-top: 1.5rem;
  }

  .price__input {
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    color: #757575;
    border-radius: 5rem;
    font-size: 1rem;
    font-weight: 600;
    background-color: #ffffff;
    border: 1.5px solid #e0e0e0;
    width: 100%;
  }

  .row {
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;

    i {
      color: #9e9e9e;
    }
  }

  .input__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
  }

  .color__selector {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;

    ul {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      list-style: none;
      width: 100%;
    }

    ul li {
      font-size: 1.8rem;
      border-radius: 50%;
      margin: 0.5rem;
      cursor: pointer;
      transition: transform 0.3s;
    }

    ul li:hover {
      transform: scale(1.1);
    }

    #white {
      color: #eeeeee;
    }

    #blue {
      color: #5067e1;
    }

    #purple {
      color: #746ace;
    }

    #red {
      color: #ff506d;
    }

    #black {
      color: #3b3856;
    }

    #yellow {
      color: #ffb900;
    }

    #skyblue {
      color: #00c6de;
    }
  }
`;

export default Filter_Style;

// box-shadow: 0 30px 30px -15 rgba(0,0,0,0,3)
