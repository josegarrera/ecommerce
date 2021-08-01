import styled from 'styled-components';

export const AboutUsStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 5% 10%;
	color: #58585a;

	a {
		text-decoration: none;
	}
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #ffffff;
		margin: 50px;
		width: 200px;
		height: 160px;

		&:hover {
			transform: scale(1.05);
			transition-duration: 400ms;
		}

		.imageDiv {
			width: 120px;
			height: 120px;
			border-radius: 100%;
			position: relative;
			top: -60px;
			left: 0px;
			.image {
				width: 100%;
				height: 100%;
				object-fit: contain;
				border-radius: 100%;
			}
		}

		.nameDiv {
			font-size: 18px;
			position: relative;
			top: -40px;
		}

		.iconsDiv {
			display: flex;
			position: relative;
			top: -35px;

			.icon {
				margin: 5px;
				font-size: 20px;
				color: #58585a;
			}
		}
	}
`;

export default AboutUsStyled;
