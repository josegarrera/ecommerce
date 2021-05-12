import styled from 'styled-components';

const DivCrdProd = styled.div`
	margin: 0px 30px 50px;
	display: flex;
	flex-direction: column;
	border: 1px solid #efefef;
	border-radius: 20px;
	width: 186px;
	height: 370px;
	position: relative;
	&:hover {
		cursor: pointer;
		transition: 0.3s;
		box-shadow: 1px 1px 30px silver;
	}
	.cnt__image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 186px;
		height: 277px;
		border-radius: 20px 20px 0 0;
		background-color: #fff;
	}
	.img__card {
		width: 130px;
		height: auto;
		max-height: 260px;
	}
	.cnt_info {
		background-color: #fcfcfc;
		border-radius: 0 0 20px 20px;
		width: 186px;
		height: 100px;
		border-top: 3px solid whitesmoke;
	}
	h5 {
		font-weight: bold;
		color: #525252;
		margin: 12px 21px 0px;
		width: 60%;
	}
	h6 {
		padding: 0;
		margin: 5px 0 20px 0;
		color: #a9a9a9;
		margin-left: 21px;
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
