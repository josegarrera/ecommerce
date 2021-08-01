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
			width: max-content;
			height: max-content;
			border-radius: 5px;

			.imageSlider {
				display: flex;
				justify-content: center;
				align-items: center;
				align-content: center;
				width: 5rem;
				height: 5rem;
				object-fit: contain;
				transition: transform 0.2s;

				.sliderDiv {
					width: auto;
					height: 5rem;

					.img-carousel-container {
						width: auto;
						height: 80%;
						@supports (object-fit: contain) {
							.sliderImg {
								object-fit: contain;
								object-position: center center;
								width: 100%;
								height: 100%;
							}
						}
					}
				}
			}
			.imageSlider:hover {
				transform: scale(1.08);
			}

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

		#file-upload-container {
			margin-top: 1rem;
		}

		.input-edit {
			width: 100%;
			border: 1px solid #d5d5d5;
			border-radius: 5px;
		}

		.productInfo {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			margin-left: 35px;
			max-width: 80%;

			.datalist-input .autocomplete-input {
					border: 1px solid #d5d5d5;
					border-radius: 5px;
				}
			}

			.renglon {
				display: flex;
				font-size: 0.7rem;
				margin-bottom: 1px;

				.renglon-input {
					width: 80%;
					justify-content: space-between;
				}

				.created {
					color: orange;
				}

				.completed {
					color: limegreen;
				}

				.cancelled {
					color: red;
				}
				.processing {
					color: #5c90ff;
				}
				.dispatched {
					color: #45b39d;
				}

				.renglon-price {
					display: flex;
					font-size: 0.7rem;

					#select-price {
						width: 30%;
						border: 1px solid #d5d5d5;
						border-radius: 5px;
					}
					.input-edit-price {
						width: 70%;
						border: 1px solid #d5d5d5;
						border-radius: 5px;
					}
				}
			}
			.renglon2 {
				display: flex;
				align-items: flex-start;
				font-size: 0.7rem;
				margin-top: 5px;
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
				font-size: 0.7rem;

				&:hover {
					cursor: pointer;
				}

				.open {
					margin-left: 5px;
					width: 20px;
					height: 20px;

					&:active {
						transform: scale(0.9);
					}
				}
			}

			.accordionItems {
				margin-left: 20px;
				font-size: 0.7rem;
			}

			.description {
				max-width: 80%;
			}

			.seeMore {
				color: gray;
				font-size: 0.6rem;
				font-weight: 600;

				&:hover {
					cursor: pointer;
				}
			}
		}
	}

	.variantImg {
		max-width: 90%;
		max-height: 90%;
		object-fit: contain;
	}
	.variantSliderDiv {
		width: 80px;
		height: 60px;
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
		width: 80px;
		height: 60px;
		.carousel {
			.slide {
				min-width: 100%;
			}
		}
	}
	.inputFileVariants {
		width: 100%;
		display: none;
	}
	.labelVariantsFile {
		display: flex;
		margin-right: 10px;
		width: 50px;
		text-align: center;
		height: 38px;
		justify-content: center;
		padding: 2px;
		align-items: center;
	}

	.labelImgVariants {
		display: flex;
		margin-right: 10px;
		width: 20px;
		text-align: center;
		height: 20px;
		justify-content: center;
		padding: 2px;
		align-items: center;
		position: absolute;
		top: 40px;
		right: 40px;
		bottom: 50px;
		svg {
			width: 100%;
			height: 100%;
		}
	}

	svg {
		width: 2rem;
		height: 2rem;
	}

	#variantsAccordionContainer {
		display: flex;
		align-items: center;
	}
	.inputEditDiv {
		display: flex;
		justify-content: center;
		.inputBtnEdit {
			width: 100%;
		}
	}

	.buttonVariantImg {
		margin-bottom: 40px;
		margin-right: 10px;
		width: 20px;
		height: 20px;
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

	.sliderEdit {
		height: max-content;
	}
	.imgEditDiv {
		display: flex;
		flex-direction: column;
	}

	.buttonDeleteImg {
		object-fit: contain;
		color: #58585a;
		width: 1em;
		height: 1em;

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
