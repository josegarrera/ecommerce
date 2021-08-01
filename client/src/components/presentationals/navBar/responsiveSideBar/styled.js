import styled from 'styled-components';

const DropdownStyle = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
	transition: all 0.5s ease;

	.dropdown-menu {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0;
		right: 0;
		padding: 4rem;
		height: 100%;
		width: 25rem;
		background: #201e1e;
		list-style: none;
		text-align: start;

		.close-icon {
			cursor: pointer;
			position: absolute;
			color: #ffffff;
			font-size: 3rem;
			top: 1rem;
			right: 1rem;
			z-index: 100;
		}
		&:hover {
			color: #bdbdbd;
		}

		.dropdown-link {
			font-size: 1.3rem;
			margin: 2.5rem 0;
			color: #ffffff;
			cursor: pointer;
		}
		&:hover {
			color: #bdbdbd;
		}

		.dropdown-button {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 5rem;
			width: 100%;
			color: #fff;
			z-index: 100;
			background: white;
			border-radius: 0.3rem;
		}

		.sign-in {
			font-size: 1.25rem;
			font-weight: 600;
			color: #212121;
		}

		.sign-up {
			display: flex;
			width: max-content;
			margin: 1.5rem 0;
			font-size: 1rem;
			color: #fff;
		}

		.signup-link {
			color: #fff;
			margin: 0 1rem;
			font-weight: 600;
		}

		&hover {
			background: #5cabff;
		}
	}
`;

export default DropdownStyle;
