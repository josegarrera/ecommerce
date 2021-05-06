import styled from "styled-components";

const DivCrdProd = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px solid black;
  border-radius: 20px;
  width: 210px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0 0;
  }
  h3 {
    padding: 0;
    margin: 5px;
  }
  h4 {
    padding: 0;
    margin: 5px 0 20px 0;
  }
  .btn__fav {
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 85%;
    right: 20px;
    &:hover {
      transform: scale(1.5);
      transition: 0.5s;
    }

    &:active {
      transform: scale(0.9);
    }
  }
  .btn__cart {
    
    cursor: pointer;
    position: absolute;
    top: 100%;
    right: 20px;
  }
`;

export default DivCrdProd;
