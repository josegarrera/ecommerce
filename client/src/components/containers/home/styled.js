import styled from 'styled-components';

const HomeStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.product__row {
		display: flex;
		width: 100%;
		justify-content: space-around;
		align-items: center;
		padding: 5rem 0;

		h3 {
			font-size: 1.25rem;
			font-weight: 700;
			color: #757575;
		}

		span {
			padding: 0.7rem 1rem;
			font-size: 0.8rem;
			color: #9e9e9e;
			cursor: pointer;
			border: 1px solid #e0e0e0;
			background-color: #ffffff;
			border-radius: 2rem;
		}
	}

	a {
		text-decoration: none;
		color: #a1a3a6;
	}

	.offers {
		display: flex;
		flex-wrap: wrap;
		margin: 50px 50px;

		.offer {
			width: 224px;
			height: 430px;
			border: 1px solid #e0e0e0;
			border-radius: 20px;
			margin: 0px 50px;
			background-color: #e0e0e0;
		}
	}
`;

export default HomeStyle;
