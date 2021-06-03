import React, { useState } from "react";

import Slider from "react-slick";

import CarouselStyle from "./styled";
import CardProduct from "../../presentationals/cardProduct/CardProduct";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

function CarouselPrueba({ items }) {
  const config = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1075,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 740,
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

  const [settings, setSettings] = useState(config);

  const products = [
    {
      img: "/images/product1.jpg",
      title: "Dolore magna",
      text: "Lorem ipsum dolor sit amet elit.",
    },
    {
      img: "/images/product2.jpg",
      title: "Eget est lorem",
      text: "Lorem Ipsum adipiscing elit ipsum.",
    },
    {
      img: "/images/product3.jpg",
      title: "Tempus imperdiet",
      text: "Orci porta non pulvinar neque laoreet.",
    },
    {
      img: "/images/product4.jpg",
      title: "Mattis rhoncus",
      text: "Bibendum neque egestas congue quisque.",
    },
    {
      img: "/images/product5.jpg",
      title: "Odio ut enim",
      text: "Mattis rhoncus urna neque viverra justo.",
    },
  ];

  const onChangeCenterMode = (e) => {
    if (e.target.checked) {
      setSettings({
        ...config,
        centerMode: true,
        centerPadding: "50px",
      });
    } else {
      setSettings(config);
    }
  };

  return (
    <CarouselStyle>
      <div className="carousel-container">
        <Slider
          {...settings}
          prevArrow={<PreviusBtn />}
          nextArrow={<NextBtn />}
        >
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
      </div>
    </CarouselStyle>
  );
}

export default CarouselPrueba;
