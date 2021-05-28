import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MultiItemCarouselStyle from "./styled";
import CardProduct from "../../presentationals/cardProduct/CardProduct";

import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";

function MultiItemCarousel({ items }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const PreviusBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <BiLeftArrowAlt />
      </div>
    );
  };

  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <BiRightArrowAlt />
      </div>
    );
  };

  console.log(items);

  return (
    <MultiItemCarouselStyle>
      <Slider {...settings} prevArrow={<PreviusBtn />} nextArrow={<NextBtn />}>
        {items
          ? items.map((e) => (
              <CardProduct
                key={e.product._id}
                name={e.product.name}
                price={e.product.price}
                imageUrl={e.product.imageUrl}
                _id={e.product._id}
                loading={false}
              />
            ))
          : null}
      </Slider>
    </MultiItemCarouselStyle>
  );
}

export default MultiItemCarousel;
