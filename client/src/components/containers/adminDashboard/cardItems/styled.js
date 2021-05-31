import styled from 'styled-components';

const ProductDashboardStyle = styled.div`
	display: flex;
	width: 95%;
	margin: 10px 0px;
	padding: 10px 10px;
	background-color: #ffffff;
	border-radius: 10px;
	color: #58585a;

	.productAllInfo {
		display: flex;
		justify-content: left;
		align-items: center;
		width: 80%;
		padding: 0px 20px;

		.carousel {
			width: 0%;
			.control-dots {
				display: none;
			}
			.control-arrow {
				width: 20px;
			}

			.control-arrow:hover {
				background: none;
			}
			.control-prev.control-arrow: before {
				display: none;
			}
			.control-next.control-arrow: before {
				display: none;
			}
		}

		.thumb.selected {
			border: none;
			margin: 0px;
		}

		.imageDiv {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 140px;
			height: 200px;
			border-radius: 5px;

			.image {
				max-width: 100%;
				max-height: 100%;
				object-fit: contain;
			}

			.index {
				font-size: 30px;
			}
		}
		.inputFile {
			width: 100%;
			display: none;
		}

		.imageSlider {
			display: flex;
			justify-content: center;
			align-items: center;
			align-content: center;
			width: 100%;
			height: 100%;
			object-fit: contain;
			transition: transform 0.2s;

			.sliderDiv {
				display: flex;
				flex-direction: column;
				height: 70%;

				.sliderImg {
					margin: auto auto;
					max-width: 100%;
					max-height: 100%;
					object-fit: contain;
				}
			}
		}
		.imageSlider:hover {
			transform: scale(1.2, 1.2);
		}

		.labelFile {
			margin-top: 50px;
			border: 2px solid gray;
			border-radius: 10%;
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

	.variantImg {
		width: 100%;
		height: auto;
	}
	.variantSliderDiv {
		width: 50px;
		height: auto;
	}
	.variantInput {
		width: 100px;
		margin-right: 10px;
	}

	#imagesVariantsContainer {
		display: flex;
		align-items: center;
	}

	.carousel-root.imageSlider {
		height: 85px;
	}
	.inputFileVariants {
		width: 100%;
		display: none;
	}
	.labelVariantsFile {
		display: flex;
		margin-right: 10px;
		border: 2px solid gray;
		border-radius: 10%;
		width: 100px;
		text-align: center;
		height: 26px;
		justify-content: center;
		padding: 2px;
	}

	#variantsAccordionContainer {
		display: flex;
		align-items: center;
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
	.buttonDeleteImg {
		object-fit: contain;
		color: #58585a;
		width: 2em;
		height: 2em;

		&:hover {
			cursor: pointer;
		}

		&:active {
			transform: scale(0.9);
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
