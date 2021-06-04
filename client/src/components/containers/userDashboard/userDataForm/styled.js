import styled from 'styled-components';

export const UserFormStyled = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	border-radius: 1rem;
	object-fit: contain;

	.userForm {
		display: flex;
		flex-direction: column;
		margin: 0px 30px;
	}
	.renglon {
		display: flex;
		margin-bottom: 5px;
	}
	.title {
		font-weight: 600;
	}

	.input {
		border: 1px solid #e7e7e7;
		color: #bdbdbd;
	}
	.update {
		display: flex;
		justify-content: flex-end;

		&:active {
			transform: scale(0.8);
			transition: 0.5s;
		}

		.updateBtm {
			border: 1px solid red;
			border-radius: 10px;
			padding: 2px 5px;
			color: white;
			background-color: #ee362c;
		}
	}

	.btnAdd {
		margin-left: 10px;
		display: flex;

		.buttonAdd {
			background-color: #0096c7;
			padding: 2px 5px;
			color: #ffffff;
			border-radius: 10px;
			font-size: 14px;
		}
	}
`;
