import styled from 'styled-components';

const FormProductStyle = styled.div`
	display: flex;
	width: 95%;
	height: 95%;
	margin: 10px 0px;
	padding: 10px 10px;
	background-color: #ffffff;
	border-radius: 10px;
	color: #58585a;
	justify-content: center;
	align-items: center;

	.form__button_green {
		display: flex;
		margin-top: 0.5rem;
		align-self: flex-end;
		padding: 1rem;
		color: #ffffff;
		background-color: #2ec4b6;
		border: none;
		border-radius: 0.5rem;
		font-size: 1.2rem;
		font-weight: 600;
	}
	.form__input {
		padding: 1rem;
		color: #757575;
		border-radius: 0.6rem;
		font-size: 1rem;
		font-weight: 600;
		background-color: #ffffff;
		border: 1.5px solid #e0e0e0;
	}
	.form__label {
		font-size: 0.9rem;
		color: #9e9e9e;
		font-weight: 600;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
	.productAllInfo {
		display: flex;
		justify-content: left;
		align-items: center;
		width: 100%;

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
			max-width: 100%;

			.renglon {
				display: flex;
			}
			.renglon2 {
				display: flex;
				align-items: flex-start;
				padding-bottom: 1rem;
			}

			.inputText {
				width: 100%;
				padding: 1px 2px;
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
	.datalist-input-form {
		padding: 1px 2px;
	}

	.btnFormProduct {
		height: 26px;
		padding: 1px 2px;
		background-color: #0395b8;
		color: #ffffff;
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
