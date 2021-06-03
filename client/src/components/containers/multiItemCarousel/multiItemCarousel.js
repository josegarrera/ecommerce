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
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
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
          ? items.map((e) => {
              return (
                <div>
                  <CardProduct
                    key={e.product._id}
                    name={e.product.name}
                    price={e.product.price}
                    imageUrl={e.product.imageUrl}
                    _id={e.product._id}
                    loading={false}
                  />
                </div>
              );
            })
          : null}
      </Slider>
    </MultiItemCarouselStyle>
  );
}

export default MultiItemCarousel;
