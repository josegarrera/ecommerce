import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselStyle from "./styled";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

function Carousel() {
  const data = [
    { img: `/img/animations-e-commerce.png` },
    { img: `/img/banner-e-commerce11.png` },
    { img: `/img/Ecommerce-Banner-1920.jpg` },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const PreviusBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <MdKeyboardArrowLeft />
      </div>
    );
  };

  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <MdKeyboardArrowRight d />
      </div>
    );
  };

  return (
    <CarouselStyle>
      <Slider
        {...settings}
        prevArrow={<PreviusBtn />}
        nextArrow={<NextBtn />}
      >
        <div>
          <img className="slide__img" src={data[2].img} alt="" />
        </div>
        <div>
          <img className="slide__img" src={data[2].img} alt="" />
        </div>
        <div>
          <img className="slide__img" src={data[2].img} alt="" />
        </div>
      </Slider>
    </CarouselStyle>
  );
}

export default Carousel;
