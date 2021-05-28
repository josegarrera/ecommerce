import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselStyle from './styled';

function Carousel() {
	const data = [
		/* {img: `/img/animations-e-commerce.png`},
		{
			img: `https://res.cloudinary.com/dlexbrcrv/image/upload/v1622119291/Proyects/E-commerce/Carrousel_1_rfcxsi.svg`,
		},
		{img: `/img/Ecommerce-Banner-1920.jpg`}, */
		{
			img: `https://res.cloudinary.com/dlexbrcrv/image/upload/v1622136785/Proyects/E-commerce/Carrousel_1_xnmp84.jpg`,
		},
		{
			img: `https://res.cloudinary.com/dlexbrcrv/image/upload/v1622139850/Proyects/E-commerce/Carrousel_vczfne.jpg`,
		},
		{
			img: `https://res.cloudinary.com/dlexbrcrv/image/upload/v1622136785/Proyects/E-commerce/Carrousel_1_xnmp84.jpg`,
		},
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

	return (
		<CarouselStyle>
			{data && (
				<Slider className='slider' {...settings}>
					{data.map((el) => (
						<div className='div__img'>
							<img className='slide__img' src={el.img} alt='' />
						</div>
					))}
				</Slider>
			)}
		</CarouselStyle>
	);
}

export default Carousel;
