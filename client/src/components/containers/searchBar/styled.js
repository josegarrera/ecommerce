import styled, { css } from "styled-components";

const FormSearchBar = styled.div`
  display: flex;

  .searchBar {
    border: 2px solid #e7e7e7;
    border-radius: 10px;
    height: 50px;
    width: 340px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;

    .data_item {
      border: 2px solid #e7e7e7;
      border-top: 0px;
      background: none;
      color: black;
      padding: 10px;
      &:hover {
        color: white;
        cursor: pointer;
        background-color: #3483fa;
      }
    }

    .data_input {
      border-top: 2px solid #e7e7e7;
      width: 340px;
      position: absolute;
      top: 50px;
      left: -12px;
      background-color: white;
    }

    .input {
      border: none;
      background: none;
      height: 54px;
      width: 90%;
      font-size: 15px;
      &:focus-within {
        outline: none;
      }
      ::placeholder {
        color: #c0c0c0;
      }
    }

    .divLupa {
      height: 36px;
      width: 40px;
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
      }
    }
  }

  @media (max-width: 992px) {
    display: none;
  }

  ${({ responsive }) =>
    responsive &&
    css`
      display: none;

      @media (max-width: 992px) {
        display: block;
        background-color: #f5f5f5;
        font-size: 1.5rem;
        border-radius: 2rem;
        border: none;
        
        .searchBar {
          border-radius: 2rem;
          border: none;
          height: 50px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0px 10px;

          .data_item {
            border: 2px solid #e7e7e7;
            border-top: 0px;
            background: none;
            color: black;
            padding: 10px;
            &:hover {
              color: white;
              cursor: pointer;
              background-color: #3483fa;
            }
          }

          .data_input {
            border-top: 2px solid #e7e7e7;
            width: 340px;
            position: absolute;
            top: 50px;
            left: -12px;
            background-color: white;
          }

          .datalist-input {
            font-size: 1.5rem;
          }

          .input {
            border: none;
            background: none;
            height: 54px;
            width: 90%;

            padding: 0 1rem;
            &:focus-within {
              outline: none;
            }
            ::placeholder {
              color: #c0c0c0;
              font-size: 1.2rem;
            }
          }

          .divLupa {
            height: 36px;
            width: 40px;
            background-color: #e0e0e0;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .lupa {
              color: #424242;
              font-size: 16px;
            }
            &:hover {
              transform: scale(1.1);
              transition: 0.3s;
            }
          }
        }
      }
    `}
`;

export default FormSearchBar;
