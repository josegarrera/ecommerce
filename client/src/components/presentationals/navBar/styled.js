import styled from "styled-components";

const DivNavBar = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 155px;
  background-color: #ffffff;

  a {
    text-decoration: none;
    color: #a1a3a6;
  }

  .topNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 75%;
    padding: 0px 8%;

    .logo {
      color: #ee362e;
      font-size: 37px;
    }

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

    .topRight {
      border-radius: 30px;
      height: 57px;
      width: 340px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .iconDiv {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #f8f9f9;
        height: 45px;
        width: 45px;
        border-radius: 100%;

        .icon {
          color: #58585a;
          font-size: 16px;
        }

        &:hover {
          transform: scale(1.4);
          transition: 0.3s;
          cursor: pointer;
        }
      }
    }
  }

  .bottomNav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 25%;
    padding: 0px 6%;

    .catalogue {
      color: #a1a3a6;
      font-size: 17px;

      &:hover {
        transform: scale(1.1);
        transition: 0.3s;
        cursor: pointer;
      }
    }

    .select {
      background: none;
      border: none;

      color: #a1a3a6;
      font-size: 15px;
    }
  }
`;

export default DivNavBar;
