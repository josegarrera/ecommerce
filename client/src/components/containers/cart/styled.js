import styled from 'styled-components';

const DIV_CART = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	margin: 80px auto;
	max-width: 80vw;
	min-width: 38rem;
	height: fit-content;
	min-height: 40rem;
	padding: 3.5rem;
	border-radius: 1rem;
	background-color: #ffffff;
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
		flex-wrap: wrap;
		.prd__link {
			position: relative;
			margin: 50px auto;
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
	.div__absolute {
		position: absolute;
		top: 25px;
		right: 25px;
	}
`;

export default DIV_CART;
