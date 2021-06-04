import styled from 'styled-components';

const DivNavBar = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	height: 135px;
	background-color: #ffffff;

	a {
		text-decoration: none;
		color: #a1a3a6;
	}

	.topNav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 75%;
		padding: 0px 10%;

		.topLeft {
			width: 20%;

			.logo {
				color: #ee362e;
				font-size: 25px;
				font-weight: 800;
				width: max-content;

				@media screen and (max-width: 992px) {
					display: none;
				}
			}

			#responsiveLogo {
				display: none;

				@media screen and (max-width: 992px) {
					display: block;
				}
			}
		}

		.topCenter {
			width: 20%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		#topRightResponsive {
			display: none;

			@media screen and (max-width: 992px) {
				display: flex;

				.iconDiv {
					margin: 0 1rem;
					background-color: unset;
				}

				.MuiBadge-anchorOriginTopRightRectangle {
					right: 1.5rem;
				}
			}
		}

		.topRight {
			border-radius: 30px;
			height: 57px;
			display: flex;
			align-items: center;
			justify-content: space-evenly;

			.iconDiv {
				display: flex;
				align-items: center;
				justify-content: space-around;
				align-content: center;
				background-color: #f8f9f9;
				height: 45px;
				width: 45px;
				border-radius: 100%;
				margin: 0 0.5rem;
				.icon {
					color: #58585a;
					font-size: 20px;
				}

				.iconLogin {
					color: #ee362e;
				}
				.imageDiv {
					display: flex;
					align-items: center;
					justify-content: center;
					.image {
						height: 90%;
						width: 90%;
						border-radius: 100%;

						object-fit: contain;
					}
				}

				/* &:hover {
          transform: scale(1.4);
          transition: 0.3s;
          cursor: pointer;
        } */
			}

			.login {
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;

				&:hover .loginHoverCart {
					display: block;
				}
			}

			.loginHoverCart {
				position: absolute;
				display: none;
				border: 1px solid #e0e0e0;
				padding: 1.5rem;
				top: 2.7rem;
				right: 0;
				background-color: #ffffff;
				width: 15rem;
				height: auto;
				border-radius: 1rem;
				z-index: 10;
				box-shadow: 0 5px 10px rgb(154 160 185 / 5%),
					0 15px 40px rgb(166 173 201 / 20%);

				.login {
					border-radius: 1rem;
					background-color: #ee362e;
					color: #f9f9f9;
					margin-bottom: 10px;
				}

				.buttonLoginHover {
					color: #58585a;
					margin: 10px;
					font-weight: 500;
				}

				.signUp {
					font-size: 12px;

					.signText {
						color: #ee362e;
						font-weight: 800px;
					}
				}
			}

			.cart {
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;

				&:hover .cartHoverView {
					display: block;
				}
			}

			.cartHoverView {
				position: absolute;
				display: none;
				border: 1px solid #e0e0e0;
				padding: 1.5rem;
				top: 2.7rem;
				right: 0;
				background-color: #ffffff;
				width: 25rem;
				height: auto;
				border-radius: 1rem;
				z-index: 10;
				box-shadow: 0 5px 10px rgb(154 160 185 / 5%),
					0 15px 40px rgb(166 173 201 / 20%);

				.row {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;

					.cartHeader {
						display: flex;
						justify-content: space-between;
						align-items: center;
						width: 100%;

						.cartHoverTitle {
							font-size: 1.5rem;
							font-weight: 600;
							color: #212121;
						}
						.cartHoverItems {
							font-size: 0.7rem;
							color: #212121;
						}

						.closeBtnHeader {
							font-size: 1.3rem;
							cursor: pointer;
						}
					}

					.cartHovercardPrice {
						font-size: 1.5rem;
						font-weight: 600;
						color: #bdbdbd;
					}

					.productsContainer {
						width: 95%;

						.cartItem {
							display: flex;
							justify-content: space-around;
							margin-top: 0.5rem;
							margin-bottom: 0.5rem;
							align-items: center;
							border-radius: 1rem;
							padding: 1rem;
							background-color: #fafafa;

							.closeBtn {
								font-size: 1rem;
								cursor: pointer;
							}

							.cartItemImg {
								display: flex;
								height: 4rem;
								width: 4rem;
								margin-right: 15px;

								.itemImg {
									max-width: 100%;
									max-height: 100%;
									object-fit: contain;
								}
							}

							.cartItemInfo {
								width: 75%;
								display: flex;
								flex-direction: column;
								align-items: flex-start;

								.cardItemTitle {
									margin: 3px;
									font-weight: bold;
									font-size: 0.8rem;
									color: #616161;
								}

								.cardItemPrice {
									margin: 3px;
									font-size: 0.8rem;
									color: #212121;
								}
							}

							.cartItemQty {
								width: 10%;
								display: flex;
								justify-content: center;
								align-items: center;
								font-size: 0.6rem;
								color: #bdbdbd;
								flex-direction: column;

								.incrementQty,
								.decrementQty {
									margin: 0.2rem;
									cursor: pointer;
								}
								.actualQty {
									color: #424242;
									font-size: 1rem;
								}
							}
						}
					}
				}
				.subtotal {
					display: flex;
					justify-content: space-between;

					.divCurrency {
						display: flex;
						flex-direction: column;

						.btn__sbt {
							border: none;
							background: none;

							color: #bdbdbd;

							&:hover {
								cursor: pointer;
							}
						}
					}
				}
				.delivery {
					display: flex;
					justify-content: space-between;
				}

				.separator {
					border: 1px solid #e0e0e0;
				}

				.cartBottom {
					margin: 1rem 0;
					font-size: 0.8rem;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.totalSpan {
						font-size: 1rem;
						font-weight: 600;
					}

					.totalPrice {
						font-size: 1.3rem;
						font-weight: 700;
						color: #212121;
					}
				}

				.cartItemBtn {
					display: flex;
					margin-top: 1rem;
					cursor: pointer;
					justify-content: center;
					align-items: center;
					padding: 0.6rem;
					background-color: #ee362e;
					color: #ffffff;
					border-radius: 5rem;
					font-size: 0.8rem;
				}
			}

			@media screen and (max-width: 992px) {
				display: none;
			}
		}
	}

	.bottomNav {
		padding: 0px 10%;

		.bottomNavLinks {
			display: flex;
			align-items: center;
			justify-content: space-evenly;

			font-weight: 600;
			color: #bdbdbd;

			@media screen and (max-width: 992px) {
				display: none;
			}
		}

		.bottomLink {
			font-size: 16px;
			font-weight: 600;
			color: #bdbdbd;
		}

		.catalogue {
			font-size: 17px;

			&:hover {
				transform: scale(1.1);
				transition: 0.3s;
				cursor: pointer;
			}
		}

		.select {
			background: none;
			border: none;
			font-size: 16px;
			font-weight: 600;
			color: #bdbdbd;
		}
	}
	@media (max-width: 992px) {
		height: 12rem;

		.topNav {
			height: 7rem;
		}
	}
`;

export default DivNavBar;
