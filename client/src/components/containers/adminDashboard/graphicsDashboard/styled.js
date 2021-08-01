import styled from 'styled-components';

const GraphicStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	height: 100%;
	width: 100%;
	padding: 50px 0px;

	.graphic {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ffffff;
		border: none;
		border-radius: 10px;
		width: 300px;
		height: 180px;
		margin: 30px;

		&:hover {
			cursor: pointer;
		}

		.logo1 {
			font-size: 90px;
			color: #2a9d8f;
		}
		.logo2 {
			font-size: 90px;
			color: #264653;
		}
		.logo3 {
			font-size: 90px;
			color: #e9c46a;
		}
		.logo4 {
			font-size: 90px;
			color: #f4a261;
		}
		.logo5 {
			font-size: 90px;
			color: #e76f51;
		}

		.texts {
			font-size: 25px;
			font-weight: 600;
			display: flex;
			flex-direction: column;
			margin-left: 20px;

			.number {
				font-size: 40px;
			}
		}
	}
`;

export default GraphicStyled;
