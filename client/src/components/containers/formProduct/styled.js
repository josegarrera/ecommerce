import styled from 'styled-components';

const FormProductStyle = styled.div`
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

	.product__form {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: flex-start;
	}

	.form__wrapper {
		display: flex;
	}

	.form__column {
		margin: 1rem;
	}

	.close__icon {
		font-size: 2rem;
		color: #bdbdbd;
		cursor: pointer;
	}

	.close__icon:hover {
		color: #757575;
	}

	.row {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	.form__title {
		font-size: 1.3rem;
		color: #616161;
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
	.form__input__variant {
		padding: 0.5rem;
	}

	.form__input:focus {
		border-color: #a1a3a6;
	}
	.form__label {
		font-size: 0.9rem;
		color: #9e9e9e;
		font-weight: 600;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.form__element {
		display: flex;
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
		flex-direction: column;
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

	.form__button:hover {
		background-color: #e53935;
	}

	.checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 25px;
		width: 25px;
		background-color: #eee;
	}

	.checkbox__container {
		display: flex;
		padding: 1rem;
	}

	.row .form__element {
		margin-right: 0.5rem;
		margin-left: 0.5rem;
	}
`;

export default FormProductStyle;
