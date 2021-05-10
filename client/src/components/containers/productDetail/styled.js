import styled from 'styled-components';

const ProductDetailStyle = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	width: 1500px;
	margin: 50px;
	border-radius: 15px;
	color: #a1a3a6;
	background-color: #ffffff;

	a {
		text-decoration: none;
		color: #a1a3a6;
	}

	.topDiv {
		display: inline-flexbox;
		width: 100%;
		height: 40px;
		background-color: #e7e7e7;
		border-radius: 15px 15px 0px 0px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 20px;
		padding-right: 20px;
	}

	.centerDiv {
		display: flex;

		.imagesBox {
			display: flex;
			flex-direction: column;
			padding: 5px;

			.imageMin {
				border: 1px solid #e7e7e7;
				border-radius: 5px;
				width: 70px;
				height: auto;
				max-height: 70px;
				padding: 5px;
				margin: 5px;

				&:hover {
					cursor: pointer;
					border: 1px solid #ee362e;
				}
			}
		}

		.imageBig {
			display: flex;
			justify-content: center;
			height: 700px;
			width: 700px;
			padding: 10px;
		}

		.infoDiv {
			border: 2px solid #e7e7e7;
			border-radius: 25px;
			margin: 10px;
			width: 450px;
		}
	}
`;

export default ProductDetailStyle;
