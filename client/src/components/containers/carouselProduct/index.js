import React from 'react';

import Slider from 'react-slick';

import CarouselStyle from './styled';
import CardProduct from '../../presentationals/cardProduct/CardProduct';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi';

function CarouselPrueba({items}) {
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
		const {className, onClick} = props;
		return (
			<div className={className} onClick={onClick}>
				<BiLeftArrowAlt />
			</div>
		);
	};

	const NextBtn = (props) => {
		const {className, onClick} = props;
		return (
			<div className={className} onClick={onClick}>
				<BiRightArrowAlt />
			</div>
		);
	};

	return (
		<CarouselStyle>
			<div className='carousel-container'>
				<Slider {...config} prevArrow={<PreviusBtn />} nextArrow={<NextBtn />}>
					{items
						? items.map((e, i) => {
								return (
									<div key={i + e + 'div'}>
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
