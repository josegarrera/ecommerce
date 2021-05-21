import styled from "styled-components";

const DivFav = styled.div`
  margin: 80px auto;
  max-width: 80vw;
  min-width: 38rem;
  height: fit-content;
  min-height: 40rem;
  padding: 3.5rem;
  border-radius: 1rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  .title__fav {
    color: #ee362c;
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);
  }
  .favorites__cnt {
    min-height: 20rem;
    margin-bottom: 3rem;
    margin-top: 2rem;
  }
  .btn__home {
    position: absolute;
    bottom: 3rem;
    padding: 10px 15px;
    border-radius: 1rem;
    cursor: pointer;
    border: none;
    background: #ee362c;
    color: #ffffff;
    &:hover {
      background: #ffffff;
      border: 1px solid #ee362c;
      color: #ee362c;
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1);
      transition: 0.1s;
    }
  }
  .not__fav {
    margin: 25% auto;
    .msg__not__fav {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`;

export default DivFav;
