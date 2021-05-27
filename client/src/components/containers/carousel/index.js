import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselStyle from "./styled";

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

  console.log(data[0].img);

  return (
    <CarouselStyle>
      <Slider {...settings}>
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
