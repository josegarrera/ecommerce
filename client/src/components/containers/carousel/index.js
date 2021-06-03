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
					<img src='https://res.cloudinary.com/dlexbrcrv/image/upload/v1622139850/Proyects/E-commerce/Carrousel_vczfne.jpg' />
				</div>
				<div>
					<img src='https://res.cloudinary.com/dlexbrcrv/image/upload/v1622136785/Proyects/E-commerce/Carrousel_1_xnmp84.jpg' />
				</div>
			</Carrousel>
		</div>
	);
};

export default Carousel;
