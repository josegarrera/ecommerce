import styled, {css} from 'styled-components';

const Dropdown_Style = styled.div`
	.dropdown__wrapper {
		display: flex;
		position: relative;
		flex-direction: column;
		margin: 0.5rem 0;
	}
	.dropdown__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		width: 100%;
		color: #bdbdbd;
		border-radius: 0.6rem;
		font-size: 1rem;
		font-weight: 500;
		background-color: #ffffff;
	}
	p {
		height: 21px;
	}
	.dropdown__header__icon {
		font-size: 1.5rem;
	}

	.dropdown__list {
		position: absolute;
		top: 2rem;
		left: -1rem;
		padding: 1rem;
		list-style: none;
		z-index: 10;
		width: 12rem;
		border-radius: 1rem;
		font-size: 0.7rem;
		background-color: #ffffff;
		border: 1px solid #e0e0e0;
		overflow: auto;
		box-shadow: 0 5px 10px rgb(154 160 185 / 5%),
			0 15px 40px rgb(166 173 201 / 20%);
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

	.unchecked__icon {
		color: #e0e0e0;
	}

	.selected {
		color: #039be5;
	}

	.button__value {
		height: 100%;
		color: #616161;
		font-size: 0.9rem;
		font-weight: 500;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	${({order}) =>
		order &&
		css`
			.dropdown__wrapper {
				position: relative;
			}

			.dropdown__header {
				border: 1px solid #e0e0e0;
				font-size: 0.7rem;
			}

			.dropdown__header__title {
				margin-left: 1rem;
				font-size: 0.8rem;
				color: #9e9e9e;
			}

			.dropdown__list {
				position: absolute;
				top: 3rem;
				border: 1px solid #e0e0e0;
				font-size: 0.8rem;
				box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
					0 15px 40px rgba(166, 173, 201, 0.2);
				z-index: 2;
			}

			.dropdown__header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-radius: 3rem;
				background-color: #ffffff;
				font-size: 0.8rem;
				color: #ee362e;
				width: 10rem;
			}

			.dropdown__header__icon {
				width: 2rem;
				height: 2rem;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #ffffff;
				background-color: #ee362e;
				border-radius: 2rem;
			}
		`}

	${({filter}) =>
		filter &&
		css`
			.dropdown__wrapper {
				margin-bottom: 0.7rem;
			}

			.dropdown__header__title {
				color: #616161;
				font-size: 0.8rem;
				font-weight: 500;
			}

			.button__value {
				height: 100%;
				color: #616161;
				font-size: 0.8rem;
				font-weight: 500;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.dropdown__list__item {
				button {
					padding: 0.2rem 0.5rem;
				}
			}
		`}
`;

export default Dropdown_Style;
