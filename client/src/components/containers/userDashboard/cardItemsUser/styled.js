import styled from 'styled-components';

const ProductDashboardStyle = styled.div`
	display: flex;
	width: 70vw;
	margin: 10px 0px;
	padding: 10px 10px;
	background-color: #ffffff;
	border-radius: 10px;
	color: #58585a;

	a {
		color: #58585a;
	}

	.link {
		&:hover {
			transform: translateY(-0.2rem);
		}
	}

	.productAllInfo {
		display: flex;
		justify-content: left;
		align-items: center;
		width: 80%;
		padding: 0px 20px;

		.imageDiv {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 80px;
			height: 80px;
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
			margin-left: 35px;
			max-width: 80%;

			.renglon {
				display: flex;

				.created {
					color: orange;
				}

				.processing {
					color: gold;
				}

				.complete {
					color: limegreen;
				}

				.cancelled {
					color: red;
				}
			}
			.renglon2 {
				display: flex;
				align-items: flex-start;
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

			.description {
				max-width: 80%;
			}

			.seeMore {
				color: gray;
				font-size: 13px;
				font-weight: 600;

				&:hover {
					cursor: pointer;
				}
			}
		}
	}

	.div_delete_categorie {
		display: flex;
		align-items: center;
		width: 100%;

		.buttonDiv {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 30px;
			height: 30px;
			background: none;
			border: none;

			.button {
				object-fit: contain;
				color: #58585a;
				font-size: 25px;

				&:hover {
					cursor: pointer;
				}

				&:active {
					transform: scale(0.9);
				}
			}
		}
	}

	.buttons {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 20%;

		.buttonDiv {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 30px;
			height: 30px;
			background: none;
			border: none;

			.button {
				object-fit: contain;
				color: #58585a;
				font-size: 25px;

				&:hover {
					cursor: pointer;
				}

				&:active {
					transform: scale(0.9);
				}
			}

			.button_check {
				color: green;
			}
		}
	}
`;

export default ProductDashboardStyle;
