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
    padding: 0px 10%;

    .logo {
      color: #ee362e;
      font-size: 25px;
      font-weight: 800;
      width: max-content;
    }

    .topRight {
      border-radius: 30px;
      height: 57px;
      width: 340px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

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

        /* &:hover {
          transform: scale(1.4);
          transition: 0.3s;
          cursor: pointer;
        } */
      }

      .cart {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &:hover .cartHoverView {
          display: block;
        }
      }

      .cartHoverView {
        position: absolute;
        display: none;
        border: 1px solid #e0e0e0;
        padding: 1.5rem;
        top: 2.7rem;
        right: 0;
        background-color: #ffffff;
        width: 25rem;
        height: auto;
        border-radius: 1rem;
        z-index: 10;
        box-shadow: 1px 1px 30px silver;

        .cartHeader {
        }

        .row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cartHoverTitle {
          font-size: 1.5rem;
          font-weight: 600;
          color: #212121;
        }

        .cartHovercardPrice {
          font-size: 1.5rem;
          font-weight: 600;
          color: #bdbdbd;
        }

        .closeBtnHeader {
          font-size: 1.3rem;
          cursor: pointer;
        }

        .closeBtn {
          font-size: 1rem;
          cursor: pointer;
        }

        .cartItem {
          display: flex;
          justify-content: space-around;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          align-items: center;
          border-radius: 1rem;
          padding: 1rem;
          background-color: #fafafa;
        }

        .cartItemInfo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .cardItemTitle {
          margin: 3px;
          font-weight: bold;
          font-size: 0.8rem;
          color: #616161;
        }

        .cartHoverItems {
          font-size: 0.7rem;
          color: #212121;
        }

        .cardItemPrice {
          margin: 3px;
          font-size: 0.8rem;
          color: #212121;
        }

        .cartItemImg {
          display: flex;
          height: 4rem;
          width: 4rem;
        }

        .cartItemQty {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.6rem;
          color: #bdbdbd;
          flex-direction: column;
        }

        .actualQty {
          color: #424242;
          font-size: 1rem;
        }

        .incrementQty,
        .decrementQty {
          margin: 0.2rem;
          cursor: pointer;
        }

        .separator {
          border: 1px solid #e0e0e0;
        }

        .cartBottom {
          margin: 1rem 0;
          font-size: 0.8rem;
        }

        .totalSpan {
          font-size: 1rem;
          font-weight: 600;
        }

        .totalPrice {
          font-size: 1.3rem;
          font-weight: 700;
          color: #212121;
        }

        .cartItemBtn {
          display: flex;
          margin-top: 1rem;
          cursor: pointer;
          justify-content: center;
          align-items: center;
          padding: 0.6rem;
          background-color: #ee362e;
          color: #ffffff;
          border-radius: 5rem;
          font-size: 0.8rem;
        }
      }
    }
  }

  .bottomNav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 25%;
    padding: 0px 10%;
    font-weight: 600;
    color: #bdbdbd;

    .bottomLinks {
      font-size: 16px;
      font-weight: 600;
      color: #bdbdbd;
    }

    .catalogue {
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
      font-size: 16px;
      font-weight: 600;
      color: #bdbdbd;
    }
  }
`;

export default DivNavBar;