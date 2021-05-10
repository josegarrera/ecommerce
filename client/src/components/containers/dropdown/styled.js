import styled from 'styled-components';

const Dropdown_Style = styled.div`
	.dropdown__wrapper {
		display: flex;
		flex-wrap: wrap;
	}
	.dropdown__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		width: 100%;
		padding: 1rem;
		color: #bdbdbd;
		border-radius: 0.6rem;
		font-size: 1rem;
		font-weight: 600;
		background-color: #ffffff;
		border: 1.5px solid #e0e0e0;
	}

	.dropdown__header__icon {
		font-size: 1.5rem;
	}

	.dropdown__list {
		list-style: none;
		width: 100%;
		border: 1px solid #e0e0e0;
	}

	button {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #ffffff;
		font-size: 16px;
		padding: 1.2rem;
		border: 0;
		width: 100%;
		text-align: left;

		&:hover {
			background-color: #f5f5f5;
		}
		&focus {
			cursor: pointer;
			font-weight: bold;
			background-color: #ccc;
		}
	}

	.button__icon {
		color: #e0e0e0;
		margin-left: 1rem;
		margin-right: 1rem;
	}

	.selected {
		color: #039be5;
	}

	.button__value {
		height: 100%;
		color: #616161;
		font-size: 0.9rem;
		font-weight: 500;
		width: 250px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

export default Dropdown_Style;
