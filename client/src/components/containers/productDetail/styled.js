import styled from 'styled-components';

const ProductDetailStyle = styled.div`
	display: flex;
	justify-content: center;

	a {
		text-decoration: none;
		color: #a1a3a6;
	}

	.all {
		display: flex;
		flex-flow: column;
		align-items: center;
		width: 1300px;
		margin: 3vh;
		border-radius: 15px;
		color: #a1a3a6;
		background-color: #ffffff;
	}

	.topDiv {
		display: flex;
		width: 100%;
		height: 40px;
		background-color: #e7e7e7;
		border-radius: 15px 15px 0px 0px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 20px;
		padding-right: 20px;
		font-size: 16px;

		.topDivLeft {
			display: flex;

			.categories {
				display: flex;
			}
		}
	}

	.centerDiv {
		display: flex;

		.imagesBox {
			display: flex;
			flex-direction: column;

			padding: 5px;

			.imageBox {
				display: flex;
				justify-content: center;
				border: 1px solid #e7e7e7;
				border-radius: 5px;
				width: 70px;
				height: 70px;
				padding: 5px;
				margin: 5px;

				.imageMin {
					max-width: 100%;
					max-height: 100%;
					object-fit: contain;
				}
				&:hover {
					cursor: pointer;
					border: 1px solid #ee362e;
					transition: 1s;
				}
			}
		}

		.imageBigDiv {
			display: flex;
			justify-content: center;
			height: 700px;
			width: 700px;
			padding: 10px;

			.imageBig {
				max-width: 100%;
				max-height: 100%;
				object-fit: contain;
			}
		}

		.infoDiv {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			border: 2px solid #e7e7e7;
			border-radius: 25px;
			margin: 10px;
			padding: 20px;
			width: 450px;

			.infoDivTop {
				display: flex;
				flex-direction: column;
				align-items: left;
				/* justify-content: space-evenly; */
				height: 30%;
				width: 100%;

				.title {
					display: flex;
					justify-content: space-between;

					.name {
						color: #a1a3a6;
						font-size: 25px;
					}

					.fav {
						font-size: 25px;
						color: #ee362e;

						&:hover {
							transform: scale(1.3);
							transition: 0.5s;
						}

						&:active {
							transform: scale(0.9);
						}
					}
				}

				.price {
					color: #a1a3a6;
					font-size: 35px;
					font-weight: 500;
				}

				.cuotas {
					color: #00a650;
					font-size: 20px;
				}
			}

			.infoDivCenter {
				display: flex;
				flex-direction: column;
				justify-content: center;
				height: 25%;
				width: 100%;

				.misce {
					display: flex;
					align-items: center;
					color: #00a650;
					margin-bottom: 10px;

					.shipping {
						color: #00a650;
						margin-right: 10px;
					}
				}

				.misceBottom {
					display: flex;

					.shipping {
						color: #00a650;
						margin-right: 10px;
					}

					.return {
						font-weight: 300;
					}
				}
			}

			.infoDivBottom {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				height: 35%;
			}

			.button {
				background-color: #a1a3a6;
				color: #ffffff;
				border: none;
				border-radius: 10px;
				width: 90%;
				font-size: 25px;
				padding: 5px;

				&:hover {
					cursor: pointer;
					background-color: #e7e7e7;
					color: #a1a3a6;
					transition: 0.5s;
				}
			}
		}
	}
`;

export default ProductDetailStyle;
