import styled from "styled-components";

const CarouselStyle = styled.div`
  width: 100%;
  padding: 0 10%;

  .cb-centermode {
    margin-bottom: 20px;
    display: block;
  }

  .cb-centermode input {
    margin-right: 7px;
  }

  .slick-arrow.slick-prev,
  .slick-arrow.slick-next {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
    border-radius: 2rem;
    background-color: #ee362e;
    color: #ffffff;
  }

  .slick-prev {
    left: -5rem;
  }

  .slick-next {
    right: -5rem;
  }

  .slick-prev::before,
  .slick-next::before {
    display: none;
  }
`;

export default CarouselStyle;
