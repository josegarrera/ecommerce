import React from 'react';
import {Carousel as Carrousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel = () => {
	return (
		<div>
			<Carrousel
				showThumbs={false}
				autoPlay={true}
				showStatus={false}
				infiniteLoop={true}
				interval={3000}
			>
				<div>
					<img
						src='https://res.cloudinary.com/dlexbrcrv/image/upload/v1622762741/Proyects/E-commerce/Carrousel2_otwzz0.jpg'
						alt='banner1'
					/>
				</div>
				<div>
					<img
						src='https://res.cloudinary.com/dlexbrcrv/image/upload/v1622762729/Proyects/E-commerce/Carrousel4_vrn7cv.jpg'
						alt='banner2'
					/>
				</div>
			</Carrousel>
		</div>
	);
};

export default Carousel;
