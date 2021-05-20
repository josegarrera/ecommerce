import styled from 'styled-components';

export const StyledContainer = styled.div`
	width: 100%;
	height: fit-content;
	display: grid;
	grid-template-columns: 300px 1fr;
	grid-template-areas: 'sidebar content content';

	.sidebar {
		grid-area: sidebar;
		background-color: #2d3f4e;
		box-shadow: 1px 0px 10px gray;
		padding: 20px;

		.brand {
			color: #ee362e;
			background: none;
			border: none;
			font-size: 45px;
			font-weight: 600;
			&:hover {
				cursor: pointer;
			}
		}
		.dashboard {
			position: absolute;
			left: 90px;
			top: 73px;
			color: #f8f9f9;
			font-size: 9px;
		}

		.options {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			margin: 50px 15px;

			.option {
				display: flex;
				align-items: center;
				background: none;
				border: none;
				color: #f8f9f9;
				font-size: 20px;
				margin: 5px 0px;

				.arrow {
					font-size: 15px;
				}
				&:hover {
					cursor: pointer;
				}

				&:active {
					transform: scale(0.9);
					transition: 0.1s;
				}
			}
		}
	}

	.content {
		grid-area: content;
		padding: 0px 50px;
	}
`;
