import styled from 'styled-components';

const ProductDetailStyle = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	.detailLoader {
		margin-top: 200px;
		transform: scale(2);
	}

	a {
		text-decoration: none;
		color: #a1a3a6;
	}

	.all {
		display: flex;
		flex-flow: column;
		align-items: center;
		width: 60vw;
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
		font-size: 0.8rem;

		.topDivLeft {
			display: flex;

			.back {
				border: none;
				background: none;
				color: #a1a3a6;
				font-size: 0.8rem;
				&:hover {
					cursor: pointer;
				}
			}
			.categories {
				display: flex;
			}
		}
	}

	.centerDiv {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 0 1vw;
		.imagesBox {
			display: flex;
			flex-direction: column;
			padding: 0.5rem;
			.imageBox {
				display: flex;
				justify-content: center;
				border: 1px solid #e7e7e7;
				border-radius: 5px;
				width: 4rem;
				height: 4rem;
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
			height: 30rem;
			width: 30rem;
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
			max-width: 40%;

			.infoDivTop {
				display: flex;
				flex-direction: column;
				align-items: left;
				height: 30%;
				width: 100%;

				.comboDiv {
					background-color: #ee362e;
					color: #fff;
					border-radius: 10px;
					width: fit-content;
					padding: 0rem 0.2rem;
					font-size: 0.7rem;
				}
				.title {
					display: flex;
					justify-content: space-between;

					.name {
						color: #a1a3a6;
						font-size: 1rem;
					}

					.btns {
						display: flex;
						flex-direction: column;
						justify-content: space-around;

						.fav {
							font-size: 1rem;
							color: #ee362e;

							&:hover {
								cursor: pointer;
								transform: scale(1.2);
								transition: 0.5s;
							}

							&:active {
								transform: scale(0.9);
							}
						}
						.btn__cart {
							display: flex;
							justify-content: center;
							align-items: center;
							cursor: pointer;
							color: #ffffff;
							background-color: #ee362e;
							border: none;
							border-radius: 14.5px;
							height: 25px;
							width: 25px;
							&:hover {
								cursor: pointer;
								transition: 0.5s;
								box-shadow: 1px 1px 30px silver;
							}
							&:active {
								transform: scale(0.9);
								transition: 0.5s;
								border: 1px solid gray;
							}
						}
					}
				}

				.price {
					color: #a1a3a6;
					font-size: 1.2rem;
					font-weight: 500;
				}

				.cuotas {
					color: #00a650;
					font-size: 0.9rem;
				}
			}

			.infoDivCenter {
				display: flex;
				flex-direction: column;
				justify-content: center;
				height: fit-content;
				margin: 0.8rem 0;
				width: 100%;
				font-size: 0.8rem;

				.misce {
					display: flex;
					align-items: center;
					color: #00a650;
					.shipping {
						color: #00a650;
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
				font-size: 0.8rem;
				.description {
					margin: 0.6rem 0;
				}
				.stockDiv {
					display: flex;

					.variants {
						display: flex;
						flex-wrap: wrap;

						.variant {
							display: flex;
							margin: 0px 0px 0px 5px;
							font-weight: 300;
						}
					}
				}

				.quantity {
					display: flex;
				}
			}

			.buttonLink {
				display: flex;
				justify-content: center;
				align-items: center;
				color: #ffffff;
				background-color: #ee362e;
				border-radius: 10px;
				width: 90%;
				padding: 5px;
				font-size: 1.3rem;
				margin-top: 0.8rem;

				&:hover {
					cursor: pointer;
					border: 1px solid #ee362e;
					color: #ee362e;
					background-color: #ffffff;
					transition: 0.2s;
				}
			}
		}
	}

	.comboProducts {
		display: flex;
		flex-flow: column;
		width: 60vw;
		margin: 3vh;
		border-radius: 15px;
		color: #a1a3a6;
		background-color: #ffffff;
		padding: 1rem 1rem 0rem 1rem;

		.title_cnt {
			color: #ee362c;
			border-bottom: 3px solid rgba(0, 0, 0, 0.1);
			margin-bottom: 1rem;
			h5 {
				font-size: 1.5rem;
			}
		}

		.productList {
			display: flex;
			justify-content: center;
			padding: 1rem 0rem 0rem 0rem;
		}
	}

	.div_comments {
		padding: 2rem;
		display: flex;
		flex-flow: column;
		align-items: center;
		width: 60vw;
		margin: 3rem;
		border-radius: 15px;
		color: #a1a3a6;
		background-color: #ffffff;

		.div_fragment {
			width: 100%;
		}
		.review_title {
			color: #ee362c;
			align-self: flex-start;
			border-bottom: 3px solid rgba(0, 0, 0, 0.1);
		}
		.span_no_review {
			color: black;
			font-size: 1 rem;
		}
	}

	/* Fin del ESTADO GENERAL */

	/* 1127 a 1441 */
	@media (max-width: 901px) and(max-width: 1441px) {
		width: 90vw;
		margin: auto;
		font-size: 1rem;
		.infoDiv {
			min-width: 85%;
		}
		.all {
			width: 100%;
			overflow: hidden;
			.imagesBox {
				flex-direction: row;
			}
			.centerDiv {
				width: 100%;
				flex-direction: column;
				align-items: center;
				.imageBigDiv {
					width: 50%;
					height: 50%;
				}
				.infoDiv {
					width: 85%;
				}
			}
		}
		.div_comments {
			width: 65vw;
			.review_title {
				margin: 0 0 1rem 0;
			}
		}
	}

	@media (min-width: 720px) and (max-width: 900px) {
		width: 90vw;
		.div_comments {
			width: 90vw;
		}
		/* --------- */
		margin: auto;
		font-size: 1rem;
		.infoDiv {
			min-width: 85%;
		}
		.all {
			width: 100%;
			.imagesBox {
				flex-direction: row;
			}
			.centerDiv {
				width: 100%;
				flex-direction: column;
				align-items: center;
				.imageBigDiv {
					width: 50%;
					height: 50%;
				}
			}
		}
	}

	@media (min-width: 1px) and (max-width: 719px) {
		width: 90vw;

		.comboProducts {
			width: 90vw;
		}
		.div_comments {
			width: 90vw;
		}
		/* --------- */
		margin: auto;
		font-size: 1rem;
		.infoDiv {
			min-width: 85%;
		}
		.all {
			width: 100%;
			.imagesBox {
				flex-direction: row;
			}
			.centerDiv {
				width: 100%;
				flex-direction: column;
				align-items: center;
				.imageBigDiv {
					width: 50%;
					height: 50%;
				}
			}
		}
	}
`;

export default ProductDetailStyle;
