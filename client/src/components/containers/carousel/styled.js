import styled from "styled-components";

const CarouselStyle = styled.div`
  width: 100%;

  .slick-dots {
    bottom: 2rem;
  }

  .slick-dots li button {
    margin: 0 1rem;
    width: 1rem;
    height: 1rem;
    border-radius: 2rem;
    border: 2px solid #eeeeee;
  }

  .slick-dots li button {
    margin: 0 1rem;
    width: 1rem;
    height: 1rem;
    border-radius: 2rem;
    border: 2px solid #eeeeee;
  }

  .slick-dots .slick-active button {
    background-color: #eeeeee;
  }

  .slick-dots li button::before {
    display: none;
  }

  .slick-arrow.slick-prev,
  .slick-arrow.slick-next {
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10rem;
    color: #ffffff;
    opacity: 0.5;
  }

  .slick-prev {
    left: 0.5rem;
    z-index: 1;
  }

  .slick-next {
    right: 0.5rem;
    z-index: 1;
  }

  .slick-prev::before,
  .slick-next::before {
    display: none;
  }
`;

export default CarouselStyle;
