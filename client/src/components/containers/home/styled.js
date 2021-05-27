import styled from "styled-components";

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #a1a3a6;
  }

  .offers {
    display: flex;
    flex-wrap: wrap;
    margin: 50px 50px;

    .offer {
      width: 224px;
      height: 430px;
      border: 1px solid #e0e0e0;
      border-radius: 20px;
      margin: 0px 50px;
      background-color: #e0e0e0;
    }
  }

  

`;

export default HomeStyle;
