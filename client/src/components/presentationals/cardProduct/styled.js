import styled from "styled-components";

export const StyledLoder = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  width: 224px;
  height: fit-content;
  overflow: hidden;
`;

const DivCrdProd = styled.div`
  margin: 0rem 1rem 3rem 1rem;
  display: flex;
  flex-direction: column;
  width: 224px;
  height: 430px;
  border: 1px solid #e0e0e0;
  border-radius: 1rem;
  position: relative;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);

  &:hover {
    cursor: pointer;
    transition: 0.4s;
    box-shadow: 1px 1px 30px silver;
  }

  .comboDiv {
    position: absolute;
    top: 256px;
    left: 10px;
    border: 1px solid red;
    background-color: #ee362e;
    color: #fff;
    border-radius: 10px;
    width: fit-content;
    padding: 0rem 0.2rem;
    font-size: 0.8rem;
  }

  .cnt__image {
    height: 270px;
    display: flex;
    justify-content: center;
    background-color: #fff;
    border-radius: 1rem 1rem 0rem 0rem;
  }

  .img__card {
    width: 100%;
    max-height: 260px;
    padding: 3.5rem 1rem;
    border-radius: 1rem 1rem 0rem 0rem;
    object-fit: contain;
  }

  .cnt_info {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0 0 20px 20px;
    border-top: 3px solid whitesmoke;

    .product__name {
      font-size: 0.6rem;
    }
    .product__price {
      font-size: 0.75rem;
    }
  }

  h5 {
    font-weight: 600;
    font-size: 0.8rem;
    color: #9e9e9e;
    width: 80%;
  }
  h6 {
    padding: 0;
    color: #616161;
    font-size: 1rem;
    margin-top: 10px;
  }
  .btn__fav {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 30px;
    right: 30px;
    color: #ee362e;

    &:hover {
      cursor: pointer;
      transition: 0.3s;
      transform: scale(1.2);
    }

    &:active {
      transform: scale(0.8);
      transition: 0.5s;
    }
  }
  .btn__cart {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    color: #ffffff;
    background-color: #ee362e;
    border: none;
    bottom: -1rem;
    right: 1.5rem;

    i {
      height: 0.9rem;
      font-size: 0.7rem;
    }

    &:hover {
      cursor: pointer;
      transition: 0.5s;
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
      transition: 0.5s;
      border: 1px solid gray;
    }
  }
  @media (min-width: 720px) and (max-width: 900px) {
    width: 18rem;
    height: 30rem;
    .img__card {
      max-width: 16rem;
    }
    .cnt_info {
      .product__name {
        font-size: 1rem;
      }
      .product__price {
        font-size: 0.8rem;
      }
    }
  }
  @media (min-width: 401px) and (max-width: 719px) {
    width: 25rem;
    height: 33rem;
    .img__card {
      max-width: 23rem;
    }
    .cnt_info {
      .product__name {
        font-size: 1.6rem;
      }
      .product__price {
        font-size: 1rem;
      }
    }
  }
  @media (min-width: 1px) and (max-width: 400px) {
    width: 23rem;
    height: 35rem;
    .img__card {
      max-width: 22rem;
    }
    .cnt_info {
      .product__name {
        font-size: 1.6rem;
      }
      .product__price {
        font-size: 1rem;
      }
    }
    .btn__cart {
      height: 4rem;
      width: 4rem;
    }
  }
`;

export default DivCrdProd;
