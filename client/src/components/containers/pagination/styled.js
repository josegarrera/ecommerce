import styled from "styled-components";

const DivPag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  margin-bottom: 50px;
  margin-top: -25px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin: 15px;
    background: linear-gradient(to right, #c0392b, #8e44ad);
    color: #fff;
    font-weight: bold;
    border: none;
    &:hover {
      background: linear-gradient(to left, #c0392b, #8e44ad);
      transform: scale(1.1);
      border: 2px solid #8e44ad;
      box-shadow: 10px 10px 10px black;
    }
    &:active {
      background: linear-gradient(to left, #c0392b, #8e44ad);
      transform: scale(0.9);
    }
  }
`;

export default DivPag;
