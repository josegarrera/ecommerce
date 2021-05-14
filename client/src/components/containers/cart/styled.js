import styled from 'styled-components';

const DIV_CART = styled.div`
	margin: 80px auto;
	width: 1200px;
	height: fit-content;
	min-height: 650px;
	padding: 50px;
	border-radius: 10px;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	position: relative;
	font: inherit;

	.title_cnt {
		color: #ee362c;
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
		margin-bottom: 80px;
	}
	.prd__values {
		display: grid;
		text-align: center;
		grid-template-columns: 50% 20% 20% 10%;
		margin-bottom: 5px;
	}
	.product_detail {
		display: grid;
		grid-template-columns: 60% 20% 20%;
		max-height: 300px;
		min-height: 150px;
		position: relative;
		.botooon {
			position: absolute;
			top: 0;
			right: 0;
		}
	}
	.p_back_home {
		position: absolute;
		bottom: 20px;
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
		bottom: 20px;
		right: 0;
		font-size: 1.5rem;
	}
	.prd__values {
	}
`;

export default DIV_CART;
