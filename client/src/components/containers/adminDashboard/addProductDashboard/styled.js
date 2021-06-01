import styled from 'styled-components';

const FormProductStyle = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 25;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.2);

	.form__container {
		display: flex;
		flex-direction: column;
		margin: 10px 0px;
		padding: 3rem;
		background-color: #ffffff;
		border-radius: 10px;
		color: #58585a;
	}

	.form__button_green {
		display: flex;
		margin-top: 0.5rem;
		align-self: flex-end;
		padding: 3rem;
		color: #ffffff;
		background-color: #2ec4b6;
		border: none;
		border-radius: 0.5rem;
		font-size: 1.2rem;
		font-weight: 600;
	}

	.form_input {
		background: #f5f5f5;
		width: 100%;
		border: 1px solid #eeeeee;
		padding: 0.8rem 1rem;
		border-radius: 0.6rem 0 0 0.6rem;
		color: #757575;
		font-size: 1rem;
		font-weight: 600;
		background-color: #ffffff;
		border: 1.5px solid #e0e0e0;
	}
	.form__label {
		font-size: 0.7rem;
		color: #9e9e9e;
		font-weight: 500;
	}
	.productAllInfo {
		display: flex;
		flex-direction: column;
		width: 100%;

		.top-title {
			color: #616161;
		}

		.right {
			width: 50%;
			padding: 1rem 2rem;
		}

		.left {
			width: 50%;
			padding: 1rem 2rem;
		}

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
			justify-content: flex-start;
			max-width: 100%;

			.form_input {
				font-size: 0.9rem;
				color: #757575;
			}

			.renglon {
				display: flex;
			}

			.input-container {
				display: flex;
				width: 100%;
			}

			.renglon2 {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				margin: 2rem 0;
			}

			.inputText {
				background: #f5f5f5;
				border: 1px solid #eeeeee;
				padding: 0.5rem;
				border-radius: 0.5rem;
				border: 1px solid #f5f5f5;
				width: 100%;
				margin-top: 0.5rem;
				padding: 1px 2px;
			}

			.title {
				align-items: center;
				font-weight: 600;
				margin-bottom: 0.1rem;
				font-size: 0.85rem;
			}
			.title2 {
				display: flex;
				align-items: center;
				font-weight: 500;
				font-size: 0.8rem;
				padding: 1rem;
				border: 1px solid #eeeeee;
				border-radius: 0.5rem;

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

			.img-input {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 5rem;
				border-radius: 0.5rem;
				border: 1px solid #e0e0e0;
				padding: 2rem 8rem;
			}

			.accordion {
				width: 100%;
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

			::placeholder {
				font-size: 0.9rem;
			}
		}

		i {
			font-size: 2rem;
			cursor: pointer;
		}
	}

	.btnFormProduct {
		padding: 0.5rem 1rem;
		border-radius: 0 0.3rem 0.3rem 0;
		background-color: #549cf8;
		color: #ffffff;
	}

	.btnFormCreateProduct {
		display: flex;
		height: 4rem;
		align-self: flex-end;
		margin: 0 1rem;
		padding: 1rem 5rem;
		border-radius: 0.3rem;
		background-color: #549cf8;
		color: #ffffff;
		font-weight: 600;
	}

	.btnFormCreateProductSecondary {
		display: flex;
		height: 4rem;
		align-self: flex-end;
		padding: 1rem 2rem;
		border-radius: 0.3rem;
		background-color: #ffffff;
		color: #616161;
		font-weight: 600;
		cursor: pointer;
	}

	.select-style {
		padding: 0.5rem 1rem;
		border-radius: 0 0.3rem 0.3rem 0;
		background-color: #549cf8;
		color: #ffffff;
		border: none;
	}

	.option-style {
		padding: 1rem;
		background-color: #ffffff;
		color: #616161;
		border: none;
		border-radius: 0.3rem;
	}

	.top-row {
		display: flex;
		justify-content: space-between;
	}

	.bottom-row {
		display: flex;
		align-self: flex-end;
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

export default FormProductStyle;
