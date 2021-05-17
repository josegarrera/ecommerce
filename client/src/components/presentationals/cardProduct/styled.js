import styled from 'styled-components';

export const StyledLoder = styled.div`
	margin: 0px 30px 50px;
	display: flex;
	flex-direction: column;
	width: 224px;
	height: fit-content;
	overflow: hidden;
`;

const DivCrdProd = styled.div`
	margin: 0px 30px 50px;
	display: flex;
	flex-direction: column;
	width: 224px;
	height: 430px;
	border: 1px solid #e0e0e0;
	border-radius: 20px;
	position: relative;
	box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
		0 15px 40px rgba(166, 173, 201, 0.2);
	&:hover {
		cursor: pointer;
		transition: 0.3s;
		box-shadow: 1px 1px 30px silver;
	}
	.cnt__image {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 20px 20px 0 0;
		background-color: #fff;
	}
	.img__card {
		max-height: 260px;
		padding: 5rem;
	}
	.cnt_info {
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		border-radius: 0 0 20px 20px;
		border-top: 3px solid whitesmoke;
	}

	h5 {
		font-weight: bold;
		color: #525252;

		width: 60%;
	}
	h6 {
		padding: 0;
		color: #a9a9a9;
		margin-top: 15px;
	}
	.btn__fav {
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		border: none;
		background-color: transparent;

		position: absolute;
		bottom: 52px;
		right: 24px;
		font-size: 20px;
		color: #ee362e;

		&:hover {
			cursor: pointer;
			transition: 0.3s;
			box-shadow: 1px 1px 30px silver;
		}

		&:active {
			transform: scale(0.8);
			transition: 0.5s;
		}
	}
	.btn__cart {
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		position: absolute;
		color: #ffffff;
		background-color: #ee362e;
		border: none;
		top: 96%;
		right: 20px;
		width: 29px;
		height: 29px;
		border-radius: 14.5px;
		&:hover {
			cursor: pointer;
			transition: 0.3s;
			box-shadow: 1px 1px 30px silver;
		}
		&:active {
			transform: scale(0.9);
			transition: 0.5s;
			border: 1px solid gray;
		}
	}
`;

export default DivCrdProd;
