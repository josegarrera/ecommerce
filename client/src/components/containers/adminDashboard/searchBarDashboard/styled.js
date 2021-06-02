import styled from 'styled-components';

const searchStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0rem 2rem;

	.search__bar {
		position: relative;
		width: 50%;
	}

	.searchInput {
		display: flex;
		align-items: center;
		border: 3px solid #e0e0e0;
		border-radius: 2rem;
		font-size: 0.7rem;
		width: 80%;
		height: 1rem;
		background-color: #ffffff;
		padding: 1rem 3rem;
		&:hover {
			cursor: pointer;
		}
	}

	.search__icon {
		position: absolute;
		left: 1.5rem;
		top: 0.7rem;
		font-size: 0.8rem;
		color: #9e9e9e;
	}

	.form__button {
		display: flex;
		justify-content: space-between;
		align-items: center;
		-ms-flex-item-align: end;
		color: #ffffff;
		background-color: #ee362e;
		border: none;
		border-radius: 2rem;
		font-weight: 500;
		font-size: 17px;
		padding: 1rem;
		height: 1rem;
		width: 15%;
		margin: 20px 0px;
		border: 1px solid #ee362e;
	}

	.form__button:hover {
		background: #ffffff;
		border: 2px solid #ee362c;
		color: #ee362c;
	}

	.form__button__hidden {
		visibility: hidden;
	}
	.datalist-input {
		.default-datalist-items {
			border: none;
		}
		.datalist-active-item {
			width: 80%;
		}
	}
`;
export default searchStyles;
