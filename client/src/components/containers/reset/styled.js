import styled from 'styled-components';

const Reset_Style = styled.div`
	.resetContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(88, 88, 90, 0.3);
		top: 0;
		left: 0;
		z-index: 10;
		color: red;

		.loginWrapper {
			display: flex;
			flex-direction: column;
			padding: 2rem;
			background-color: #ffffff;
			border-radius: 1rem;

			.loginForm {
				display: flex;
				flex-direction: column;

				.close__icon {
					font-size: 2rem;
					color: #bdbdbd;
					cursor: pointer;
					text-align: right;
					&:hover {
						color: #757575;
					}
				}
			}

			.passwordInput,
			.emailInput {
				margin-top: 0.5rem;
				padding: 1rem 0 1rem 4rem;
				border: 1px solid #ee362e;
				border-radius: 3rem;
				font-size: 1.1rem;
			}

			.lockIcon {
				position: absolute;
				top: 3.3rem;
				left: 1.7rem;
			}

			.passwordSpan,
			.emailSpan,
			.forgotSpan {
				color: #616161;
			}

			.forgotSpan {
				margin-top: 1rem;
			}

			.signUpBottom {
				color: #616161;
			}

			.signUpSpan {
				color: #29b6f6;
				cursor: pointer;
				margin-left: 0.5rem;
			}

			.inputElement {
				position: relative;
				display: flex;
				flex-direction: column;
				margin-top: 1rem;
				margin-bottom: 1rem;
			}

			.signUpBtnBottom {
				margin-top: 3rem;
				cursor: pointer;
				padding: 0.8rem;
				width: 100%;
				background-color: #ee362e;
				border: none;
				color: #ffffff;
				border-radius: 2rem;
				font-size: 1rem;
				font-weight: 600;
			}
		}
	}

	.rowBottom {
		display: flex;
		margin-top: 2.5rem;
		justify-content: flex-start;
		align-items: center;
	}
`;

export default Reset_Style;
