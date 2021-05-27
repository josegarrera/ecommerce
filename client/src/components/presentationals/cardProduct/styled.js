import styled from "styled-components";

export const StyledLoder = styled.div`
  margin: 0px 30px 50px;
  display: flex;
  flex-direction: column;
  width: 224px;
  height: fit-content;
  overflow: hidden;
`;

const DivCrdProd = styled.div`
  margin: 2.25rem;
  display: flex;
  flex-direction: column;
  width: 224px;
  height: 430px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  position: relative;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);

  &:hover {
    cursor: pointer;
    transition: 0.4s;
    box-shadow: 1px 1px 30px silver;
  }
  .cnt__image {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px 20px 0 0;
    background-color: #fff;
  }
  .img__card {
    max-height: 260px;
    padding: 5rem;
  }
  .cnt_info {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 0 0 20px 20px;
    border-top: 3px solid whitesmoke;
  }

  h5 {
    font-weight: 600;
    font-size: 0.8rem;
    color: #9e9e9e;
    width: 60%;
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
    font-size: 1.6rem;
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
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    color: #ffffff;
    background-color: #ee362e;
    border: none;
    bottom: -1.25rem;
    right: 1.5rem;

    i {
      height: 0.9rem;
      font-size: 0.8rem;
    }

    &:hover {
      cursor: pointer;
      transition: 0.3s;
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
      transition: 0.5s;
      border: 1px solid gray;
    }
  }
`;

export default DivCrdProd;
