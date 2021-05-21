import styled from 'styled-components';

const searchStyles = styled.div`
	display: flex;
	justify-content: space-around;

	.searchInput {
		border: 2px solid #2d3f4e;
		border-radius: 5px;
		height: 30px;
		width: 80%;
		background-color: #ffffff;
		margin: 20px 0px;

		&:hover {
			cursor: pointer;
		}
	}
	.form__button {
		margin: auto 0;
		-ms-flex-item-align: end;
		color: #ffffff;
		background-color: #ee362e;
		border: none;
		border-radius: 0.5rem;
		font-weight: 600;
		font-size: 17px;
		letter-spacing: 3px;
		height: 28px;
		width: 15%;
		margin: 20px 0px;
		display: flex;
		justify-content: center;
		border: 1px solid #ee362e;
		align-items: center;
	}

	.form__button:hover {
		background: #ffffff;
		border: 1px solid #ee362c;
		color: #ee362c;
	}
`;
export default searchStyles;
