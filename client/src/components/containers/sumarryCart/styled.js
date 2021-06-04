import styled from 'styled-components';

const DivSumarry = styled.div`
	.form-summary {
		display: flex;
		flex-direction: column;
	}
	.mercadopago-button {
		display: ${(props) => (props.paymentMethod === 'stripe' ? 'none' : 'flex')};
		justify-content: center;
		align-items: center;
		width: 331px;
		height: 67px;
		border-radius: 12px;
		margin-left: 50px;
		margin-top: 20px;
		font-weight: 500px;
		font-size: 18px;
		cursor: pointer;
		border: none;
		color: #ffffff;
		&:hover {
			background: #ffffff;
			border: 1px solid #ee362c;
			color: #ee362c;
		}
		&:active {
			transform: scale(0.95);
		}
	}
`;

export default DivSumarry;
