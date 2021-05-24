import styled from 'styled-components';
export const StyledContainer = styled.div`
	z-index: 3;

	.data_item {
		border: 2px solid #e7e7e7;
		border-top: 0px;
		background: none;
		color: black;
		padding: 0px;
		&:hover {
			color: white;
			cursor: pointer;
			background-color: #3483fa;
		}
	}

	.data_input {
		border-top: 2px solid #e7e7e7;
		width: 150px;
		position: absolute;
		top: 25px;
		background-color: white;
	}

	.input {
		height: 25px;
		width: 150px;
		font-size: 15px;
		&:focus-within {
			outline: none;
		}
		::placeholder {
			color: #c0c0c0;
		}
	}
`;
