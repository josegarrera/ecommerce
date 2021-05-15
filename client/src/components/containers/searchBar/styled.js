import styled from "styled-components";

const FormSearchBar = styled.div`
  display: flex;

  .searchBar {
    border: 2px solid #e7e7e7;
    border-radius: 30px;
    height: 57px;
    width: 340px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    &:focus-within {
      border: 1px solid #58585a;
    }

    .input {
      border: none;
      background: none;
      border-radius: 30px;
      height: 54px;
      width: 250px;
      font-size: 20px;
      &:focus-within {
        outline: none;
      }
      ::placeholder {
        color: #c0c0c0;
      }
      &:hover {
        cursor: pointer;
      }
    }

    .divLupa {
      height: 45px;
      width: 45px;
      background-color: #ee362e;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .lupa {
        color: white;
        font-size: 16px;
      }
      &:hover {
        transform: scale(1.1);
        transition: 0.3s;
        cursor: pointer;
      }
    }
  }
`;

export default FormSearchBar;
