import styled from 'styled-components';

const DivPag = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 400px;
	margin-bottom: 50px;

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		text-align: center;
		width: 40px;
		height: 40px;
		font-size: 18px;
		border-radius: 25px;
		margin: 15px;
		background: #bdbdbd;
		color: #fff;
		font-weight: bold;
		border: none;
		&:hover {
			background: #ee362e;
			transform: scale(1.1);
			transition: 0.3s;
		}
		&:active {
			transform: scale(0.9);
		}
	}
`;

export default DivPag;
