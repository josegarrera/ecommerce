import styled from 'styled-components';

const DivCardFav = styled.div`
	padding-bottom: 1rem;
	border-bottom: 2px solid rgba(0, 0, 0, 0.1);
	margin: 3rem 3rem 3rem 0;
	display: grid;
	grid-template-columns: 20% 50% 30%;
	width: 100%;

	.cincuenta {
		width: 20%;
		display: flex;
		margin-right: 60px;

		.imageDiv {
			border: 1px solid #e7e7e7;
			border-radius: 5px;
			display: flex;
			justify-content: center;
			align-items: center;
			min-width: 10rem;
			max-width: 10rem;
			height: 10rem;
			margin-right: 1px;

			.image {
				max-width: 90%;
				max-height: 90%;
				object-fit: contain;
			}
		}
	}
	.name__price {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		margin-left: 10px;

		.name__fav {
			font-size: 1.5rem;
			font-weight: bold;
			text-overflow: ellipsis;
			overflow: hidden;
			width: 20rem;
			height: 1.5em;
			white-space: nowrap;
		}

		.price__fav {
			font-size: 2rem;
		}
	}

	.btns__cnt {
		margin-left: 6rem;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		.btn {
			bottom: 3rem;
			padding: 10px 15px;
			border-radius: 1rem;
			cursor: pointer;
			border: none;
			color: #ffffff;

			&:hover {
				background: #ffffff;
			}
			&:active {
				transform: scale(0.99);
				transition: 0.1s;
			}
		}
		.btn__art {
			background: #118ab2;
			width: 100%;
			&:hover {
				border: 1px solid #118ab2;
				color: #118ab2;
				font-size: 1.2rem;
				margin-bottom: -0.4rem;
			}
		}
		.btn__del {
			background: #ee362c;
			&:hover {
				border: 1px solid #ee362c;
				color: #ee362c;
				font-size: 1.2rem;

				margin-top: -0.4rem;
			}
		}
	}
`;

export default DivCardFav;
