import styled from 'styled-components';

const PaymentInformation_Style = styled.div`
	margin: 80px auto;
	width: 1200px;
	min-height: 650px;
	padding: 50px;
	border-radius: 10px;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	position: relative;
	font: inherit;

	.confirmation {
		display: flex;
		flex-direction: column;
		margin: 2rem 0;
	}

	.main {
		display: flex;
		justify-content: space-between;
	}

	.form__wrapper {
		display: flex;
		flex-direction: column;
	}

	.form__column {
		margin: 1rem;
	}

	.row__top {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}

	.row {
		display: flex;
		width: 100%;
		justify-content: center;
	}

	.row__bot {
		display: flex;
		justify-content: space-between;
	}

	.form__title {
		font-size: 1rem;
		color: #616161;
	}

	.left__col {
		width: 60%;
	}

	.section {
		width: 100%;
		margin: 1rem 0;

		button {
			background-color: unset;
			border: none;
			cursor: pointer;
			font-weight: 500;
			color: #424242;
			font-size: 0.9rem;
		}

		i {
			display: flex;
			align-self: flex-start;
			margin: 1.5rem;
			font-size: 1.5rem;
			color: #ee362e;
		}
	}

	/* Address */

	.shipping__content {
		padding: 1rem 0;
		display: flex;
		align-items: center;

		.shipping__info {
			display: flex;
			flex-direction: column;
			color: #424242;
			font-weight: 500;
			font-size: 0.8rem;
		}
	}

	.payment__content {
		display: flex;
		padding: 1rem 0;
		align-items: center;
	}

	/* Payment Method */

	.payment__options {
		width: 100%;
	}

	.payment__option {
		display: flex;
		margin: 0.5rem 0;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		background-color: #fafafa;
		border-radius: 0.5rem;
		border: 1px solid #eeeeee;

		i {
			color: #bdbdbd;
		}

		.payment__option__left {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.payment__option__right {
			font-size: 1rem;
		}

		.payment__selected {
			font-size: 1rem;
		}
	}

	.active {
		display: flex;
		margin: 0.5rem 0;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		background-color: #fbe9e7;
		color: #424242;
		border-radius: 0.5rem;
		border: 1px solid #ee362e;

		.payment__option__left {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.payment__selected {
			font-size: 1rem;
		}

		i {
			color: #ee362e;
		}
	}

	.payment__method {
		color: #212121;
		font-weight: 600;
	}

	/* Order Items */

	.order__items {
		width: 100%;

		.product {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 1rem 0;

			.product__left {
				display: flex;
				width: 15%;

				.product__img {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 5rem;
					width: 5rem;
					border: 1px solid #bdbdbd;
					border-radius: 0.5rem;
					background-color: #ffffff;

					.img {
						max-width: 90%;
						max-height: 90%;
						object-fit: contain;
					}
				}
			}

			.product__info {
				width: 60%;
				display: flex;
				margin: 0 1.5rem;
				flex-direction: column;
				justify-content: flex-start;

				.product__name {
					font-size: 0.7rem;
				}

				.product__model {
					font-size: 0.9rem;
				}

				.product__price {
					font-size: 0.9rem;
					color: #424242;
					font-weight: 600;
				}
			}

			.product__right {
				font-size: 1rem;
				font-weight: 600;
				color: #616161;
				width: 10%;
				display: flex;
				justify-content: flex-end;
			}
		}
	}

	.summary {
		border: 1px solid #dbdbdb;
		background-color: #fdfdfd;
		margin-left: 50px;
		margin-top: 50px;
		width: 331px;
		max-width: 331px;
		min-height: 336px;
		height: fit-content;
		border-radius: 15px;
		padding: 30px;
		.summary__title {
			.total__prd {
				display: flex;
				justify-content: space-between;
				margin: 70px 0;
			}
		}
	}

	.btn_buy {
		width: 331px;
		height: 67px;
		border-radius: 12px;
		margin-left: 50px;
		margin-top: 20px;
		font-weight: 500px;
		font-size: 18px;
		cursor: pointer;
		border: none;
		background: #ee362c;
		color: #ffffff;
		&:hover {
			background: #ffffff;
			border: 1px solid #ee362c;
			color: #ee362c;
		}
		&:active {
			transform: scale(0.95);
		}
	}

	.form__input {
		padding: 0.5rem;
		color: #757575;
		border-radius: 0.6rem;
		font-size: 1rem;
		font-weight: 600;
		background-color: #ffffff;
		border: 1.5px solid #e0e0e0;
	}

	.form__input:focus {
		border-color: #a1a3a6;
	}

	.form__label {
		font-size: 0.9rem;
		color: #9e9e9e;
		font-weight: 600;
		margin-top: 0.5rem;
	}

	.form__element {
		display: flex;
		margin-top: 1rem;
		margin-bottom: 1rem;
		flex-direction: column;
	}

	.form__button {
		display: flex;
		margin-top: 0.5rem;
		-ms-flex-item-align: end;
		padding: 1rem;
		color: #ffffff;
		background-color: #ee362e;
		border: none;
		border-radius: 0.5rem;
		font-weight: 600;
	}

	.form__button:hover {
		background: #ffffff;
		border: 1px solid #ee362c;
		color: #ee362c;
	}

	.row .form__element {
		margin-right: 0.5rem;
		margin-left: 0.5rem;
	}

	.form__button__delete {
		display: inline;
		margin: 0px;
		height: 2rem;
		width: 2rem;
		padding: 0.2rem;
	}

	.form__span {
		color: #757575;
		font-weight: 600;
	}

	.bottom__row {
		display: flex;
		justify-content: space-between;
	}
`;

export default PaymentInformation_Style;
