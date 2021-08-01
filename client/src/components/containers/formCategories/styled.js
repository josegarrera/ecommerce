import styled from 'styled-components';
export const StyleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: #f4f4f4;

	button,
	input[type='submit'],
	input[type='reset'] {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
	}

	.form__element {
		display: flex;
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
		flex-direction: column;
	}

	.form__container {
		display: flex;
		flex-direction: column;
		margin: 6rem;
		padding: 3rem;
		border-radius: 1rem;
		justify-content: center;
		align-items: center;
		background-color: #ffffff;
		box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
	}
	.form__input {
		padding: 1rem;
		color: #757575;
		border-radius: 0.6rem;
		font-size: 1rem;
		font-weight: 600;
		background-color: #ffffff;
		border: 1.5px solid #e0e0e0;
	}
	.form__title {
		font-size: 1.3rem;
		color: #616161;
	}
	.form__p {
		color: #616161;
	}
	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.form__radio {
		align-self: center;
		padding: 3rem;
	}

	.form__label {
		font-size: 0.9rem;
		color: #9e9e9e;
		font-weight: 600;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.form__button {
		display: flex;
		margin-top: 0.5rem;
		align-self: flex-end;
		padding: 1rem;
		color: #ffffff;
		background-color: #ee362e;
		border: none;
		border-radius: 0.5rem;
		font-size: 1.2rem;
		font-weight: 600;
	}

	.form__button_green {
		display: flex;
		margin-top: 0.5rem;
		align-self: flex-end;
		padding: 1rem;
		color: #ffffff;
		background-color: #2ec4b6;
		border: none;
		border-radius: 0.5rem;
		font-size: 1.2rem;
		font-weight: 600;
	}

	.form__button:hover {
		background-color: #e53935;
	}

	.submit__tag {
		padding: 1rem 3rem 1rem 3rem;
		font-family: 'Poppins' sans-serif;
		background-color: #0395b8;
		font-weight: 500;
		border-radius: 0 0.5rem 0.5rem 0;
		color: #ffffff;
	}

	.tag__input {
		display: flex;
		align-items: center;
		padding: 1rem;
		width: 100%;
		height: 100%;
		color: #757575;
		border-radius: 0.5rem 0 0 0.5rem;
		font-weight: 600;
		background-color: #ffffff;
		border: 1.5px solid #e0e0e0;
	}
`;
