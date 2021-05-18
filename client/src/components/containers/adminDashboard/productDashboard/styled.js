import styled from 'styled-components';

const ProductDashboardStyle = styled.div`
	display: flex;
	width: 90%;
	margin: 10px 0px;

	.productAllInfo {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 70%;

		.imageDiv {
			display: flex;
			justify-content: center;
			width: 70px;
			height: 70px;
			border-radius: 5px;

			.image {
				max-width: 100%;
				max-height: 100%;
				object-fit: contain;
			}
		}

		.productInfo {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.buttons {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 30%;

		.buttonDiv {
			display: flex;
			justify-content: center;
			width: 15px;
			height: 15px;
			background-color: #f8f9f9;
			border-radius: 5px;

			.button {
				max-width: 70%;
				max-height: 70%;
				object-fit: contain;
				color: #58585a;
			}
		}
	}
`;

export default ProductDashboardStyle;
