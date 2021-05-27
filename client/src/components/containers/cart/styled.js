import styled from 'styled-components';

const DIV_CART = styled.div`
	margin: 80px auto;
	max-width: 80vw;
	min-width: 38rem;
	height: fit-content;
	min-height: 40rem;
	padding: 3.5rem;
	border-radius: 1rem;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	position: relative;
	.title_cnt {
		color: #ee362c;
		border-bottom: 3px solid rgba(0, 0, 0, 0.1);
		h5 {
			color: #8f8f8f;
		}
	}
	.products__summ__cnt {
		display: flex;
		.prd__link {
			position: relative;
			margin: 50px 50px 0 0;
			width: 60%;
			min-width: 400px;
			height: fit-content;
			min-height: 400px;
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
	}

	.product_cnt {
		margin-bottom: 120px;
	}
	.prd__values {
		display: grid;
		text-align: center;
		grid-template-columns: 50% 20% 20% 10%;
		margin-bottom: 5px;
	}
	.dont__prd {
		text-align: center;
		margin: 80px 0 0 0;
	}
	.p_back_home {
		position: absolute;
		bottom: 60px;
		padding: 10px 15px;
		border-radius: 15px;
		cursor: pointer;
		border: none;
		background: #ee362c;
		color: #ffffff;
		&:hover {
			background: #ffffff;
			border: 1px solid #ee362c;
			color: #ee362c;
			transform: scale(1.1);
		}
	}
	.h2__sbt {
		position: absolute;
		bottom: 60px;
		right: 0;
		font-size: 1.5rem;
	}
	.btn__sbt {
		cursor: pointer;
		position: absolute;
		bottom: 0px;
		right: 0;
		font-size: 1.5rem;
	}

	.pay__in {
		position: absolute;
		top: 16%;
		right: 21rem;
	}
	.USD {
		position: absolute;
		top: 16%;
		right: 18rem;
	}
	.USD_IN {
		position: absolute;
		top: 16%;
		right: 18rem;
		font-weight: bold;
	}
	.ARS {
		position: absolute;
		top: 16%;
		right: 13rem;
	}
	.ARS_IN {
		position: absolute;
		top: 16%;
		right: 13rem;
		font-weight: bold;
	}
`;

export const CheckBoxWrapper = styled.div`
	margin-top: 0.182rem;
	position: relative;
	span {
	}
	@media screen and (max-width: 719px) {
		margin-top: 0;
	}
	@media (min-width: 720px) and (max-width: 1126px) {
		margin-top: 0.6rem;
	}
`;
export const CheckBoxLabel = styled.label`
	position: absolute;
	top: 0;
	right: 12rem;
	width: 1.909rem;
	height: 1.182rem;
	border-radius: 0.545rem;
	background: #4fbe79;
	cursor: pointer;
	&::after {
		content: '';
		display: block;
		border-radius: 50%;
		width: 0.818rem;
		height: 0.818rem;
		margin: 0.136rem;
		background: #ffffff;
		box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
		transition: 0.2s;
	}
`;
export const CheckBox = styled.input`
	opacity: 0;
	z-index: 1;
	border-radius: 0.682rem;
	width: 1.909rem;
	height: 1.182rem;
	&:checked + ${CheckBoxLabel} {
		background: #4fbe79;
		&::after {
			content: '';
			display: block;
			border-radius: 50%;
			width: 0.818rem;
			height: 0.818rem;
			margin-left: 0.955rem;
			transition: 0.2s;
		}
	}
`;
export default DIV_CART;
