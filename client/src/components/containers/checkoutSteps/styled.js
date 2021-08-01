import styled from "styled-components";

const checkoutSteps_Style = styled.div`
  .steps__row {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  .checked {
    color: #2ecb84;
  }

  .unchecked {
    color: #bdbdbd;
  }

  .step {
    display: flex;
    align-items: center;

    i {
      margin: 0 1rem;
    }

    span {
      color: #616161;
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
`;

export default checkoutSteps_Style;
