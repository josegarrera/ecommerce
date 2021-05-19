import styled from 'styled-components';

const ProductDashboardStyle = styled.div`
	display: flex;
	width: 85%;
	margin: 10px 0px;
	padding: 10px 10px;
	background-color: white;
	border-radius: 10px;
	color: #58585a;

	.productAllInfo {
		display: flex;
		justify-content: left;
		align-items: center;
		width: 90%;
		padding: 0px 20px;

		.imageDiv {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 70px;
			height: 70px;
			border-radius: 5px;

			.image {
				max-width: 95%;
				max-height: 95%;
				object-fit: contain;
			}

			.index {
				font-size: 30px;
			}
		}

		.productInfo {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			margin-left: 20px;

			.renglon {
				display: flex;
			}

			.title {
				display: flex;
				align-items: center;
				font-weight: 600;
			}

			.title2 {
				display: flex;
				align-items: center;
				font-weight: 600;

				&:hover {
					cursor: pointer;
				}

				.open {
					margin-left: 5px;
					font-size: 16px;

					&:active {
						transform: scale(0.9);
					}
				}
			}

			.accordionItems {
				margin-left: 20px;
				font-size: 14px;
			}
		}
	}
	.buttons {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 15%;

		.buttonDiv {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 25px;
			height: 25px;
			background: none;
			border: none;

			.button {
				object-fit: contain;
				color: #58585a;
				font-size: 20px;

				&:hover {
					cursor: pointer;
				}

				&:active {
					transform: scale(0.9);
				}
			}
		}
	}
`;

export default ProductDashboardStyle;
