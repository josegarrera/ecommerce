import styled from 'styled-components';

const FormBrandStyle = styled.div`
	width: 800px;
	background-color: #ffffff;
	border-radius: 1rem;
	padding: 3rem;
	box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);

	.form__title {
		font-size: 1.3rem;
		color: #616161;
	}

	.form__element {
		display: flex;
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
		flex-direction: column;

		.form__label {
			font-size: 0.9rem;
			color: #9e9e9e;
			font-weight: 600;
			margin-top: 0.5rem;
			margin-bottom: 0.5rem;
		}

		.form__input:focus {
			border-color: #a1a3a6;
		}
	}

	.form_button {
		display: flex;
		justify-content: flex-end;

		.button {
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
	}
`;

export default FormBrandStyle;
