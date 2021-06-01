import styled from "styled-components";

const searchStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 3rem;

  .search__bar {
    position: relative;
    width: 45%;
  }

  .searchInput {
    display: flex;
    align-items: center;
    border: 3px solid #e0e0e0;
    border-radius: 2rem;
    font-size: 1.1rem;
    width: 80%;
    height: 1rem;
    background-color: #ffffff;
    padding: 1.5rem 3rem;
    &:hover {
      cursor: pointer;
    }
  }

  .search__icon {
    position: absolute;
    left: 1.5rem;
    bottom: 0.75rem;
    color: #9e9e9e;
  }

  .form__button {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    -ms-flex-item-align: end;
    color: #ffffff;
    background-color: #ee362e;
    border: none;
    border-radius: 2rem;
    font-weight: 500;
    font-size: 17px;
    padding: 1.5rem;
    height: 1rem;
    width: 15%;
    margin: 20px 0px;
    border: 1px solid #ee362e;
  }

  .add__icon {
    position: absolute;
    left: 1.25rem;
    bottom: 0.35rem;
    font-size: 1.25rem;
  }

  .form__button:hover {
    background: #ffffff;
    border: 2px solid #ee362c;
    color: #ee362c;
  }

  .form__button__hidden {
    visibility: hidden;
  }
`;
export default searchStyles;
