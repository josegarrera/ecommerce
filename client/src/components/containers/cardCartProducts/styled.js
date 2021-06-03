import styled from 'styled-components';

const DivCard = styled.div`
	margin: 20px 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #535353;
	a {
		text-decoration: none;
		color: #535353;
	}

	.productCont {
		display: flex;
		justify-content: space-between;
		width: 100%;
		font-size: 15px;
		font-weight: 600;

		.cincuenta {
			width: 50%;
			display: flex;

			.imageDiv {
				border: 1px solid #e7e7e7;
				border-radius: 5px;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 75px;
				height: 75px;

				.image {
					max-width: 90%;
					max-height: 90%;
					object-fit: contain;
				}
			}

			.nameDiv {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: center;
				margin-left: 20px;
				width: 70%;

				.variant {
					padding: 0px 4px;
					border-radius: 10px;
					color: white;
					background-color: #0096c7;
					font-size: 0.7rem;
					color: #fff;
					font-weight: 400;
				}
			}
		}

		.amountDiv {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 20%;

			.amount {
				margin: 5px;
				border: none;
				background: none;
				&:hover {
					cursor: pointer;
				}
			}
		}

		.priceDiv {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 20%;
		}

		.closeDiv {
			border: none;
			display: flex;
			align-items: center;
			justify-content: center;
			background: none;
			width: 10%;
			color: #ee362c;
			&:hover {
				cursor: pointer;
			}
		}
	}
	.divisor {
		border-top: 1px solid #dfdfdf;
		margin-top: 20px;
		width: 90%;
	}
`;
export default DivCard;
