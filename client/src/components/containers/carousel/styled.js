import styled from 'styled-components';

const CarouselStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	width: 100%;

	.slider {
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		max-width: 90%;
		max-height: 90%;
		object-fit: contain;
		padding-top: 30px;

		.div__img {
			.slide__img {
				margin: auto auto;
				max-width: 100%;
				max-height: 100%;
				object-fit: contain;
			}
		}
	}
`;

export default CarouselStyle;
